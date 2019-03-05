import React, { Component } from 'react';
import Nav from './Nav';
import { Button, Table } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        const { list, onDeleteItem } = this.props;
        return (
            <div>
                <Nav />
                <br />
                <Button variant="success" onClick={() => {this.props.history.push('/add')}}>Add</Button>
                <br />
                <br />
                <br />
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                    {list.map((item, index) => <tr>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td><Button style={{ background: 'red' }} onClick={() => onDeleteItem(index)}>Delete</Button></td>
                    </tr>)}
                </Table>
            </div>
        );
    }
}