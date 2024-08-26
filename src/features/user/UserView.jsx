import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchUsers())
  },[])
  return (
    <>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div>: null}
      <div>List of Users {user.length}</div>
      {!user.loading && user.users.length > 0 ?(
        <ul>
          {
            user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
          }
        </ul>
      ): null}
    </>
  )
}
