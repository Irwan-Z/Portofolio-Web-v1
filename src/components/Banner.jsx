import { Container,Row,Col,Nav } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerimg from '../assets/images/header-img.svg'
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';



function Banner(){
    const listSkills = ['FrontEnd Developer', 'UI UX Designer', 'Graphic Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [isdelete, setisDelete] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick()
        }, delta)
            
        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % listSkills.length
        let fullText = listSkills[i]
        let updateText = isdelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(isdelete){
            setDelta(prevDelta => prevDelta / 2 )
        }

        if(!isdelete && updateText === fullText){
            setisDelete(true);
            setDelta(period)
        }else if(isdelete && updateText === ''){
            setisDelete(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        >
                        <span className="tagline">Welcome to my Portofolio</span>
                        <h1>{"Hello Everyone i'm a "}<span>{text}</span></h1>
                        <p>Hi, my name is Irwan Subkhi Pratama who is focusing on FrontEnd Developer, I am interested in React and this is my first website. Besides FrontEnd I am very interested in visual fields, such as UI UX Design and Graphic Design.</p>                              
                        <Nav >
                        <span className="areaButton">
                        <span className="buttonBanner"><Nav.Link className="lets-conncet" href="#contact" onClick={()=> onUpdateActiveLink('contact')}>Let's Connect<ArrowRightCircle size={25} /></Nav.Link></span>
                        </span>
                        </Nav>
                        {/* <button onClick={()=>console.log('connect')}>let's Connect<ArrowRightCircle size={25} /></button> */}
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                    <div
                     data-aos="fade-up-left"
                     data-aos-duration="2000">
                        <img src={headerimg} alt="Header image" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner