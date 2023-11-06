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
                <div className="flex justify-center">
                    <div className="w-1/6 h-auto px-4 py-4">
                        {/* for show image use require('path of image') */}
                        <img src={singleCard.image} alt="" />
                    </div>
                    <div className="block px-8 py-3 w-4/6 shadow-xl shadow-gray-400">
                        <h6 className="text-lg font-semibold text-black px-2 py-2 uppercase">
                            {singleCard.title}
                        </h6>
                        <p className="text-sm font-normal py-3 px-4 text-justify tracking-wider leading-6 ">
                            {singleCard.des }
                        </p>
                        <h6 className="text-lg font-bold text-right px-2 py-1">
                            {singleCard.price}
                        </h6>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRoute(Carddetails);