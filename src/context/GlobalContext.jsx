'use client';
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);

    // ব্রাউজারে প্রথমবার লোড হওয়ার সময় localStorage থেকে ডাটা নেওয়া
    useEffect(() => {
        const prevData = localStorage.getItem("timeLineData");
        if (prevData) {
            setTimelineData(JSON.parse(prevData));
        }
    }, []);

    // আপনার checkIn ফাংশনটি এখন গ্লোবাল
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

        // ১. নতুন ডাটা সহ অ্যারে তৈরি
        const updatedValue = [...timelineData, newDate];
        
        // ২. গ্লোবাল স্টেট আপডেট (এর ফলে সব কম্পোনেন্ট সাথে সাথে আপডেট হবে)
        setTimelineData(updatedValue);
        
        // ৩. localStorage-এ সেভ করা
        localStorage.setItem("timeLineData", JSON.stringify(updatedValue));
    };

    return (
        <AppContext.Provider value={{ timelineData, setTimelineData, checkIn }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);