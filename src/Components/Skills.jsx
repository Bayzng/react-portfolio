import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand from '../Assets/brand.webp'
import digital from '../Assets/digital.jpeg'
import macbook from '../Assets/macbook.webp'
import program from '../Assets/program.png'
import star from '../Assets/star.jpeg'
import './Skills.css'
import { AiOutlinePercentage } from 'react-icons/ai'

import React from 'react'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                SKILLS
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vero obcaecati. Asperiores eos corporis quaerat, magnam error neque iure doloribus voluptatum dicta, repellat itaque, explicabo earum? Quia sapiente labore assumenda explicabo neque corporis ex expedita quos, perferendis ea! Perspiciatis dolore pariatur in necessitatibus enim suscipit totam numquam, voluptatum culpa doloremque?
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h1>95%</h1>
                                    {/* <img src={program} alt="image" /> */}
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <h1>80%</h1>
                                    {/* <img src={brand} alt="image" /> */}
                                    <h5>Brand Identify</h5>
                                </div>
                                <div className="item">
                                    <h1>75%</h1>
                                    {/* <img src={digital} alt="image" /> */}
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <h1>80%</h1>
                                    {/* <img src={macbook} alt="image" /> */}
                                    <h5>App Development</h5>
                                </div>
                                <div className="item">
                                    <h1>85%</h1>
                                    {/* <img src={program} alt="image" /> */}
                                    <h5>Web Designing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"  src={star} alt="" />
        </section>
    )

}

export default Skills