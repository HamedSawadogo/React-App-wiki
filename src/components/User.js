import React from 'react';
import "../styles/user.css";

const User = ({user}) => {
   return (
      <div className='user'>
         <img src={user.picture.large} alt=""/>
         <h3>{user.name.first}{user.name.last}</h3>
         <p>habite à {user.location.city}</p>
         <small> devellopeur dépuis {user.registered.age}ans</small>
         <br/>
         <small>{user.registered.age>10?'❤️':'❤️❤️'}</small>
      </div>
   );
};

export default User;
