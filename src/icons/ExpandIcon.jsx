/* eslint-disable prettier/prettier */
import CustomIcon from './CustomIcon';
import React from 'react';


export const ExpandMoreIcon = (props) => {
    return (
        <CustomIcon fill={props.fill} size={props.size}>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </CustomIcon>
    )
}

export const ExpandLessIcon = (props) => {
    return (
        <CustomIcon fill={props.fill} size={props.size}>
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
        </CustomIcon>
    )
}