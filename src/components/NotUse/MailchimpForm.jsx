import MailchimpSubscribe from "react-mailchimp-subscribe"
import Newsletter from "./Newsletter";

function MailchimpForm(){
    const postUrl = `${import.meta.REACT_APP_MAILCHIMP_URL}?u=${import.meta.REACT_APP_MAILCHIMP_U}&id=${import.meta.REACT_APP_MAILCHIMP_ID}`;
                // kalau di CRA (import.meta) nya di ganti process 
    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => {
                    <Newsletter
                        status={status}
                        message={message}
                        onValidation={FormData => subscribe(FormData)}
                    />
                }}
            />
        </>
    )
}

export default MailchimpForm