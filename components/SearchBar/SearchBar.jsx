
import React, { Fragment } from 'react';
import { TextInput } from 'react-native';

export const SearchBar = ({ query, setQuery }) => {
    
    return (
        <Fragment>
            <TextInput 
                className='h-10 w-11/12 rounded-md mt-5 mb-5 bg-white border border-cyan-500 p-2'
                type="text"
                placeholder='Search a Pokemon'
                value={query}
                onChangeText={setQuery}
            />
        </Fragment>
    );
};
