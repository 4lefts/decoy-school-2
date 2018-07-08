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
            <a className="twitter-timeline" href="https://twitter.com/DecoyPri?ref_src=twsrc%5Etfw" dataHeight="300">Tweets by DecoyPri</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <h3>Useful Links:</h3>
            <div className="useful-links">
                <a href="https://public.govdelivery.com/accounts/UKDEVONCC/subscriber/new?qsp=UKDEVONCC_4" target="_blank">
                    <img src={snowflake} alt="link to sign up for school closure alerts" />
                    <span>Click here to sign up with Devon County Council to receive school closure alerts by e-mail.</span>
                </a>   
                <a href="https://pmx.parentmail.co.uk/#core/login" target="_blank">
                    <img src={PMlogo} alt="parent mail link" />
                    <span> See letters, order school meals and pay for trips.</span>
                </a>
                <a href="https://www.activelearnprimary.co.uk" target="_blank">
                    <img src={abacus} alt="active learn primary link" />
                    <span> Log on Abacus Maths from Active Learn to access your maths homework games!</span>
                </a>
                <a href="https://www.thinkuknow.co.uk" target="_blank">
                    <img src={thinkUKnow} alt="think you know e-safety link" />
                    <span> Lots of useful information for children, young people, parents, and teachers about staying safe online.</span>
                </a>
                <a href="https://service.ptasocial.com/register/decoypta" target="_blank">
                    <img src={PTAlogo} alt="PTA social link" />
                    <span> Register or log in to keep up to date with PTA events, and volunteer to help out.</span>
                </a>
                <a href="https://www.facebook.com/decoy.pri" target="_blank" id="fb">
                    <img src={fblogo} alt="facebook link" />
                    <span> Our Facebook page...</span>
                </a>
                <a href="https://www.twitter.com/decoypri" target="_blank" id="tw">
                    <img src={twlogo} alt="twitter link" />
                    <span> ...and our Twitter feed.</span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar
