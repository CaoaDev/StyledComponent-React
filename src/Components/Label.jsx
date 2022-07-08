import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Div = styled.div`
  text-align: center;
  padding: 20px;
`
export const P = styled.p`
  font-size: 24px;
  color: red;
`
export const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  border: solid 2px green;
  border-radius: 15px;
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  transition: box-shadow .2s ease;
 
  margin-left: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0,.4);
  }

  &.secundary {
    background-color: blue;
    color: white;
  }

  .info{
    font-size: 30px;
  }
`
export const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  margin: 4px 4px;
`
export const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}
export const StyleLink = styled(Link)`
  color: blue;
`
export const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`
export const Password = styled(Input).attrs({
  type: 'password'
})``
const girar = keyframes`
  from {
  transform: rotate(0deg);
}
  to {
  transform: rotate(360deg)
}`
export const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`
