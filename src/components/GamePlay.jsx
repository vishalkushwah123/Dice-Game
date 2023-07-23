import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RollDice from './RollDice'

function GamePlay() {
    const [error, setError] = useState("")
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have select the Number")
            return;
        }
        setError("")
        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)


        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + 1)
        } else {
            setScore((prev) => prev - 1)
        }

        setSelectedNumber(undefined)
    }

    const reset = () => {
        setScore(0)
    }

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score={score} setScore={setScore} />
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>

            <RollDice currentDice={currentDice} roleDice={roleDice} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} >
                <Button onClick={reset}>Reset</Button>
            </div>
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
max-width: 100%;
// display: flex;
// justify-content: center;
// text-align: center;
padding: 70px 100px 100px 100px; 
// padding-top: 70px;
margin: auto;

.top-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%
    margin: auto;
}


`

const Button = styled.button`
background-color: black;
color: white;
padding: 15px 35px;
transition: 0.3s ease-in-out;
cursor: pointer;

&:hover{
    border: 2px solid black;
    background-color: white;
    color: black;  
}
`
