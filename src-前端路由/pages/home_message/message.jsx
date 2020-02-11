import React, { Component } from 'react'
import { Link ,Route} from 'react-router-dom';
import Detail from '../home_message_detail/detail'

export default class Message extends Component {
    state = {
        message:[]
    }
    componentDidMount(){
        this.setState({message:[
            {id:'001',title:'消息1' },
            {id:'002',title:'消息2'},
            {id:'003',title:'消息3'},
            {id:'004',title:'消息4'}
        ]})
    }
    pushShow = (id) => {
        this.props.history.push(`/home/message/detail/${id}`)
    }
    replaceShow = (id) => {
        this.props.history.replace(`/home/message/detail/${id}`)
    }
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
        
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.message.map((msgObj) => {
                        return  <li key={msgObj.id}>
                                    <Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={() => {
                                        this.pushShow(msgObj.id)
                                    }
                                    }>push查看</button>
                                    <button onClick={() => {
                                        this.replaceShow(msgObj.id)
                                    }
                                    }>replace查看</button>
                                </li>
                    }
                    )
                    }
                    
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <hr/>
                 <Route path="/home/message/detail/:id" component={Detail}/>
            </div>
        )
    }
}
