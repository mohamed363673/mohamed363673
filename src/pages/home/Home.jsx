import React, { useEffect, useState } from 'react';
import './home.css'
import Data from '../data/data.json'
import { Link } from "react-router-dom";
import Filter, { Add } from '../filter/Filter';
const Home = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [x,setX] = useState([])
    useEffect(() => {
        console.log(x);
        setData(Data.transactions); setData2(Data.customers)
     }, [])
    return (
        <>

            <section id='a' className='home'>
                <div className="color"></div>
                <div className="color2"></div>
                <div className="as">
                <div className="T_S">
                <table className='table'>
                    <thead className='top'>
                        <tr>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Data</th>
                            <th>Amount</th>
                            <th>Auction</th>
                        </tr>
                    </thead>
                    <tbody className='center'>
                        {data.map((d) => (<>
                            <tr id={d.id} className='TABLE_ITEM' key={d.id}>
                                <td>{d.id}</td>
                                <td className='name'>{d.name == d.name ? d.name : null}</td>
                                <td>{d.date }</td>
                                <td className='amount'>{d.amount ===d.amount?d.amount:null}</td>
                                <td>
                                <div className="buttones">
                                    <Link to={`/user/${d.id - 1}`} ><button className='eye'><i class="fa-regular fa-eye"></i></button></Link>
                                    <button onClick={(e) => {
                                        document.getElementById(`${d.id}`).remove();
                                    }} className='trash'><i class="fa-solid fa-trash"></i></button>
                                </div>
                                </td>
                            </tr>
                        </>
                        ))}
                                <tr>
                                </tr>
                        </tbody>
                    </table>
                        
                        {/* <button onClick={() => {
                            console.log(data);
                            setData([...data, { id: 1, name: "Mohamed" }]);
                        }} className='bg-zinc-950 rounded-xl shadow-sm p-3 text-white z-30'>+Add</button> */}
                    </div>
                    <div className="botton_T_B">
                        <button onClick={() => {
                            const T_S = document.querySelector(".T_S");
                            T_S.scrollBy({top:-120,behavior:"smooth"})
                        }} className='ST'>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button onClick={() => {
                            const T_S = document.querySelector(".T_S");
                            T_S.scrollBy({ top: 120, behavior: "smooth" })
                        }} className='SB'>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                    <Filter p={""}></Filter>
                </div>
            </section>
        </>
    );
}

export default Home;
