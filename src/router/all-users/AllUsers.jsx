import React from 'react'
import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import { store } from '../../context/store'

function AllUsers() {
  let users = useSelector(state => state.users.value)
 console.log(users);
  return (
    <div className='all__users'>
      {
        users.length ? <Users data={users}/> : <Empty/>
      }
    </div>
  )
}

export default AllUsers