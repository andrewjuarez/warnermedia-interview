import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../Actions/search.actions';
import {
    Form,
    FormControl,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';

export default function SearchBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, setQuery] = useState(''); // The query present in search bar
    const [changeDetected, setChangeDetected] = useState(false); // Track if change is detected to prevent duplicate responses to DB
    const { loading, results, success } = useSelector(state => state.search);

    /**
     * @description - Update the query and variable tracking change.
     * @param value {string} - New value entered by user.
     */
    const updateQuery = (value) => {
        setChangeDetected(true);
        setQuery(value)
    }

    /**
     * @description - Check if new query is detected, fetch results from API, if not display previous search results
     */
    const searchNow = () => {
        if (changeDetected && query) {
            setChangeDetected(false);
            dispatch(searchMovies(query));
        }
    }

    return (
        <Form className='d-flex'>
            <FormControl
                type='search'
                placeholder='Search by title'
                className='me-2'
                aria-label='Search'
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
            />
            <DropdownButton onClick={searchNow} onSelect={(eventKey) => navigate(`/details/${eventKey}`)} align="end" title="Search" id="dropdown-menu-align-end">
                {(loading) ?
                    <Dropdown.Item>
                        Loading..
                    </Dropdown.Item>
                    
                    :
                    results.map(result => (
                        <Dropdown.Item key={result.imdb_id} eventKey={result.imdb_id}>{result.year} | {result.title}</Dropdown.Item>
                    ))
                }
            </DropdownButton>
        </Form>
    );
}
