import React from 'react'
import Hero from './Hero';
import Brokerage from './Brokerage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Charges from './Charges';

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        <Charges/>
        </>
     );
}

export default PricingPage;