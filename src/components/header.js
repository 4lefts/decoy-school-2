import React from 'react'
import Link from 'gatsby-link'

const toggleMenu = () => {
  const nv = document.querySelector('.navigation-narrow')
  if(nv.classList.contains('open')){
    nv.classList.remove('open')
  } else {
    nv.classList.add('open')
  }
}

const Header = ({pages, siteTitle}) => {
  const links = pages.map(({node}) => {
    return(
      <Link 
        exact
        to={node.frontmatter.path}
        key={node.frontmatter.path}
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
      <button id="navigation-btn" onClick={toggleMenu}>Menu</button>
      <nav className="navigation-narrow">
        {links}
      </nav>
    </div>
  </header>)
}

export default Header
