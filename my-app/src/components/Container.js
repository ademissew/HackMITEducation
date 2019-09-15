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
        <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        style={{height:'80vh'}}
      >
            {children}
        </Grid>
)

export default Container