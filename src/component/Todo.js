import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  deleteTodo,
  addTodo,
  removeTodo,
  removeAllTodo,
} from "../redux/action";
function Todo() {
  const count = useSelector((state) => {
    return state.reducer.list;
  });

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const onchange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  return (
    <>
      <div className="   my-20 ">
        <div className=" flex justify-center flex-col text-center ">
          <figure className=" text-2xl font-normal text-slate-200 my-4 align-middle  ">
            <figcaption>Add your notes ✍✍🏿</figcaption>
          </figure>
          <div className="flex justify-center">
            <input
              onChange={onchange}
              value={input}
              className="w-80 h-8 rounded-sm mx-5"
              placeholder=" ✍ Add Item "
            ></input>
            <i className=" absolute  ml-72">
              <FaPlus
                onClick={() => {
                  dispatch(addTodo(input));
                  setInput("");
                }}
                className="mt-2 cursor-pointer"
              ></FaPlus>
            </i>
          </div>
          {count.map((key) => {
            return (
              <div key={Math.random()} className="flex justify-center my-2">
                <div
                  className="w-80 h-8 rounded-sm mx-5 bg-white"
                  placeholder=" ✍ Add Item "
                >
                  <p className="align-middle mt-1 mx-2 justify-start flex">
                    {key.data}
                  </p>
                </div>

                <i className=" absolute  ml-72">
                  <MdDelete
                    onClick={() => {
                      dispatch(deleteTodo(key.id));
                    }}
                    className="mt-2 cursor-pointer"
                  ></MdDelete>
                </i>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-center items-center my-4">
          <button  onClick={()=>{
           dispatch(removeTodo());
          }} className=" px-2 py-1 text-center bg-green-500 font-semibold text-slate-200 text-lg  rounded-sm">
            Clear all
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
