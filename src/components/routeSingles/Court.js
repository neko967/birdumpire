import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';


export default function Court( {rightPoint, rightIsServer, 
                                leftPoint, leftIsServer, 
                                isStart, 
                                leftPlayer, setLeftPlayer, leftSorR, setLeftSorR,
                                rightPlayer, setRightPlayer, rightSorR, setRightSorR,
                                isPlayerChanged, setIsPlayerChanged }) {

  function handlePlayerChange () {
    setLeftPlayer(rightPlayer);
    setRightPlayer(leftPlayer);
    setLeftSorR(rightSorR);
    setRightSorR(leftSorR);

    if (isPlayerChanged) {
      setIsPlayerChanged(false);
    } else {
      setIsPlayerChanged(true);
    }
  }
  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <div className="courtSquare">
              <LeftUpCourt leftPoint={leftPoint} 
                           leftIsServer={leftIsServer} 
                           leftPlayer={leftPlayer} 
                           rightPoint={rightPoint}
              />
            </div>
            <div className="courtSquare">
              <LeftDownCourt leftPoint={leftPoint} 
                             leftIsServer={leftIsServer} 
                             leftPlayer={leftPlayer} 
                             rightPoint={rightPoint}
              />
            </div>
          </Grid>
          <Grid xs={2}>
            {!isStart &&
              <Fab 
                size="small" 
                color="primary" 
                aria-label="add" 
                line-height="100" 
                sx={{ mt: {xs:9.5, sm:14.5, md:19.5} }}
                onClick={() => handlePlayerChange()}
              >
                <SwapHorizIcon/>
              </Fab>
            }
          </Grid>
          <Grid xs={5}>
            <div className="courtSquare">
              <RightUpCourt rightPoint={rightPoint} 
                            rightIsServer={rightIsServer} 
                            rightPlayer={rightPlayer} 
                            leftPoint={leftPoint}
              />
            </div>
            <div className="courtSquare">
              <RightDownCourt rightPoint={rightPoint} 
                              rightIsServer={rightIsServer} 
                              rightPlayer={rightPlayer} 
                              leftPoint={leftPoint}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt({leftPoint, leftIsServer, leftPlayer, rightPoint}) {
  
  return(
    <>
      {leftIsServer && leftPoint%2 === 1 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
          <div className="playerName">
            {leftPlayer}
          </div>
        </Box>
        : !leftIsServer && rightPoint%2 === 1 ?
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
            <div className="playerName">
              {leftPlayer}
            </div>
          </Box>
          :
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}></Box>
      }
    </>
  );
}

function LeftDownCourt({leftPoint, leftIsServer, leftPlayer, rightPoint}) {
  return(
    <>
      {leftIsServer && leftPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
          <div className="playerName">
            {leftPlayer}
          </div>
        </Box>
        : !leftIsServer && rightPoint%2 ===0 ?
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
            <div className="playerName">
              {leftPlayer}
            </div>
          </Box>
          :
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}></Box>
      }
    </>
  );
}

function RightUpCourt({rightPoint, rightIsServer, rightPlayer, leftPoint}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
          <div className="playerName">
            {rightPlayer}
          </div>
        </Box>
        : !rightIsServer && leftPoint%2 ===0 ?
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
            <div className="playerName">
              {rightPlayer}
            </div>
          </Box>
          :
          <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}></Box>
      }
    </>
  );
}

function RightDownCourt({rightPoint, rightIsServer, rightPlayer, leftPoint}) {
  return(
    <>
      {rightIsServer && rightPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
        <div className="playerName">
          {rightPlayer}
        </div>
      </Box>
      : !rightIsServer && leftPoint%2 === 1 ?
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
          <div className="playerName">
            {rightPlayer}
          </div>
        </Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}></Box>
      }
    </>
  );
}
