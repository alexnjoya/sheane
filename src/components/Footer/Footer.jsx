import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md="6">
            <div className='logo'>

              <div>
                <h1 className="text-white">
                  Shane Cusmetics
                  <img src={logo} alt="logo" />

                </h1>
              </div>
            </div>
            <p className='footer_text mt-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. A, culpa iste tenetur eum asperiores cumque
              qui quasi suscipit. Minima rerum excepturi nemo
              at,
              quo animi facilis fugiat alias doloribus sed.
            </p>

          </Col>
          <Col lg='3' md='3' lassName='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Top Categories
              </h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to='#'>
                    Mobile Phone
                  </Link>
                </ListGroupItem >
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to='3'>
                    Mordern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to='3'>
                    Arm chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to='#'>
                    smart watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' lassName='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Useful Links
              </h4>
              <ListGroup >
                <ListGroupItem className="ps-0 border-0">
                  <span> </span>
                  <Link to='/shop'>
                    Shop
                  </Link>
                </ListGroupItem >

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">
                    Cart
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/login'>
                    Login
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="Privacy Policy">
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' lassName='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Contacts
              </h4>
              <ListGroup className='footer_contacts'>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span> <i class="ri-map-pin-line"></i></span>
                  <p>123 ruwanda stree 22112</p>
                </ListGroupItem >

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-fill"></i></span>
                  <p>0240027151</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-chat-2-fill"></i></span>
                  <p>njoyaalexander71@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>


          <Col lg='12'>
            <p className='footer_copyright' > Copyright {year} all right reseve ecosheane</p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer
