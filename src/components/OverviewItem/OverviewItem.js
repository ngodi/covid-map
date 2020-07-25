import React from 'react';
import CountUp from 'react-countup';

import styles from './OverviewItem.module.css';

const OverviewItem = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return <div className={styles.loading}>Loading .....</div>
    }
 return (
         <div className={styles.container}>
           <div className={styles.infected}>
              <h3>Infected</h3>
              <span><CountUp start={0} end={confirmed.value} duration={2} separator="," /></span><br />
              <time> {new Date(lastUpdate).toDateString()}</time>
           </div>
           <div className={styles.recovered}>
              <h3>Recovered</h3>
              <span><CountUp start={0} end={recovered.value} duration={2} separator="," /></span><br />
              <time> {new Date(lastUpdate).toDateString()}</time>
           </div>
           <div className={styles.deaths}>
              <h3>Deaths</h3>
              <span><CountUp start={0} end={deaths.value} duration={2} separator="," /></span><br />
              <time> {new Date(lastUpdate).toDateString()}</time>
           </div>
         </div>
        )
    
}

export default OverviewItem;