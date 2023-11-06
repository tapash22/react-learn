import { Component } from "react";

class Tablemodal extends Component {
  render() {
    return (
      <div className="fixed flex justify-center items-center bg-transparent h-full w-full z-30 top-0 left-0">
        <div className="block bg-white h-auto w-1/3 ring-2 rounded-lg ring-gray-300 shadow-xl shadow-gray-600">
          <div className="py-2 px-6 ">
            <p className="font-medium text-lg text-center py-2">
                {this.props.courses.id}
            </p>
            <p className="font-medium text-lg text-start py-2 uppercase">
                {this.props.courses.title}
            </p>
            <p className="font-normal text-sm leading-6 text-justify py-3 ">
                {this.props.courses.des}
            </p>
            <p className="font-bold text-lg text-right py-2">
              Price: 
                {
                    this.props.courses.price
                }
            </p>
          </div>
          <div className="flex justify-end py-4 px-5">
            <button
              onClick={this.props.closeModal}
              className="text-sm font-bold rounded-xl bg-red-500 text-black h-8 px-4"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tablemodal;
