
import NavIcon1 from '../assets/images/nav-icon1.svg'
import NavIcon2 from '../assets/images/nav-icon2.svg'
import NavIcon3 from '../assets/images/nav-icon3.svg'
import logo from '../assets/images/logo.svg'
import { Container,Row,Col } from "react-bootstrap";



export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>

                    <Col size={12} sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a target='_blank' href="https://www.linkedin.com/in/irwan-subkhi-pratama-366868292/"><img src={NavIcon1} /></a>
                            <a target='_blank' href="https://web.facebook.com/irwansubkhi.pratama"><img src={NavIcon2} /></a>
                            <a target='_blank' href="https://www.instagram.com/irwan_subkhi_pratama/"><img src={NavIcon3} /></a>
                        </div>
                        <p>Last Updated: Saturday, 30 September 20223</p>
                        <p>CopyRight 2023. By Irwan with React</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
