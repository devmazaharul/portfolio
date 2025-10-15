import React from 'react';
import Commoncard from './Commoncard';
import Servicecard from './Servicecard';

const Services = () => {
    return (
        <Commoncard title="What I Offer?" name="service" tag="service" >
            <p className="text-gray-400 md:w-7/8">
                I provide tailored web solutions to help you achieve your goals — from strategy to
                execution, with quality and reliability.
            </p>

            <Servicecard />
        </Commoncard>
    );
};

export default Services;
