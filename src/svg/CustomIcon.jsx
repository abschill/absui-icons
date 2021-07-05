/* eslint-disable prettier/prettier */
import React from 'react';
const CustomIcon = (props) => {
    const [size, setSize] = React.useState(() => {
        if (props.size === "sm" || props.props === "sm") {
            return "24px";
        }
        if (props.size === "md" || props.props === "md") {
            return "48px";
        }
        if (props.size === "lg" || props.props === "lg") {
            return "96px";
        }
        return "24px"
    })
    return (
        <svg width={size} height={size} viewBox="0 0 24 24">
            {props.children}
        </svg>
    )



}
export default CustomIcon;