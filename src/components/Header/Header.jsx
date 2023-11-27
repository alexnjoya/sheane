import React, { useRef, useEffect } from 'react'
import "./header.css"

import { motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

const nav_links = [
  {
    path: "home",
    displayed: "Home"
  },
  {
    path: "shop",
    displayed: "Shop"
  },
  {
    path: "cart",
    displayed: "Cart"
  },

];
const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 ||
         document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {

        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
    
  })

  const menuToggle = () =>  menuRef.current.classList.toggle("active_menu")

  return <header className='header' ref = {headerRef}>
    <Container>
      <Row>
        <div className='nav_wrapper'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>Sheane Cusmetics</h1>

          </div>
          <div className='navigation' ref = {menuRef} onClick={menuToggle}>
            <ul className='menu'>
              {
                nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path}
                      className={(navclass) => navclass.isActive ? 'nav_active' : ''}
                    >{item.displayed}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="nav_icons">
            <span className="fav_icon">
              <i class="ri-heart-line"></i>
              <span className='badge'>1</span>
            </span>
            <span className='cart_icon'>
              <i class="ri-briefcase-line"></i>
              <span className='badge'>2</span>
            </span>
            <span> <motion.img whileTap={{ scale: 1.5 }} src={userIcon} alt="" /></span>
            <div className='mobile_menu'>
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </div>
      </Row>

    </Container>

  </header>
}

export default Header
