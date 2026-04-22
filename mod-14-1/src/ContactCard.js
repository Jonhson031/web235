export default function ContactCard(props) {
    return (
        <div className="contact-card">
            <h3>{props.contact.name}</h3>
            <p>Show: {props.contact.show}</p>
            <p>Network: {props.contact.network}</p>
        </div>
    )
}