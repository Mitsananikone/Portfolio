'use client';
import './globals.css'
import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Update the screen width on component mount and window resize
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
       <div>
          <div className="colorBorder">
          {screenWidth}px
          </div>
          {children}
          
        </div>
      </body>
    </html>)
}