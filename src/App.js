import React from 'react';
import { connect } from 'react-redux';

import { addOne, subtractOne, changeName } from './index.js'
import './App.css';

const higherOrderFunction1 = (x) => {
    return (y) => x * 2 * y + 10;
}
console.log(higherOrderFunction1(2)(3));

const higherOrderFunction2 = (x, callback) => {
    return x * callback(3) + 10;
}
const callback1 = (y) => {
    return 2 * y;
}
console.log(higherOrderFunction2(2, callback1));

const higherOrderComponent = (Component) => {
    return (
        <div>
            <Component></Component>
        </div>
    )
}

const Welcome = () => <h2>Welcome!</h2>;

class App extends React.Component {

/*     handleAdd = () => {
        this.setState({count: this.state.count + 1})
    }

    handleSubtract = () => {
        this.setState({count: this.state.count - 1})
    } */

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <h1>Let's learn Redux</h1>
                {higherOrderComponent(Welcome)}
                <h2>Count: {this.props.count}</h2>
                <button onClick={this.props.addOne}>+1</button>
                <button onClick={this.props.subtractOne}>-1</button>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        name: state.name,
        title: state.title,
    };
}

const mapActionToProps = (dispatch) => {
    return {
        addOne: () => dispatch(addOne()),
        subtractOne: () => dispatch(subtractOne()),
        changeName: () => dispatch(changeName()),
    }
}

export default connect(mapStateToProps, mapActionToProps)(App);
