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
        style={{height:'auto',display:"flex",flexWrap: "wrap"}}
      >
          <div style={{display : 'inline-block',width:"100%",height:'100vh',marginTop:"100px"}}>
            {children}
          </div>
        </Grid>
)

export default Container