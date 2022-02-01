import React from 'react';
import './todo.css'

const Todo = ({items, editItem, deleteItem}) => {

    return (
        <div className='todoContainer'>
            <div className='appWeather'>
                <div className='heading'>
                    <h1>Weather Todo List</h1>
                </div>
                <div>
                    { items.map((element) => {
                        return (
                            <li className='listItem' key={element.id} >
                                <h5 className="list">{element?.name}</h5>
                                <h6 className="list">{((element?.main?.temp) - 273.15).toFixed(2)}°C</h6>
                                <div className='todoActionbtn'>
                                    <button className='btnEdit task-button'>
                                        <i className='fas fa-edit' onClick={() => editItem(element.id)} ></i>
                                    </button>
                                    <button className='btnDelete task-button'>
                                        <i className='fa fa-trash-alt' aria-hidden="true" onClick={() => deleteItem(element.id)} ></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Todo;
