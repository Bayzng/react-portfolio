import React from 'react'
import MailchimpForm from './MailchimpForm'
import bayo from '../Assets/Bayo_Product_Logo.webp'
import { Container, Row, Col } from 'react-bootstrap'

import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
         {/* <Newsletter/> */}
            <Row className='align-item-center'>
                <MailchimpForm/>
                <Col sm={6}>
                    <img src={bayo} alt="logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">

                    
                    {/* <a href="#" className='ic'><AiOutlineWhatsApp /></a>
                    <a href="#"><AiOutlineFacebook /></a>
                    <a href="#"><AiOutlineInstagram /></a> */}


                        {/* <img src={bayo} alt="logo" />
                        <img src={bayo} alt="logo" />
                        <img src={bayo} alt="logo" /> */}
                    </div>
                    <p>copyRight 2022.  All Right Reserved</p>
                   
                </Col>
            </Row>
        </Container>
    </footer>

  )
}

export default Footer