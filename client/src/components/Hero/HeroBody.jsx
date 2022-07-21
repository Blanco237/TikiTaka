import React from 'react'
import Hero from './Hero'
import RotateProvider from './RotateContext'

const HeroBody = () => {
  return (
    <RotateProvider>
        <Hero />
    </RotateProvider>
  )
}

export default HeroBody