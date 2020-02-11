import React,{Component} from 'react';
import Add from './components/add/add';
import List from './components/list/list';
export default class App extends Component{
    state = {
        comments:[
            {id:'dfhakjf',name:'zhangsan',content:'react不好学'},
            {id:'lifahkdsfhka',name:'lishu',content:'很好学'},
            {id:'fdhaksfhksa',name:'wangwu',content:'有多么的好呢'}
        ]
    }
    //此方法用于接受一个评论对象
    addComment = (commentObj) => {
        let {comments} = this.state;
        comments.unshift(commentObj);
        this.setState({comments});
    }
    //此方法用户删除一个评论
    deleteComment = (id) => {
        let {comments} = this.state.comments.filter((commentObj) => {
            return commentObj.id  !== id
        });
        this.setState({comments})
    }
    
    render(){
        const {comments} = this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={this.addComment}/>
                    <List comments={comments} deleteComment={this.deleteComment}/>
                    
                </div>
          </div>
        )
    }
}