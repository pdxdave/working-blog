import React from 'react'
import {ThemeProvider} from 'styled-components'
import Theme from './src/themes/theme'

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        {element}
    </ThemeProvider>
)

/*
styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. 
*/