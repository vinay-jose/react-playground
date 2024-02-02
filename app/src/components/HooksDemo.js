import { useState,useEffect } from 'react';

const HooksDemo = () => {
    const [countA, setcountA] = useState(0);
    const [countB, setcountB] = useState(0);
    console.log("Demo Component Rerendered");

    useEffect(() => {
        console.log("Use Effect Inside Hooks Demo Called!");
    }, [countA])

    const handleClickA = () => {
        setcountA(countA + 1);
        console.log("A incremented");
    }

    const handleClickB = () => {
        setcountB(countB + 1);
        console.log("B incremented");
    }
    return(
        <>
            <h1>Demo - useEffect Hook :-</h1>
            <div>
                <button onClick={handleClickA}>Increment A</button>
                <button onClick={handleClickB}>Increment B</button>
            </div>
        </>
    )
};

export default HooksDemo;