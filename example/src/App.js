import React from 'react'

import {
  HomeIcon,
  NightIcon,
  DayIcon,
  MenuIcon,
  ForwardIcon,
  BackIcon,
  AddIcon,
  SubtractIcon,
  NewWindowIcon,
  CloseIcon,
  SearchIcon,
  CancelIcon,
  DoneIcon,
  ExpandMoreIcon,
  ExpandLessIcon,
  FilterIcon
} from 'absui-icons'
const size = "md"
const fill = "#000";
const App = () => {
  return (
    <div>
      <HomeIcon fill={fill} size={size} />
      <NightIcon fill={fill} size={size} />
      <DayIcon fill={fill} size={size} />
      <MenuIcon fill={fill} size={size} />
      <ForwardIcon fill={fill} size={size} />
      <BackIcon fill={fill} size={size} />
      <AddIcon fill={fill} size={size} />
      <SubtractIcon fill={fill} size={size} />
      <NewWindowIcon fill={fill} size={size} />
      <CloseIcon fill={fill} size={size} />
      <SearchIcon fill={fill} size={size} />
      <CancelIcon fill={fill} size={size} />
      <DoneIcon fill={fill} size={size} />
      <ExpandMoreIcon fill={fill} size={size} />
      <ExpandLessIcon fill={fill} size={size} />
      <FilterIcon fill={fill} size={size} />
    </div>
  )
}

export default App
