import React from 'react'
import { SectionContainerStyles } from '../styles/style'
import Logo from './Logo'

export default function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainerStyles>
      <div>
        <Logo width={150}/>
      </div>
      {children}
    </SectionContainerStyles>
  )
}
