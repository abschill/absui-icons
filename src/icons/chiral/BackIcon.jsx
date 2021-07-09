/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import CustomIcon from '../helpers/CustomIcon';
const BI = () => {
	return (
		<>
			<g transform="matrix(1 0 0 1 117 86)"  >
				<line x1="0" y1="0" x2="0" y2="0" />
			</g>
			<g transform="matrix(-3.9 0 0 3.4 258 268.29)"  >
				<path d="m 0 14.960629 l 89.732285 0 l 0 -14.960629 l 29.921257 29.921259 l -29.921257 29.921259 l 0 -14.9606285 l -89.732285 0 z" />
			</g></>
	)
}
const BackIcon = (props) => {
	return (
		<CustomIcon props={props.size} fill={props.fill}>
			<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
		</CustomIcon>
	)
}
export default BackIcon;