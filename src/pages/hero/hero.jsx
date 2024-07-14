import React, { useEffect, useRef } from 'react';
import './hero.css'
import Lottie from 'lottie-react';
import m1 from '../animations/m1.json'
const Hero = () => {
    const r = useRef(null);
    return (
        <div className='hero'>
            <div className="imgpx z-10">
                <Lottie style={{ width: "480px", height: "480px", cursor: "pointer" }}  animationData={m1} />
            </div>
            <div className="loop">
                <h1>TRANSAC<span className='text-blue-700'>TIONS</span></h1>
                <h1>TRANSAC<span className='text-blue-700'>TIONS</span></h1>
                <h1>TRANSAC<span className='text-blue-700'>TIONS</span></h1>
            </div>
            </div>
    );
}

export default Hero;
