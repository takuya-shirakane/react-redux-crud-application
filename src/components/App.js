import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

const App = (props) => {
  const prop = props;
  return (
    <React.Fragment>
      <div>value:{prop.value}</div>
      <button onClick={prop.increment}>+1</button>
      <button onClick={prop.decrement} >-1</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
