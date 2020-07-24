import React, {Component}  from 'react';
import { fetchData } from './api';

import OverviewItem from './components/OverviewItem/OverviewItem';
import Chart from './components/Chart/Chart';
import CountrySelect from './components/CountrySelect/CountrySelect';
import MapWithAMarker from './components/MyMapComponent/MyMapComponent';

import Logo from './components/Logo/Logo';

import styles from './App.module.css';

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
     <div className={styles.app}>
        <div className={styles.sidebar}>
          <Logo />
          <CountrySelect handleCountryChange={this.handleCountryChange}/>
          <OverviewItem data={data}/>
          {/* <Chart data={data} country={country}/> */}
        </div>
        <div className={styles.map}>
        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwt_WAXH9IMcTJvGwyoMGUOcARNnFUDEg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
     </div> 
      
  
    );
  }
} 

export default App;

