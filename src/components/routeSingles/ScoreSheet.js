import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function ScoreSheet ({ currentSquares, leftPlayer, leftSorR, rightPlayer, rightSorR, isPlayerChanged }) {

  return (
    <div className="scoreSheet">
      <Box sx={{ display: 'fix', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 1800, height: 112, }, }} >
        <Paper variant="outlined" square>
        <div className="board-row">
          <UpPlayerInScoreSheet leftPlayer={leftPlayer} rightPlayer={rightPlayer} isPlayerChanged={isPlayerChanged}/>
          <UpSorR leftSorR={leftSorR}/>
          <LeftUpPointInScoreSheet squares={currentSquares[0]}/>
        </div>
        <Divider />
        <div className="board-row">
          <DownPlayerInScoreSheet leftPlayer={leftPlayer} rightPlayer={rightPlayer} isPlayerChanged={isPlayerChanged}/>
          <DownSorR rightSorR={rightSorR}/>
          <RightUpPointInScoreSheet squares={currentSquares[1]}/>
        </div>
        </Paper>
      </Box>
    </div>
  );
}

function UpPlayerInScoreSheet ({leftPlayer, rightPlayer, isPlayerChanged}) {
  return (
    <>
      {!isPlayerChanged ? 
        <button className="singlesNameSquare">{leftPlayer}</button>
        :
        <button className="singlesNameSquare">{rightPlayer}</button>
      }
    </>
  );
}

function UpSorR ({leftSorR}) {
  return (
    <>
      <button className="singlesSquare">{leftSorR}</button>
    </>
  );
}

function DownPlayerInScoreSheet ({leftPlayer, rightPlayer, isPlayerChanged}) {
  return (
    <>
      {!isPlayerChanged ? 
        <button className="singlesNameSquare">{rightPlayer}</button>
        :
        <button className="singlesNameSquare">{leftPlayer}</button>
      }
    </>
  );
}

function DownSorR ({rightSorR}) {
  return (
    <>
      <button className="singlesSquare">{rightSorR}</button>
    </>
  );
}

function LeftUpPointInScoreSheet ({squares})  {

  return (
    <>
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
      <Square value={squares[9]} />
      <Square value={squares[10]} />
      <Square value={squares[11]} />
      <Square value={squares[12]} />
      <Square value={squares[13]} />
      <Square value={squares[14]} />
      <Square value={squares[15]} />
      <Square value={squares[16]} />
      <Square value={squares[17]} />
      <Square value={squares[18]} />
      <Square value={squares[19]} />
      <Square value={squares[20]} />
      <Square value={squares[21]} />
      <Square value={squares[22]} />
      <Square value={squares[23]} />
      <Square value={squares[24]} />
      <Square value={squares[25]} />
      <Square value={squares[26]} />
      <Square value={squares[27]} />
      <Square value={squares[28]} />
      <Square value={squares[29]} />
      <Square value={squares[30]} />
      <Square value={squares[31]} />
      <Square value={squares[32]} />
      <Square value={squares[33]} />
      <Square value={squares[34]} />
      <Square value={squares[35]} />
      <Square value={squares[36]} />
      <Square value={squares[37]} />
      <Square value={squares[38]} />
      <Square value={squares[39]} />
      <Square value={squares[40]} />
      <Square value={squares[41]} />
      <Square value={squares[42]} />
      <Square value={squares[43]} />
      <Square value={squares[44]} />
      <Square value={squares[45]} />
      <Square value={squares[46]} />
      <Square value={squares[47]} />
      <Square value={squares[48]} />
      <Square value={squares[49]} />
      <Square value={squares[50]} />
      <Square value={squares[51]} />
      <Square value={squares[52]} />
      <Square value={squares[53]} />
      <Square value={squares[54]} />
      <Square value={squares[55]} />
      <Square value={squares[56]} />
      <Square value={squares[57]} />
      <Square value={squares[58]} />
      <Square value={squares[59]} />
    </>
  );
}

function RightUpPointInScoreSheet ({squares})  {


  return (
    <>
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
      <Square value={squares[9]} />
      <Square value={squares[10]} />
      <Square value={squares[11]} />
      <Square value={squares[12]} />
      <Square value={squares[13]} />
      <Square value={squares[14]} />
      <Square value={squares[15]} />
      <Square value={squares[16]} />
      <Square value={squares[17]} />
      <Square value={squares[18]} />
      <Square value={squares[19]} />
      <Square value={squares[20]} />
      <Square value={squares[21]} />
      <Square value={squares[22]} />
      <Square value={squares[23]} />
      <Square value={squares[24]} />
      <Square value={squares[25]} />
      <Square value={squares[26]} />
      <Square value={squares[27]} />
      <Square value={squares[28]} />
      <Square value={squares[29]} />
      <Square value={squares[30]} />
      <Square value={squares[31]} />
      <Square value={squares[32]} />
      <Square value={squares[33]} />
      <Square value={squares[34]} />
      <Square value={squares[35]} />
      <Square value={squares[36]} />
      <Square value={squares[37]} />
      <Square value={squares[38]} />
      <Square value={squares[39]} />
      <Square value={squares[40]} />
      <Square value={squares[41]} />
      <Square value={squares[42]} />
      <Square value={squares[43]} />
      <Square value={squares[44]} />
      <Square value={squares[45]} />
      <Square value={squares[46]} />
      <Square value={squares[47]} />
      <Square value={squares[48]} />
      <Square value={squares[49]} />
      <Square value={squares[50]} />
      <Square value={squares[51]} />
      <Square value={squares[52]} />
      <Square value={squares[53]} />
      <Square value={squares[54]} />
      <Square value={squares[55]} />
      <Square value={squares[56]} />
      <Square value={squares[57]} />
      <Square value={squares[58]} />
      <Square value={squares[59]} />
    </>
  );
}

function Square ({ value, onSquareClick }) {

  return <button className="singlesSquare" onClick={onSquareClick}>{ value }</button>;
}