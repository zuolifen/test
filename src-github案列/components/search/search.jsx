import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
    search= () => {
        //1.获取用户输入
        const {value} = this.refs.keyWord;
        //2.发送请求之前，展示loading状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //3.发送请求
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response) => {
                this.props.updateAppState({
                    isLoading:false,
                    users:response.data.items
                })
                console.log(response.data.items)
            },
            (error) => {
                this.props.updateAppState({
                    isLoading:false,
                    error:error.message
                })
            }
        )
        //更新状态

    }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref="keyWord"/>&nbsp;
                <button onClick={this.search}>Search</button>
          </div>
        )
    }
}
