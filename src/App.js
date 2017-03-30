import React, { Component } from 'react';
import './App.css';

class Environment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 20,
      columns: 20,
      cellPixelSize: 15,
      generation: 0
    }

    this.setState({ gridState: new Array(this.state.row).fill(new Array(this.state.columns)) });

    this.tick = this.tick.bind(this);
    this.clear = this.clear.bind(this);
  }

  tick() {
    this.setState({
      generation: this.state.generation + 1
    })
  }

  clear() {

  }

  start() {
  }

  render() {
    return (
      <div>
      {[...Array(this.state.rows)].map((e, i) => <Row rowState={this.state.gridState[i]} size={this.state.cellPixelSize} number={i} columns={this.state.columns} />)}
        <h1>generation: {this.state.generation}</h1>
        <button onClick={this.tick}>Tick</button><button onClick={this.clear}>Clear</button><button onClick={this.start}>Start</button>
      </div>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      display: 'block',
      width: this.props.size * this.props.columns + 'px'
    }
    return (
      <div style={styles}>
        {[...Array(this.props.columns)].map((e, i) => <Col number={i} size={this.props.size} />)}
      </div>
    );
  }
}

class Col extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dead: true
    }
    this.toggleAlive = this.toggleAlive.bind(this);
  }

  toggleAlive() {
    this.setState({
      dead: !this.state.dead
    })
  }

  render() {
    const styles = {
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      backgroundColor: this.state.dead ? '#ffffff' : 'black',
      float: 'left',
      border: '1px solid black',
      boxSizing: 'border-box'
    }
    return (
      <div style={styles} onClick={this.toggleAlive}>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Environment />
      </div>
    );
  }
}

export default App;
