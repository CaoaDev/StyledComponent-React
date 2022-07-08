import React from 'react'
import { Div, P, Button, BlockButton, Link, StyleLink, Input, Password, Rotar } from './Components/Label'

function App () {
  return (
    <div className="App">
      <Div>
        <P>Hola soy un parrafo</P>
        <Button>Enviar</Button>
        <Button>Enviar<p className='info'>Info</p></Button>
        <Button primary>Enviar</Button>
        <Button className='secundary'>Enviar</Button>
        <BlockButton as='a' href='#'>Enviar</BlockButton>
        <BlockButton>Enviar</BlockButton>
        <Link>Link</Link>
        <StyleLink>StyleLink</StyleLink>
        <Input color='blue' />
        <Password />
        <br />
        <Rotar>Estoy girando</Rotar>
      </Div>
    </div>
  )
}

export default App
