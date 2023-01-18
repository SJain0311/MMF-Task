import React from "react";
import Counter from "./Counter";
import { StateProvider } from "./state";

function Test() {
    
  const initialState = {
    counter: 0,
  };
    const reducer = (state, action) => {
    switch (action.type) {
      case "increaseCounter":
        return {
          ...state,
          counter: state.counter + 1,
        };
        case "decreaseCounter":
            if (state.counter <= 0) {
              return state;
            } else {
              return {
                ...state,
                counter: state.counter - 1,
              };
            }

     
      default:
        return state;
    }
  };

  return (
    <div>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Counter />
      </StateProvider>
    </div>
  );
}

export default Test;
