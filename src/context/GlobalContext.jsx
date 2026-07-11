'use client';
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);

    
    useEffect(() => {
        const prevData = localStorage.getItem("timeLineData");
        if (prevData) {
            setTimelineData(JSON.parse(prevData));
        }
    }, []);

    
    const checkIn = (actionType, nm) => {
        const newDateTime = new Date();
        const newDate = {
            id: Date.now(),
            name: nm,
            action: actionType,
            time: newDateTime.toLocaleTimeString(),
            date: newDateTime.toLocaleDateString(),
            fullTime: newDateTime.toISOString(),
        };

        
        const updatedValue = [...timelineData, newDate];
        
        
        setTimelineData(updatedValue);
        
        
        localStorage.setItem("timeLineData", JSON.stringify(updatedValue));
    };

    return (
        <AppContext.Provider value={{ timelineData, setTimelineData, checkIn }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);