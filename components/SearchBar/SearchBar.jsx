
import React, { Fragment } from 'react';
import { TextInput } from 'react-native';

export const SearchBar = ({ query, setQuery }) => {
    
    return (
        <Fragment>
            <TextInput 
                className='h-10 rounded-md  mb-10 mt-5 bg-white mx-5 border  border-cyan-500 p-2'
                type="text"
                placeholder='Search a Pokemon'
                value={query}
                onChangeText={setQuery}
            />
        </Fragment>
    );
};
