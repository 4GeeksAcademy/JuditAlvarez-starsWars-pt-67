import axios from 'axios';
const instance = axios.create ({ baseURL: 'https://swapi.dev/api'});
export const getPeople = (page) => instance.get (`/people/?page)${page}`);