import { useState } from "react";
import { useLoaderData } from "react-router-dom";

  
const Users = () => {

    const loadeduser = useLoaderData();

    const [users,setusers] = useState(loadeduser);

    const handledelete = id =>
    {

         fetch(`http://localhost:5000/user/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
        .then(data => {
           // console.log(data);
            if (data.deletedCount > 0) {
                console.log("deleted successful");

                const remaininguser = users.filter(user=>user._id !==id);
                setusers(remaininguser);
            }
        })
    
        


    }
    return (
        <div>
            <h1>This is user Side {loadeduser.length}</h1>

            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Time</th>
        <th>Last Logged in</th>
        <th>Favorite Color</th>
        <th> Delete</th>
      </tr>
    </thead>
    <tbody>
     {
         users.map(user =>
         
            <tr key={ user._id}>
        <th>1</th>
        <td>{ user.email}</td>
        <td>{ user.createdAt}</td>
        <td></td>
        <td>{user._id}</td>
        <td>

            <button 
            
            onClick={ ()=>handledelete(user._id)}
            className="btn"> X </button>

        </td>
       </tr>
         
        )
     }
       
     
       
       
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Users;