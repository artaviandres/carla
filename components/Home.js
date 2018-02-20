import React from 'react';
import Historial from '../static/historial.json';
import theme from '../style/variables';
import typographies from '../style/typographies';

class Home extends React.Component {
    render() {
        let counter = 0
        return (
            <div>
                <table>
                    <thead className="header">
                        <tr>
                            <th>Fecha</th>
                            <th>Lugar de inyección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Historial.map(key => {
                            counter = counter + 1;
                            return <tr key={counter}>
                                <th>{key.date}</th>
                                <th>{key.location}</th>
                            </tr>
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