import React from 'react'
import {Grid} from '@material-ui/core'

const Container = ({ children }) => (
        <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        justifyContent="center"
        style={{height:'auto',display:"flex",flexWrap: "wrap"}}
      >
          <div style={{display : 'inline-block',width:"100%",height:'100vh',marginTop:"100px"}}>
            {children}
          </div>
        </Grid>
)

export default Container