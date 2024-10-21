//RECOIL
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import countatom from "./Store/Atoms/Count"; 

// RecoilRoot:
// This component is crucial because it wraps around your application and provides 
// the context needed for Recoil to function. It must be at the top level of any component tree that uses Recoil state.


function App() {
  return (
    <RecoilRoot>  
      <Count/> 
    </RecoilRoot>
  );
}

function Count() {      // this component is not re rendering now
  return (
    <div>
      <Countrenderer/>
      <Buttons/>
    </div>
  );
}

function Countrenderer() {
  // useRecoilValue: This hook is used to read the current value of the countatom. 
  // It will re-render whenever the value of countatom changes.
  //The value of count (which starts at 0 as defined in the atom) is displayed in the div
  const count = useRecoilValue(countatom);
  return <div>{count}</div>;
}

function Buttons() {   
  //const [count, setCount] = useRecoilState(countatom);
//   useRecoilState: This hook provides both the current state value (count) and a function to update that state (setCount).
// When you click the "Increase" button, it calls setCount(count + 1), which updates the value of countatom. This change triggers a re-render in any component that uses countatom, including Countrenderer, thereby updating the displayed count.
// The "Decrease" button works similarly, decrementing the count.

// but this re rendewrs the button component which we do not want

// Use of useSetRecoilState:
// Instead of using useRecoilState, which provides both the current value and the setter function, 
// we use useSetRecoilState to get only the setter function (setCount). 
// This can be beneficial if you don’t need to read the current value in the Buttons component.
const setCount = useSetRecoilState(countatom)
  return (
    <div>
      {/* setcount needs a function inside now to update the value when using useSetRecoilState */}
      <button onClick={() => setCount(count=>count + 1)}>Increase</button>
      <button onClick={() => setCount(count=>count - 1)}>Decrease</button>  
    </div>
  );
}

export default App;

// Summary
// The RecoilRoot sets up the context for Recoil.
// The countatom holds a piece of state.
// Countrenderer displays the current count, and Buttons allows you to modify that count.
// When the count changes, React’s reactivity ensures that the UI reflects the new state seamlessly.
// This setup allows for an efficient way to manage and share state across components without prop drilling