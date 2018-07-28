import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from "../../components/Nav"

class Posts extends Component {
  state = {
    posts: [],
    title: "",
    user: "",
    post: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", user: "", post: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.user) {
      API.savePost({
        title: this.state.title,
        user: this.state.user,
        post: this.state.post
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container full-screen">
          <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
              <form>
                <div className="input-field newPost">
                  <input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    id="title"
                    type="text"
                  />
                  <label htmlFor="title">Post Title</label>
                </div>
                <div className="input-field">
                  <input
                    value={this.state.user}
                    onChange={this.handleInputChange}
                    name="user"
                    id="name"
                    type="text"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field newPost2">
                  <textarea
                    value={this.state.post}
                    onChange={this.handleInputChange}
                    name="post"
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Post Content</label>

                  <button
                    disabled={!(this.state.user && this.state.title && this.state.post)}
                    onClick={this.handleFormSubmit}
                    className="eventButton2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col s3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;