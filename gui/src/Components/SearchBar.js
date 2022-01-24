import React, { useState } from 'react';
import {
    Button,
    Form,
    FormControl,
} from 'react-bootstrap';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    return (
        <Form className='d-flex'>
            <FormControl
                type='search'
                placeholder='Search by title'
                className='me-2'
                aria-label='Search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={() => console.log(query)} variant='outline-success'>Search</Button>
        </Form>
    );
}
