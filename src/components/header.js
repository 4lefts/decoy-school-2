import React from 'react'
import Link from 'gatsby-link'

import menuIcon from '../images/icons/baseline-menu-24px.svg'

const toggleMenu = () => {
  const nv = document.querySelector('.navigation-narrow')
  if(nv.style.display === 'block'){
    nv.style.display = 'none'
  } else {
    nv.style.display = 'block'
  }
}

const closeMenu = () => {
  document.querySelector('.navigation-narrow').style.display = 'none'
}

const Header = ({pages, siteTitle}) => {
  const links = pages.map(({node}) => {
    return(
      <Link 
        exact
        to={node.frontmatter.path}
        key={node.frontmatter.path}
        onClick={closeMenu}
      > 
        {node.frontmatter.navTitle}
      </Link>
    )
  })
  return (<header>
    <div className="container">
      <nav className="navigation-wide">
        {links}
      </nav>
    </div>
    <button id="navigation-btn" onClick={toggleMenu}><img src={menuIcon} alt="menu button" /></button>
    <nav className="navigation-narrow">
      {links}
    </nav>
  </header>)
}

export default Header
