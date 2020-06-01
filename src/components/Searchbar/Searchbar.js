import React from 'react';
import {Form} from 'semantic-ui-react'; 

const Searchbar = (props) => {

  const {handleSubmit} = props; 

  console.log('handleSubmit', handleSubmit)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        className='fullwidth' 
        name='search' 
        placeholder='Search ...' 
      />
    </Form>
  );
}

export default Searchbar;
