import React from 'react';
import axios from "axios";
import { useState } from "react";
import './getWeather.css'
import TodoStates from '../todo/TodoStates';

const GetWeather = () => {
    const apiKey = "ed83d19296a485cd28eb738b5e4a6d99"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})
    const [items, setItems] =useState([])
    const [toggleSumit, setToggleSumit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [newData, setNewData] = useState([]);


    const getWetherDetails = (cityName) => {
        if (!cityName) return
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        axios.get(apiURL)
            .then((res) => {
                console.log("response", res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log("err", err)
            })
    }

    const handleChangeInput = (e) => {
        setInputCity(e.target.value)
    }

    const handleSearch = () => {
        getWetherDetails(inputCity)
    }

    // adding an item
    const addItem = (e) => {
        e.preventDefault()
        if(!inputCity){
            alert('Please Enter list items')
        } 
        else if(inputCity && !toggleSumit) {
            setItems(
                items.map((element) => {
                    if(element.id === isEditItem){
                        return { ...element, name: inputCity}
                    }
                })
            )
            setToggleSumit(true)
            setInputCity('')
            setIsEditItem(null)
        } 
        else {
            const allInputCity = {id: new Date().getTime().toString(), name: inputCity}
            setItems([...items, data]) 
            setInputCity('')
        }
    }
    
    // Edit an item
    const editItem = (id) => {
        let foundIndex = items.findIndex(element => {
            return element.id === id
        })
        setNewData(items.splice(foundIndex, 1, data ))
        setToggleSumit(false)
        // setInputCity(items[foundIndex].name)
        setIsEditItem(id)
    }

    return (
        <div className='container-fluid bgImg'>
            <div className='row'>
                <div className=" col-md-6 left">
                    <div className="wetherBg mt-4">
                        <h1 className="heading text-center">Weather App</h1>
                        <div className="d-grid gap-3 col-8 mt-4">
                            <input type="text" className=" searchInput" placeholder="Search Weather..."
                                value={inputCity}
                                onChange={handleChangeInput} />
                                <button className="searchbutton" type="button"
                                onClick={handleSearch} >Search</button>
                        </div>
                    </div>

                    { Object.keys(data).length > 0 &&
                    
                        <div className="col-md-6 text-center mt-5 mb-5">
                            <div className="wetherResultBox pb-3">
                                <img className="weathorIcon"
                                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
                                <h5 className="weathorCity">{data?.name}</h5>
                                <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
                                { toggleSumit ?  <button 
                                    className='px-5 mt-3 mb-4 addbutton'
                                    variant="success"
                                    onClick={addItem}>Add</button> : <i className='fas fa-edit px-5 mt-3 mb-4  addbutton' onClick={editItem} ></i>}
                            </div>
                        </div>
                    }
                </div>
                <div className='col'>
                    <TodoStates 
                        inputCity={inputCity}
                        setInputCity={setInputCity} 
                        data={data}
                        setData={setData}
                        addItem={addItem}
                        items={items}
                        setItems={setItems}
                        editItem={editItem}
                        isEditItem={isEditItem}
                        setIsEditItem={setIsEditItem}
                        toggleSumit={toggleSumit}      
                        setToggleSumit={setToggleSumit} />     
                </div>
            </div>
        </div>
    );
};

export default GetWeather;
