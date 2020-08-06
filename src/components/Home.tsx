import React from 'react'
import { Link } from 'react-router-dom'
import { HomeStyles } from '../styles/style'
import Logo from './Logo'

export default function Home() {
  return (
    <HomeStyles>
      <div>
        <Link to="/winners">
          <Logo />
        </Link>
      </div>
    </HomeStyles>
  )
}
