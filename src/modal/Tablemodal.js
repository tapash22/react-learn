import { Component } from "react";

class Tablemodal extends Component {
  render() {
    return (
      <div className="absolute flex justify-center items-center bg-transparent h-full w-full z-30 top-0 left-0">
        <div className="block bg-white h-auto w-1/3 ring-4 rounded-lg ring-red-600">
          <div className="py-2 px-5">
            <p className="font-medium text-lg text-center py-2">
                {this.props.courses.id}
            </p>
            <p className="font-medium text-lg text-center py-2">
                {this.props.courses.title}
            </p>
            <p className="font-normal text-lg text-center py-3 px-2">
                {this.props.courses.des}
            </p>
            <p className="font-bold text-lg text-center py-2">
                {
                    this.props.courses.price
                }
            </p>
          </div>
          <div className="flex justify-end py-4 px-5">
            <button
              onClick={this.props.closeModal}
              className="text-sm font-bold rounded-lg shadow-lg bg-red-500 text-black h-8 px-4"
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
