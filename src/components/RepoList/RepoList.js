import React from 'react';
import {List} from 'semantic-ui-react'; 

import Repo from '../Repo/Repo';

const RepoList = (props) => {

  const {repos} = props; 

  

  return (
    <List>
      {repos.map(repo => <Repo key={repo.id} repo-id={repo.id} repo={repo}/>)}
    </List>
     
  );
}

export default RepoList;
