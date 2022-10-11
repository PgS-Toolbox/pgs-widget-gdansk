import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "../styles"
import { withStyles } from "@material-ui/core/styles";
import { Component } from 'react';


class ButtonAppBar extends Component {

  render () {
        
    const { classes } = this.props;

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.app_bar} position="static" elevation={0}>
            <Toolbar>
            <Typography variant="" component="div">
                {process.env.REACT_APP_NAME}
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
  }
}


export default withStyles(styles)(ButtonAppBar);
