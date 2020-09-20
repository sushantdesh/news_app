import React from 'react';
import News from './Components/News.js'
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
    state={}

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zPDAP29ogOhQeNqE7vCK4hrH5TQlvfWQ')
        .then(res=>res.json())
        .then((data)=>{
            console.log("didmount")
          this.setState(({newsfromapi:data}))
        })
        .catch()
  }
  category=(r)=>{
        console.log(r)
        let baseurl='https://newsapi.org/v2/top-headlines?country=us&'
      let apikey='&apiKey=29bae5c10b734c0e98ec58a6d640b817'
      let complete=baseurl+r+apikey

      fetch(`https://api.nytimes.com/svc/topstories/v2/${r}?api-key=zPDAP29ogOhQeNqE7vCK4hrH5TQlvfWQ`)
          .then(res=>res.json())
          .then((data)=>{
              this.setState({newsfromapi:data})
          })
          .catch()

}

  render() {
      console.log("here", this.state.newsfromapi);

      return (
          <div >
              <Header/>
              <Filter category={this.category}/>

              {this.state.newsfromapi && this.state.newsfromapi.status==="OK" ?
                  <News newsarticles={this.state.newsfromapi.results}/>: <div>
                      <h1> Waiting...</h1>
                      <h5> This might be because of Nytimes API-limitations, 4000 calls per day, max 10 calls per min..
                          wait for 30 secs and refresh.. </h5>

                  </div>}


          </div>

      );
  }
}

export default App;
