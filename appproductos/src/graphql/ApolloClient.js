import ApolloClient from 'apollo-boost';
//import App from '../App';

export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    //uri: 'https://rickandmortyapi.com/graphql'
});