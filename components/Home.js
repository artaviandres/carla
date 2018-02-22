import React from 'react';
import _ from 'lodash';
import theme from '../style/variables';
import typographies from '../style/typographies';

class Home extends React.Component {
    constructor(props){
        super(props);
      }

    render() {
        let counter = 0
        return (
            <div>
                <div className="table__container">
                    <table>
                        <thead className="header">
                            <tr>
                                <th>Fecha</th>
                                <th>Lugar de inyección</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.entries.map((key) => {
                                counter = counter + 1;
                                return <tr key={counter}>
                                    <th>
                                        {key.date}
                                    </th>
                                    <th>
                                        {key.location}
                                    </th>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <style jsx>{`
                    ${typographies};
                    .table__container {
                        max-height: 400px;
                        overflow-y: scroll;
                    }
                    table {
                        width: 70%;
                        border: 1px solid #000;
                        border-spacing: 0;
                        margin: 0 auto;
                        height: 100%;
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