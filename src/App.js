import './App.css';
import { VideoList } from './Components/VideoList/VideoList.component';
import { Component } from 'react';

class MyApp extends Component{

  constructor(){
    super();
    this.state = {
      videos: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://mocki.io/v1/b6dbd5dd-2f75-4b48-8287-12a1fc16ebf7')
    .then(response => response.json())
    .then(users => this.setState({videos:users}))
  }

  render(){

    const {videos,searchField} = this.state; 
    const filteredvideos = videos.filter(video => {
      return video.title.toLowerCase().includes(searchField.toLowerCase())  
    });

      console.log(filteredvideos);

    return(
      <div className="App">
        <input type="search" className="ssearch" placeholder="Search" onChange={ e => this.setState({ searchField: e.target.value }) }/>
        <VideoList videos={filteredvideos} />
      </div>
    )
  }
}

export default MyApp;
