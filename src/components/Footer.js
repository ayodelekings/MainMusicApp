import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
                    <h2>All rights reserved. TheAyodele | Copyright 2020</h2>
        </Container>
    )
}

export default Footer 



const Container = styled.div`
 background-color: #471E2F;
 color: white;
 text-align: center;
 font-size: 8px;
 font-style: italic;
 padding: 1rem;
 margin-top: 35rem;
 position: relative;
`