import React from 'react'
import { styled } from 'styled-components'

function TotalScore({ score, setScore }) {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`

max-width: 200px;
text-align: center;

h1{
    font-size: 100px;
    font-weight: 900;
}
p{
    font-weight: 500;
    font-size: 24px
}
`