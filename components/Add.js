import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addEntry } from '../actions';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: '',
            location: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
    }

    onSubmit(event) {
        if(this.state.location !== '' && this.state.date !== '') {
            this.props.addEntry(this.state.date, this.state.location);
        }
        else {
            alert("empty field!");
        }
    }

    changeDate(event) {
        event.preventDefault();
        this.setState({
            date: event.target.value
        });
    }

    changeLocation(event) {
        event.preventDefault();
        this.setState({
            location: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <input type="date" onChange={this.changeDate} />
                    <input type="number" onChange={this.changeLocation} />
                    <button onClick={() => this.onSubmit()}>submit</button>
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const bindFunction = {
		addEntry: bindActionCreators(addEntry, dispatch)
	};
	return {
		addEntry: bindFunction.addEntry
	};
}

export default connect(null, mapDispatchToProps)(Add)