import React, {useState} from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";

const App = ()=>{
     const [users, setUsers] = useState(api.users.fetchAll());
     
     const handleDelete = (userId) => {
          setUsers(prevState => ( prevState.filter(user => user._id !== userId)
          ));
        };

     const handleToogleBookmark=(id)=>{
           setUsers(users.map(user=>{
                if(user._id===id){
                     user.bookmark=!user.bookmark
                }
                return user
           }))
     }

   
     return <>
          <SearchStatus length={users.length}/>
          <Users users={users} handleDelete={handleDelete} handleToogleBookmark={handleToogleBookmark} />
          </>
}
  

export default App;