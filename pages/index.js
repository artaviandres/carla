import React from 'react';
import withRedux from 'next-redux-wrapper';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Home from '../components/Home';
import store from '../store';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        if(this.props.entries && this.props.entries.length !== 0) {
            this.setState({
                entries: this.props.entries
            });
        }
    }

    render() {
        return(
            <div>
                <div className="container">
                    <Menu />
                    <Home entries={this.state.entries} />
                </div>
                <Footer />
                <style jsx>{`
                    a {
                        cursor: pointer;
                    }
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

const mapStateToProps = entries => entries;

export default withRedux(store, mapStateToProps)(Index);