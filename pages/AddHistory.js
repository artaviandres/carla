import React from 'react';
import store from '../store';
import withRedux from 'next-redux-wrapper';
import Menu from '../components/Menu';
import Add from '../components/Add';
import Footer from '../components/Footer';

class AddHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Menu />
                    <Add />
                </div>
                <Footer />
            <style jsx>{`
                .container {
                    width: 70vw;
                    height: 100vh;
                    margin: 0 auto;
                }
            `}</style>
            </div>
        );
    }
}

export default withRedux(store, null, null)(AddHistory)