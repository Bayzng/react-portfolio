import { useState, useEffect } from 'react';
import React from 'react'
import './NavBar.css'
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import Radio from '../Assets/robot-removebg-preview.png'
import './Banner.css'



const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['ADEBAYO  ABDULAKEEM', 'A SOFTWARE DEVELOPER', 'WEB DEVELOPER']
    const [text, setText]  =useState('');
    const [data, setData] = useState(400 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, data)
      return() => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i]
      let upDatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText (upDatedText);

      if (isDeleting) {
        setData(prevData => prevData /2)
      }

      if (!isDeleting && upDatedText === fullText) {
          setIsDeleting(true);
          setData(period);
      }else if (isDeleting && upDatedText ===  '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setData(500);
      }
    }

  return (
    <section className='barner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='toggle'>Welcome to my portfolio</span>
            <h1>{`Hi I'M `}<span className='wrap'>{text}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptatum corporis officiis dolore. Quo odio omnis, sed tenetur qui perspiciatis, doloribus, fugiat rerum repellat harum repudiandae numquam quia excepturi mollitia officiis nulla molestias neque rem voluptate ea. Quaerat quod dignissimos temporibus explicabo rerum, quam asperiores reprehenderit facere, tempore architecto modi!</p>
            <button onClick={() => console.log('connect')}>Let's Connect <AiOutlineWhatsApp size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Radio} alt="Header imgage" />
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Banner