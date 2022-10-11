import {React, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@mui/material/Button";
import styles from "../../styles"

class Button extends Component {
    render() {
        const { classes, onClick } = this.props;      
      
        return (
            <MuiButton onClick={onClick} variant="outlined" className={ classes.button_normal }>
                {this.props.children}
            </MuiButton>
        )
    }
}

export default withStyles(styles)(Button);
