import React from 'react'

export default class InfoBtn extends React.Component {
    render() {
        return <a className={`info-btn`} href={this.props.href}>{this.props.text}</a>
    }
}

{/* <div className={`info-btn`}>
    <a href={this.props.href}>{this.props.text}</a>
</div> */}