import React from 'react';
import Users from './Users';
import AddUser from './AddUser';
import './App.css';

export default class App extends  React.Component{
  // Default  Data
    state = {
    users:[
          {name:"Pravallika Gunturi", age:20,  address : "Hyd",      isEditing:false},
          {name:"Satya Gunturi",      age:30,  address : "Ongole",   isEditing:false},
          {name:"Mouni Konijeti",     age:18,  address : "Tangutur", isEditing:false} ]}

//Adding NewUser
    addUser = (newUser) => {
      let users = [...this.state.users, newUser];  //Here newUser is access from AddUser.js file
        this.setState({users});}

// Edit User Data
       pressEdit = (i) => {    // Here i is access from Users.js file
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({users});}

//Update User Data
      updateUser = (i, name, age, address) => {    //Here i, name, age is access from Users.js file
        let users = this.state.users;
        users[i].name = name;
        users[i].age  = age;
        users[i].address = address;
        users[i].isEditing = false;
        this.setState({users}); 
    }

//Delete User Data
      pressDelete = (i) => {          //Here i is access from Users.js
      let users = this.state.users.filter((u,index)=>{
            return index !== i;  });
        this.setState({users});
    }

    render(){
        return(
            <div className="container">
              <div className = "crud">
               <h2>CRUD with React CLI [Command Line]</h2>
               <Users allUsers={this.state.users} pressEdit={this.pressEdit} updateUser={this.updateUser} pressDelete={this.pressDelete} />
               <AddUser addUser={this.addUser}/>
              </div>
            </div>);
    }
}

