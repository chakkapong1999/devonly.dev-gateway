"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Box, Button, IconButton, Popover } from "@mui/material";

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
    const [notiCount] = useState([
        {
            notiDetail: "This is Notification 1",
        },
        {
            notiDetail: "This is Notification 2",
        }
    ]);
    const [date, setDate] = useState(newDateWithTimezone());
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(newDateWithTimezone());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div className="header">
            <div className="app-name">
                <Image src="/icon-chrome-192x192.png" alt="Logo" width={50} height={50}/>
                <div className="font-bold">
                    devonly.dev
                </div>
            </div>
            <div className="date-time">
                {date.toString()}
                <IconButton onClick={handleClick}>
                    <Badge badgeContent={notiCount.length} color="warning">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    {notiCount.map((noti, index) => {
                        return (
                            <Box key={noti.notiDetail + index} >
                                <Button sx={{ p: 2 }}>This is Notification {noti.notiDetail}</Button>
                            </Box>
                        )
                    })}
                </Popover>
            </div>
        </div>
    ) 
}