/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { increment, decrement, reset } from "../actions/CountActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const CountSubscribe = ({count,increment, decrement, reset}) => {

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/about')
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <br />
      <button onClick={decrement}>Decrease</button>
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count
});

 const mapDispatchToProps ={

    increment,
    decrement,
    reset
  }


export default connect (mapStateToProps, mapDispatchToProps)(CountSubscribe)