import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'ゲストA','ゲストB','ゲストC','ゲストD', 'ゲストE','ゲストF','ゲストG','ゲストH'
];


export default function DialogSelect({ singlesOpen, handleSinglesClose, setLeftPlayer, setRightPlayer, isAuth, isAdmin }) {
  const navigate = useNavigate();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function setPlayers (personName) {
    setLeftPlayer(personName[0]);
    setRightPlayer(personName[1]);
  }

  return (
    <div>
      <Dialog disableEscapeKeyDown open={singlesOpen} onClose={handleSinglesClose}>
        <DialogTitle>2人選んでください</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {isAuth || isAdmin ||
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">シングルス</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            }
            {isAuth &&
            <Paper>ログイン後は自分が登録したメンバーが出るように鋭意製作中です</Paper>
            }
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSinglesClose}>Cancel</Button>
          <Button onClick={() => {handleSinglesClose(); navigate('/singles'); setPlayers(personName); }}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}