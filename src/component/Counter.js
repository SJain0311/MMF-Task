import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "./state";

const Counter = () => {
  const [{ counter }, dispatch] = useContext(StateContext);
  const [value, setValue] = useState();

  const handleData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("response", response.data);
      setValue(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   handleData();
  // }, []);

  return (
    <div className=" my-4">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary mx-3"
          onClick={() => dispatch({ type: "increaseCounter" })}
        >
          Increase Counter
        </button>
        <h1>{counter}</h1>
        <button
          className="btn btn-secondary mx-3"
          onClick={() => dispatch({ type: "decreaseCounter" })}
        >
          Decrease Counter
        </button>
      </div>
      <div className=" my-4">
        <button onClick={handleData} className="btn btn-secondary mx-3">
          Show Button
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>

          <tbody>
            {value?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Counter;
