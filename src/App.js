import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./app.css"
// Don't lose your patience
function App() {

    const [ref,setRef] = useState(false);
    const [advice,setAdvice] = useState("");
    const fetch_api = async () => {
        try {
            const {data} = await axios.get("https://api.adviceslip.com/advice");
            // console.log(data.slip);
            setAdvice(data.slip.advice);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetch_api();
    },[ref])
    return (
        <div className="header">
            <div className="card">
                <h2>{advice}</h2>
                <button onClick={() => setRef(dt => !dt)}>MORE QUOTE</button>
            </div>
        </div>
    )
}

export default App
