import React from 'react'
import { useContext } from 'react';
import UsersContext from '../../Contexts/usersContext';

const UsersScreen = () => {

   const { users } = useContext(UsersContext);

  return (
    <div>UsersScreen
      <button onClick={() => { console.log(users); }}>Show users!</button>
    </div>
  )
}

export default UsersScreen