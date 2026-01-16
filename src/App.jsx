import { useState, useEffect } from 'react'
import './App.css'
import Icon from '@mdi/react';
import { mdiCartOutline, mdiThemeLightDark } from '@mdi/js';

function getPreviousTheme(){
  return localStorage.getItem('theme')
}

function getSystemTheme(){
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' 
  : 'light';
}

function App() {
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
      <div className='logo-header'>
        <h4>Chyne</h4>
      </div>
      <ul>
        <li>
          <button onClick={() =>
          setTheme(theme === 'light' ? 'dark' : 'light')
          }>
            <Icon path={mdiThemeLightDark} size={1} />
          </button>
        </li>
        <li>Home</li>
        <li>Shop</li>
        <li>
          <Icon path={mdiCartOutline} size={1} />
        </li>
      </ul>
    </nav>
    <main>
      <div className="main-card">
        <h3>
          Welcome to Chyne!
        </h3>
        <p>Your one stop shop to look as elegant and beautiful as you deserve to feel</p>
        <button className={"styled-button primary"}><p>Shop now</p></button>
      </div>
    </main>
    </>
  )
}

export default App
