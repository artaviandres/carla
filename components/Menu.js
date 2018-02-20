import React from 'react';
import FaHeart from 'react-icons/lib/fa/heart';
import theme from '../style/variables';
import typographies from '../style/typographies';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <div className="anchor_tags">
                    <a className="first" onClick={() => this.props.click(1)}>Home</a>
                    <a onClick={() => this.props.click(2)}>Lugares de inyección</a>
                    <a onClick={() => this.props.click(3)}>Add</a>
                </div>
                <style jsx>{`
                    .container {
                        width: 100vw;
                        height: 50px;
                    }
                    .anchor_tags {
                        line-height: 50px;
                        margin-left: 25%;
                    }
                    a {
                        font-family: ${theme.fonts.regular};
                        cursor: pointer;
                        margin-left: 5%;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .first {
                        margin-left: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default Menu;