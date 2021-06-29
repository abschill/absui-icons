import CustomIcon from "./CustomIcon";
import React from 'react';
const OpenNew = () => {
    return(
    <g>
        <path d="m18 23h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h8c.552 0 1 .447 1 1s-.448 1-1 1h-8c-.551 0-1 .448-1 1v14c0 .552.449 1 1 1h14c.551 0 1-.448 1-1v-8c0-.553.448-1 1-1s1 .447 1 1v8c0 1.654-1.346 3-3 3z" />
        <path d="m22 1h-6c-.404 0-.769.243-.924.617s-.069.804.217 1.09l2.293 2.293-7.293 7.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l7.293-7.293 2.293 2.293c.191.191.447.293.707.293.129 0 .259-.024.383-.076.373-.154.617-.52.617-.924v-6c0-.553-.448-1-1-1z" />
    </g>
    )
}
const NewWindowIcon = (props) =>{
    return(
        <CustomIcon size={props.size} viewBox="0 0 24 24" fill={props.fill}>
            <OpenNew/>
        </CustomIcon>
    )
}
export default NewWindowIcon;