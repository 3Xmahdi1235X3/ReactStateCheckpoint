import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet.',
        imgSrc: 'https://example.com/profile.jpg',
        profession: 'Software Developer'
      },
      show: false,
      intervalId: null,
      secondsSinceMount: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        secondsSinceMount: prevState.secondsSinceMount + 1
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, secondsSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Seconds since mount: {secondsSinceMount}</p>
      </div>
    );
  }
}

export default App;