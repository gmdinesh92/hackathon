import React from 'react';
import {Table} from 'react-bootstrap';
class CallQueue extends React.Component {
    render() {
        return (
            <div className="container padding">
                <div className="row">
                    <h3>Call In MyQueue</h3>
                </div>
                <div className="row">
                    <Table className="tabler table-hover">
                        <tbody>
                        <tr>
                            <td>Marie</td>
                            <td>smith</td>
                            <td>abc,xyz</td>
                            <td>
                                <div className="column">
                                    <p>123-456-7890   <img src="../../src/images/phone.png" /></p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img src="../../src/images/map.png" />
                                </div>
                            </td>

                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Tiffany</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Sirhan</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Doe</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Jhon</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Daniel</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Jack</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Joshuva</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Genifer</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Swan</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default CallQueue
