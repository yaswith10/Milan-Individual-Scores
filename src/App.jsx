import { useState } from 'react'
import { CricketScores } from './CricketScores'
import { FootballScore } from './FootballScore'
import { BadmintonScore } from './BadmintonScore'

function App() {

  return (
    <>
      <CricketScores/>
      <br />
      <hr />
      <br />
      <FootballScore/>
      <br />
      <hr/>
      <br />
      <BadmintonScore/>
    </>
  )
}

export default App
