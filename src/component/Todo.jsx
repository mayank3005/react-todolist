import React, { useState } from 'react'
import todo from '../images/icon1.svg'

const Todo = () => {

    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [edItem, setEdItem] = useState();

    const addItem = () => {
        if (!item) {
            alert('Plzz fill the data');
        } else if (!toggleSubmit) {
            setItemList(
                itemList.map((elem) => {
                    if (elem.id === edItem) {
                        return { ...elem, name: item };
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setItem('');
            setEdItem();
        } else {
            const newItem = { id: new Date().getTime().toString(), name: item };
            setItemList([...itemList, newItem]);
            setItem('');
        }
    }

    const deleteItem = (id) => {
        const updatedItems = itemList.filter((elem) => {
            return elem.id !== id;
        })
        setItemList(updatedItems);
    }

    const editItem = (id) => {
        let newEdit = itemList.find((elem) => {
            return elem.id === id;
        })
        setToggleSubmit(false);
        setItem(newEdit.name);
        setEdItem(id);
    }

    const removeAll = (id) => {
        setItemList([]);
    }

    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <figure>
                        <img src={todo} alt='todoimg' />
                        <figcaption>Add your list here ✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder=' ✍️ Add Items ...'
                            value={item}
                            onChange={(event) => setItem(event.target.value)}
                        />
                        {
                            toggleSubmit ? <i className="fa fa-solid fa-plus add-btn" title='Add Item' onClick={addItem}></i> :
                                <i className='far fa-edit add-btn' title='Update item' onClick={addItem} />
                        }
                    </div>
                    <div className="showItems">
                        {itemList.map((elem, ind) => {
                            return (
                                <div className='eachItem' key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <div className="todo-btn">
                                        <i className='far fa-edit add-btn' title='Edit item' onClick={() => editItem(elem.id)} />
                                        <i className='far fa-trash-alt add-btn' title='Delete item' onClick={() => deleteItem(elem.id)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo