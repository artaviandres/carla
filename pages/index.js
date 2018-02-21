import React from 'react';
import firebase from 'firebase';
import { Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Home from '../components/Home';

class Index extends React.Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyBd0bAHhH0fYh6-fEtrBnDeJSjImamh_ho",
            authDomain: "carla-608eb.firebaseapp.com",
            databaseURL: "https://carla-608eb.firebaseio.com",
            projectId: "carla-608eb",
            storageBucket: "carla-608eb.appspot.com",
            messagingSenderId: "373900873578"
          };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.state = {
            active: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(status) {
        this.setState({
            active: status
        });
    }

    render() {
        return(
            <div>
                <div className="container">
                    <Menu />
                    <a onClick={() => this.toggleModal(true)}>add new entry</a>
                    <Home db={firebase} />
                    {
                        this.state.active === true
                        ? <Modal show={this.state.active} onHide={this.toggleModal(false)}>
                            <Modal.Header closebutton>
                                <Modal.Title>Modal Heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>Text in a modal</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={() => this.toggleModal(false)}>close</button>
                            </Modal.Footer>
                        </Modal>
                        : null
                    }
                </div>
                <Footer />
                <style jsx>{`
                    a {
                        cursor: pointer;
                    }
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