import React, { Component } from 'react';
import News from '../home_news/news';
import Message from '../home_message/message'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="panel-body"> 
                <h3>Home组件内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/news" activeClassName="active2">News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item " to="/home/message" activeClassName="active2">Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                            <Redirect to="home/news"/>
                        </Switch>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}
