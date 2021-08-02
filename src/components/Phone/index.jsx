import React from 'react'

const Phone = (props) => (
    <a className="btn btn-primary mx-2" href={`callto:${props.phone}`}>Appeler</a>
);

export default Phone;