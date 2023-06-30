import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import banner from '../image/mainBanner.jpg'

function Home(){
    return (
        <>
        <div className='bannerWrapper'> 
            <Container>
            <div className="banner">
                <img src={banner} alt=""  style={{objectFit: 'cover',height: '100%'}}/>
            </div>
            <h1>Healty Senior
                <br />
                Meal Delivery
            </h1>
            <div>

            </div>
            </Container>
        </div>
        </>
    )
}
export default Home;