import React from 'react';
import CustomIcon from '../helpers/CustomIcon';
const DoneIcon = (props) => {
    return (
        <CustomIcon props={props.size} fill={props.fill}>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </CustomIcon>
    )
}
export default DoneIcon;