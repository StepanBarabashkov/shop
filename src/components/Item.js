import React, { Component } from 'react'
import { TbShoppingBagPlus } from "react-icons/tb";

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img alt=" " src={require("./imgGame/" + this.props.item.imgGame)} />
                <h2>{this.props.item.title} </h2>
                <p>{this.props.item.desc} </p>
                <p>{this.props.item.platform}</p>
                <b>{this.props.item.price}$</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><TbShoppingBagPlus/></div>
            </div>
        )
    }
}

export default Item
