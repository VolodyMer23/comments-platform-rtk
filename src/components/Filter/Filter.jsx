import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';
import { useDebounce } from "../../helpers/useDebounce";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  
  const useDebounceValue = useDebounce(filter, 500);
  
  const handleChange = (e) => {
    setFilter(e.target.value);
    
  }
  
  useEffect(() => {
    dispatch(setFilterValue(useDebounceValue));
  }, [useDebounceValue]);


  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
