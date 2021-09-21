import React, { useContext } from "react";
import { FormContext } from "./Form";

export default () => {
    const ctx = useContext(FormContext)
    return(
        <div>
            <label>
                <input type='checkbox'
                name='likes[]'/>
                Ruby
            </label>
            <label>
                <input type='checkbox'
                name='likes[]'/>
                Java
            </label>
        </div>
    )
}