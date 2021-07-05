import CustomIcon from "./CustomIcon";
import React from 'react';
const AddRaw = () => <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
const AddIcon = (props) => {
    return (
        <CustomIcon size={props.size} fill={props.fill}>
            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
        </CustomIcon>
    )
}
export default AddIcon;