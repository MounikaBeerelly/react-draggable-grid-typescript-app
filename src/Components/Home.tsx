import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import '../App.css';

import Chart from './Dashboard/UsersChart';
import UsersTable from './Dashboard/UsersTable';
/*
class Home extends Component {
    render() {

        const layout = [
            {i:'A', x: 0, y: 0, w: 2, h: 6 },
            { i: 'B', x: 2, y: 0, w: 2, h: 6 },
            { i: 'C', x: 0, y: 3, w: 4, h: 6 },
            { i: 'D', x: 4, y: 0, w: 8, h: 12 }
        ]
        return(
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div className="arg-box" key="A" >Problems</div>
            <div className="arg-box" key="B" >Host</div>
            <div className="arg-box" key="C" >Incidents </div>
            <div className="arg-box" key="D" >FcmTable</div>>
            </GridLayout>
        );
    }
}
*/

class Home extends Component {
  render() {
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" className="box" data-grid={{ x: 0, y: 0, w: 2, h: 6 }}>a</div>
        <div key="b" className="box" data-grid={{x: 2, y: 0, w: 2, h: 6}}>b</div>
        <div key="c" className="box" data-grid={{ x: 0, y: 3, w: 4, h: 6 }}> <Chart /> </div>
        <div key="d" className="box" data-grid={{x: 4, y: 0, w: 8, h: 12 }}> <UsersTable /> </div>
      </GridLayout>
    )
  }
}
export default Home;