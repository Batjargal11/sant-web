import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class ServiceDetailsLeftSidebar extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Learning</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Learning</li>
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
                                                    <h2>Core Curriculum</h2>
                                                    <p>Sant School follows the Core Curriculum approved by the Ministry of Education, Culture, Science and Sports of Mongolia in our primary, secondary and upper secondary grades. Besides the Core Curriculum, we have been also offering Advanced Placement (AP) classes as optional classes for our upper secondary grade pupils. Moreover, we offer classes such as Olympiad and international exam preparation classes to our pupils. </p>
                                                    <h2>What is the Core Curriculum?</h2>
                                                    <p>Under the framework of education quality reform implemented by the Mongolian Government, the Core Curriculum (1-12 grades) has been taught throughout the county since 2014 to enable each child reach their full potential.  The advantage of this core curriculum is to prioritize the development of each child, reflecting the best practices of the international curriculum. </p>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Primary level: Grades 1-5</h3>
                                                    <p>Key learning objectives of the core curriculum in primary education are to enable pupils to develop basic skills of mother tongue, key study skills and competencies including analytic, problem solving, social and communication skills and information technology skills. Moreover, the core curriculum also focuses on life skills and attitude including ability to study independently and to maintain healthy and hygiene lifestyle and demonstrate righteous treatment to all beings and the nature.</p>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Secondary level: Grades 6-9</h3>
                                                    <p>To enable pupils to acquire foundational knowledge and skills of sciences, and  life skills as well as study skills of working independently and creatively; to acquire knowledge and understanding of laws, principles and theories of particular sciences; to learn to communicate and express her/himself applying and integrating scientific knowledge obtained; to learn to solve problems in real life, applying knowledge and skills; and to learn to be determined and committed to their learning. </p>
                                                </div>
                                                <div className="col-12 section-space--top--30">
                                                    <h3>Upper secondary level (high school) Grades 10-12</h3>
                                                    <p>By providing optional, flexible and more career-focused curriculum, to enable pupils to develop skills of problem solving and get orientation to their interested professions including abilities to hypothesize, problematize, analyze, summarize, create new ideas, exchange and share ideas with others, reflect, process and apply information. </p>
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


export default ServiceDetailsLeftSidebar;