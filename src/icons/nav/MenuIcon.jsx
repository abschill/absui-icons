/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import CustomIcon from '../helpers/CustomIcon';
//const BSVG = () => <path d="M3 9H29a2 2 0 000-4H3A2 2 0 003 9zM29 14H3a2 2 0 000 4H29a2 2 0 000-4zM29 23H3a2 2 0 000 4H29a2 2 0 000-4z" />

const MenuIcon = (props) => <CustomIcon size={props.size} fill={props.fill}><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></CustomIcon>
export default MenuIcon;