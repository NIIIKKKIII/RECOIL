import { atom } from "recoil";
 const countatom = atom({
    key: 'countAtom',
    default: 0,   // this is we defining the initial state 
});

export default countatom;


// An atom in Recoil represents a piece of state. It can be read from and written to from any component.