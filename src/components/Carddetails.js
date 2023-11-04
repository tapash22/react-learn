import { Component } from "react";

class Carddetails extends Component{
    render(){
        const { match } = this.props;
        const { postId } = match.params;
        return (
            <div>
                new id  {postId}
            </div>
        )
    }
}

export default Carddetails;