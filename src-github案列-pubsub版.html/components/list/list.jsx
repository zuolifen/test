import React, { Component } from 'react'
import Item from '../item/item';
import PubSub from 'pubsub-js';
export default class List extends Component {
    state= {
        isFirst:true,
        isLoading:false,
        error:'',
        users:[]
    }
    componentDidMount(){
        PubSub.subscribe('nihao',(msg,data) => {
            this.setState(data)
        }
        )
    }
    render() {
        const {isFirst,isLoading,error,users} = this.state;
        if(isFirst){
            return <h2>输入关键词，点击搜索</h2>
        }else if(isLoading){
            return <h2>Loading....</h2>
        }else if(error){
        return <h2>{error}</h2>
        }else{
            return (
                    <div className="row">
                       {
                           users.map((personsObj) => {
                               console.log(personsObj)
                               return <Item key={personsObj.login} {...personsObj}/>
                           }
                           )
                       }
                    </div>
            )
       
        }
    }
}
