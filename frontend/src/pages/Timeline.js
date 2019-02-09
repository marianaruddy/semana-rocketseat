import React, { Component } from "react";
import api from "../services/api";

import twitterLogo from "../twitter.svg";
import "./Timeline.css";

import Tweet from "../components/Tweet";

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ""
  };

  async componentDidMount() {
    const resonse = await api.get('tweets');

    this.setState({ tweets: Response.data });
  };

  handleInputChange = async e => {
    this.setState({ newTweet: e.target.value });
  };

  handleNewTweet = (e) => {
    if( e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@GoTwitter: username");

    await api.post('tweets', { content, author });

    this.setState({ newTweet: "" });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img heitght={24} src={twitterLogo} alt="GoTwitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>
        <ul className="tweet-list">
        { this.state.tweets.map(tweet => (
          <Tweet key={tweet._id} tweet={tweet} />
          )) }
        </ul>
      </div>
    );
  }
}
