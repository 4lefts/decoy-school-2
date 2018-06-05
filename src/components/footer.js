import React from 'react'

export default class Footer extends React.Component {
    render(){
        const date = new Date()
        const year = date.getFullYear()
        const footerImgs = this.props.logoURLs.map(url => <img key={url} src={`${url}`}/>)
        return(
            <footer>
                <div className="container">
                    {footerImgs}
                </div>
                <div className="footer-outer">
                    <div className="container">
                        Deer Park Road, Newton Abbot, TQ12 1DH<br /><a href="tel:+441626353282"> 01626 353 282</a> &mdash; <a href="mailto:admin@decoyschool.co.uk">admin@decoyschool.co.uk</a><br />&copy; Decoy School, {year}.
                    </div>
                </div>
            </footer>
        ) 
    }
}

