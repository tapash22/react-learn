import { Component } from "react";

class Tablerow extends Component{

    render(){
        return(
            <tr>
                <td className="border border-slate-300 px-4 py-2">{this.props.course.id}</td>
                <td className="border border-slate-300 px-4 py-2">{this.props.course.title}</td>
                <td className="border border-slate-300 px-4 py-2">{this.props.course.des}</td>
                <td className="border border-slate-300 px-4 py-2">{this.props.course.price}</td>
                <td className="border border-slate-300 px-4 py-2 "><button className="bg-red-300 rounded-md font-normal text-sm px-3" onClick={() => this.props.openModal(this.props.course.id)}>View</button></td>
              </tr>
        )
    }
}

export default Tablerow;