import React, { useState } from "react";
import api from "../api";

const Users = () => {
  console.log(api.users.fetchAll())
  const [users, setUsers] = useState(api.users.fetchAll());
  const clasess = users.length > 0 ? "badge bg-primary": "badge bg-danger"
 

  const handleDelete = (userId) => {
    setUsers(prevState => ( prevState.filter(user => user._id != userId)
    ));
  
  };

  const renderPhrase = (number) => {
    
  if(number > 4){
    return number + " человек тусанет с тобой сегодня"
  } if(number<=4 && number>1){
    return number + " человека тусанут с тобой сегодня"
  } else if(number === 1){
    return number + " человек тусанет с тобой сегодня"
  } else{
    return "никто не тусанет с тобой"
  }
  };


  return <>
   <h2><span className={clasess}> {renderPhrase(users.length)}</span></h2>
  {users.length>0&&<table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился,раз</th>
      <th scope="col">Оценка</th>
    </tr>
  </thead>
  <tbody>
      
     { users.map((user)=>{
        return(
          <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.qualities.map((quality)=>{ 
            return <span key={quality._id} 
            className={`badge bg-${quality.color} me-2`}>{quality.name}</span>})}
            </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td><button type="button" className="btn btn-danger" onClick={()=>{handleDelete(user._id)}}>delete</button></td>
          </tr>
        )
    
      })}
  </tbody>
</table>}
  </>
   
};

export default Users;
