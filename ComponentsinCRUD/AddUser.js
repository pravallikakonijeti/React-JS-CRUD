import React from 'react';

export default class AddUser extends React.Component{
   state = {
        name:null,
        age:null,
        address:null,
        isEditing:false
    }
    
    //call addUser in App.js
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();
    }
    
    // Update State
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,});
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}><br></br>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                    </div><br></br>
                    <div className="input-field col s2">
                        <input name="age" autoComplete="off" type="number" required placeholder="Enter your age" onChange={ this.updateState } />
                    </div><br></br>
                    <div className="input-field col s3">
                        <input name="address" autoComplete="off" placeholder="Enter your address" required type="text" onChange={this.updateState } />
                    </div><br></br>
                    <div className="input-field col s2">
                        <input type="submit" value="Add" className="add"/>
                    </div>
                </form>
            </div> );
    }
}