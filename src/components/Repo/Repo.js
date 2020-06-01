import React from 'react';
import {Card, Label, Icon} from 'semantic-ui-react'; 
import PropTypes from 'prop-types';

import './style.css'; 

const Repo = (props) => {

  const repo = props.repo; 

  const owner = repo.owner; 

  console.log('repo', repo);

  return (
    <Card>
      <Card.Content>
      <Card.Header>{repo.name}</Card.Header>
        <Card.Description>
          {repo.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {repo.watchers_count} watchers
        </a>
    </Card.Content>
    </Card>
    
  );
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  watchers_count: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired
}

export default Repo;
