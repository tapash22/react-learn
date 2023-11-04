import { Component } from "react";

class Counter extends Component{

    state={
        count:0
    }

    increment = ()=>(
        this.setState({count:5})
    )

    render(){
        return(
            <div >
                <div>
                    <button onClick={()=>this.increment()} className="bg-red-500 text-center font-medium text-lg rounded-lg shadow-md shadow-green-400 px-3 py-2 my-2">
                        Click
                    </button>
                </div>
                <div>
                counter :{this.state.count}

                {this.props.name} - {this.props.age}
                </div>
            </div>
        )
    }

}

export default Counter;