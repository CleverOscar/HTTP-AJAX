import React, {
  Component
} from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            this.setState({friends: res.data})
        })
        .catch(err => {
            console.log(err);
        })
  }

  addFriend = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(this.state.friends)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
      <Link to="/form"><div>Click for Form</div></Link>
      <Route exact path="/" render={() => (
        <FriendsList
          friends={this.state.friends}
        />)}
      />
      <Route path="/form" render={() => (
        <Form
        addFriend={this.addFriend}
        />)}
      />
      </div>
    );
  }
}

export default App;
