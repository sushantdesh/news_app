import React from 'react';
import News from './Components/News.js'
import Header from "./Components/Header";
import Filter from "./Components/Filter";

class App extends React.Component{
    state={}

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=29bae5c10b734c0e98ec58a6d640b817')
        .then(res=>res.json())
        .then((data)=>{
          this.setState(({newsfromapi:data}))
        })
        .catch()
  }
  category=(r)=>{
        console.log(r)
        let baseurl='https://newsapi.org/v2/top-headlines?country=us&'
      let apikey='&apiKey=29bae5c10b734c0e98ec58a6d640b817'
      let complete=baseurl+r+apikey
      fetch(complete)
          .then(res=>res.json())
          .then((data)=>{
              this.setState(({newsfromapi:data}))
          })
          .catch()

}

  render() {
      console.log("here", this.state.newsfromapi);

      return (
          <div >
              <Header/>
              <Filter category={this.category}/>

              {this.state.newsfromapi && this.state.newsfromapi.status==="ok" ?
              <News newsarticles={this.state.newsfromapi.articles}/> : null}

          </div>

      );
  }
}

export default App;
