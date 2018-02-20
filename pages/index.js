import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

class Index extends React.Component {
    render() {
        return(
            <div>
                <Menu />
                <p>hey</p>
                <Footer />
            </div>
        );
    }
}

export default Index;