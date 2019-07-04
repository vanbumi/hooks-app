import React, { useState } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Ini adalah componentDidMount, akan run setelah first mount pada DOM")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Ini adalah componentDidUpdate, yang akan run setelah re-render atau render-render berikutnya")
  }

  componentWillUnmount() {
    console.log("Ini adalah componentWillUnmount, yang akan di remove")
  }

  render() {
    console.log("I am rendering now!!");
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>Increase</button>
        <button onClick={() => this.setState({ count: count - 1 })}>Decrease</button>
        <h1>{count}</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ visible: !visible })}>
          Show / Hide Counter Component
        </button>

        {visible && <Counter />}
      </div>
    )
  }
}

export default App;
