/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import styled from 'styled-components';

const Bar2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 2px solid #F05252;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
margin: 1em 0;
padding: 1em 1em;
border-radius: 3px;
`;
const Button = styled.button`
color: white;
padding: 0 2em;
margin: 0 1em;
background: #F05252;
border: 2px solid #F05252;
border-radius: 3px;
`;
const List = styled.ul`
display: flex;
flex-direction: row;
justfy-content: space-between;
list-style-type: none;
margin: 0em 2em;
`;
const ListItem2 = styled(Button)`
color: #F05252;
background: white;

&:hover {
  background-color: #F05252;  
  color: white;
}
`;

class Footer extends Component {
  render() {
    return (
      <Bar2>
        <List>
          <ListItem2 as="a" href="/">T&C</ListItem2>
          <ListItem2 as="a" href="/">Careers</ListItem2>
          <ListItem2 as="a" href="/">Licence</ListItem2>
          <ListItem2 as="a" href="/">Boop</ListItem2>
        </List>
      </Bar2>
    );
  }
}

export default Footer;
