import Image from "next/image";
import { JSX, useCallback, useMemo, useState } from "react";
import { effects, targetMultipliers } from "@/data/effects";
import next from "next";
import Head from "next/head";

interface RowData {
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

interface CharacterData {
  enchant: number;
  intelligence: number;
  luck: number;
  fatigueTerm: 0 | 1;
  engine: 0 | 1 | 2;
}

export default function Home() {
  const [CharacterData, setCharacterData] = useState<CharacterData>({
    enchant: 100,
    intelligence: 100,
    luck: 100,
    fatigueTerm: 1,
    engine: 0,
  });

  const [rows, setRows] = useState<RowData[]>([
    {
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
    // {
    //   min: 0,
    //   max: 10,
    //   duration: 2,
    //   effect: "Absorb Magicka",
    //   target: "Touch",
    //   area: 1,
    //   cost: 0,
    //   multiplier: 1,
    //   compoundedCost: 0,
    // },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newEffect, setNewEffect] = useState<RowData>({} as RowData);

  const calculateRowCost = (row: RowData): number | null => {
    const effectDetails = effects[row.effect];
    if (
      !row.effect ||
      !row.target ||
      (effectDetails.hasMagnitude && Number.isNaN(row.min)) ||
      (effectDetails.hasMagnitude && Number.isNaN(row.max)) ||
      (effectDetails.hasDuration && Number.isNaN(row.duration)) ||
      (effectDetails.hasArea && Number.isNaN(row.area))
    ) {
      return null;
    }
    const baseCost = effectDetails.baseCost;

    // const min = effectDetails.hasMagnitude ? row.min ?? 0 : 1;
    // const max = effectDetails.hasMagnitude ? row.max ?? 0 : 1;

    // const min = effectDetails.hasMagnitude ? row.min ?? 0 : 1;
    // const max = effectDetails.hasMagnitude ? row.max ?? 0 : 1;
    // const duration = effectDetails.hasDuration ? row.duration ?? 1 : 1;
    // const area = effectDetails.hasArea ? row.area ?? 0 : 0;
    const min = effectDetails.hasMagnitude
      ? row.min === null || row.min < 1
        ? 1
        : row.min
      : 1;
    const max = effectDetails.hasMagnitude
      ? row.max === null || row.max < 1
        ? 1
        : row.max
      : 1;
    const duration = effectDetails.hasDuration
      ? row.duration === null || row.duration < 1
        ? 0
        : row.duration
      : 0;
    const area = effectDetails.hasArea
      ? row.area === null || row.area < 1
        ? 1
        : row.area
      : 1;

    /*
     * Vanilla enchant cost formula:
     *
     *  Touch/Self:          (min + max) * baseCost * 0.025 * duration + area * baseCost * 0.025
     *  Target:       1.5 * ((min + max) * baseCost * 0.025 * duration + area * baseCost * 0.025)
     *  Constant eff:        (min + max) * baseCost * 2.5              + area * baseCost * 0.025
     *
     *  For multiple effects - cost of each effect is multiplied by number of effects that follows +1.
     *
     *  Note: Minimal value inside formula for 'min' and 'max' is 1. So in vanilla:
     *        (0 + 0) == (1 + 0) == (1 + 1) => 2 or (2 + 0) == (1 + 2) => 3
     *
     *  Formula on UESPWiki is not entirely correct.
     */

    // const newCost =
    //   row.target === "Constant Effect"
    //     ? baseCost * (((min + max) * 100 + area) / 40)
    //     : targetMultipliers[row.target!] *
    //       baseCost *
    //       (((min + max) * duration + area) / 40);

    const nonConstantEffectCost =
      row.target !== "Constant Effect"
        ? (min + max) * baseCost * 0.025 * duration + area * baseCost * 0.025
        : 0;
    const newCost =
      row.target === "Constant Effect"
        ? (min + max) * baseCost * 2.5 + area * baseCost * 0.025
        : nonConstantEffectCost > 1
        ? targetMultipliers[row.target!] * nonConstantEffectCost
        : 1;
    //??
    return newCost;
  };

  const recalculateMultipliersAndCosts = useCallback(
    (currentRows: RowData[]) => {
      return currentRows.map((row, index) => {
        if (!row.effect || !row.target) {
          return { ...row, cost: null, multiplier: null, compoundedCost: null };
        }
        const newCost = calculateRowCost(row);

        const newMultiplier = currentRows.length - index;
        const newCompoundedCost =
          // newCost !== null ? Math.floor(newCost) * newMultiplier : null;
          newCost !== null ? Math.floor(newCost * newMultiplier) : null;
        return {
          ...row,
          cost: newCost,
          multiplier: newMultiplier,
          compoundedCost: newCompoundedCost,
        };
      });
    },
    []
  );

  const handleRowChange = (index: number, newRowData: Partial<RowData>) => {
    setRows((currentRows) =>
      recalculateMultipliersAndCosts(
        currentRows.map((row, i) =>
          i === index ? { ...row, ...newRowData } : row
        )
      )
    );
  };

  const handleRemoveRow = useCallback<(indexToRemove: number) => void>(
    (indexToRemove: number) => {
      setRows((prevRows) => {
        const newRows = prevRows.filter((_, i) => i !== indexToRemove);
        return recalculateMultipliersAndCosts(newRows);
      });
    },
    [recalculateMultipliersAndCosts]
  );

  const updateCosts = () => setRows(recalculateMultipliersAndCosts);

  const possibleTargets = useMemo<JSX.Element[]>(() => {
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
    const isSelfNever = effects[newEffect.effect]?.isSelfNever;
    const hasDuration = effects[newEffect.effect]?.hasDuration;
    //this needs to be fixed for not using newEffect, eg

    return [
      !hasConstantEffect && !isSelfOnly ? (
        <option key="TouchOption" value="Touch">
          Touch
        </option>
      ) : null,
      !hasConstantEffect && !isSelfOnly ? (
        <option key="TargetOption" value="Target">
          Target
        </option>
      ) : null,
      !hasConstantEffect && !isSelfNever ? (
        <option key="SelfOption" value="Self">
          Self
        </option>
      ) : null,
      hasDuration && !hasTouch && !hasTarget && !hasSelf && !isSelfNever ? (
        <option key="ConstantEffectOption" value="Constant Effect">
          Constant Effect
        </option>
      ) : null,
    ].filter((option) => option !== null) as JSX.Element[];
  }, [rows, newEffect.effect]);

  const getPossibleTargets = (rowIndex: number): JSX.Element[] => {
    if (!rows[rowIndex].effect) {
      return [];
    }
    const hasTouch = rows.some(
      (row, index) => row.target === "Touch" && index !== rowIndex
    );
    const hasTarget = rows.some(
      (row, index) => row.target === "Target" && index !== rowIndex
    );
    const hasSelf = rows.some(
      (row, index) => row.target === "Self" && index !== rowIndex
    );
    const hasConstantEffect = rows.some(
      (row, index) => row.target === "Constant Effect" && index !== rowIndex
    );

    const isSelfOnly = effects[rows[rowIndex].effect]?.isSelfOnly;
    const isSelfNever = effects[rows[rowIndex].effect]?.isSelfNever;
    const hasDuration = effects[rows[rowIndex].effect]?.hasDuration;

    return [
      !hasConstantEffect && !isSelfOnly ? (
        <option key="TouchOption" value="Touch">
          Touch
        </option>
      ) : null,
      !hasConstantEffect && !isSelfOnly ? (
        <option key="TargetOption" value="Target">
          Target
        </option>
      ) : null,
      !hasConstantEffect && !isSelfNever ? (
        <option key="SelfOption" value="Self">
          Self
        </option>
      ) : null,
      hasDuration && !hasTouch && !hasTarget && !hasSelf && !isSelfNever ? (
        <option key="ConstantEffectOption" value="Constant Effect">
          Constant Effect
        </option>
      ) : null,
    ].filter((option) => option !== null) as JSX.Element[];
  };

  const getEffectOptions = (rowIndex: number): JSX.Element[] => {
    const hasConstantEffect = rows.some(
      (row, index) => index !== rowIndex && row.target === "Constant Effect"
    );

    return Object.keys(effects)
      .filter((effectName) => {
        const effectInOtherRows = rows.some(
          (row, index) =>
            index !== rowIndex &&
            row.effect === effectName &&
            !effects[effectName].affectsAttribute &&
            !effects[effectName].affectsSkill
        );

        if (effectInOtherRows) {
          return false;
        }

        if (hasConstantEffect) {
          return (
            effects[effectName].hasDuration && !effects[effectName].isSelfNever
          );
        }

        return true;
      })
      .map((effectName) => (
        <option key={effectName} value={effectName}>
          {effectName}
        </option>
      ));
  };

  const isRowsSorted = useMemo<boolean>(() => {
    return rows.every((row, index) => {
      if (row.cost === null || row.cost === 0) {
        return true;
      }

      if (index === rows.length - 1) {
        return true;
      }

      const nextRow = rows[index + 1];

      return (
        (nextRow.cost !== null && row.cost <= nextRow.cost) ||
        nextRow.cost === null
      );
    });
  }, [rows]);

  const totalCost = useMemo<number>(
    () => rows.reduce((sum, row) => sum + row.compoundedCost!, 0),
    // I don't think this is a ceiling because you can go above it, eg daedric dai-katana has 21 points. it's like any fraction of what you add gets dropped. or the multiplication by base cost makes it too high?
    // or it could be rounded-need check .49 and .50
    // () => rows.reduce((sum, item) => sum + item.compoundedCost!, 0)).toFixed(2),
    // looking at openmw there is a floor on the costs involved
    [rows]
  );
  const calculateEffectChance = (
    { enchant, intelligence, luck, fatigueTerm }: CharacterData,
    totalCost: number,
    hasConstantEffect: boolean
  ) =>
    // Math.floor(
    Math.round(
      Math.min(
        100,
        Math.max(
          0,
          (0.75 + fatigueTerm / 2) *
            (1 - 0.5 * (hasConstantEffect ? 1 : 0)) *
            (enchant + intelligence / 5 + luck / 10 - 3 * totalCost)
        )
      )
    );
  // );

  const successChance = useMemo<number | null>(() => {
    if (
      Number.isNaN(CharacterData.enchant) ||
      Number.isNaN(CharacterData.intelligence) ||
      Number.isNaN(CharacterData.luck)
    ) {
      return null;
    }
    // %Success = (0.75 + %Fatigue/2) × (1-0.5×"Effect is constant") × (Enchant + Intelligence/5 + Luck/10 - 3×"Enchantment points")
    const totalCost = rows.reduce((sum, row) => sum + row.compoundedCost!, 0);
    const hasConstantEffect = rows.some(
      (row) => row.target === "Constant Effect"
    );

    if (totalCost === 0) {
      return null;
    }

    return CharacterData.engine === 0
      ? rows.reduce((acc, row) => {
          // %Success = (0.75 + %Fatigue/2) × (1-0.5×"Effect is constant") × (Enchant + Intelligence/5 + Luck/10 - 3×"Enchantment points")
          // I don't know about this.
          //
          console.log({
            acc,
            rowCost: row.cost,
            calc: calculateEffectChance(
              CharacterData,
              totalCost,
              hasConstantEffect
            ),
            newAcc: Math.round(
              (acc *
                calculateEffectChance(
                  CharacterData,
                  totalCost,
                  hasConstantEffect
                )) /
                100
            ),
          });

          return Math.round(
            (acc *
              calculateEffectChance(
                CharacterData,
                row.compoundedCost!,
                // totalCost,
                hasConstantEffect
              )) /
              100
          );
        }, 100)
      : CharacterData.engine === 2
      ? rows.reduce((acc, row) => {
          // %Success = (0.75 + %Fatigue/2) × (1-0.5×"Effect is constant") × (Enchant + Intelligence/5 + Luck/10 - 3×"Enchantment points")
          // I don't know about this.
          // UESP
          return Math.round(
            (acc *
              calculateEffectChance(
                CharacterData,
                row.cost!,
                hasConstantEffect
              )) /
              100
          );
        }, 100)
      : calculateEffectChance(CharacterData, totalCost, hasConstantEffect);
  }, [CharacterData, rows]);

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>Morrowind Enchantment Explorer</title>
      </Head>
      <main className="flex flex-col row-start-2 sm:items-start space-y-3">
        <table className="ml-6">
          <tbody>
            <tr>
              <td className="text-[#DFC99F] w-30">Enchant</td>
              <td className="pl-1 w-[92px]">
                <input
                  type="number"
                  min={0}
                  max={10000}
                  value={CharacterData.enchant}
                  onChange={(e) => {
                    setCharacterData((prev) => ({
                      ...prev,
                      enchant: parseInt(e.target.value),
                    }));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="text-[#DFC99F]">Intelligence</td>
              <td className="pl-1">
                <input
                  type="number"
                  min={0}
                  max={10000}
                  value={CharacterData.intelligence}
                  onChange={(e) => {
                    setCharacterData((prev) => ({
                      ...prev,
                      intelligence: parseInt(e.target.value),
                    }));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="text-[#DFC99F]">Luck</td>
              <td className="pl-1">
                <input
                  type="number"
                  min={0}
                  max={10000}
                  value={CharacterData.luck}
                  onChange={(e) => {
                    setCharacterData((prev) => ({
                      ...prev,
                      luck: parseInt(e.target.value),
                    }));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="text-[#DFC99F]">Fatigue</td>
              <td>
                <select
                  className="w-full"
                  value={CharacterData.fatigueTerm === 1 ? "Full" : "Not full"}
                  onChange={(e) => {
                    setCharacterData((prev) => ({
                      ...prev,
                      fatigueTerm: e.target.value === "Full" ? 1 : 0,
                    }));
                  }}
                >
                  <option value="Full">Full</option>
                  <option value="Not full">Not full</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-[#DFC99F]">Engine</td>
              <td>
                <select
                  className="w-full"
                  // value={CharacterData.engine === 1 ? "OpenMW" : "Original"}
                  value={
                    CharacterData.engine === 1
                      ? "OpenMW"
                      : CharacterData.engine === 2
                      ? "UESP"
                      : "Original"
                  }
                  onChange={(e) => {
                    setCharacterData((prev) => ({
                      ...prev,
                      // engine: e.target.value === "OpenMW" ? 1 : 0,
                      engine:
                        e.target.value === "OpenMW"
                          ? 1
                          : e.target.value === "UESP"
                          ? 2
                          : 0,
                    }));
                  }}
                >
                  <option value="Original">Original</option>
                  <option value="OpenMW">OpenMW</option>
                  <option value="UESP">UESP</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="text-[#DFC99F]">Success chance</td>
              <td className="pl-1">
                {successChance === null ? "-" : `${successChance}%`}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="ml-[24px]">
          <thead>
            <tr className="[&>*]:text-left [&>*]:pr-2 text-[#DFC99F]">
              {/* <td className="w-[24px]" /> */}
              <td>Effect</td>
              <td>Target</td>
              <td>Min</td>
              <td>Max</td>
              <td>Duration</td>
              {/* <td >Area</td> */}
              <td>Area</td>
              <td>Cost</td>
              <td>Multiplier</td>
              <td className="whitespace-nowrap">Compounded Cost</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map(
                (
                  {
                    effect,
                    target,
                    min,
                    max,
                    duration,
                    area,
                    cost,
                    multiplier,
                    compoundedCost,
                  },
                  index
                ) => (
                  <tr key={index} className="[&>*]:pr-2">
                    <td>
                      <div className="flex items-center gap-x-1 pr-2">
                      <div className="flex flex-col [&>*]:-my-1">
                        <button
                          disabled={index === 0}
                          className="border-none"
                          onClick={() => {
                            if (index === 0) return;
                            const newRows = [...rows];
                            const [movedRow] = newRows.splice(index, 1);
                            newRows.splice(index - 1, 0, movedRow);
                            setRows(recalculateMultipliersAndCosts(newRows));
                          }}
                        >
                          ▲
                        </button>
                        <button
                          //not working
                          disabled={index === rows.length - 1}
                          className="border-none"
                          onClick={() => {
                            if (index === rows.length - 1) return;
                            const newRows = [...rows];
                            const [movedRow] = newRows.splice(index, 1);
                            newRows.splice(index + 1, 0, movedRow);
                            setRows(recalculateMultipliersAndCosts(newRows));
                          }}
                        >
                          ▼
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 ml-1">
                        <Image
                          src={effects[effect].icon ? effects[effect].icon : ""}
                          alt=""
                          width={16}
                          height={16}
                        />
                        <select
                          id={`effect-${index}`}
                          value={effect || ""}
                          onChange={(e) => {
                            const newEffectName = e.target.value;
                            const effectDetails = effects[newEffectName];
                            handleRowChange(index, {
                              effect: newEffectName,
                              min: effectDetails?.hasMagnitude ? 0 : null,
                              max: effectDetails?.hasMagnitude ? 0 : null,
                              duration: effectDetails?.hasDuration ? 1 : null,
                              area: effectDetails?.hasArea ? 0 : null,
                              target: rows.some(
                                (row) => row.target === "Constant Effect"
                              )
                                ? "Constant Effect"
                                : effectDetails?.isSelfOnly && rows.length > 1
                                ? "Self"
                                : null,
                              cost: null,
                              multiplier: null,
                              compoundedCost: null,
                            });
                          }}
                        >
                          <option
                            className="bg-stone-800 text-stone-600"
                            value=""
                            disabled
                          >
                            Select an effect
                          </option>
                          {getEffectOptions(index)}
                        </select>
                      </div>
                      </div>
                    </td>
                    <td>
                      {effect !== "" ? (
                        <select
                          id={`target-${index}`}
                          value={target || ""}
                          onChange={(e) => {
                            const newTarget = e.target
                              .value as RowData["target"];
                            const effectDetails = effects[rows[index].effect];
                            handleRowChange(index, {
                              target: newTarget,
                              duration:
                                newTarget === "Constant Effect" ||
                                !effectDetails?.hasDuration
                                  ? null
                                  : rows[index].duration ?? 1,
                              area:
                                newTarget === "Constant Effect" ||
                                newTarget === "Self" ||
                                !effectDetails?.hasArea
                                  ? null
                                  : rows[index].area ?? 0,
                            });
                          }}
                        >
                          <option
                            className="bg-stone-800 text-stone-600"
                            value=""
                            disabled
                          >
                            Select a target
                          </option>
                          {getPossibleTargets(index)}
                        </select>
                      ) : (
                        <div className="pl-1">-</div>
                      )}
                    </td>
                    <td className="pl-1">
                      {effects[effect]?.hasMagnitude ? (
                        // min needs to be less than or equal to max
                        // can still type > 100
                        <input
                          id={`min-${index}`}
                          type="number"
                          min={0}
                          max={100}
                          value={min === null ? 0 : min}
                          onChange={(e) => {
                            const newMin =
                              parseInt(e.target.value) > 100
                                ? 100
                                : parseInt(e.target.value);
                            const currentMax = rows[index].max;
                            handleRowChange(index, {
                              min: newMin,
                              max:
                                currentMax !== null && newMin > currentMax
                                  ? newMin
                                  : currentMax,
                            });
                          }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="pl-1">
                      {effects[effect]?.hasMagnitude ? (
                        <input
                          id={`max-${index}`}
                          type="number"
                          min={0}
                          max={100}
                          value={max === null ? 0 : max}
                          onChange={(e) => {
                            const newMax =
                              parseInt(e.target.value) > 100
                                ? 100
                                : parseInt(e.target.value);
                            const currentMin = rows[index].min;
                            handleRowChange(index, {
                              max: newMax,
                              min:
                                currentMin !== null && newMax < currentMin
                                  ? newMax
                                  : currentMin,
                            });
                          }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="pl-1">
                      {target !== "Constant Effect" &&
                      effects[effect]?.hasDuration ? (
                        <input
                          id={`duration-${index}`}
                          type="number"
                          min={1}
                          max={1440}
                          value={
                            duration === null || duration < 1 ? 1 : duration
                          }
                          onChange={(e) => {
                            //improve and reuse
                            const newDuration =
                              parseInt(e.target.value) > 1440
                                ? 1440
                                : parseInt(e.target.value);
                            //fix this
                            handleRowChange(index, {
                              duration:
                                newDuration === 0 || newDuration === null
                                  ? 1
                                  : newDuration,
                            });
                          }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="pl-1">
                      {/* Fix this, when it becomes null it messes up */}
                      {effects[effect]?.hasArea &&
                      target !== "Constant Effect" &&
                      target !== "Self" ? (
                        <input
                          id={`area-${index}`}
                          type="number"
                          min={0}
                          max={50}
                          value={area === null ? 0 : area}
                          onChange={(e) => {
                            // fix this
                            const newArea =
                              parseInt(e.target.value) > 50
                                ? 50
                                : parseInt(e.target.value);

                            handleRowChange(index, {
                              area: newArea,
                            });
                          }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="pl-1">
                      {cost !== null ? cost?.toFixed(2) : "-"}
                    </td>
                    <td className="pl-1">{multiplier ? multiplier : "-"}</td>
                    <td className="pl-1">{compoundedCost ?? "-"}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveRow(index)}
                        className="px-2 py-1 my-1"
                      >
                        🗙
                      </button>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={11}>
                  <div className="flex justify-center mt-4">
                    <button
                      className="px-4 py-2"
                      disabled={
                        rows.length >= 8 ||
                        rows.some((row) => row.effect === "" || !row.target) ||
                        isModalOpen
                      }
                      onClick={() => {
                        // setIsModalOpen(true);
                        setNewEffect({
                          effect: "",
                          min: null,
                          max: null,
                          duration: null,
                          area: null,
                          target: null,
                          cost: null,
                          multiplier: null,
                          compoundedCost: null,
                        });
                        setRows((prevRows) =>
                          recalculateMultipliersAndCosts([
                            ...prevRows,
                            {
                              effect: "",
                              min: null,
                              max: null,
                              duration: null,
                              area: null,
                              target: null,
                              cost: null,
                              multiplier: null,
                              compoundedCost: null,
                            } as RowData,
                          ])
                        );
                      }}
                    >
                      New effect
                    </button>
                  </div>
                </td>
              </tr>
            )}
            {rows.length > 0 && (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td className="text-[#DFC99F]">Total</td>
                <td className="pl-1">{totalCost}</td>
                <td />
              </tr>
            )}
          </tbody>
        </table>

        {rows.length > 0 && (
          <div className="flex flex-row space-x-2 ml-6">
            <button
              className="px-4 py-2"
              disabled={
                rows.length >= 8 ||
                rows.some((row) => row.effect === "" || !row.target) ||
                isModalOpen
              }
              onClick={() => {
                // setIsModalOpen(true);
                setNewEffect({
                  effect: "",
                  min: null,
                  max: null,
                  duration: null,
                  area: null,
                  target: null,
                  cost: null,
                  multiplier: null,
                  compoundedCost: null,
                });
                setRows((prevRows) =>
                  recalculateMultipliersAndCosts([
                    ...prevRows,
                    {
                      effect: "",
                      min: null,
                      max: null,
                      duration: null,
                      area: null,
                      target: null,
                      cost: null,
                      multiplier: null,
                      compoundedCost: null,
                    } as RowData,
                  ])
                );
              }}
            >
              New effect
            </button>
            <button
              disabled={rows.length <= 1 || isRowsSorted}
              className="px-4 py-2"
              onClick={() => {
                setRows((prevRows) =>
                  recalculateMultipliersAndCosts(
                    prevRows.sort((a, b) =>
                      a.cost !== null && b.cost !== null && a.cost > b.cost
                        ? 1
                        : -1
                    )
                  )
                );
              }}
            >
              Sort by cost
            </button>
          </div>
        )}

        {/* <button
          onClick={updateCosts}
          className="px-4 py-2"
        >
          Update costs
        </button> */}
      </main>
    </div>
  );
}
