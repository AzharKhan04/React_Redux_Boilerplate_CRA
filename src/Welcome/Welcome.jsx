import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Welcome = () => {

    return (
        <div style={{padding:'12px'}}>
        <Grid style={{textAlign:'start'}} container spacing={1}>
        <Grid item xs={12} sm = {12} md={12} lg={12}>
        <Typography variant="h4" gutterBottom component="div">
        {' Hi There ...'}
      </Typography>
 
        </Grid>
        <Grid item xs={12} sm = {12} md={12} lg={12}>
        <Typography   gutterBottom component="div">
        {`Welcome to the react app with `}
       
        <strong><a target="_blank" href="https://redux.js.org/">Redux</a> </strong>
       {`and `}
       <strong> <a target="_blank" href="https://mui.com/">Material UI</a> </strong>
        {` Integrated`}


      </Typography>
 
        </Grid>

        </Grid>
        </div>

    )

}


export default React.memo(Welcome);