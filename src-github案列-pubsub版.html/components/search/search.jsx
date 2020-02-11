import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';
export default class Search extends Component {
    Search= () => {
        const {value} = this.refs.keyWord;
        PubSub.publish('nihao',{isFirst:false,isLoading:false})
        //发送请求
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response) => {
                PubSub.publish('nihao',{
                    isLoading:false,
                    users:response.data.items
                })
            },
            (error) => {
                PubSub.publish('nihao',{
                    isLoadng:false,
                    errror:error.message
                })
            }
        )
    }
    render() {
        return (
            <div>
				<input type="text" placeholder="enter the name you search" ref="keyWord"/>&nbsp;
				<button  onClick={this.Search}>Search</button>
			</div>
        )
    }
}

