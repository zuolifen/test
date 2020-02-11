import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        number:0
    }
    
    //加
    increment = () => {
        let value = this.refs.select.value;
        let number = this.state.number;
        this.setState({number:number + value*1})
    }
    //减
    decrement = () => {
        let value = this.refs.select.value;
        let number = this.state.number;
        this.setState({number:number - value*1})
    }
    //基数加
    incrementAdd  = () => {
        let value = this.refs.select.value;
        let number = this.state.number;
        if(number % 2 ===1){
            this.setState({number:number + value*1})
        }
    }
    //延时加
    incrementAsy = () => {
        let value = this.refs.select.value;
        let number = this.state.number;
        setTimeout(() => {
            this.setState({number: number + value*1})
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>当前计数为：{this.state.number}</h2>
                <select ref = "select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={this.increment}>+</button> &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button> &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAdd}>increment if add</button> &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsy}>increment async</button>
            </div>
        )
    }
}
