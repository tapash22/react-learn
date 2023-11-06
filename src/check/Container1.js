import { Component } from "react";
// import * as ACTIONS_TYPES from '../store/actions/action_types';
import * as ACTIONS from "../store/actions/action";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Card from "../components/Card";
import { courseCards } from "../data";
import Tablerow from "../components/Tablerow";
import Tablemodal from "../modal/Tablemodal";

class Container1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalData: false,
      courses: [],
    };
  }

  openModal = (courseId) => {
    const selectedCourse = courseCards.find(
      (course) => course.id === parseInt(courseId)
    );
    this.setState({ modalData: true, courses: selectedCourse });
    // console.log(this.courses);
  };

  closeModal = () => {
    this.setState({ modalData: false });
  };

  render() {
    return (
      <div className="block p-3">
        <section className="py-4 px-2 w-full h-auto">
          <h6 className="text-lg font-bold py-2 text-black">Course List</h6>
          {/* <div className="container"> */}
          <div className="bg-white gap-4 grid grid-cols-4 ">
            {courseCards.map((item) => {
              return (
                <Link to={`post/${item.id}`}>
                  <Card key={item.id} item={item} />
                </Link>
              );
            })}
          </div>
          {/* </div> */}
        </section>

        <section className="py-4 px-4 w-full h-auto  justify-center ">
          <h6 className="text-lg font-bold py-2 text-black">
            Course Table view
          </h6>
          <table className="border-separate border border-slate-400">
            <caption className="caption-top font-semibold text-lg text-center py-2 underline underline-offset-8 decoration-red-700">
              Table Data
            </caption>
            <thead>
              <tr>
                <th className="border border-slate-300 px-4 py-2">Id</th>
                <th className="border border-slate-300 px-4 py-2">Name</th>
                <th className="border border-slate-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-slate-300 px-4 py-2">price</th>
                <th className="border border-slate-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {courseCards.map((course) => {
                return (
                  <Tablerow
                    key={course.id}
                    course={course}
                    openModal={this.openModal}
                  />
                );
              })}
            </tbody>
          </table>
        </section>

        <section className="py-2 px-2 w-full h-auto flex ">
          {/* <button className="bg-red-500 rounded-xl px-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
            Hover me
          </button> */}

          {/* skeleton for form view loading
          <div class="border border-red-500 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-red-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-red-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-red-200 rounded col-span-2"></div>
                    <div class="h-2 bg-red-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-red-200 rounded"></div>
                </div>
              </div>
            </div>
          </div> */}

          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-0 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-1 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-2 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-3 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-6 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-12 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-45 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-90 hover:-rotate-90" />
          <img src={require('../assets/2.jpg') } alt="" className="h-10 w-10 mx-2 rotate-180 delay-100 hover:-rotate-90 hover:delay-200" />

        </section>

        {/* {this.courses} */}

        {this.state.modalData && (
          <Tablemodal
            courses={this.state.courses}
            closeModal={this.closeModal}
          />
        )}
      </div>
      // <div>
      //     <button className="bg-red-500 text-lg font-normal mx-2 shadow-xl rounded-lg px-2" onClick={()=> console.log(this.props.stateprop1)}>
      //         Get Start
      //     </button>

      //     <button className="bg-red-500 text-lg font-normal mx-2 shadow-xl rounded-lg px-2" onClick={()=> this.props.action1()}>
      //         Dispatch 1
      //     </button>

      //     <button className="bg-red-500 text-lg font-normal mx-2 shadow-xl rounded-lg px-2" onClick={ ()=> this.props.action2()}>
      //         Dispatch 2
      //     </button>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
