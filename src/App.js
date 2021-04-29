// import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassMouse from "./components/ClassMouse";
import DataFetch from "./components/DataFetch";
import HookCounter from "./components/HookCounter";
import HookCounterFive from "./components/HookCounterFive";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentB from "./components/ComponentB";
import ComponentA from "./components/ComponentA";
import ComponentD from "./components/ComponentD";
import DataFetchOne from "./components/DataFetchOne";
import DataFetchTwo from "./components/DataFetchTwo";
import ParentComponent from "./components/ParentComponent";
import MemoCounter from "./components/MemoCounter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CustomHookCounterOne from "./components/CustomHookCounterOne";
import CustomHookCounterTwo from "./components/CustomHookCounterTwo";
import UserFormOne from "./components/UserFormOne";
import UserFormTwo from "./components/UserFormTwo";
// context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// useReducer / useContext
export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
//
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <ClassMouse /> */}
      {/* <IntervalClassCounter /> */}
      {/* useState */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* useEffect */}
      {/* <HookCounterFive /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetch /> */}
      {/* useContext */}
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"CodeEvolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* useReducer */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* useReducer / useContext */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        App Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </CountContext.Provider> */}

      {/* useState V.S useReducer API call */}
      {/* <DataFetchOne /> */}
      {/* <DataFetchTwo /> */}

      {/* useCallback */}
      {/* <ParentComponent /> */}

      {/* useMemo */}
      {/* <MemoCounter /> */}

      {/* useRef */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}

      {/* customHook */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <CustomHookCounterOne /> */}
      {/* <CustomHookCounterTwo /> */}
      {/* <UserFormOne /> */}
      <UserFormTwo />
    </div>
  );
}

export default App;
