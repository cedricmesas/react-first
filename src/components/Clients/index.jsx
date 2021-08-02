import React from 'react'
import faker from 'faker'
import Client from 'components/Client';

const Clients = () => {
   const clientsList = Array.from({ length: 100 }, () => ({
       firstName: faker.name.firstName(),
       lastName: faker.name.lastName(),
       job: faker.name.jobTitle(),
       phone: faker.phone.phoneNumber(),
       email: faker.internet.email(),
       photo: faker.image.avatar(),
   })); 

   return (
       <div className="container">
            <ul className="row" style={{listStyle: "none"}}>
                {clientsList.map((clientData) => (
                    <Client data={clientData} key={clientData.id} />
                ))}
            </ul>
       </div>
   );
};


export default Clients;