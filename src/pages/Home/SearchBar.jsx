import React from 'react' 
import styled from 'styled-components'

const SearchBarWrapper = styled.div`
border: 1px solid black;
border-radius: 20px;
padding: 10px;
display: flex;
position: relative;
`

const IconImage = styled.img`
   height: 20px;
   padding-right: 20px;
`

const Input = styled.input`
border: none;
outline: none;
flex:1 ;
`

function SearchBar() {
    return (
        <SearchBarWrapper>
           <IconImage
                src = "https://image.flaticon.com/icons/png/512/49/49116.png" 
                alt="icon"
           />
           <Input/>
        </SearchBarWrapper>
    )
}


export {SearchBar}