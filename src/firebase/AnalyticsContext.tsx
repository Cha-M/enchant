import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDOckgy5ZaBWwS3BNt3agav4mamIk6SQzc",
  authDomain: "morrowind-enchantment-explorer.firebaseapp.com",
  projectId: "morrowind-enchantment-explorer",
  storageBucket: "morrowind-enchantment-explorer.firebasestorage.app",
  messagingSenderId: "960775215373",
  appId: "1:960775215373:web:fb4432343c2482d6de3844",
  measurementId: "G-SRESEVS3G4",
};

// Create a context for the Analytics instance
const AnalyticsContext = createContext<Analytics | null>(null);

// Create a custom hook to use the Analytics instance
export const useAnalytics = () => {
  const analytics = useContext(AnalyticsContext);
  if (analytics === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return analytics;
};

// Create the Analytics Provider component
interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [analyticsInstance, setAnalyticsInstance] = useState<Analytics | null>(null);
  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp | null>(null);

  useEffect(() => {
    // Initialize Firebase app once
    if (!firebaseApp) {
      const app = initializeApp(firebaseConfig);
      setFirebaseApp(app);
    }
  }, [firebaseApp]); // Only run once when firebaseApp is null

  useEffect(() => {
    const initAnalytics = async () => {
      if (firebaseApp && await isSupported()) {
        const analytics = getAnalytics(firebaseApp);
        setAnalyticsInstance(analytics);
        console.log("Firebase Analytics initialized successfully.");
      } else if (firebaseApp) {
        console.log("Firebase Analytics is not supported in this environment.");
      }
    };

    initAnalytics();
  }, [firebaseApp]); // Re-run if firebaseApp changes (though it shouldn't after initial setup)

  return (
    <AnalyticsContext.Provider value={analyticsInstance}>
      {children}
    </AnalyticsContext.Provider>
  );
};