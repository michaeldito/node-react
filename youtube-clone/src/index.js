import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDxuhgahrSrABxwrc9Y5wTA3_fBWZQ0Dsc';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('disc golf highlights');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState ({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    /* (term) => { this.videoSearch(term)} 
     * returns a new function that can only run once every 300 ms.
     */
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

/* Downwards data flow: the top most parent component should be responsible
 * for fetching data.
 * 
 * If the key and the value for the state are the same, we can do the above
 * instead of `this.setState({ videos: data })`
 *
 * Passing props: videos={this.state.videos}
 * We do this so that VideoList has access to it's parents state.
 * 
 * Add the concept of a selected video as a prop.
 * 
 * Refactored Youtube search into it's own method.
 * Passed the method to SearchBar under it's own property.
 * Now SearchBar just needs to call the function with the new term.
 * Inside of SearchBar, we added onInputChange, which sets the state
 * and fires the callback to change the search term.
 */