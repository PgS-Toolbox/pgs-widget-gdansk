import {React, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles"

class SubHeading extends Component{
    
    render(){
        const { classes } = this.props

        return(  
            <span className={classes.h3_style}>
                {this.props.children}
            </span>
        );
    }
}

export default withStyles(styles)(SubHeading);