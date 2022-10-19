import React from "react";
import './Track.css'

class Track extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

        // BINDING
        this.renderAction = this.renderAction.bind(this);
    }

    //METHODS

    renderAction(){
        if (this.props.isRemoval){
            return (
                <button className="Track-action">-</button>
            )
        }else{
            return (
                <button className="Track-action">+</button>
            )
            
        }
    }
    render(){
        return (
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )     
    }
}

export default Track;