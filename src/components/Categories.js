import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'for Nintendo Switch',
                    name: 'Nintendo Switch games'
                },
                {
                    key: 'for Xbox Series X|S, Xbox One',
                    name: 'Xbox games'
                },
                {
                    key: 'for PlayStation 5, PlayStation 4',
                    name: 'Playstation 4 and 5 games'
                },
                {
                    key: 'for PlayStation 5',
                    name: 'Playstation 5 games'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories