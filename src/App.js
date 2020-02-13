import React, { Component } from 'react';
import CountContainer from './containers/count-container';
import PersonContainer from './containers/person-container';
export default class App extends Component {
    render() {
        return (
            <div>
                <CountContainer/>
                <br/>
                <br/>
                <br/>
                <PersonContainer/>
            </div>

        )
    }
}
