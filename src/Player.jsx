import { useState } from "react"

export default function Player({ player }) {
    const [score , setScore] = useState(0);
    const [sixes , setSixes] = useState(0);
    const [four , setFour] = useState(0);

    const handleSingle = () => {
        const newScore = score + 1;
        setScore(newScore);
    }
    const handleFour = () => {
        const newScore = score +4;
        const newFour = four +1;
        setFour(newFour);
        setScore(newScore);
    }
    const handleSix = () => {
        const newScore = score +6;
        const newSixes = sixes +1;
        setSixes(newSixes);
        setScore(newScore);
    }

 
    return (
        <>
            <div className="player">
                <h4>Player: {player} </h4>
                <p>Score: {score} </p>
                <div className="runs">
                    <p><small>Sixes: {sixes} </small></p>
                    <p><small>Fours: {four} </small></p>
                </div>
                <div className="buttons">
                    <button onClick={handleSingle}>Single</button>
                    <button onClick={handleFour}>Four</button>
                    <button onClick={handleSix}>Six</button>
                </div>
                { (score >= 50) && <p>Congratulations! You have reached 50.</p>}
            </div>
        </>
    )
}