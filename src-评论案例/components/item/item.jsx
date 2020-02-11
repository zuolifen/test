import React, { Component } from 'react'
import './item.css';
export default class Item extends Component {
    delete=(id,name) => {
        //询问用户是否删除
       if( window.confirm(`确认删除${name}`)){
          //获取要删除的ID
        
        //去状态中删除该id对应的评论
        this.props.deleteComment(id)
       }
        
    }
    render() {
        const {id,name,content} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                <a href="#1" onClick={()=>{this.delete(id,name)}}>删除</a>
                </div>
                <p className="user"><span >{name}</span><span>说:</span></p>
                <p className="centence">{content}</p>
          </li>
        )
    }
}
