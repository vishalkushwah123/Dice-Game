import React, { useState } from 'react'
import { styled } from 'styled-components'

const RollDice = ({ roleDice, currentDice }) => {


    return (
        <DiceContainer>
            <div>

                <img src={`/public/images/dice/dice_${currentDice}.png`} alt="" onClick={roleDice} />

            </div>
            <p>Click To Roll the Dice</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px
}
img{
    cursor: pointer;
}
`


