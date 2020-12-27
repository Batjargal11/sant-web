import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import Data from "../Data.json";
class TestimonialSlider extends Component{
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            effect: 'fade',
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            renderPagenation: () => (
                <div className="swiper-pagination"></div>
              ),
        }

        let DataList = Data.TestimonialSlider.map((val, i)=>{
            return(
                <div className="swiper-slide testimonial-slider__single-slide" key={i}>
                    <div className="author">
                        <div className="author__image">
                        <img src={`assets/img/testimonial/${val.testimonialImage}`} alt="" />
                        </div>
                        <div className="author__details">
                        <h4 className="name">{val.testimonialName}</h4>
                        <div className="designation">{val.testimonialDesignation}</div>
                        </div>
                    </div>
                    <div className="content">
                        {val.testimonialText}
                    </div>
                </div>
            )
        });
        
        return(
            <div>
                <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="testimonial-slider">
                        <div className="testimonial-slider__container-area">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        
            </div>
        )
    }
}

export default TestimonialSlider;