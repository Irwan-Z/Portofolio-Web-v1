import { Container,Nav,Row,Col,Tab } from "react-bootstrap";
import FrontEnd from './projectdoc/FrontEnd'
import UIUX from './projectdoc/UIUX'
import Design from './projectdoc/Desain'
import Tab1 from './ProjectData/Tab1'
import colorSharp2 from '../assets/images/color-sharp2.png'
import ProjectImage1 from '../assets/images/project-img1.png'
import ProjectImage2 from '../assets/images/project-img2.png'
import ProjectImage3 from '../assets/images/project-img3.png'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project (){

    // const projects = [
    //     {
    //       title: "Business Startup",
    //       description: "Design & Development",
    //       imgUrl: ProjectImage1,
    //     },
    //     {
    //       title: "Business Startup",
    //       description: "Design & Development",
    //       imgUrl: ProjectImage2,
    //     },
    //     {
    //       title: "Business Startup",
    //       description: "Design & Development",
    //       imgUrl: ProjectImage3,
    //     },
    //   ];
    
      useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div data-aos="fade-in">
                            <h2>My Project</h2>
                            <p>below is a simple project that I have been working on</p>
                        </div>
                       
                            <Tab.Container id="project-tabs" defaultActiveKey="first">
                                <div data-aos="zoom-in-up" data-aos-duration="1000">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">FrontEnd Developer</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">UI UX Designer</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Graphic Designer</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                           {
                                            FrontEnd.map((project,index) => {
                                                return (<Tab1 key={index}{...project}/>)
                                            })
                                           }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Row>
                                           {
                                            UIUX.map((project,index) => {
                                                return (<Tab1 key={index}{...project}/>)
                                            })
                                           }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Row>
                                           {
                                            Design.map((project,index) => {
                                                return (<Tab1 key={index}{...project}/>)
                                            })
                                           }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-img-project" />
        </section>
    )
}

export default Project