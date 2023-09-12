import React, { Component } from 'react';
import pic from "./assets/mehdi.png"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Mahdi jenhani',
        bio: 'A skilled full stack developer with a passion for creating exceptional web applications. ',
        imgSrc: pic,
        profession: 'Full-stack Developer'
      },
      show: false,
      lastMountTime: null
    };
  }

  componentDidMount() {
    this.setState({ lastMountTime: new Date() });
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  getTimeSinceMount() {
    const { lastMountTime } = this.state;

    if (!lastMountTime) return null;

    const now = new Date();
    const secondsSinceMount = Math.floor((now - lastMountTime) / 1000);

    return secondsSinceMount;
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;
    const secondsSinceMount = this.getTimeSinceMount();

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