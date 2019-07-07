import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content  from '/Project/blog/resources/js/components/Content';
import Login  from '/Project/blog/resources/js/components/Login';
require('/Project/blog/resources/js/components/common'); 
function Welcome(props) {
    return (<h1>Hello, {props.name}</h1>);
}

class TestProps extends Component {
    render() {
        return (
            // <div className="card-header">{this.props.tieuDe}</div>
            <h1>Hello, {this.props.tieuDe}</h1>
        );
    }
}

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: {
                ten1 : "cc"
            },
            sayings: "",
            name: '',
        };

        this.submit = this.submit.bind(this)
      }

    updateState(){
        this.setState({
            ten :"update ne ahihi"
        })
    }
    //
    update(e) {
        this.setState({sayings: e.target.value});
    }

    updateRef(e) {
        this.setState({sayings: this.refs.btalks.value});
    }

    submit(e) {
        const {_title} = this.refs
        e.preventDefault()
        alert(_title.value)
        _title.value = ''
        _title.focus()
      }

     
    onTodoChange(value){
        this.setState({
             name: value
        });
    }
  
    render() {
        
        
        
        return (
            // <Welcome name="Sara" />
            <div>
                <TestProps tieuDe="ahihi DoNgok" />
                <Welcome name="Sara" />
                <Content ten={this.state.ten.ten1}/>
                <button onClick={()=>this.updateState()}> Update Statehihi </button>
                <h1>Bob says: {this.state.sayings}</h1>
                 <input type="text" onChange={this.update.bind(this)} />
                 
                <h1>sử dụng ref</h1>
                <input type="text" ref="btalks"  onChange={this.updateRef.bind(this)} />
                <form onSubmit={this.submit}>
                    <input ref="_title" type="text" placeholder="title" />
                    <button>Add</button>
                </form>

                <Login />
                <p>---------------------------</p>
                <input
                    className="form-control"
                    type="text" value={this.state.name}
                    id='todoName'
                    onChange={e => this.onTodoChange(e.target.value)}
                />
                <input
                    className="form-control"
                    type="text" value={this.state.name}
                    id='todoName'
                    onChange={e => this.onTodoChange(e.target.value)}
                />
            </div>
           
        );
    }
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
