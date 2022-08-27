import React from "react";

class AddContact extends React.Component{
    render(){
        return(
                <div className="ui main">
                    <h2>Add Contact</h2>
                    <form className="ui form">
                        <div>
                            <label>Name</label>
                            <input type="text" name = "name" placeholder="Siddharth Bisht" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name = "name" placeholder="Siddharth Bisht" />
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </div>
        );
    }
}


export default AddContact;