import axios from "axios";

export default {
  // Gets the guide for a given location
  getCity: function(location) {
    return axios.get("/api/guides/" + location);
  },

  //Forum routes
  //----------------
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getBook: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Saves a post to the database
  saveBook: function(PostData) {
    return axios.post("/api/posts", PostData);
  }
};
