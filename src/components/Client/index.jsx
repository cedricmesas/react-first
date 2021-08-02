import React from 'react'
import Email from 'components/Email'
import Phone from 'components/Phone'

const Client = ({ data }) => {
    const { firstName , lastName, job, phone, email, photo } = data;

    return (
        <li className="Client col-4 my-3">
            <div className="card" style={{width: "20rem"}}>
                <img className="card-img-top" src={photo} alt={firstName} />
                <div className="card-body">
                    <h3 className="card-title">{firstName} {lastName}</h3>
                    <h5>{job}</h5>
                    <Email email={email} />
                    <Phone phone={phone} />
                </div>
            </div>
        </li>
    );
};

export default Client;