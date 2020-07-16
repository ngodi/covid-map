import React, {Component } from 'react';

import style from './App.module.css';

import { fetchData } from './api';

import OverviewItem from './components/OverviewItem/OverviewItem';

class App extends Component{
  state = {
    data: {}
  }

  async componentDidMount(){
     const result = await fetchData();
     this.setState(
      { data: result}
     )
  }
  render(){
    const { data } = this.state;
    return (
      <div className = {style.app}>
        <OverviewItem data = {data} />
      </div>
    );
  }
}

export default App;
