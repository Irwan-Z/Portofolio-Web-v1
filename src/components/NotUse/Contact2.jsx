import { useState } from "react"
import { Container,Col,Row } from "react-bootstrap"
import containing from '../assets/images/contact-img.svg'

function Contact(){

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        messsage: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormDetails = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handlerSubmit = async(e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content=Type": "Appplication/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200){
            setStatus({ success: true, message: 'Message sent succesfully'});
        }else{
            setStatus({ success: false, message: 'something went wrong, please try again later'});
        }
    };


    return(
        <section className="contact" id='contact'>
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={containing}  />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handlerSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormDetails('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormDetails('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormDetails('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormDetails('phone', e.target.value)} />
                                </Col>
                                <Col >
                                    <textarea  value={formDetails.messsage} placeholder="Message" onChange={(e) => onFormDetails('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.messsage &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.messsage}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact