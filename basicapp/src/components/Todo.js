import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    console.log(items);
    console.log(index);
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateditems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  // removeAll
  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div>
          <h2>Add your List Here</h2>
        </div>
        <div className="addItems">
          
          <input
            type="text"
            placeholder="Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleSubmit ? (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          ) : (
            <i
              className="fa fa-edit add-butn"
              title="Update Item"
              onClick={addItem}
            ></i>
          )}
        </div>
        <div className="showItems">
          {items.map((elem) => {
            return (
              <div className="listItems row jc-space-between" key={elem.id}>
                <h3>{elem.name}</h3>
                <div className="todo-btn row jc-space-between">
                  <i
                    className="far fa-edit add-butn"
                    title="Edit Item"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <br />
                  <i
                    className="far fa-trash-alt add-butn"
                    title="delete Item"
                    onClick={() => deleteItem(elem.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* clear all buttons */}
        <div className="showItems">
          <button
            className="removebtn"
            data-sm-link-text="Remove all"
            onClick={removeAll}
          >
            <span>Remove List</span>
          </button>
        </div>
      </div>
      <Timer />
    </>
  );
};

export default Todo;
