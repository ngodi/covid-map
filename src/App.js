import React, {Component } from 'react';

import style from './App.module.css';

import { fetchData } from './api';

import OverviewItem from './components/OverviewItem/OverviewItem';
import Chart from './components/Chart/Chart';

import CountrySelect from './components/CountrySelect/CountrySelect';

class App extends Component{
  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
     const result = await fetchData();
     this.setState(
      { data: result}
     )
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country});
  }
  render(){
    const { data, country } = this.state;
    return (
      <div className = {style.app}>
        <OverviewItem data = {data} />
        <div>
          <Chart data={data} country={country}/>
          <CountrySelect handleCountryChange={this.handleCountryChange}/>
        </div>
      </div>
    );
  }
}

export default App;
