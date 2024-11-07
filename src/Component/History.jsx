import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInitialHistory } from '../Store/history';
import { IconButton, Typography, List, ListItem, ListItemText } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

function History() {
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.searchHistory.history);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    dispatch(loadInitialHistory(history));
  }, [dispatch]);

  return (
    <div style={{ marginTop: '30px' }}>
      <Typography variant="h6">Search History</Typography>
      <IconButton color="primary" aria-label="search history">
        <HistoryIcon />
      </IconButton>
      <List>
        {searchHistory.map((entry, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={entry.query}
              secondary={`Searched on: ${entry.timestamp}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default History;
