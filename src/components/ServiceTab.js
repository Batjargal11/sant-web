import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Data from "../Data.json";
class ServiceTabExample extends Component{

    render(){
        
        /* service tab menu */

        let serviceTabMenuDatalist = Data.ServiceTabMenu.map((val, i)=>{
            return(
                <Tab key={i}>  <span className="icon"><i className={val.iconName} /></span> <span className="text">{val.tabMenuName}</span></Tab>
            )
        });
        let serviceTabContentDatalist = Data.ServiceTabContent.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">SEE MORE</a>
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div>

                <div className="service-tab-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Сургалт<span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ServiceTabExample;