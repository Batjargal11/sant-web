import React, { Component } from 'react';
import Data from "../../Data.json";
class Sidebar extends Component{
    render(){

        let Datalist = Data.Sidebar.map((val, i)=>{
            return(
                <li key={i}><a href={val.sidebarListLink}><i className={val.sidebarListIcon} />{val.sidebarListText}</a></li>
            )
        })

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Learning</h3>
                        <ul className="sidebar-list">
                            {Datalist}
                        </ul>
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Download brochure</h3>
                        <ul className="sidebar-list">
                            <li><a href="/"><i className="fa fa-file-pdf-o" />Brochures.PDF</a></li>
                            <li><a href="/"><i className="fa fa-file-word-o" />Brochures.DOC</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;