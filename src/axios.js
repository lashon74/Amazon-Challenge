import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-34146.cloudfunctions.net/api",
  //   Local example firebase emulators:start to produce
  //   http://localhost:5001/challenge-34146/us-central1/api
});

export default instance;
