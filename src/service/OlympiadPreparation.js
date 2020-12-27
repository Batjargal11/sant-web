import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class OlympiadPreparation extends Component {
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
                                                    <h2>Olympaid Preparation Classes</h2>
                                                    <p>Everyone at Sant is always proud of our champions of intellectual Olympiads. Many of our pupils have extra classes of Olympiad preparation in  mathematics, physics, biology, chemistry, history, Mongolian language and script, English, drawing and art. </p>
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


export default OlympiadPreparation;