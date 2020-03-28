import React from 'react';

function ContactCard(props){

	console.log(props.contact.imgUrl); 

	return(
		<div>
			<div className="contact-card">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
		</div>
	);
}
export default ContactCard;

