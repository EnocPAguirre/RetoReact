
import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount(){
    this.timeID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        Son las {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

function App() {
  return (
  <div>
    <Clock/>
  </div>

  );
}

export default App;
