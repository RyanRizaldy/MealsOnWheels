import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Pic from '../image/rothy.png'

function Driver(){
    return(
        <>
         <div className='userInfoContainer'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <p style={{textAlign:"right",margin:"15px"}}>Edit</p>
                </Col>
                <Col lg={4} md={12} sm={12} className="userPic">
                <img src={Pic} alt="Logo" height={"150px"} className='rounded-circle'/>
                <div>
                    <h5>Driver Name</h5>
                </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='userInfo'>
                        <h5>Email</h5>
                        <p>example.test@gmail.com</p>
                    </div>
                    <div className='userInfo'>
                        <h5>Address</h5>
                        <p>this is Member address</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='userInfo'>
                    <h5>Status</h5>
                    <p>Driver</p>
                </div>
                
                </Col>
            </Row>
        </Container>
        </div>


        <Container className='contentTitle'>
            <h2>Help Us Deliver Meals For the Member</h2>
        </Container>

        <div className='contentWrapper'>
        <Container>
            <Row>
                <Col lg={12}>

                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h5 style={{fontWeight:"bold",marginBottom:'20px'}}>Meals Plan 1</h5>
                        <h5 >Member name</h5>
                        <h4 style={{margin:"50px 0"}}>this will be the address of member</h4>
                        <div className='reciveWrapper'> 
                        <Button variant='dark' className='reciveButton' >Take Order</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h5 style={{fontWeight:"bold",marginBottom:'20px'}}>Meals Plan 1</h5>
                        <h5 >Member name</h5>
                        <h4 style={{margin:"50px 0"}}>this will be the address of member</h4>
                        <div className='reciveWrapper'> 
                        <Button variant='dark' className='reciveButton' >Take Order</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h5 style={{fontWeight:"bold",marginBottom:'20px'}}>Meals Plan 1</h5>
                        <h5 >Member name</h5>
                        <h4 style={{margin:"50px 0"}}>this will be the address of member</h4>
                        <div className='reciveWrapper'> 
                        <Button variant='dark' className='reciveButton' >Take Order</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h5 style={{fontWeight:"bold",marginBottom:'20px'}}>Meals Plan 1</h5>
                        <h5 >Member name</h5>
                        <h4 style={{margin:"50px 0"}}>this will be the address of member</h4>
                        <div className='reciveWrapper'> 
                        <Button variant='dark' className='reciveButton' >Take Order</Button>
                        </div>
                    </div>
                </Col>
               
            </Row>
        </Container>
        </div>
        </>
    )
}
export default Driver;