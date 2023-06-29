import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../image/rothy.png';
import food from '../image/pancake.jpg';
import { Button } from 'react-bootstrap';


function Member(){
    return(
        <>
        <div style={{backgroundColor:"rgb(255, 235, 214)"}}>
        <Container className='userInfoContainer'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <p style={{textAlign:"right",margin:"15px"}}>Edit</p>
                </Col>
                <Col lg={4} md={12} sm={12} className="userPic">
                <img src={pic} alt="Logo" height={"150px"}/>
                <div>
                    <h5>Member Name</h5>
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
                    <p>Member</p>
                </div>
                <div className='userInfo'>
                    <h5>Meal plan active</h5>
                    <p>Meal plan 1</p>
                </div>
                </Col>
            </Row>
        </Container>
        </div>

        <Container className='contentTitle'>
            <h2>Your Meal Schedule</h2>
        </Container>

        <div className='contentWrapper'>
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <div className='cardStatus'>
                            <p>Recived</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <Button variant='dark' className='reciveButton' >Recive</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <div className='cardStatus'>
                            <p>Pending</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <div className='cardStatus'>
                            <p>Pending</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <div className='cardStatus'>
                            <p>Pending</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="cardWrapper">
                    <div className='card'>
                        <h6 style={{fontWeight:"bold"}}>1 Jan</h6>
                        <h5>Monday</h5>
                        <img src={food} alt="Logo" />
                        <h4>Lemon Poppy Seed Pancakes with Sausage and Berry Compote</h4>
                        <div className='reciveWrapper'> 
                        <div className='cardStatus'>
                            <p>Pending</p>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
 export default Member;