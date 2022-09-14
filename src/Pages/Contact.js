import ContactForm from "../Components/Contact/ContactForm";
import TextContent from "../Components/Contact/TextContent";
import '../Components/Contact/ContactStyles.css'

function Contact() {
    return (
        <div className="container">
            <h1 className="title is-flex is-justify-content-flex-start">¡Contacte con nosotros!</h1>
            <div className="columns is-variable is-1-mobile is-2-tablet">
                <TextContent />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact