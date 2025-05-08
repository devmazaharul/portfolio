import React from 'react';
import Commoncard from './Commoncard';
import Servicecard from './Servicecard';

const Services = () => {
  return (
    <Commoncard title='What I Offer?' name='service' tag='service'>
      <p className='text-gray-500'>I offer custom solutions designed specifically for your goals. Whether you need expert guidance, innovative ideas, or dependable execution, my services are built to deliver meaningful results that drive real impact.</p>

      <Servicecard/>
    </Commoncard>
  );
}

export default Services;
