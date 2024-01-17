import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Button} from 'reactstrap';
import Search from './Search';

export default function Header() {
  return (
      
    <InputGroup className='w-50 my-2 mx-auto' >
    <Search/>
      <Button className='ms-2' color ="primary">Add New Student</Button>
    </InputGroup>
    )
}
