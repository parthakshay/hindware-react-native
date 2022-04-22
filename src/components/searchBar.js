import React from 'react';
import { SearchBar } from 'react-native-elements';

class SearchBar extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}

export default SearchBar