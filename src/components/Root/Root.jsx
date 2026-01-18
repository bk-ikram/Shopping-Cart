import { useState, useEffect } from 'react'
import './Root.css'
import Icon from '@mdi/react';
import { mdiCartOutline, mdiThemeLightDark } from '@mdi/js';
import { NavLink, Outlet } from 'react-router-dom';
import NavElement from '../NavElement/NavElement.jsx'


function getPreviousTheme(){
  return localStorage.getItem('theme')
}

function getSystemTheme(){
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' 
  : 'light';
}

function Root() {
  const [theme, setTheme] = useState( () => {
    return getPreviousTheme() ?? getSystemTheme()
  }
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
    <nav>
      <NavElement path="/" style={false}>
        <div className='logo-header'>
          <h4>Chyne</h4>
        </div>
      </NavElement>
      <ul>
        <li>
          <button onClick={() =>
          setTheme(theme === 'light' ? 'dark' : 'light')
          }>
            <div className="icon-container">
              <Icon path={mdiThemeLightDark} size={1} />
            </div>
          </button>
        </li>
        <li>
          <NavElement path="/">
            Home
          </NavElement>
        </li>
        <li>
          <NavElement path="shop">
            Shop
          </NavElement>
        </li>
        <li>
          <NavElement path="cart" >
            <div className="icon-container">
                <Icon path={mdiCartOutline} size={1} />
            </div>
          </NavElement>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Root
