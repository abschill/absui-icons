/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import CustomIcon from './CustomIcon';
const BSVG = () => <path d="M3 9H29a2 2 0 000-4H3A2 2 0 003 9zM29 14H3a2 2 0 000 4H29a2 2 0 000-4zM29 23H3a2 2 0 000 4H29a2 2 0 000-4z" />
const BurgerIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 32 32" fill={props.fill}><BSVG /></CustomIcon>
export default BurgerIcon;