import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function Court( {rightPoint, rightIsServer, 
                                leftPoint, leftIsServer,
                                leftUpPlayer, setLeftUpPlayer,
                                leftDownPlayer, setLeftDownPlayer,
                                rightUpPlayer, setRightUpPlayer,
                                rightDownPlayer, setRightDownPlayer,
                                isStart,
                                manipulated_0, setManipulated_0,
                                manipulated_1, setManipulated_1,
                                manipulated_2, setManipulated_2,
                                manipulated_3, setManipulated_3,
                                isHorizPlayerChanged, setIsHorizPlayerChanged,
                                isLeftVertPlayerChanged, setIsLeftvertPlayerChanged,
                                isRightVertPlayerChanged, setIsRightVertPlayerChanged,
                                leftConsecutivePointSwitch, rightConsecutivePointSwitch}) {

  function handleHorizontalPlayerChange () {
    if (isLeftVertPlayerChanged === isRightVertPlayerChanged) {
      setManipulated_0(manipulated_2);
      setManipulated_2(manipulated_0);
      setManipulated_1(manipulated_3);
      setManipulated_3(manipulated_1);
    } else {
      setManipulated_1(manipulated_2);
      setManipulated_2(manipulated_1);
      setManipulated_0(manipulated_3);
      setManipulated_3(manipulated_0);
    }
    setLeftUpPlayer(rightUpPlayer);
    setLeftDownPlayer(rightDownPlayer);
    setRightUpPlayer(leftUpPlayer);
    setRightDownPlayer(leftDownPlayer);
    if (isHorizPlayerChanged) {
      setIsHorizPlayerChanged(false);
    } else {
      setIsHorizPlayerChanged(true);
    }
  }

  function handleLeftVerticalPlayerChange () {
    if (isHorizPlayerChanged) {
      setManipulated_2(manipulated_3);
      setManipulated_3(manipulated_2);
    } else {
      setManipulated_0(manipulated_1);
      setManipulated_1(manipulated_0);
    }
    setLeftUpPlayer(leftDownPlayer);
    setLeftDownPlayer(leftUpPlayer);
    if (isLeftVertPlayerChanged) {
      setIsLeftvertPlayerChanged(false);
    } else {
      setIsLeftvertPlayerChanged(true);
    }
  }

  function handleRightVerticalPlayerChange () {
    if (isHorizPlayerChanged) {
      setManipulated_0(manipulated_1);
      setManipulated_1(manipulated_0);
    } else {
      setManipulated_2(manipulated_3);
      setManipulated_3(manipulated_2);
    }
    setRightUpPlayer(rightDownPlayer);
    setRightDownPlayer(rightUpPlayer);
    if (isRightVertPlayerChanged) {
      setIsRightVertPlayerChanged(false);
    } else {
      setIsRightVertPlayerChanged(true);
    }
  }

  return (
    <div>
      <Box sx={{ height: {xs:200, sm:280, md:360}, backgroundColor: 'white', mt: 0.5 }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <div className="Court">
              {!isStart &&
              <div className="switchVerticalButton">
                <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add" 
                  line-height="0" 
                  sx={{ mt: {xs:9.5, sm:14.5, md:19.5} }}
                  onClick={() => handleLeftVerticalPlayerChange()}
                >
                  <SwapVertIcon/>
                </Fab>
              </div>
              }
              <LeftUpCourt leftPoint={leftPoint} 
                           leftIsServer={leftIsServer} 
                           leftUpPlayer={leftUpPlayer}
                           leftDownPlayer={leftDownPlayer}
                           leftConsecutivePointSwitch={leftConsecutivePointSwitch}
              />
              <LeftDownCourt leftPoint={leftPoint} 
                             leftIsServer={leftIsServer} 
                             leftUpPlayer={leftUpPlayer}
                             leftDownPlayer={leftDownPlayer}
                             leftConsecutivePointSwitch={leftConsecutivePointSwitch}
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
                onClick={() => handleHorizontalPlayerChange()}
              >
                <SwapHorizIcon/>
              </Fab>
            }
          </Grid>
          <Grid xs={5}>
            <div className="Court">
              {!isStart &&
               <div className="switchVerticalButton">
                <Fab 
                  size="small" 
                  color="secondary" 
                  aria-label="add" 
                  line-height="0" 
                  sx={{ mt: {xs:9.5, sm:14.5, md:19.5}, position: 'absolute' }}
                  onClick={() => handleRightVerticalPlayerChange()}
                >
                  <SwapVertIcon/>
                </Fab>
              </div>
              }
              <RightUpCourt rightPoint={rightPoint} 
                            rightIsServer={rightIsServer} 
                            rightUpPlayer={rightUpPlayer}
                            rightDownPlayer={rightDownPlayer}
                            rightConsecutivePointSwitch={rightConsecutivePointSwitch}
              />
              <RightDownCourt rightPoint={rightPoint} 
                              rightIsServer={rightIsServer} 
                              rightUpPlayer={rightUpPlayer}
                              rightDownPlayer={rightDownPlayer}
                              rightConsecutivePointSwitch={rightConsecutivePointSwitch}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function LeftUpCourt({leftPoint, leftIsServer, leftUpPlayer, leftDownPlayer, leftConsecutivePointSwitch}) {
  return(
    <div className="courtSquare">
      {leftIsServer && leftPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
        <LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}
                               leftDownPlayer={leftDownPlayer}
                               leftConsecutivePointSwitch={leftConsecutivePointSwitch}
        />
      </Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
        <LeftUpCourtPlayerName leftUpPlayer={leftUpPlayer}
                               leftDownPlayer={leftDownPlayer}
                               leftConsecutivePointSwitch={leftConsecutivePointSwitch}
        />
      </Box>
    }
    </div>
  );
}

function LeftUpCourtPlayerName ({leftUpPlayer, leftDownPlayer, leftConsecutivePointSwitch}) {
  return (
    <>
      {leftConsecutivePointSwitch ?
        <div className="playerName">
          {leftDownPlayer}
        </div>
      :
        <div className="playerName">
          {leftUpPlayer}
        </div>
      }
    </>
  );
}

function LeftDownCourt({leftPoint, leftIsServer, leftUpPlayer, leftDownPlayer, leftConsecutivePointSwitch}) {
  return(
    <div className="courtSquare">
      {leftIsServer && leftPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
          <LeftDownCourtPlayerName leftUpPlayer={leftUpPlayer}
                                   leftDownPlayer={leftDownPlayer}
                                   leftConsecutivePointSwitch={leftConsecutivePointSwitch}
          />
        </Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
          <LeftDownCourtPlayerName leftUpPlayer={leftUpPlayer}
                                   leftDownPlayer={leftDownPlayer}
                                   leftConsecutivePointSwitch={leftConsecutivePointSwitch}
          />
        </Box>
      }
    </div>
  );
}

function LeftDownCourtPlayerName ({leftUpPlayer, leftDownPlayer, leftConsecutivePointSwitch}) {
  return (
    <>
      {leftConsecutivePointSwitch ?
        <div className="playerName">
          {leftUpPlayer}
        </div>
      :
        <div className="playerName">
          {leftDownPlayer}
        </div>
      }
    </>
  );
}

function RightUpCourt({rightPoint, rightIsServer, rightUpPlayer, rightDownPlayer, rightConsecutivePointSwitch}) {
  return(
    <div className="courtSquare">
      {rightIsServer && rightPoint%2 === 0 ? 
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
          <RightUpCourtPlayerName rightUpPlayer={rightUpPlayer}
                                  rightDownPlayer={rightDownPlayer}
                                  rightConsecutivePointSwitch={rightConsecutivePointSwitch}
          />
        </Box>
        :
        <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
          <RightUpCourtPlayerName rightUpPlayer={rightUpPlayer} 
                                  rightDownPlayer={rightDownPlayer}
                                  rightConsecutivePointSwitch={rightConsecutivePointSwitch}
          />
        </Box>
      }
    </div>
  );
}

function RightUpCourtPlayerName ({rightUpPlayer, rightDownPlayer, rightConsecutivePointSwitch}) {
  return (
    <>
      {rightConsecutivePointSwitch ?
        <div className="playerName">
          {rightDownPlayer}
        </div>
      :
        <div className="playerName">
          {rightUpPlayer}
        </div>
      }
    </>
  );
}

function RightDownCourt({rightPoint, rightIsServer, rightUpPlayer, rightDownPlayer, rightConsecutivePointSwitch}) {
  return(
    <div className="courtSquare">
      {rightIsServer && rightPoint%2 === 1 ? 
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'red', border: 0.01}}>
        <RightDownCourtPlayerName rightUpPlayer={rightUpPlayer} 
                                  rightDownPlayer={rightDownPlayer}
                                  rightConsecutivePointSwitch={rightConsecutivePointSwitch}
        />
      </Box>
      :
      <Box sx={{ height: {xs:96, sm:136, md:176}, backgroundColor: 'white', border: 0.01}}>
        <RightDownCourtPlayerName rightUpPlayer={rightUpPlayer} 
                                  rightDownPlayer={rightDownPlayer}
                                  rightConsecutivePointSwitch={rightConsecutivePointSwitch}
        />
      </Box>
      }
    </div>
  );
}

function RightDownCourtPlayerName ({rightUpPlayer, rightDownPlayer, rightConsecutivePointSwitch}) {
  return (
    <>
      {rightConsecutivePointSwitch ?
        <div className="playerName">
          {rightUpPlayer}
        </div>
      :
        <div className="playerName">
          {rightDownPlayer}
        </div>
      }
    </>
  );
}
