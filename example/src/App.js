import React from 'react'

import { CoffeeIcon, GearIcon, GithubIcon, BurgerIcon, ReactIcon, NightIcon, DayIcon, AddIcon, SubtractIcon,
        NewWindowIcon, CloseIcon } from 'absui-icons'
const App = () => {
  return (
    <div className="test">
      <GearIcon fill="#c0c0c0" size="md"
      />
      <CoffeeIcon fill="#c0c0c0" size="md" />
      <GithubIcon fill="#c0c0c0" size="md" />
      <BurgerIcon fill="#000" size="md"/>
      <ReactIcon size="md"/>
      <DayIcon size="sm"/>
      <NightIcon size="sm"/>
      <AddIcon size="md"/>
      <SubtractIcon size="md"/>
      <NewWindowIcon size="md"/>
      <CloseIcon size="md"/>
    </div>
  )
}

export default App
