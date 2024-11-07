import React, { useEffect, useState } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableHead, TableRow,
  Pagination, FormControl, InputLabel, Select, MenuItem, Container, Paper,
  Box
} from '@mui/material';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSearchEntry } from '../Store/history';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterType, setFilterType] = useState('story');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      setSearchQuery(query);
    }
    fetchResults();
  }, [searchQuery, page, filterType]);

  const fetchResults = async () => {
    let apiUrl = `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=${filterType}&page=${page - 1}`;

    try {
      const response = await axios.get(apiUrl);
      setResults(response.data.hits);
      setTotalPages(response.data.nbPages);
      if (searchQuery) {
        const timestamp = new Date().toLocaleString();
        const newEntry = { query: searchQuery, timestamp };
        console.log(newEntry);
        
        dispatch(addSearchEntry(newEntry));
      }
    } catch (error) {
      console.error("Failed to fetch results:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
    navigate(`?query=${e.target.value}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setSearchQuery('');
    setPage(1);
  };

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Filter By</InputLabel>
        <Select value={filterType} onChange={handleFilterChange}>
          <MenuItem value="story">All stories matching query</MenuItem>
          <MenuItem value="comment">All comments matching query</MenuItem>
          <MenuItem value="url">All URLs matching query</MenuItem>
          <MenuItem value="front_page">Stories on front page</MenuItem>
        </Select>
      </FormControl>

      <Table component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((item) => (
            <TableRow key={item.objectID}>
              <TableCell>
                <Link to={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>
                <Link to={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <Pagination
    count={totalPages}
    page={page}
    onChange={handlePageChange}
  />
</Box>

    </Container>
  );
}

export default Dashboard;
