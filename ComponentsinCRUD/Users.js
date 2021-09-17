import React from 'react';

export default class Users extends React.Component{

    // Call UpdateUser in App.js file
    handleUpdate = () => {
    this.props.updateUser(this.indexNum, this.name.value, this.age.value, this.address.value);
    }

render(){
    const {allUsers, pressEdit, pressDelete} = this.props;
    
    const usersList = allUsers.map((user, index) => {
      return user.isEditing === true ? (
        <tr  key={index}>
            <td><input type="text"   ref={(val) => {this.name   = val}} required defaultValue={user.name}/></td>
            <td><input type="number" ref={(val) => {this.age    = val}} required defaultValue={user.age}/></td>
            <td><input type="text"   ref={(val) => {this.address = val}} required defaultValue={user.address}/></td>
            <td>
<input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="update"/>
            </td>
        </tr>) : (
               <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.address}</td>
                    <td><button className="edit" onClick={() => pressEdit(index)}>Edit</button>  |  
                        <button className="delete" onClick={()=>pressDelete(index)}>Delete</button>
                    </td>
                </tr>);  });
    return( <div class = "table">
            <table className="fields">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
            </div>);
            }
          }

