import React from 'react';
import owner from '../../img/owner.png'
const About = () => {
    return (
        <div>
             <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <img src={owner} className="img-resize img-fluid" alt="" />
          </div>
          <div className="col-md-6 mt-4">
            <h2 className="text-info fw-bold">Know About Our Owner</h2>
            <p className="text-small">
              Our owner is a very dedicative person in the industry. Here we store product from the very first day of founding our company. Our MD sir always look after the company work. Every employ of the company should follow the company role. By following the rules we can make our company better and better.
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;