import React, {useState} from 'react';
import Todo from './Todo';

const TodoStates = ({toggleSumit, setToggleSumit, inputCity, setInputCity, editItem, isEditItem, setIsEditItem, addItem, items, setItems}) => {
    const [inputData, setInputData] = useState('');

    const deleteItem = (index) => {
        const updatedItems = items.filter(element => {
            return index !== element.id;
        });
        setItems(updatedItems);
    }

    return (
        <div>
            <Todo 
                inputData={inputData}
                setInputData={setInputData}
                inputCity={inputCity}
                setInputCity={setInputCity}
                addItem={addItem}
                items={items}
                setItems={setItems}
                editItem={editItem}
                isEditItem={isEditItem}
                setIsEditItem={setIsEditItem}
                deleteItem={deleteItem}
                toggleSumit={toggleSumit}
                setToggleSumit={setToggleSumit} 
                />
        </div>
    );
};

export default TodoStates;
