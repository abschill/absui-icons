import CustomIcon from "./CustomIcon";
import React from 'react';
const SubtractRaw = () => <path d="M490.667,234.667H21.333C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h469.333 c11.782,0,21.333-9.551,21.333-21.333C512,244.218,502.449,234.667,490.667,234.667z" />
const SubtractIcon = (props) => {
    return (
        <CustomIcon size={props.size} fill={props.fill}>
            <path d="M6 12h12v2H6v-2z" />
        </CustomIcon>
    )
}
export default SubtractIcon;