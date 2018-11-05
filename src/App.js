import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts/Posts';
import Input from './components/Input/Input';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));

    if(savedPosts) {
      this.setState({ posts: savedPosts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.posts !== this.state.posts){
      this.saveToLovalStorage()
    }
  }

  handleAdd = (newPost) => {
    this.setState({
      posts: [newPost, ...this.state.posts]
    })
  }

  saveToLovalStorage = () => {
    const posts = JSON.stringify(this.state.posts);

    localStorage.setItem('posts', posts);
  }

  handlePostDelete = (postId) =>  {
    this.setState({
      posts: this.state.posts.filter(post => post.id != postId)
    })
  }

  render() {
    
    let message = null;
    if(this.state.posts.length == 0){
      message = (
        <div className="App_message">Додайте новий пост</div>
      )
    }

    return (
      <div className="App">
        <Input 
          onPostAdd={this.handleAdd}/>
        <Posts
          posts={this.state.posts}
          postDelete={this.handlePostDelete} />
          {message}
      </div>
    );
  }
}

export default App;
