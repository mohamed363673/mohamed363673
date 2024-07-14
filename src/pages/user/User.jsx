import React, { useEffect, useState } from 'react';
import './user.css'
import Data from '../data/data.json'
import { useParams } from 'react-router-dom';
import Chart from '../rechart/chart.jsx';
const Hand = ({idA}) => {
    return (<>
        <div className="hand">
            {idA === document.getElementById(`1`) ? (<>
                <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod"></div>
                <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
            </>) : null}
            {
                idA === document.getElementById(`2`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod "></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`3`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod "></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`4`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod "></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`5`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod "></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`6`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`7`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod "></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`8`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod "></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod b"></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }
            {
                idA === document.getElementById(`9`) ? (<>
                    <div id='5' data-Amount="1300" data-text='Mohamed Sayed' style={{ "--color": "black" }} className="amod b"></div>
                    <div id='1' data-Amount="1000" data-text='Ahmed Ali' style={{ "--color": "#00ff62" }} className="amod b"></div>
                    <div id='8' data-Amount="2500" data-text='Abear reda' style={{ "--color": "#7300ff" }} className="amod b"></div>
                    <div id='7' data-Amount="1250" data-text='Abdo Ahmed' style={{ "--color": "#0fd" }} className="amod b"></div>
                    <div id='9' data-Amount="875" data-text='	Malek Haseam' style={{ "--color": "#f2c" }} className="amod "></div>
                    <div id='2' data-Amount="2000" data-text='Aya Elsayed' style={{ "--color": "#f50" }} className="amod b"></div>
                    <div id='4' data-Amount="500" data-text='Sarah Reda' style={{ "--color": "green" }} className="amod b"></div>
                    <div id='3' data-Amount="550" data-text='Mina Adel' style={{ "--color": "gold" }} className="amod b"></div>
                    <div id='6' data-Amount="750" data-text='Hossam Kream' style={{ "--color": "#f04" }} className="amod b"></div>
                </>) : null
            }

        </div>
    </>)
}


const User = () => {
    const { id } = useParams()
    const [dataU, setData] = useState([]);
    const [dataU2, setData2] = useState([]);
    const idA = document.getElementById(`${+id + 1}`);
    useEffect(() => { setData(Data.transactions[id]); setData2(Data.customers[id]); }, [])
    return (
        <>
            <section className="asU">
                <div className='user'>
                    <h1>name: <span>{dataU2.name}</span></h1>
                    <h1>customer_id: <span>{dataU.customer_id}</span></h1>
                    <h1>data: <span>{dataU.date}</span></h1>
                    <h1>amount: <span>{dataU.amount}</span></h1>
                    <div className="buttons">
                        <button className='go'>next</button>
                    </div>
                </div>
            </section>
            <section className='chart'>
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
                    {/* 2500- 2000- 1300- 1250- 1000- 875- 750- 550- 500-  */}
                </div>
                <div className="asC">
                    <Hand idA={idA} />

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
        </>
    );
}

export default User;
