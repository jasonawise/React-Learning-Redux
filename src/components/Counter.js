import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions';

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.state.count}
        <div>
          <button type="button" onClick={this.props.increment}>
            +
          </button>
          <button type="button" onClick={this.props.decrement}>
            -
          </button>
        </div>
        {this.props.state.text}
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  decrement() {
    dispatch(decrement());
  },
  increment() {
    dispatch(increment());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
