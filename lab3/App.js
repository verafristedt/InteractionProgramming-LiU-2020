import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { GITHUB_ACCESS_TOKEN, GITHUB_ACCESS_TOKEN_NR2 } from '@env';
import HomeScreen from './src/screens/HomeScreen';
import RepoScreen from './src/screens/RepoScreen';
import { screenOptions } from './src/components/Styles';

const Stack = createStackNavigator();

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: GITHUB_ACCESS_TOKEN_NR2 ? `Bearer ${GITHUB_ACCESS_TOKEN_NR2}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {  
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Trending repositories' }}
          />
          <Stack.Screen
            name="Repo"
            component={RepoScreen}
            options={{ title: 'RepoScreen' }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>     
    </ApolloProvider>
  );
}

export default App;