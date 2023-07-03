
import {useState} from "react";

export const useToggle= (initalValue = false) => {

    const[state, setState] = useState(initalValue);

const toggle =() => {
    setState(!state);
}

return [state ,toggle]


}