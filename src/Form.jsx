import React, { useState } from "react";
import MainInfo from "./MainInfo";
import Skills from "./Skills";

export const FormContext = React.createContext()

export default () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [skills, setSkills] = useState("")

    return(
        <form>
            <FormContext.Provider value={{email, pass, skills, setEmail, setPass, setSkills}}>
                <MainInfo />
                <Skills />
            </FormContext.Provider>
            <div>
                <p>Correo: {email}</p>
                <p>Pass:</p>
                <p>Skills:</p>
            </div>
        </form>
    )
}