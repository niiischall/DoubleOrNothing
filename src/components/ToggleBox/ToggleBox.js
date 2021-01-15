import React from "react";
import classes from './ToggleBox.css';

const ToggleBox = (props) => {
    return(
        <div className = {classes.ToggleBox}>
            <img 
                src = "assets/images/back-arrow.svg" 
                className = {classes.Image}
                alt = "BACK"
                onClick = {() => props.toggle('PREV')}
            />
            <span className = {classes.Text}>{props.count} of 30</span>
            <img 
                src = "assets/images/forward-arrow.svg" 
                className = {classes.Image}
                alt = "FORWARD"
                onClick = {() => props.toggle('NEXT')}
            />
        </div>
    )
}

export default ToggleBox;