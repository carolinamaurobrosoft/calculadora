import React from "react";
import '../stylesheet/Button.css'

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    }
    return(
        <div
            className={`button-container ${isOperator(props.children) ? 'operator': null}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button;