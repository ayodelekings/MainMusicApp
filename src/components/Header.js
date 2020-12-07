import React from 'react'
import styled from 'styled-components'
import image3 from '../assets/image3.png';

function Header() {
    return (
        <Container>
            <Navbar>
                <Brand>
                    <h2>Music Blog</h2>
                </Brand>
                <Menu>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>  
                </Menu>
            </Navbar>
            <Hero>
            <img src={image3} alt="hero" />
            </Hero>
        </Container>
    )
}

export default Header


const Container = styled.div`
 background-color: #471E2F;
 color: white;
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
`

const Brand = styled.div`
 margin: 0 2rem;
`

const Menu = styled.div`
align-items: center;
display: flex;

a{
    margin: 0 2rem;
    color: white;
}
`

const Hero = styled.div`

    
    img{
        width: 100%;
        height: 450px;
        margin: auto;
        object-fit: cover;
    }
`