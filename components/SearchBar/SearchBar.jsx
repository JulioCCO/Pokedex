
import React, { Fragment } from 'react';
import { TextInput } from 'react-native';

export const SearchBar = ({ query, setQuery }) => {
    
    return (
        <Fragment>
            <TextInput 
                className='h-10 rounded-md  mb-10 mt-5 bg-white'
                type="text"
                placeholder='Search a Pokemon'
                value={query}
                // onChangeText={(event) => setQuery(event.target.value)}
                onChangeText={setQuery}
                
            />
            
        </Fragment>
    );
};
