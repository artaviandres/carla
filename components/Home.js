import React from 'react';
import _ from 'lodash';
import theme from '../style/variables';
import typographies from '../style/typographies';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          messages: []
        };
    }

    componentDidMount() {
        let app = this.props.db.database().ref('messages');
        app.on('value', snapshot => {
          this.getData(snapshot.val());
        });
    }
      
    getData(values){
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();
        this.setState({
            messages: messages
        });
    }

    render() {
        let counter = 0
        return (
            <div>
                <table>
                    <thead className="header">
                        <tr>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.messages.map((key) => {
                            return (
                                <tr key={key.key}>
                                    <th>
                                        {key.message}
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <style jsx>{`
                    ${typographies};
                    table {
                        width: 70%;
                        border: 1px solid #000;
                        border-spacing: 0;
                        margin: 0 auto;
                    }

                    th {
                        height: 40px;
                        padding: 0;
                    }
                    tr th {
                        border-top: 1px solid #000;
                        border-left: 1px solid #000;
                    }

                    tr th:nth-child(1) {
                        border-left: 0;
                    }
                    thead th {
                        font-family: ${theme.fonts.bold};
                        border-top: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default Home;