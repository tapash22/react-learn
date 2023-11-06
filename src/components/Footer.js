import { Component } from "react";
// import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="bg-black px-6 py-6 ring-2 ring-gray-400 w-full h-auto flex justify-center">
        <div className="w-8/12 h-auto ring-1 ring-gray-300 px-2 py-4">
          <div className="flex justify-start gap-12 px-6">
            <p className="text-white text-sm font-medium">
                Container 1
            </p>
            <p className="text-white text-sm font-medium">
                Container 2
            </p>
            <p className="text-white text-sm font-medium">
                Container 3
            </p>
            <p className="text-white text-sm font-medium">
                Container 4
            </p>
            {/* <Link to="/" className="font-bold text-sm text-black ">
              Container 1
            </Link>
            <Link to="/container2" className="font-bold text-sm text-black ">
              Container 2
            </Link> */}
          </div>
          <div className="py-4 px-6 flex gap-4 ">
            <div className="block">
                <h6 className="text-white text-lg font-medium">
                    Title 1
                </h6>
                <p className="text-white text-sm font-light text-justify">
                    this is new view for describing the world with natural beauty
                </p>
            </div>
            <div className="block">
                <h6 className="text-white text-lg font-medium">
                    Title 2
                </h6>
                <p className="text-white text-sm font-light text-justify">
                    this is new view for describing the world with natural beauty
                </p>
            </div>
            <div className="block">
                <h6 className="text-white text-lg font-medium">
                    Title 3
                </h6>
                <p className="text-white text-sm font-light text-justify">
                    this is new view for describing the world with natural beauty
                </p>
            </div>
            <div className="block">
                <h6 className="text-white text-lg font-medium">
                    Title 4
                </h6>
                <p className="text-white text-sm font-light text-justify">
                    this is new view for describing the world with natural beauty
                </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex justify-center items-center">
            <img src={require('../assets/1.jpg')} alt="" className="w-20 h-20"/>
        </div>
      </div>
    );
  }
}

export default Footer;
