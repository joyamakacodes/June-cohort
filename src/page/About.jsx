/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
// import Stating from "../components/Stating";
import { CallContext } from "../context/Context";
import { connect } from "react-redux";

const About = ({count})=>{
  const {email}= CallContext()
  return(
    <div>

      <Navbar/>
      {/* <Stating/> */}
      <p>hello, this is about page {count} {email}</p>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.count
});
export default connect ( mapStateToProps)(About)