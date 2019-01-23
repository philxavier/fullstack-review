import React from 'react';
import ListItem from './ListItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    
    There are {props.repos.length} repos.
    <ul>
      <h4>Results based on Forks count</h4>
      {props.repos.map((ele, ind) => {
        return <ListItem key = {ind} element = {ele} />;
        
    })}
    </ul>
  </div>
)

export default RepoList;