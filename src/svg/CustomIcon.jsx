/* eslint-disable prettier/prettier */
import React from 'react';
const CustomIcon = (props) => {
    switch (props.size) {
        case "sm":
            return <svg fill={props.fill} viewBox={props.viewBox ?? "0 0 512 512"} height="32" width="32">{props.children}</svg>
        case "md":
            return <svg fill={props.fill} viewBox={props.viewBox ?? "0 0 512 512"} height="64" width="64">{props.children}</svg>
        case "lg":
            return <svg fill={props.fill} viewBox={props.viewBox ?? "0 0 512 512"} height="128" width="128">{props.children}</svg>
        default:
            return <svg fill={props.fill} viewBox="0 0 512 512">{props.children}</svg>
    }

}
export default CustomIcon;