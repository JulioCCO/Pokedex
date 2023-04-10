
import { TextInput, ScrollView } from 'react-native';
import React from 'react';

export const SearchBar = ({ query, setQuery }) => {

    return (
            <TextInput 
                className='h-10 rounded-sm border-2 border-black mb-10 mt-5 bg-white'
                type="text"
                placeholder='Search a Pokemon'
                value={query}
                onChangeText={(event) => setQuery(event.target.value)}
            />
    );
};
