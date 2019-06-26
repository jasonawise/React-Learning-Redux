import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.state}
        <div>
          <button type="button" onClick={this.props.increment}>
            +
          </button>
          <button type="button" onClick={this.props.decrement}>
            -
          </button>
        </div>
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
