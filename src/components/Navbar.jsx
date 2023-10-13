import { Navbar,Nav, Container} from "react-bootstrap";
import { useState,useEffect} from "react";
import logo from '../assets/images/logo.svg'
import NavIcon1 from '../assets/images/nav-icon1.svg'
import NavIcon2 from '../assets/images/nav-icon2.svg'
import NavIcon3 from '../assets/images/nav-icon3.svg'

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    console.log(activeLink)
  }


  return (

    <Navbar expand="lg" className={scrolled && 'scrolled'} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Project</Nav.Link>
          </Nav>


          <span className="navbar-text">
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/irwan-subkhi-pratama-366868292/"><img src={NavIcon1} alt="logo" /></a>
                <a target="_blank" href="https://web.facebook.com/irwansubkhi.pratama"><img src={NavIcon2} alt='logo' /></a>
                <a target="_blank" href="https://www.instagram.com/irwan_subkhi_pratama/"><img src={NavIcon3} alt='logo' /></a>
            </div>
            <Nav >
            <span className="button2"><Nav.Link className="letsConncet" href="#contact" onClick={()=> onUpdateActiveLink('contact')}>Let's Connect</Nav.Link></span>
            </Nav>
            {/* <button className="vvd" >Let's Connect</button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;