import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MoodEntry {
  id: string;
  date: string;
  mood: number; // 1-5 scale
  notes: string;
  activities?: string[];
}

interface WellbeingData {
  moodEntries: MoodEntry[];
  journalEntries: { id: string; date: string; content: string; }[];
  goals: { id: string; title: string; completed: boolean; }[];
}

interface WellbeingContextType {
  wellbeingData: WellbeingData;
  addMoodEntry: (mood: number, notes: string, activities?: string[]) => void;
  addJournalEntry: (content: string) => void;
  addGoal: (title: string) => void;
  toggleGoal: (id: string) => void;
  getTodaysMood: () => number | null;
  getWeeklyAverage: () => number;
  getMonthlyAverage: () => number;
}

const WellbeingContext = createContext<WellbeingContextType | undefined>(undefined);

export const useWellbeing = () => {
  const context = useContext(WellbeingContext);
  if (!context) throw new Error('useWellbeing must be used within WellbeingProvider');
  return context;
};

// Helper to get today's date in YYYY-MM-DD
const getToday = () => new Date().toISOString().split('T')[0];

export const WellbeingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wellbeingData, setWellbeingData] = useState<WellbeingData>({
    moodEntries: [],
    journalEntries: [],
    goals: []
  });

  const addMoodEntry = (mood: number, notes: string, activities: string[] = []) => {
    const today = getToday();
    const newEntry: MoodEntry = { id: crypto.randomUUID(), date: today, mood, notes, activities };

    setWellbeingData(prev => ({
      ...prev,
      moodEntries: [newEntry, ...prev.moodEntries.filter(entry => entry.date !== today)]
    }));
  };

  const addJournalEntry = (content: string) => {
    const newEntry = { id: crypto.randomUUID(), date: new Date().toISOString(), content };
    setWellbeingData(prev => ({ ...prev, journalEntries: [newEntry, ...prev.journalEntries] }));
  };

  const addGoal = (title: string) => {
    const newGoal = { id: crypto.randomUUID(), title, completed: false };
    setWellbeingData(prev => ({ ...prev, goals: [...prev.goals, newGoal] }));
  };

  const toggleGoal = (id: string) => {
    setWellbeingData(prev => ({
      ...prev,
      goals: prev.goals.map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal)
    }));
  };

  const getTodaysMood = () => {
    const today = getToday();
    const todayEntry = wellbeingData.moodEntries.find(entry => entry.date === today);
    return todayEntry ? todayEntry.mood : null;
  };

  const getWeeklyAverage = () => {
    const oneWeekAgo = new Date(); oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weekEntries = wellbeingData.moodEntries.filter(e => new Date(e.date) >= oneWeekAgo);
    if (!weekEntries.length) return 0;
    return weekEntries.reduce((sum, e) => sum + e.mood, 0) / weekEntries.length;
  };

  const getMonthlyAverage = () => {
    const oneMonthAgo = new Date(); oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const monthEntries = wellbeingData.moodEntries.filter(e => new Date(e.date) >= oneMonthAgo);
    if (!monthEntries.length) return 0;
    return monthEntries.reduce((sum, e) => sum + e.mood, 0) / monthEntries.length;
  };

  return (
    <WellbeingContext.Provider value={{ wellbeingData, addMoodEntry, addJournalEntry, addGoal, toggleGoal, getTodaysMood, getWeeklyAverage, getMonthlyAverage }}>
      {children}
    </WellbeingContext.Provider>
  );
};
