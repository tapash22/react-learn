import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return (
            <div className="flex justify-between bg-yellow-200 py-2 px-5">
                <div className="flex justify-center py-1">
                    <img src="https://i.ibb.co/whp9y37/1.jpg" className="w-10 h-10" alt="logo" />
                </div>
               <div className="flex gap-3 py-3">
               <Link to="/" className="font-bold text-sm text-black ">Container 1</Link>
                <Link to="/container2" className="font-bold text-sm text-black ">Container 2</Link>
               </div>
            </div>
        )
    }
}

export default Header;