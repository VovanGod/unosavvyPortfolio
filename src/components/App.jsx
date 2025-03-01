import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';


function PreLoader() {
    return (
        <div className="preloader-container">
            <div className="preloader">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </div>
        </div>
    );
  }

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
    }, []);
    return (
        <>
            {loading ? <PreLoader/> : <Wrapper/>}
        </>
    )
}