import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link ,useHistory} from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import {  
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName ] = useState('');
  const { addComment } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit =() => {
    const newUser = {
      id: uuid(), 
      name
    }
    addComment(newUser);
    history.push('/');
  }

  const onChange = (e) => {
    setName(e.target.value);

  }

    return (
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Comment</Label>
          <Input type="text" value={name} onChange={onChange} placeholder="Enter Comment" ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger m-2">Cancel</Link>
      </Form>  
    )
}