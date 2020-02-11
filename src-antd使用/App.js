import React,{Component} from 'react';
import {Button,Input, message} from 'antd';

export default class App extends Component{
    success=() => {
        message.success('chenggong')
    }
    
    
    render(){
        return (
            <div>
                <h3>App</h3>
                <Button type="danger">点我</Button>
                <Button type="primary" onClick={this.success}>点我2</Button>
                <Input style={{width:"200px"}}/>
            </div>
            
                
        )
    }
}