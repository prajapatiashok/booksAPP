import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen, {IBook} from '../screens/HomeScreen';
import SingleBook from '../screens/SingleBook';

export type RootStackParamList = {
  Home: undefined;
  SingleBook: {
    item: IBook;
  };
};

export type SingleBookParams = {
  item: IBook;
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'white',
  },
};

export const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="SingleBook"
          component={SingleBook}
          options={({route}) => ({title: route.params.item.title})}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
