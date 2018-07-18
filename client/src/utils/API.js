import axios from "axios";

export default {
  // Gets the guide for a given location
  getCity: function(location) {
    return axios.get("/api/guides/" + location);
  }
};
