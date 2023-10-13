import { useEffect } from "react"
import { Container,Col,Row } from "react-bootstrap"
import containing from '../assets/images/contact-img.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact(){

    
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section className="contact" id='contact'>
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="2000">
                            <img src={containing}  />
                        </div>
                    </Col>
                    <Col md={6}>
                    <div 
                    data-aos="fade-up" 
                    data-aos-duration="2000">
                        <h2>Get in touch</h2>
                        <form action="https://formsubmit.co/wanz292929@gmail.com" method="POST">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" required name="firstName" placeholder="First Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName"  placeholder="Last Name"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email Address"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="tel" minLength={6} placeholder="Phone Number" />
                                </Col>
                                <Col className="px-1" sm={12}>
                                    <textarea name="message" placeholder="Message"/>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact