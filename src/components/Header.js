import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyComponent = () => {
    const _goBack = () => console.log('Went back');

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" />
        </Appbar.Header>
    );
};

export default MyComponent;