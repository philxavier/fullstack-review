import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.getData = this.getData.bind(this);

  }

  getData() {
    $.get('/top', (data, status) => {
      console.log(data);
      this.setState({
        repos:data
      })

    })
  }

  componentDidMount() {
    this.getData()
  }

  search (term) {

    var data = JSON.stringify({name:term})
    $.ajax({
      method:'POST',
      url: '/repos',
      data: data,
      contentType: "application/json",
      success: () => {
        this.getData()
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));