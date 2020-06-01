// == Import npm
import React, {useState} from 'react';
import axios from 'axios'; 
import 'babel-polyfill'; 


// Composant 
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import RepoList from '../RepoList/RepoList';

// == Import
import './styles.css';
import 'semantic-ui-css/semantic.css'; 


import data from '../../data/repos'; 

// == Composant
const App = () => {


const [repos, setRepos] = useState([]); 
const [page, setPage] = useState(1); 


const handleSubmit = async (event) => {
  console.log('event', event.target.search.value); 
  try {

    // https://api.github.com/search/repositories?q=
    // https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9

    const search = event.target.search.value; 

    const results = await axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`); 

    console.log('results', results.data.items); 

    setRepos(results.data.items); 
     
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div className="app">
     <Header /> 
     <Searchbar handleSubmit={handleSubmit}/> 
     <RepoList repos={repos}/>
    </div>
  );
};

// == Export
export default App;
