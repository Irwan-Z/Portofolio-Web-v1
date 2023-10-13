import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";

import skill1 from '../assets/images/meter1.svg'
import skill2 from '../assets/images/meter2.svg'
import skill3 from '../assets/images/meter3.svg'
import colorSharp from '../assets/images/color-sharp.png'

import html from '../assets/images/skill/html5.svg'
import css from '../assets/images/skill/css3.svg'
import sass from '../assets/images/skill/sass.svg'
import bootstrap from '../assets/images/skill/bootstrap.svg'
import javascript from '../assets/images/skill/javscript.svg'
import react from '../assets/images/skill/react.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

function Skills()  {
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

      
  useEffect(() => {
    AOS.init();
  }, [])

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="2000">
                        <div className="skill-kotak">
                            <h2>Skill Set</h2>
                            <p>Skills I have learnt and used frequently for my projects over the past 6 months</p>
                            <br /><br />
                            <Carousel responsive={responsive} className="skill-slider">
                                <div className="item">
                                    <img src={html} alt="image-skill-set" />
                                    <h5>Html</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="image-skill-set" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={sass} alt="image-skill-set" />
                                    <h5>SASS</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="image-skill-set" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="image-skill-set" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img className="react-icon" src={react} alt="image-skill-set" />
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-skill" src={colorSharp} alt="bg" />
        </section>
    )
}

export default Skills