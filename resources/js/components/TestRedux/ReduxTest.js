import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return (<h1>Hello, {props.name}</h1>);
}



export default class ReduxTest extends Component {
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
            ten :"update ne ahihi",
            ten :sayings"
        })
    }
    //
    update(e) {
        this.setState({sayings: e.target.value});
        this.setState({ten: e.target.value});
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
        const name = this.state.name
        return (
            // <Welcome name="Sara" />
            <div>
                ahihi + {name}
            </div>
           
        );
    }
}
if (document.getElementById('ReduxTest')) {
    ReactDOM.render(<ReduxTest />, document.getElementById('ReduxTest'));
}
