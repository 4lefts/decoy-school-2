import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="container">
    <main>  
      <h1>Sorry</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p><Link to='/'>Home?</Link></p>
    </main>
  </div>
)

export default NotFoundPage
