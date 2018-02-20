import React from 'react';
import trim from 'trim';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyupDate = this.onKeyupDate.bind(this);
        this.state = {
            date: '',
            place: ''
        };
      }

      onChange(e){
          this.setState({
            date: e.target.value
          });
      }

      onKeyupDate(e){
        if(e.keyCode === 13 && trim(e.target.value) !== ''){
          e.preventDefault();
          let dbCon = this.props.db.database().ref('/entries');
          dbCon.push({
            date: trim(e.target.value)
          });
          this.setState({
            date: ''
          });
        }
      }

      render() {
        return (
          <form>
            <input
                type="date"
                onChange={this.onChange}
                onKeyUp={this.onKeyupDate}
                value={this.state.date}
            />
          </form>
        )
      }
    
}

export default Add;