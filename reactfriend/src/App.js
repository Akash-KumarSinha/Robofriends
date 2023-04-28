import React, { Component } from "react";
import CardList from "./CardList";
import { robo } from "./robo";
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super()
        this.state={
            robo: robo,
            searchfield:''
        }
    } 

    onSearchChange(event){
        console.log(event.target.value);
    }
    render(){
    return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchchange={this.onSearchChange} />
            <CardList robo={this.state.robo} />
        </div>
    )
    }
}

export default App;