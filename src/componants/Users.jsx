import { useLoaderData } from "react-router-dom";

  
const Users = () => {

    const loadeduser = useLoaderData();

    
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
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
        loadeduser.map(user =>
         
            <tr key={ user._id}>
        <th>1</th>
        <td>{ user.email}</td>
        <td>{ user.createdAt}</td>
        <td>{user._id}</td>
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