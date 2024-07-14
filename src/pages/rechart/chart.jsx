import React, { useEffect } from 'react';
import './chart.css'

const Chart = () => {
  useEffect(() => {
    const amod = document.querySelectorAll(".amod");
    const textCon = document.querySelector(".textCon")
    for (let i = 0; i < amod.length; i++) {
      const amods = amod[i];
      amods.addEventListener("mousemove", (e) => {
        textCon.style.scale = 1;
        textCon.style.top = e.clientY + "px";
        textCon.style.left = e.clientX + "px";
        textCon.innerHTML = `${amods.getAttribute("data-text") } <br /> ${amods.getAttribute("data-Amount")}`
      })
      amods.addEventListener("mouseleave", () => {
        textCon.style.scale = 0;
      })
    }
},[])
  return (
    <section  className='chart'>
      <div className="liste">
        <h1>2500-</h1>
        <h1>2000-</h1>
        <h1>1300-</h1>
        <h1>1250-</h1>
        <h1>1000-</h1>
        <h1>875-</h1>
        <h1>750-</h1>
        <h1>550-</h1>
        <h1>500-</h1>
        <h1>0-</h1>
        {/* 2500- 2000- 1300- 1250- 1000- 875- 750- 550- 500-  */ }
      </div>
      <div className="asC">
        <div onMouseMove={(e) => {
          let hand = document.querySelector(".hand")
          hand.style.backgroundPositionX = e.clientX /8 + "px";
          hand.style.backgroundPositionY = e.clientY /8 + "px";
        }} className="hand">
          <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod"></div>
          <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod"></div>
          <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod"></div>
          <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod"></div>
          <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod"></div>
          <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod"></div>
          <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod"></div>
          <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod"></div>
          <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod"></div>
        </div>
        <div className="header">
          <h2>1</h2>
          <h2>2</h2>
          <h2>3</h2>
          <h2>4</h2>
          <h2>5</h2>
          <h2>6</h2>
          <h2>7</h2>
          <h2>8</h2>
          <h2>9</h2>
        </div>
      </div>
      <div className="textCon"></div>
    </section>
  );
}

export default Chart;
