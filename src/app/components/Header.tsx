"use client"
import Image from "next/image"
import { useEffect, useState } from "react";

const newDateWithTimezone = () => new Date().toLocaleString(
    "en-US", 
    { 
        timeZone: "Asia/Bangkok" ,
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
);

export default function Header() {
    const [date, setDate] = useState(newDateWithTimezone());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(newDateWithTimezone());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div className="header">
            <div className="app-name">
                <Image src="/icon-chrome-192x192.png" alt="Logo" width={100} height={100}/>
                <div className="font-bold">
                    devonly.dev
                </div>
            </div>
            <div className="date-time">
                {date.toString()}
            </div>
        </div>
    ) 
}