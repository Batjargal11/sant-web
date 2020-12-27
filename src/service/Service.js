import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import Data from "../Data.json";
class Services extends Component{
    render(){

        let Datalist = Data.Services.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="Service Grid" />
                        </a>
                        </div>
                        <div className="icon">
                        <i className={val.iconClass} />
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceSubtitle}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>

                <NavBar/>

                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Сургалт</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Нүүр хуудас</a></li>
                                        <li>Сургалт</li>
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
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <BrandLogoSlider background = "grey-bg" />

                <Footer/>

                <MobileMenu/>

            </div>
        )
    }
}

export default Services;