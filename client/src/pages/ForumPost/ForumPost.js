import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
      <div className="container">
        <div className="row">
          <div className="col s6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Post Title"
              />
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="Name"
              />
              <TextArea
                value={this.state.post}
                onChange={this.handleInputChange}
                name="post"
                placeholder="Write your post here"
              />
              <FormBtn
                disabled={!(this.state.user && this.state.title && this.state.post)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
              </FormBtn>
            </form>
          </div>
          <div className="col m6">
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} by {post.user}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
