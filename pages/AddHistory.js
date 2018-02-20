import React from 'react';
import firebase from 'firebase'
import Menu from '../components/Menu';
import Add from '../components/Add';
import Footer from '../components/Footer';

class AddHistory extends React.Component {
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
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Menu />
                    <Add db={firebase} />
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

export default AddHistory;