import {React, Component} from 'react';
import Button from "./Button"
import Box from '@mui/material/Box';

class CenteredButton extends Component{
    render(){
        return(  
          <Box display="flex" justifyContent="center" alignItems="center">
              <Button> {this.props.children} </Button>
          </Box>
        );
    }
}
export default CenteredButton;
