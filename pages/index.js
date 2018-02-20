import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Home from '../components/Home';
import Lugares from '../components/Lugares';
import Add from '../components/Add';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive(tab) {
        this.setState({
            active: tab
        });
    }

    render() {
        let active = this.state.active;
        return(
            <div>
                <div className="container">
                    <Menu click={this.toggleActive} />
                    {
                        active === 1
                        ? <Home />
                        : active === 2
                        ? <Lugares />
                        : <Add />
                    }
                </div>
                <Footer />
                <style jsx>{`
                    .container {
                        width: 70vw;
                        border: 1px solid #000;
                        height: 100vh;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;