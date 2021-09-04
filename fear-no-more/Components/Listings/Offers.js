import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListingCard from './ListingCard';

const useStyles = makeStyles(() => ({
  filter: {
    marginBottom: '3rem'
  }
}));

const options = ['All', 'Bills', 'Food', 'Homegoods', 'Housing'];

export default function FilterComponent () {
  const classes = useStyles();
  const [nextPage, setPage] = useState(0);
  const [listEnd, setListEnd] = useState(false);
  const [listBegin, setListBegin] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [listData, setListData] = useState([]);
  const [limit] = useState(parseInt(listData.length / 5));
  let projectList = listData.slice(nextPage, nextPage + 5);

  useEffect(() => {
    async function fetchData() {
      const noQuery = await axios.get(`http://18.222.198.9/api/listings/offers`)
        .then(({data}) => {
          setListData(data);
        })
        .catch((error) => {
          console.error(`ERROR :!:!:! ${error}`);
        });
    }
    fetchData();
  }, []);

  const [listFiltered, setListFiltered] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  function filterByCategory(option) {
    let results = [];
    let optionNormalize = option.charAt(0).toLowerCase() + option.slice(1);

    if (optionNormalize === 'all') {
      setListFiltered(false);
    } else {
      setListFiltered(true);
    }

    function fetchData() {
      const getFilteredData = axios.get(`http://18.222.198.9/api/listings/offers`, {
        params: {
          category: `${optionNormalize}`
        }
      })
        .then(({ data }) => {
          setFilteredList(data);
        })
        .catch((error) => {
          console.error(`ERROR :!:!:! ${error}`);
        });
    }
    fetchData();
  }

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event, option, index) => {
    setSelectedIndex(index);
    setOpen(false);
    filterByCategory(option);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function incrementPage() {
    setPageNumber(pageNumber + 1);
    setPage(nextPage + 5);
    setListBegin(false);
    if (pageNumber >= 3) {
      setListEnd(true);
    }
  }

  function decrementPage() {
    setPage(nextPage - 5);
    setPageNumber(pageNumber - 1);
    setListEnd(false);
    if (pageNumber <= 2) {
      setListBegin(true);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.root} style={{ width: '800px'}} >
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 40px 0 40px' }} >
            <ButtonGroup className={classes.filter} variant="contained" color="primary" ref={anchorRef} aria-label="split button">
              <Button>{options[selectedIndex]}</Button>
              <Button
                color="primary"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}>
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup className={classes.filter} variant="contained" color="primary" aria-label="split button">
            <Button href="/listings/create">Create Listing</Button>
          </ButtonGroup>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',  }} >
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, option, index)}>
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={0}>
            {!listFiltered
              ? projectList.map((item, idx) => {
                let slicedWords = item.body.slice(0, 150);
                return (
                  <ListingCard
                    key={idx}
                    id={item.id}
                    body={`${slicedWords}...`}
                    category={item.category.toUpperCase()}
                    photo={item.photo}
                    title={item.title} />
                )
              }) : filteredList.map((item, idx) => {
                let slicedWords = item.body.slice(0, 150);
                return (
                  <ListingCard
                    key={idx}
                    id={item.id}
                    body={`${slicedWords}...`}
                    category={item.category.toUpperCase()}
                    photo={item.photo}
                    title={item.title} />
                )
              })}
          </Grid>
          <Grid
            container
            justifyContent='center'>
            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                disabled={listBegin}
                onClick={() => decrementPage()}>Back</Button>
            </ButtonGroup>
            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                backgroundColor='primary'
                disableRipple={true}>Page : {pageNumber}</Button>
            </ButtonGroup>
            <ButtonGroup
              className={classes.fixed}
              variant="contained"
              style={{margin: '10px 10px 30px 10px'}}
              color="primary">
              <Button
                disabled={listEnd}
                onClick={() => incrementPage()}>Next</Button>
            </ButtonGroup>
          </Grid>
        </div>
      </div>
  );
}