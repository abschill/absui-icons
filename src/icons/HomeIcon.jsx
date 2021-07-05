import React from 'react';
import CustomIcon from './CustomIcon';
const HomeIcon = (props) => {
    return (
        <CustomIcon fill={props.fill} size={props.size}>
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </CustomIcon>
    )
}

export default HomeIcon;