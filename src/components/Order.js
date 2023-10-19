import React, { Component } from 'react'
import {PiTrashBold} from "react-icons/pi"
export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img alt=" " src={require("./imgGame/" + this.props.item.imgGame)} />
                <h2>{this.props.item.title} </h2>
                <t>{this.props.item.platform}</t>
                <b>{this.props.item.price}$</b>
                <PiTrashBold className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order