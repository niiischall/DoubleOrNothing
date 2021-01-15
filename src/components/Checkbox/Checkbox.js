import React from 'react';
import classes from './Checkbox.css';

const CheckBox = (props) => (
    <span>
        <span
            id={props.id}
            onClick={props.handleCheck}
            className={ props.checked 
                ? [classes.customCheckbox, classes.customCheckboxActive].join(' ') 
                : classes.customCheckbox 
            }
            value = {props.value}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src={
                    props.checked 
                    ? "assets/images/checkmark.svg"
                    : null
                }
                width={'14px'}
                height={'14px'}
                alt = {null}
            />
        </span>
    </span>
);

export default CheckBox;