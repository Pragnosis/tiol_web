//-------Custom styling is not working yet -- colors customized successfully



import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        whiteSpace: 'nowrap',
        // paddingBottom: 10,
        // paddingTop: 10,
        // paddingRight: 25,
        // paddingLeft: 25,
        textTransform: "uppercase",
    }
}));


const CustomButton = (props) => {
    const { btnText, btnStyle } = props
    const classes = useStyles();
    return (
        <Button
            className={`${classes.root} ${props.newClassName}`}
            style={btnStyle}
            fullWidth
            {...props}
        >
            {btnText}
        </Button>
    );
};

export default CustomButton;






