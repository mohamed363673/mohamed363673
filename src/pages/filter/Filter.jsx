import React, { Children, useEffect, useState } from 'react';
import Data from '../data/data.json'











export const Add = ({ data, setData }) => {
    return (
        <>
            <button onClick={() => {
                const userA = { "id": localStorage.getItem("id"), "name": localStorage.getItem("name") };
                localStorage.setItem("name", "mohamed")
                localStorage.setItem("id", "10")
                setData([...data, userA ]);
            }} className='bg-zinc-950 rounded-xl shadow-sm p-3 text-white z-30'>+Add</button>
        </>
    )
}













const Filter = (p) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(Data.transactions)
    }, [])
    return (
        <>
            <div className=
                "filter">
                <input className='inpName' onChange={(e) => {
                    let name = document.querySelectorAll(".name");
                    let TABLE_ITEM = document.querySelectorAll(".TABLE_ITEM")
                    for (let i = 0; i < name.length; i++) {
                        if (name[i].innerHTML === e.target.value) {
                            name[i].innerHTML = name[i].innerHTML;
                            name[i].style.opacity = "1"
                        } else {
                            TABLE_ITEM[i].style.filter = "blur(10px)"
                            TABLE_ITEM[i].style.display = "none"
                        }
                        if (e.target.value === '' || name[i].innerHTML.slice(0, 1) === e.target.value || name[i].innerHTML.slice(0, 2) === e.target.value
                            || name[i].innerHTML.slice(0, 3) === e.target.value || name[i].innerHTML.slice(0, 4) === e.target.value || name[i].innerHTML.slice(0, 5) === e.target.value
                            || name[i].innerHTML.slice(0, 6) === e.target.value || name[i].innerHTML.slice(0, 7) === e.target.value || name[i].innerHTML.slice(0, 8) === e.target.value || name[i].innerHTML.slice(0, 9999) === e.target.value) {
                            name[i].style.opacity = "1";
                            TABLE_ITEM[i].style.opacity = "1"
                            TABLE_ITEM[i].style.display = ""
                            TABLE_ITEM[i].style.filter = "blur(0px)"
                        }
                    }
                }} placeholder='Name' type="text" />
{p.p}
                <input className='inpNumber' onChange={(e) => {
                    let amount = document.querySelectorAll(".amount");
                    let TABLE_ITEM = document.querySelectorAll(".TABLE_ITEM")
                    for (let i = 0; i < amount.length; i++) {
                        if (amount[i].innerHTML === e.target.value) {
                            amount[i].innerHTML = amount[i].innerHTML;
                        } else {
                            TABLE_ITEM[i].style.display = "none"
                        }
                        if (e.target.value === '' || amount[i].innerHTML.slice(0, 1) === e.target.value
                            || amount[i].innerHTML.slice(0, 2) === e.target.value || amount[i].innerHTML.slice(0, 3) === e.target.value
                            || amount[i].innerHTML.slice(0, 4) === e.target.value) {
                            amount[i].style.opacity = "1";
                            TABLE_ITEM[i].style.opacity = "1"
                            TABLE_ITEM[i].style.display = ""
                        }
                    }
                }} placeholder='Amount' type="number" />
            </div>
        </>
    );
}

export default Filter;
