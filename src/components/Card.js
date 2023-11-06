import { Component } from "react";

class Card extends Component{

    render(){
        return (
            <div className="rounded-lg bg-gray-300  shadow-lg block px-2 py-2">
                    <img src={this.props.item.image} alt="card-view" className="h-56 w-full"/>
                    <div className="w-auto h-auto p-2 block">
                        <h6 className="text-sm text-left font-bold">
                            {this.props.item.title}
                        </h6>
                        <p className="text-sm font-light py-4 text-black leading-6 tracking-wide text-justify">
                            {this.props.item.des.substring(1,150)} ...
                        </p>
                        <div className="flex justify-between px-1 ">
                            <button className="bg-red-500 font-normal text-sm py-2 px-3 rounded-3xl shadow-xl">Add_To_Card</button>
                            <p className="font-medium text-lg text-black py-2">
                                $ {this.props.item.price}
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card;