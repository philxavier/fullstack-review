import React from 'react';


const ListItem = (props) => (
    <div>
       <li>Name: {props.element.name}</li>
       <li>Size: {props.element.size}</li>
       <li>Forks Count: {props.element.forks_count}</li>
       <li><a href={props.element.html_url}>Url: {props.element.html_url}</a></li>
       <li>Watchers: {props.element.watchers}</li>
       <br></br>
    </div>
    
 )

export default ListItem;