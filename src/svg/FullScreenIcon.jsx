import React from 'react';
import CustomIcon from './CustomIcon';
const FullScreenRaw = () => <g>
    <path d="M128,32V0H16C7.163,0,0,7.163,0,16v112h32V54.56L180.64,203.2l22.56-22.56L54.56,32H128z" />
    <path d="M496,0H384v32h73.44L308.8,180.64l22.56,22.56L480,54.56V128h32V16C512,7.163,504.837,0,496,0z" />
    <path d="M480,457.44L331.36,308.8l-22.56,22.56L457.44,480H384v32h112c8.837,0,16-7.163,16-16V384h-32V457.44z" />
    <path d="M180.64,308.64L32,457.44V384H0v112c0,8.837,7.163,16,16,16h112v-32H54.56L203.2,331.36L180.64,308.64z" />
</g>

const FullScreenIcon = (props) => {
    return (
        <CustomIcon fill={props.fill} size={props.size}>
            <FullScreenRaw />
        </CustomIcon>
    )
}
export default FullScreenIcon;