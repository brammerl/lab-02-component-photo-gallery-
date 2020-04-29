import React, { Component } from 'react'


export default class ImageItem extends Component {
    render() {
        return <li>
                    <h2>{this.props.organism.title}</h2>
                    <div>
                        <img
                            alt={this.props.organism.title}
                            src={this.props.organism.url}
                        />
                    </div>
                    <div className='description'>
                        <p>{this.props.organism.description}</p>
                        <p>Horn Count: {this.props.organism.horns}</p>
                    </div>
        </li>
    }
}
