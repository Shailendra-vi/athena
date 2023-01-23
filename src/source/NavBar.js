import React from 'react'
export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='nav-ul'>
            <li>
                <a href='./App.js'>Product</a>
            </li>
            <li>
                <a href='./App.js'>Our Story</a>
            </li>
            <li>
                <a href='./App.js'>Resources</a>
            </li>
        </ul>
        <div className='button'>
        <button className="button-9">Book a demo</button>
        </div>
    </nav>
  )
}
