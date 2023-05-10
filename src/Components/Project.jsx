import React from 'react'
import ProjectCard from './ProjectCard'
import brand from '../Assets/Screenshot 2023-04-28 at 07.38.30.png'
import digital from '../Assets/Screenshot 2023-04-28 at 07.42.13.png'
import macbook from '../Assets/Screenshot 2023-04-28 at 07.43.22.png'
import program from '../Assets/Screenshot 2023-04-28 at 07.45.05.png'
import color from '../Assets/Screenshot 2023-04-28 at 07.49.56.png'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import './Project.css'


const Project = () => {
  
    const projects = [
        {
            title: "Parallax Website",
            description: "Design & Development",
            imgUrl: digital,
        },
        {
            title: "Responsive Portfolio",
            description: "Design & Development",
            imgUrl: brand,
        },
        {
            title: "Business Website",
            description: "Design & Development",
            imgUrl: macbook,
        },
        {
            title: "Mobile Application",
            description: "Design & Development",
            imgUrl: color,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: program,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: color,
        },
    ]
  
  
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>PROJECTS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam nam corporis, doloremque odit sapiente natus iusto nisi quasi eaque voluptas rem, autem reprehenderit, placeat minima distinctio! Possimus laborum iste animi consequatur consectetur? Commodi, rem molestiae porro maiores facere accusamus voluptatem facilis dolor aliquam distinctio quam cum saepe debitis minima!</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">PORTFOLIO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">EXPLORE</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">ABOUT-ME</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                   <ProjectCard
                                                   key={index}
                                                   {...project}
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>    
                        </Tab.Container>
                        
                    </Col>
                </Row>
            </Container>
            {/* <img className='backgound-image-right' src={color} alt="" /> */}
        </section>
  )
}

export default Project