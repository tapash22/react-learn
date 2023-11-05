import { Component } from "react";
import withRoute from "../hoc/withRoute";
import { courseCards } from '../data';

class Carddetails extends Component{
 
    render(){
        const id = this.props.params.id;
        const singleCard = courseCards.find(card => card.id === parseInt(id));

        if(!singleCard){
            return ( <div>nothing to show</div>)
        }
        return (
            <div>
                new id : {id},
                title : {singleCard.title},
                description : {singleCard.des}
            </div>
        )
    }
}

export default withRoute(Carddetails);