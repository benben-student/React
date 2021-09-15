import React,{Component} from 'react'
import './Hello.css'   //必须加.css

export default class Hello extends Component{
    render(){
        return <h2 className="title">
            Hello,React!
        </h2>
    }
}