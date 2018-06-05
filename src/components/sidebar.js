import React from 'react'

import abacus from '../images/logos/abacus.png'
import fblogo from '../images/logos/fblogo.png'
import PMlogo from '../images/logos/PMlogo.png'
import PTAlogo from '../images/logos/PTAlogo.png'
import snowflake from '../images/logos/snowflake.png'
import thinkUKnow from '../images/logos/thinkUKnow.png'
import twlogo from '../images/logos/twlogo.png'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <a href="https://public.govdelivery.com/accounts/UKDEVONCC/subscriber/new?qsp=UKDEVONCC_4" target="_blank">
                <img src={snowflake} alt="link to sign up for school closure alerts" />
            </a>   
            <p>Click here to sign up with Devon County Council to receive school closure alerts by e-mail.</p>
            <a href="https://pmx.parentmail.co.uk/#core/login" target="_blank">
                <img src={PMlogo} alt="parent mail link" />
            </a>
            <p> See letters, order school meals and pay for trips.</p>
            <a href="https://www.activelearnprimary.co.uk" target="_blank">
                <img src={abacus} alt="active learn primary link" />
            </a>
            <p> Log on Abacus Maths from Active Learn to access your maths homework games!</p>
            <a href="https://www.thinkuknow.co.uk" target="_blank">
                <img src={thinkUKnow} alt="think you know e-safety link" />
            </a>
            <p> Lots of useful information for children, young people, parents, and teachers about staying safe online.</p>
            <a href="https://service.ptasocial.com/register/decoypta" target="_blank">
                <img src={PTAlogo} alt="PTA social link" />
            </a>
            <p> Register or log in to keep up to date with PTA events, and volunteer to help out.</p>
            <a href="https://www.facebook.com/decoy.pri" target="_blank" id="fb">
                <img src={fblogo} alt="facebook link" />
            </a>
            <p> Our Facebook page...</p>
            <a href="https://www.twitter.com/decoypri" target="_blank" id="tw">
                <img src={twlogo} alt="twitter link" />
            </a>
            <p> ...and our Twitter feed.</p>
        </aside>
    )
}

export default Sidebar
