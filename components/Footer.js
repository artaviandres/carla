import React from 'react';
import FaHeart from 'react-icons/lib/fa/heart';
import theme from '../style/variables';
import typographies from '../style/typographies';

class Footer extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <p>Made with SOOOO much <FaHeart color={'red'} size={20} /> by your boyfriend</p>
                </div>
                <style jsx>{`
                    ${typographies}
                    .container {
                        height: 50px;
                        width: 100vw;
                        background-color: rgba(255, 255, 255, 0.8);
                        position: absolute;
                        bottom: 0;
                    }
                    p {
                        margin: 15px auto 0 auto;
                        width: 360px;
                        color: black;
                        font-family: ${theme.fonts.regular};
                    }
                `}</style>
            </div>
        );
    }
}

export default Footer;