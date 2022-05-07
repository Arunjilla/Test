import React from 'react';

class Single extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"omkar",
            friends:["hareesh","venkat"]
        }
    }
    changeInput1= (x)=>{
        console.log(x)
        this.setState({name:x.target.value})
    }
    addData = ()=>{
        this.setState({friends:[...this.state.friends,this.state.name]})
    }
    render(){
        return(
            <div>
                <h1>Heading - {this.state.name}</h1>
                <p>paragraph</p>
                <input type="text" onChange={this.changeInput1}/>
                <button onClick={this.addData}>click me</button>
                <ul>
                    {
                        this.state.friends.map(function(fr){
                            return <li>{fr}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Single;