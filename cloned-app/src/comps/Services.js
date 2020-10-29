import React, {Component} from 'react'
import './Services.css'
class Services extends Component {
    render(){
        return(
            <div className="sectionContainer">
                <div>
                    <h1 className="services">Services</h1>
                    <div>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="serviceItems">
                    <div><div className="commerceImg"></div><h3>E-Commerce</h3><p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                    <div><div className="responsiveDesignImg"></div><h3>Responsive Design</h3><p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                    <div><div className="webSecurityImg"></div><h3>Web Security</h3><p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                </div>
            </div>  
        )
    }
}

export default Services