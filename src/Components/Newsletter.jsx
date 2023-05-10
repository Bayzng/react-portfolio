import React from 'react'
import { useState, useEffect } from 'react'
import { Alert, Row, Col } from 'react-bootstrap'
import star from '../Assets/star.jpeg'
import './Footer.css'

const Newsletter = ({ onValidated, status, message }) => {

    const [email, setEmail] = useState('')

    useEffect(() => {
        if (status === 'success') clearField()
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf['0'] > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearField = () => {
        setEmail('')
    }

  return (
    <>
     <Col lg={12}>
        <div className="newsetter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to my newsletter</h3>
                    { status === "sending" && <Alert>Sendding...</Alert>}
                    { status === "error" &&  <Alert varient="Danger">{message}</Alert>}
                    { status === "success" && <Alert varient="Success">{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        <img className="background-image-left"  src={star} alt="" />
        </div>
    </Col>
    </>
  )
}

export default Newsletter