import React, { FC } from 'react'
import SimpleLineChart from './components/SimpleLineChart'
import SimpleRadarChart from './components/SimpleRadarChart'
import DataList from './components/DataList'

const App: FC = () => (
  <>
    <div className='charts'>
      <SimpleLineChart />
      <SimpleRadarChart />
    </div>
    <div className='data-list'>
      <DataList />
    </div>
  </>
)

export default App
