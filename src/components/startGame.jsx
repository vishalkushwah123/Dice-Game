import React from 'react'
import styled from 'styled-components'



const StartGame = ({ toggle }) => {
    return (
        <Container>
            <img src='/public/images/dices.png' style={{ width: 500, paddingLeft: 150 }} />
            <Div>
                <Heading>DICE GAME</Heading>
                <Button onClick={toggle}>Play Now</Button>
            </Div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Heading = styled.h1`
font-size: 100px;
font-weight: 800;
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

const Div = styled.div`
text-align: end;
`