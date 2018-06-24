import React from 'react'

import launchIcon from '../images/icons/baseline-launch-24px.svg'

export default class InfoBtn extends React.Component {
    render() {
        return <a className={`info-btn`} href={this.props.href}>{this.props.text}<img className="launch-icon" src={launchIcon} alt="launch button" /></a>
    }
}
