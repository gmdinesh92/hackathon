import React from 'react';
import {Table} from 'react-bootstrap';
import users from 'json-loader!../../../users.json';
class CallQueue extends React.Component {
    render_table() {
        let tableList = users.users.map(function (user,i) {
            return (
                <tr key={i}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>
                        <div className="column"> <a href={'tel:'+ user.phone}> <p> {user.phone} </p> </a> </div>
                    </td>
                    <td>
                        <div><p>{user.address}</p></div>
                    </td>
                    <td>{user.description}</td>
                </tr>
            );
        })
        return tableList
    }

    render() {
        return (<div className="container padding">
            <div className="row">
                <h3>Calls In MyQueue</h3>
                <Table responsive striped >
                    <thead>
                        <tr>
                            <th class="align"><img src="../../src/images/people.png"/></th>
                            <th></th>
                            <th><img src="../../src/images/phone.png"/></th>
                            <th><img src="../../src/images/map.png"/></th>
                            <th><img src="../../src/images/description.png"/></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.render_table()}
                    </tbody>
                </Table>
            </div>
        </div>
        );
    }
}
export default CallQueue