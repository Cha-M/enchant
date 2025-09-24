import Image from "next/image";
import LocalFont from "next/font/local";
import { JSX, useMemo, useState } from "react";
import { effects, targetMultipliers } from "@/data/effects";

const pelagiad = LocalFont({
  src: "../fonts/Pelagiad.ttf",
  variable: "--font-pelagiad",
});

interface RowData {
  index: number;
  effect: string;
  min: number | null;
  max: number | null;
  duration: number | null;
  area: number | null;
  target: "Touch" | "Self" | "Target" | "Constant Effect" | null;
  cost: number | null;
  multiplier: number | null;
  compoundedCost: number | null;
}

export default function Home() {
  const [rows, setRows] = useState<RowData[]>([
    {
      index: 0,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Attribute",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 1,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Fatigue",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 2,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Health",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
    {
      index: 3,
      min: 0,
      max: 10,
      duration: 2,
      effect: "Absorb Magicka",
      target: "Touch",
      area: 1,
      cost: 0,
      multiplier: 1,
      compoundedCost: 0,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newEffect, setNewEffect] = useState<RowData>({} as RowData);

  // const updateNewEffectCost = () => {

  const updateCosts = () =>
    setRows((currentRows) =>
      currentRows.map((row) => {
        const baseCost = effects[row.effect].baseCost;

        const min = effects[row.effect].hasMagnitude ? row.min! : 1;
        const max = effects[row.effect].hasMagnitude ? row.max! : 1;
        const duration = effects[row.effect].hasDuration ? row.duration! : 1;
        const area = effects[row.effect].hasArea ? row.area! : 0;

        const newCost =
          row.target === "Constant Effect"
            ? baseCost * (((min + max) * 100 + area) / 40)
            : targetMultipliers[row.target!] *
              baseCost *
              (((min + max) * duration + area) / 40);

        const newMultiplier = currentRows.length - row.index;
        const newCompoundedCost = newCost * newMultiplier;
        return {
          ...row,
          cost: newCost,
          multiplier: newMultiplier,
          compoundedCost: newCompoundedCost,
        };
      })
    );

  const possibleTargets = useMemo<JSX.Element | JSX.Element[]>(() => {
    if (!newEffect.effect) {
      return [];
    }
    const hasTouch = rows.some((row) => row.target === "Touch");
    const hasTarget = rows.some((row) => row.target === "Target");
    const hasSelf = rows.some((row) => row.target === "Self");
    const hasConstantEffect = rows.some(
      (row) => row.target === "Constant Effect"
    );
    const isSelfOnly = effects[newEffect.effect]?.isSelfOnly;
    const hasDuration = effects[newEffect.effect]?.hasDuration;

    if (hasConstantEffect) {
      return (
        <option key="ConstantEffectOption" value="Constant Effect">
          Constant Effect
        </option>
      );
    } else if (isSelfOnly) {
      if (hasDuration) {
        return [
          <option key="SelfOption" value="Self">
            Self
          </option>,
          <option key="ConstantEffectOption" value="Constant Effect">
            Constant Effect
          </option>,
        ];
      }
      return (
        <option key="SelfOption" value="Self">
          Self
        </option>
      );
    } else if (hasTouch || hasTarget || hasSelf) {
      return [
        <option key="TouchOption" value="Touch">
          Touch
        </option>,
        <option key="TargetOption" value="Target">
          Target
        </option>,
        <option key="SelfOption" value="Self">
          Self
        </option>,
      ];
    } else {
      return [
        <option key="TouchOption" value="Touch">
          Touch
        </option>,
        <option key="TargetOption" value="Target">
          Target
        </option>,
        <option key="SelfOption" value="Self">
          Self
        </option>,
        <option key="ConstantEffectOption" value="Constant Effect">
          Constant Effect
        </option>,
      ];
    }
  }, [rows, newEffect.effect]);

  const totalCost = useMemo<number>(() => {
    return Math.ceil(rows.reduce((sum, item) => sum + item.compoundedCost!, 0));
  }, [rows]);

  const effectOptions = useMemo<React.ReactNode[]>(() => {
    return rows.some((row) => row.target === "Constant Effect")
      ? Object.keys(effects).map((effectName) =>
          !effects[effectName].hasDuration ? null : (
            <option key={effectName} value={effectName}>
              {effectName}
            </option>
          )
        )
      : Object.keys(effects).map((effectName) => (
          <option key={effectName} value={effectName}>
            {effectName}
          </option>
        ));
  }, [rows]);

  return (
    <div
      className={`${pelagiad.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {isModalOpen && (
          <div>
            <div className="flex flex-col">
              <h2 className="text-l font-bold mb-4">Create Effect</h2>
              <table>
                <thead>
                  <tr>
                    <th>Effect</th>
                    <th>Target</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Duration</th>
                    <th>Area</th>
                    {/* <th>Cost</th>
                    <th>Multiplier</th>
                    <th>Compounded Cost</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        // defaultValue={""}
                        value={newEffect?.effect || ""}
                        onChange={(e) =>
                          setNewEffect((prev) => ({
                            ...prev!,
                            effect: e.target.value,
                            min: effects[e.target.value]?.hasMagnitude
                              ? 0
                              : null,
                            max: effects[e.target.value]?.hasMagnitude
                              ? 1
                              : null,
                            duration: effects[e.target.value]?.hasDuration
                              ? 1
                              : null,
                            area: effects[e.target.value]?.hasArea ? 0 : null,
                          }))
                        }
                      >
                        <option value="" disabled>
                          Select an effect
                        </option>
                        {effectOptions}
                      </select>
                    </td>
                    <td>
                      {newEffect?.effect !== "" ? (
                        <select
                          value={newEffect?.target || ""}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              target: e.target.value as RowData["target"],
                              duration:
                                e.target.value === "Constant Effect"
                                  ? null
                                  : effects[prev!.effect]?.hasDuration
                                  ? 1
                                  : null,
                            }))
                          }
                        >
                          <option value="" disabled>
                            Select a target
                          </option>
                          {possibleTargets}
                        </select>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect.effect]?.hasMagnitude ? (
                        // min needs to be less than or equal to max
                        <input
                          type="number"
                          min={0}
                          max={newEffect?.max || 100}
                          value={newEffect?.min || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              min: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect.effect]?.hasMagnitude ? (
                        <input
                          type="number"
                          min={newEffect?.min || 0}
                          max={100}
                          value={newEffect?.max || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              max: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      newEffect.target !== "Constant Effect" &&
                      effects[newEffect.effect]?.hasDuration ? (
                        <input
                          type="number"
                          min={1}
                          max={100}
                          value={newEffect?.duration || 1}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              duration: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {newEffect?.effect &&
                      effects[newEffect.effect]?.hasArea ? (
                        <input
                          type="number"
                          min={0}
                          max={50}
                          value={newEffect?.area || 0}
                          onChange={(e) =>
                            setNewEffect((prev) => ({
                              ...prev!,
                              area: parseInt(e.target.value),
                            }))
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    {/* <td>{newEffect?.cost || 0}</td> */}
                  </tr>
                </tbody>
              </table>
              <div>
                {/* no Intervention on target, edit rows? move up and down*/}
                <button
                  disabled={
                    !newEffect?.effect ||
                    !newEffect?.target ||
                    (effects[newEffect.effect]?.hasMagnitude &&
                      (newEffect.min === null || newEffect.max === null)) ||
                    (effects[newEffect.effect]?.hasDuration &&
                      newEffect.target !== "Constant Effect" &&
                      newEffect.duration === null)
                  }
                  onClick={() => {
                    setRows((prevRows) => [
                      ...prevRows,
                      { ...newEffect!, index: prevRows.length },
                    ]);
                    setNewEffect({} as RowData);
                    setIsModalOpen(false);
                    updateCosts();
                  }}
                  className="px-4 py-2 bg-blue-500 disabled:bg-gray-500 text-white rounded hover:bg-blue-600 self-end"
                >
                  Add effect
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-end"
                >
                  Close
                </button>
                {/* <div>
                  New effect: {JSON.stringify(newEffect)}
                  Effect details: {JSON.stringify(effects[newEffect.effect])}
                </div> */}
              </div>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Effect</th>
              <th>Target</th>
              <th>Min</th>
              <th>Max</th>
              <th>Duration</th>
              <th>Area</th>
              <th>Cost</th>
              <th>Multiplier</th>
              <th>Compounded Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(
              ({
                index,
                effect,
                target,
                min,
                max,
                duration,
                area,
                cost,
                multiplier,
                compoundedCost,
              }) => (
                <tr key={index}>
                  <td className="flex flex-col">
                    <button
                      disabled={index === 0}
                      className="disabled:text-gray-500"
                      onClick={() => {
                        if (index === 0) return;
                        setRows((prevRows) => {
                          const newRows = [...prevRows];
                          const [movedRow] = newRows.splice(index, 1);
                          newRows.splice(index - 1, 0, movedRow);
                          return newRows.map((row, i) => ({
                            ...row,
                            index: i,
                          }));
                        });
                        updateCosts();
                      }}
                    >
                      ▲
                    </button>
                    <button
                      //not working
                      disabled={index === rows.length - 1}
                      className="disabled:text-gray-500"
                      onClick={() => {
                        if (index === rows.length - 1) return;
                        setRows((prevRows) => {
                          const newRows = [...prevRows];
                          const [movedRow] = newRows.splice(index, 1);
                          newRows.splice(index + 1, 0, movedRow);
                          return newRows.map((row, i) => ({
                            ...row,
                            index: i,
                          }));
                        });
                        updateCosts();
                      }}
                    >
                      ▼
                    </button>
                  </td>
                  <td>{effect}</td>
                  <td>{target}</td>
                  <td>{min}</td>
                  <td>{max}</td>
                  <td>{duration}</td>
                  <td>{area}</td>
                  <td>{cost?.toFixed(2)}</td>
                  <td>{multiplier}</td>
                  <td>{compoundedCost?.toFixed(2)}</td>
                  <th>
                    <button
                      onClick={() => {
                        setRows((prevRows) =>
                          prevRows
                            .filter((row) => row.index !== index)
                            .map((row, i) => ({ ...row, index: i }))
                        );
                        updateCosts();
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      🗙
                    </button>
                  </th>
                </tr>
              )
            )}
            <tr>
              <td />
              <td>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    setIsModalOpen(true);
                    setNewEffect({
                      index: rows.length,
                      effect: "",
                      min: null,
                      max: null,
                      duration: null,
                      area: null,
                      target: null,
                      cost: 0,
                      multiplier: 0,
                      compoundedCost: 0,
                    });
                  }}
                >
                  New effect
                </button>
              </td>
              <td>
                <button
                  disabled={rows.length <= 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-500"
                  onClick={() => {
                    setRows((prevRows) =>
                      prevRows.sort((a, b) => (a.cost! > b.cost! ? 1 : -1))
                    );
                    updateCosts();
                  }}
                >
                  Sort by cost
                </button>
              </td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <th></th>
            </tr>
            <tr>
              <td>Total</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td>{totalCost}</td>
              <th></th>
            </tr>
          </tbody>
        </table>
        {/* <button
          onClick={updateCosts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update costs
        </button> */}
      </main>
    </div>
  );
}
