import React from 'react';
import {Text} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
    return 'Mr. ' + firstName + ' ' + secondName + ' ' + thirdName;
  };

const Cat = () => {
  return <Text>Hello, I am {getFullName('Super', 'Meow', 'Cat')}!</Text>;
};

export default Cat;