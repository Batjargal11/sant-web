import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class ExtraCurricular extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Service Details</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Services</a></li>
                                        <li>Service Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-wrapper section-space--inner--120">
                    <div className="service-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12 order-1 order-lg-2">
                                    <div className="service-details">
                                        <ServiceGallery />


                                        <div className="content section-space--top--30">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h3>Sant Summer School</h3>
                                                    <p>Every summer pupils from IVY league universities are invited to Sant School to organize our Sant Summer School to help our pupils with their English, sciences, public speaking and debating skills. They also help our pupils to prepare for SAT and university admissions. We are grateful to our talented and dedicated student mentors from Harvard Chicago, George Town, and Brown Universities. </p>
                                                    <h3>Debating Club</h3>
                                                    <p>Our pupils who build a passion in debating run our Debating Club and we are devoted to the club and its activities by providing a debating coach, space and time. Our Debating Club has regular debates every Tuesday and Thursday. The club members get the broad intellectual benefits gained from their involvement, including gaining broad, multi-faceted knowledge, increasing their confidence, poise, and self-esteem, improving their critical thinking and analytical thinking, team work, communication, public speaking, research, and information processing skills, and most importantly attitude to be open to diverse ideas and perspectives, respect other people’s point of views, and express their counterarguments without offending others’ views deploying rational, reasoned arguments and compelling evidence in action.</p>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Trips</h3>
                                                    <li>
                                                        <ul>
                                                            In order to help with our pupils’ career aspirations and choices, we organize tours at companies, through which pupils get to know more about particular jobs.
                                                        </ul>
                                                        <ul>
                                                            Every September, our pupils go to Nairamdal Camp to enjoy the day of fun in the nature.
                                                        </ul>
                                                        <ul>
                                                        Our pupils are invited to the Government Building to attend conferences for pupils.  
                                                        </ul>
                                                    </li>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Sports</h3>
                                                    <p>Sant school organizes its annual basketball tournament every March.</p>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Cultural Events</h3>
                                                    <li>
                                                        <ul>
                                                        We organize ‘Traditional Costume Day’ to celebrate the Mongolian traditional Lunar New Year. On this day our pupils wear deel, a traditional costume at school.
                                                        </ul>
                                                        <ul>
                                                        We have a strong partnership with Mongolian Opera and Ballet theatre and Drama Theatre and our pupils see opera, ballet and drama every term.
                                                        </ul>
                                                        <ul>
                                                        We celebrate Sant New Year in September.
                                                        </ul>
                                                        <ul>
                                                        Our pupils organize Teachers’ Day to express their gratitude to their teachers.
                                                        </ul>
                                                        <ul>
                                                        Our pupils perform their artistic talents in ‘Sant Talent Show’.
                                                        </ul>
                                                    </li>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Sant Lecture Series</h3>
                                                    <p>We invite intellectuals to our Sant Lecture Series and they motivate and inspire our pupils. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 order-2 order-lg-1">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BrandLogoSlider background="grey-bg" />

                <Footer />

                <MobileMenu />

            </div>
        )
    }
}


export default ExtraCurricular;