import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../image/mainBanner.jpg'
import Button from 'react-bootstrap/Button';
import meal from '../image/meat-platter.jpg'
import delivery from '../image/delivery.png'
import plate from '../image/plate.png'
import phone from '../image/phone.png'



export default function Home() {
  return (
    <>
    <div className='banner'>
        <Container className='bannerText'>
            <h1>Healty Senior <br/> Meal delivery</h1>
            <div className='bannerButton'>
            <Button variant="dark" className='navButton' style={{margin:'0'}}>Get Started</Button>
            <button  className='navButton' style={{background:'rgba(0,0,0,0.0)',paddingLeft:'40px',paddingRight:'40px'}}>Menu</button>
            </div>
        </Container>
        <img src={banner} />   
    </div>
    <div className='whyUs'>
        <Container >
            <Row style={{paddingBottom:'50px'}}>
                <Col md={12} style={{textAlign:'center',margin:'50px 0'}}>
                    <h1 style={{fontWeight:'bolder'}}>Why Meals On Wheels</h1>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <h3>Food you can Love</h3>
                    <p>pick from a variety of healty and frozen food</p>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <h3>Prepared by Chefs</h3>
                    <p>cooked and prepared by professional chef</p>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <h3>Deliverered Fresh</h3>
                    <p>Delivery to your door fast</p>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <h3>Meals plan</h3>
                    <p>a lot af meal plan you can choose</p>
                </Col>
            </Row>
        </Container>
    </div>
    <img src={meal} width={'100%'} height={'100%'} />
    <div className='userInfoContainer' style={{marginBottom:'0'}}>
        <Container style={{padding:'150px 0'}}>
            <Row>
                <Col lg={5} md={5} sm={12}>
                <h1 style={{fontSize:'60px',lineHeight:'60px',fontWeight:'bolder'}}>Why Our <br/>meals are <br/>the best</h1>
                <Button variant='dark' className='reciveButton'  style={{marginTop:'5px'}}>See Menu</Button>
                </Col>
                <Col lg={7} md={7} sm={12}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="bestMealOption">
                        <h4>Quality comes first</h4>
                        <p>
                        We hold ourselves to a high standard of excellence, from the ingredients we source to the partners we work with 
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="bestMealOption">
                        <h4>Gluten-free</h4>
                        <p>
                        All of our meals are perfectly portioned, delicious, and gluten-free
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="bestMealOption">
                        <h4>Experience eating Clean</h4>
                        <p>
                        Our food contains zero preservatives, antibiotics, artificial sweeteners, hormones, or other junk
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="bestMealOption">
                        <h4>Imposibly delicious</h4>
                        <p>
                        Wholesome, savory comfort food made healthy
                        </p>
                    </Col>
                </Row>
                </Col>                
            </Row>
        </Container>
    </div>
    <Container style={{marginTop:'100px', marginBottom:'100px'}}>
        <div style={{padding:'50px',backgroundColor:'#f3f3f3'}}>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <h1 style={{fontWeight:'bold'}}>
                        No shopping.<br/>
                        No cooking.<br/>
                        No dishes.
                    </h1>
                    <p>
                        Our customers on average save over 4 hours a week on shopping, cooking, and cleaning, giving you more time to do the things you love
                    </p>
                    <Button variant='dark' className='reciveButton'  style={{marginTop:'5px'}}>See Menu</Button>
                </Col>
                <Col lg={4} md={4} sm={12}>

                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className='reason'>
                    <img src={delivery} height="100px"/>
                        <div style={{marginTop:'30px'}}>
                            <h4>healthy and delicious</h4>
                            <p>
                                Registered Dietitian directed and chef prepared
                            </p>
                        </div>
                    </div>
                    <div className='reason'>
                    <img src={plate} height="100px"/>
                        <div style={{marginTop:'30px'}}>
                            <h4>One size doesn't fit all</h4>
                            <p>
                                Rotating menu and customizable plans
                            </p>
                        </div>
                    </div>
                    <div className='reason'>
                    <img src={phone} height="100px"/>
                        <div style={{marginTop:'30px'}}>
                            <h4>Our customer love us</h4>
                            <p>
                                Thousand of 5-stars review
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
       
        </div>
    </Container>
    </>
  )
}
