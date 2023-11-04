import { Component } from "react";
// import * as ACTIONS_TYPES from '../store/actions/action_types';
import * as ACTIONS from "../store/actions/action";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Card from "../components/Card";

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCards: [
        {
          id: 1,
          title: "first title",
          des: "this is the card and this card given all detaiils with this image and description.For more details contact your contact person",
          price: "12.22",
        },
        {
          id: 2,
          title: "second title",
          des: "this is the card and this card given all detaiils with this image and description.For more details contact your contact person",
          price: "12.22",
        },
        {
          id: 3,
          title: "third title",
          des: "this is the card and this card given all detaiils with this image and description.For more details contact your contact person",
          price: "12.22",
        },
        {
          id: 4,
          title: "fourth title",
          des: "this is the card and this card given all detaiils with this image and description.For more details contact your contact person",
          price: "12.22",
        },
      ],
    };
  }

  render() {
    return (
      <div className="block p-2">
        <section className="py-2 px-2 w-full h-auto">
          <div className="bg-white flex justify-center gap-4">
            {this.state.courseCards.map((item) => {
              return (
                <Link to={`post/${item.id}`}>
                <Card item={item } key={item.id} />
                </Link>
              );
              //   return  <Card item={item} />
            })}
          </div>
        </section>
        <section className="py-2 px-2 w-full h-auto"></section>
        <section className="py-2 px-2 w-full h-auto"></section>
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
