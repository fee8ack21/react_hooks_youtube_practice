// import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassMouse from "./components/ClassMouse";
import HookCounter from "./components/HookCounter";
import HookCounterFive from "./components/HookCounterFive";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <ClassMouse /> */}
      <IntervalClassCounter />

      {/* useState */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* useEffect */}
      {/* <HookCounterFive /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalHookCounter />
    </div>
  );
}

export default App;
