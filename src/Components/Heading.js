import {React, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles"

class Heading extends Component{
    
    render(){
        const { classes } = this.props

        return(  
            // This style is in index.css
            <span className={classes.h2_style}>
                {this.props.children}
            </span>
        );
    }
}

export default withStyles(styles)(Heading);