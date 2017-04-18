import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = '';


//create component

// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//
// );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'harry potter'}, (videos) => this.setState({ videos }));

  }

  render() {

    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
// take component and put it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
