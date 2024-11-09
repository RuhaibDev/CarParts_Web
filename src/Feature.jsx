import React from 'react'
import './Feature.css'
import Car from './car.png'
import { MdVerified } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
const Feature = () => {
    return (
        <div id="services" className='feature'>
            <div className="feature-i d-flex justify-between m-r-50 m-t-50 m-b-50 align-start g-40">
                <img src={Car} alt="" />
                <div className="content d-flex flex-column g-40">
                    <h1 className='f-w-700 museo f-s-2'>Why Customers <span className='b-color f-w-700 museo'>Choose Us</span> for Quality Car Parts <span className='b-color f-w-700 museo'>?</span></h1>
                    <div className="feature-div d-flex g-25 flex-column">
                        <div className="feature-d d-flex g-20">
                            <div className="feature-svg bg-blue icon-circle">
                                <MdVerified color='white' size='3rem'></MdVerified>
                            </div>
                            <div className="feature-content w-70">
                                <h2 className='f-w-600 museo'>Quality Parts</h2>
                                <p className='f-w-400'>At our core is a commitment to quality. We source only the finest parts, carefully selected and rigorously inspected to ensure peak performance. Your vehicle deserves the best, and we deliver just that.</p>
                            </div>
                        </div>
                        <div className="feature-d d-flex g-20">
                            <div className="feature-svg bg-blue icon-circle">
                                <BiDollar color='white' size='3rem'></BiDollar>
                            </div>
                            <div className="feature-content w-70">
                                <h2 className='f-w-600 museo'>Competitive Pricing</h2>
                                <p className='f-w-400'>Get access to premium parts without the premium price tag. We offer competitive rates across a vast selection of parts, making it easy to find what you need within your budget. Quality and affordability, all in one place.</p>
                            </div>
                        </div>
                        <div className="feature-d d-flex  g-20">
                            <div className="feature-svg bg-blue icon-circle">
                                <RiTruckLine color='white' size='3rem'></RiTruckLine>
                            </div>
                            <div className="feature-content w-70">
                                <h2 className='f-w-600 museo'>Easy Pickup and Delivery</h2>
                                <p className='f-w-400'>Convenience is key – whether you prefer to pick up in person or have parts delivered to your door, we work around your schedule. Our flexible service ensures a seamless experience from start to finish.</p>
                            </div>
                        </div>
                        <div className="feature-d d-flex  g-20">
                            <div className="feature-svg bg-blue icon-circle">
                                <FaHandshake color='white' size='3rem'></FaHandshake>
                            </div>
                            <div className="feature-content w-70 ">
                                <h2 className='f-w-600 museo'>Transparent Service</h2>
                                <p className='f-w-400'>Honesty and transparency drive everything we do. With clear, upfront pricing and no hidden fees, you can trust that you’re getting fair service every time. We believe in building trust, one transaction at a time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature