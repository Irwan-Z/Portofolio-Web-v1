import { useEffect, useState } from "react"
import { Row, Col, Alert } from "react-bootstrap"

function Newsletter ({ onValidation, status, message }) {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if ( status === 'success') clearfield();
    },[status])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidation({
            EMAIL: email
        })
    }

    const clearfield = () => {
        setEmail('');
    }
    
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subcribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email box">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Newsletter