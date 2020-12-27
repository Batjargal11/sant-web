import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import data from "../Data.json";
class Projects extends Component {
  render() {
    let Datalist = data.Projects.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`assets/img/projects/${val.img}`}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.projectTitle}
                </a>
              </h3>
              <p className="subtitle">{val.projectSubtitle}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <NavBar />

        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Төгсөгчид</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Нүүр Хуудас</a>
                    </li>
                    <li>Төгсөгчид</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section section-space--inner--120">
          <div className="container">
            <div className="about-wrapper row">
              <div className="col-sm-6 col-12 order-1 order-lg-2">
                <div className="about-image about-image-1">
                  <img src="assets/img/about/about1.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-6 col-12 order-2 order-lg-3">
                <div className="about-image about-image-2">
                  <img src="assets/img/about/about2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-12 order-3 order-lg-1">
                <div className="about-content about-content-1">
                  <h1>
                    <span>Graduate destination</span>
                  </h1>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are proud of our
                    alumni who are admitted to international and national top
                    universities and colleges and make their great contributions
                    to their academic communities and beyond.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span st>
                      Sant pupils have been accepted to the following
                      universities and colleges since its establishment:
                    </span>
                  </p>
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIT, Stanford, Duke,
                    Michigan, Wisconsin Madison, Rochester Institute of
                    Technology, Albion, Brown University, Dartmouth college,
                    University of Massechutses, University of Washington,
                    Virginia University, Lehigh University, Wheaton college,
                    University of Tokyo, Tokyo institute of Technology, Seoul
                    National University, HKU, Australian National University,
                    Purdue University, University of Edinburgh, NUM, MUST, GMIT,
                    Institute of Finance and Economics, Berea College, Denver,
                    NYU, Albion College, Syracuse University, NUS
                  </b>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-4">
                <div className="about-content about-content-2">
                  <h1>
                    <span>Alumni Testimonies</span>
                  </h1>
                  <p>
                    Sant Alumni at MIT: Six of our high achieving pupils have
                    been admitted to MIT since 2012 including two girls in the
                    last two years, L.Oyuntugs in 2017 and Kh. Tserenchimeg in
                    2016. When they studied at Sant, they participated in
                    international Olympiads and won gold, silver and bronze
                    medals. M.Battushig was our first graduate admitted to MIT
                    in 2012. When he studied at Sant, he participated in the MIT
                    online course and his course performance was ranked #1 out
                    of 160,000 participants from all around the world.
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper section-space--inner--120">
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
              <div className="row section-space--top--60">
                <div className="col">
                  <ul className="page-pagination">
                    <li>
                      <a href="/">
                        <i className="fa fa-angle-left" /> Prev
                      </a>
                    </li>
                    <li className="active">
                      <a href="/">01</a>
                    </li>
                    <li>
                      <a href="/">02</a>
                    </li>
                    <li>
                      <a href="/">03</a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-angle-right" /> Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BrandLogoSlider background="grey-bg" />

        <Footer />

        <MobileMenu />
      </div>
    );
  }
}

export default Projects;
