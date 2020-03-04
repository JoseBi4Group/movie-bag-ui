import React from 'react'

const Users = ({ users }) => {
  return (
    <div>
      <center><h1>User List</h1></center>
      {users.map((user) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{user.email}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Users