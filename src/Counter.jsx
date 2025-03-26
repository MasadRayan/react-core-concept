import { useState } from "react"

export default function Counetr() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const clearCount = () => {
        setCount(0);
    }

    return (
        <div className="counter">
            <h3>Count: {count} </h3>
            <div className="buttons">
                <button onClick={handleClick}>Count</button>
                <button onClick={clearCount}>Clear</button>
            </div>
        </div>
    )
}