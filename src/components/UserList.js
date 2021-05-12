import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { 
  ListGroup,
  ListGroupItem,
  Button
   } from "reactstrap";


export const UserList = () => {
    const {users, removeComment} = useContext(GlobalContext);
    //console.log(users);
    return (
      <ListGroup className="mt-4">
      {users.map(user => (
        <ListGroupItem className="d-flex">
          <strong>{user.name}</strong>
          <div className="m1-auto ">
            <Link className="btn btn-warning m-2" to={`/edit/${user.id}`}>Edit</Link>
            <Button onClick={() =>removeComment(user.id)} color="danger">Delete</Button>
          </div> 
        </ListGroupItem>

      ))  }  


      </ListGroup>    

    )
}
