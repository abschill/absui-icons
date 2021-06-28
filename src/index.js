/* eslint-disable react/jsx-pascal-case */
/* eslint-disable prettier/prettier */
import React from 'react'
import BSVG from './svg/BurgerSVGBase'
import GithubSVG from './svg/GithubSVGBase'
import ReactSVGBase from './svg/ReactSVGBase'
import CustomIcon from './svg/CustomIcon';
import CoffeeSVG from './svg/CoffeeSVG';
import GearIconBase from './svg/GearIconBase';
export const GithubIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 16 16" fill={props.fill}><GithubSVG /></CustomIcon>
export const ReactIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 16 16" fill={props.fill}><ReactSVGBase /></CustomIcon>
export const BurgerIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 32 32" fill={props.fill}><BSVG /></CustomIcon>
export const CoffeeIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 512 512" fill={props.fill}><CoffeeSVG /></CustomIcon>
export const GearIcon = (props) => <CustomIcon size={props.size} viewBox="0 0 256 256" fill={props.fill}><GearIconBase /></CustomIcon>