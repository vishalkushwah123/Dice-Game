import React, { useState } from 'react'
import { styled } from 'styled-components'

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
    const arr = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }
    return (
        <NumberSelectorContainer>
            <p style={{ color: "red", margin: 10 }}>{error}</p>
            <div className="flex">
                {
                    arr.map((value, i) => (
                        <Box isSelected={value == selectedNumber} key={i} onClick={() => numberSelectorHandler(value)}>{value}</Box>
                    ))
                }


            </div>

            <p>Select Number</p>


        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
}

p{
    font-size: 25px;
    font-weight: 600;
}

`

const flex = styled.div`
display: flex;
`

const Box = styled.div`

height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 800;
background-color: ${(props) => props.isSelected ? "black" : "White"};
color: ${(props) => props.isSelected ? "white" : "Black"}

`
