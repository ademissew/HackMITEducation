import React from 'react'
import {Grid} from '@material-ui/core'

/*const theme = createMuiTheme({

    Custom theme?
    
    palette: {
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  })*/

const Container = ({ children }) => (
    // <ThemeProvider theme={theme}>
        <Grid
            container
            direction="row"
            justify="center" 
            alignItems="center"
        > 
            {children}
        </Grid>
    // </ThemeProvider>
)

export default Container