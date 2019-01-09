import React, { Component } from "react";
import "./style.css";
import { Cards } from "./components/Cards";
import Search from "./components/Search";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      kyword: "",
      souce: ''
    };
    
  }
  handleKeywordChange = e => {
    this.setState({ kyword: e.target.value.replace(/\s+/g, "").toLowerCase() });
  };
  handleSourceChange = e => {
    this.setState({ souce: e.target.value.replace(/\s+/g, '-').toLowerCase() });
  };
  handleInput = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${this.state.kyword}&sources=${this.state.souce}.com&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(data => this.setState({items:data.articles}));
  };
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
       .then(data => this.setState({items:data.articles}));
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="totlbody">
          <Cards items={this.state.items} />
          <Search
            handleKeywordChange={this.handleKeywordChange}
            handleSourceChange={this.handleSourceChange}
            handleInput={this.handleInput}
            data={this.state}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
