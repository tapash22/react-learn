import { Component } from "react";
import Auth from '../utils/auth';

const auth = new Auth();

class Container2 extends Component{
    render(){
        return (
            <div className="flex justify-center align-middle">
                <button onClick={()=>auth.login()} className="bg-red-500 text-sm font-medium text-gray-600 py-2 px-2" >click button</button>
                <p>this is container 2</p>
            </div>
        )
    }
}

export default Container2 ;