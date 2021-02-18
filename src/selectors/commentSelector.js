import {  getPosts } from './postSelectors';

export const getComments = state => getPosts(state).length;
