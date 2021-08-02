import React from 'react'

const Email = (props) => (
    <a className="btn btn-primary" href={`mailto: ${props.email}`}>Envoyer un email</a>
);

export default Email;