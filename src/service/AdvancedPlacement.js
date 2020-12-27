import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class AdvancedPlacement extends Component {
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
                                                    <h2>Advanced Placement (AP) Classes</h2>
                                                    <p>We keep the pace of world education standards and offer Advanced Placement (AP) program at Sant. Our pupils can take AP as optional classes.  Advanced Placement is a program run by College Board (the makers of the SAT) that allows pupils to take courses right in their high school that can earn them college credit and/or qualify pupils for more advanced classes when they begin college. If pupils get higher scores on AP, it will give them extra advantage to be admitted to the world top universities.</p>
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


export default AdvancedPlacement;