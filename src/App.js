import React, {Component } from 'react';

import style from './App.module.css';

import { fetchData } from './api';

import OverviewItem from './components/OverviewItem/OverviewItem';
import Chart from './components/Chart/Chart';

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
        <Chart />
      </div>
    );
  }
}

export default App;
