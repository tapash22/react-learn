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
    this.setState({ modalData: true , courses:selectedCourse });
    // console.log(this.courses);
  };

  closeModal = () => {
    this.setState({ modalData: false });
  };

  render() {
    return (
      <div className="block p-2">
        <section className="py-4 px-2 w-full h-auto">
          {/* <div className="container"> */}
          <div className="bg-white flex justify-center gap-4 ">
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

        <section className="py-4 px-2 w-full h-auto flex justify-center ">
          <table className="border-separate border border-slate-400">
            <caption className="caption-top font-semibold text-lg text-center py-2">
              Course details table
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
        <section className="py-2 px-2 w-full h-auto"></section>

        {/* {this.courses} */}

        {this.state.modalData && (
          <Tablemodal courses={this.state.courses} closeModal={this.closeModal} />
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
