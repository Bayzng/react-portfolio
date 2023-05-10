// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import Bayo from '../Assets/Bayo.webp';
import './NavBar.css'

export const NavBar = () => {
  const [ activeLink, setActiveLink ] = useState("home");
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scroll > 50) {
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  const javaStyle = {color: 'white'}

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ""}>
      <Container className='container'>
        <Navbar.Brand href="#home">
          <img src={Bayo} alt='logo' className='bayo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><AiOutlineWhatsApp style={javaStyle}/></a>
                <a href="#"><AiOutlineFacebook style={javaStyle}/></a>
                <a href="#"><AiOutlineInstagram style={javaStyle}/></a>
            </div>
            <button className='btn' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;