// app/loading.js (for App Router)
'use client';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [show, setShow] = useState(true);

  // Add artificial delay to see the loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '4rem',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      zIndex: 9999
    }}>
      <div style={{
        animation: 'pulse 1.5s ease-in-out infinite'
      }}>
        A
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}