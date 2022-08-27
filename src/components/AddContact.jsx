import React from "react";

class AddContact extends React.Component{
    state = {
        name : "",
        email : ""
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        // this.props.addContactHandler(this.state);
        console.log(this.state);
    }
    render(){
        return(
                <div className="ui main">
                    <h2>Add Contact</h2>
                    <form className="ui form" onSubmit={this.add}>
                        <div>
                            <label>Name</label>
                            <input type="text" name = "name"
                            value = {this.state.name} placeholder="Siddharth Bisht" onChange={(e) =>{
                                this.setState({name : e.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name = "name" placeholder="siddharth@gmail.com" value={this.state.email} onChange = {(e)=>{
                                this.setState({email : e.target.value})
                            }}
                            />
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </div>
        );
    }
}


export default AddContact;