import React from 'react'
import {ContainerWrapper} from '../elements'
import {Nav, Footer} from "../components"


export const Container = ({children}) => {
   return  <ContainerWrapper>
                <Nav />
                {children}
            <Footer />
            </ContainerWrapper>
}

/*
Here we are importing the grid system that we made in the elements
folder. All the children content will be ran through the this
grid element. 
*/