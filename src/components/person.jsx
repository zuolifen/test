import React, { Component } from 'react'

export default class Person extends Component {
    //添加人数
    add= () => {
        //获取输入的名字和年龄
        let name = this.refs.name.value;
        let age = this.refs.age.value*1;
        this.props.addPerson({name,age})
    }
    render() {
        console.log(this.props)
        return (
             <div>
                <h2>当前的人数为：{this.props.persons.length}</h2>
                <h2>上面组件的计数为：{this.props.number}</h2>
                <input type="text" placeholder="请输入名字" ref="name"/>&nbsp;
                <input type="text" placeholder="请输入年龄" ref="age"/>&nbsp;
                <button onClick={this.add}>添加</button>
                <ul>
                {this.props.persons.map((item,index) => {
                    return <li key={index}>姓名 : {item.name}, 年龄:{item.age}</li>
                })
                }
                </ul>
             </div>
        )
    }
}
