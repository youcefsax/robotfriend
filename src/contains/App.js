import React from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import { Component } from "react";
import "./app.css"

class App extends Component {

    constructor(){
    super();
    this.state={
        robots:[],
        search:""
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
       return response.json();
    })
    .then(users=>{
        this.setState({robots: users});
    });  
    
}
searchcahnge=(e)=>{
    this.setState({search:e.target.value})
    


    
}


    render(){
        const fillterRobot=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.search)
        })
    return (
    <div className="tc">
        <h1 className="f1">RobotFriend</h1>
        <SearchBox onserachchange={this.searchcahnge}/>
<Scroll>
    <CardList robots={fillterRobot}/>
</Scroll>
</div>
)
}

}

export default App;