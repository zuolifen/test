import React, { Component } from 'react'
import uuid from 'uuid'

export default class Add extends Component {
    addComments = () => {
        //拿到用户输入的指
        let name = this.name.value;
        let content = this.content.value;
        console.log(name,content)
        //校验数据
        if(!name.trim()||!content.trim){
            alert('用户名和密码均不为空');
            return
        }
        //更新state
        this.props.addComment({id:uuid(),name,content})
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" placeholder="用户名" ref={(input)=>{this.name = input}}/>
                    </div>
                    <div className="form-group">
                    <label>评论内容</label>
                    <textarea className="form-control" rows="6" placeholder="评论内容" ref={(textarea)=>{this.content = textarea}}></textarea>
                    </div>
                    <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default pull-right" onClick={this.addComments}>提交</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
