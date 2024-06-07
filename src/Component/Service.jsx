import React, { useEffect, useState } from 'react';
import servicesData from '../assets/data/servicesData.json';

// Import images statically
import service1 from '../assets/images/service1.png';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Set the imported JSON data as the state
    setServices(servicesData);
  }, []);

  return (
    <>
      <section className="index-service-bg">
        <div className="container mt">
          <h2 className="h3 mb" style={{ textAlign: 'center' }}>Services we offer ?</h2>
          <div className="index-service">
            {services.length > 0 ? (
              services.map(service => (
                <div key={service.id} className="index-service__grid">
                  <div>
                    <img src={service1} alt={service.title} />
                  </div>
                  <div className="index-service__grid-title">
                    <h4 className="h6">{service.title}</h4>
                    <p className="f">{service.description}</p>
                    <button className="f">Book free trial</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading services...</p>
            )}
          </div>
        </div>
      </section>

      <section className="index-cod mt">
        <h3 className="h5">Memory Power is the top coding learning platform for young minds:</h3>
        <button>Book A Trial</button>
      </section>
    </>
  );
}

export default Service;
