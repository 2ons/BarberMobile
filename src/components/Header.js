import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="logo">BARBERMOBILE</div>
      <nav>
        <ul>
          <li><a href="#hem" className="active">Hem</a></li>
          <li><a href="#tjanster">Tjänster</a></li>
          <li><a href="#om-oss">Om oss</a></li>
          <li><a href="#nyheter">Nyheter</a></li>
          <li><a href="#butik">Butik</a></li>
        </ul>
      </nav>
      <button className="contact-btn">Kontakta oss</button>
    </header>
  )
}

export default Header

