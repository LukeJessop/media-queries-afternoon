import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    constructor(){
        super()
        this.state={
            visible: false
        }
    }

    toggleVisFunc = () => {
        this.setState((prevstate) => {
            console.log('hello')
            return{
                visible: !prevstate.visible
            }
        })
    }


    render(){
        return(
            <div className="wholeHeader">
                <div className={`titlebar`}>
                    <h1 className="title">Start Bootstrap</h1>
                    <div className="menubar">
                        <button className="menuitem scroll">services</button>
                        <button className="menuitem scroll">portfolio</button>
                        <button className="menuitem scroll">about</button>
                        <button className="menuitem scroll">team</button>
                        <button className="menuitem scroll">contact</button>
                        <button onClick={this.toggleVisFunc} className="button">Menu</button>
                    </div>
                </div>
                <div className={`dropdown ${this.state.visible ? "show" : ""}`}>
                    <button className="dropdownItem scroll">services</button>
                    <button className="dropdownItem scroll" onClick={console.log("hello")}>portfolio</button>
                    <button className="dropdownItem scroll">about</button>
                    <button className="dropdownItem scroll">team</button>
                    <button className="dropdownItem scroll">contact</button>
                </div>
            </div>
        )
    }
}

export default Header