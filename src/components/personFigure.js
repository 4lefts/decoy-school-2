import React from 'react'

export default class personFigure extends React.Component{
    render(){
        return(
            <figure>
                <img src={this.props.source} alt={this.props.caption}/>
                <figcaption>{this.props.caption}</figcaption>
            </figure>
        )
    }
}