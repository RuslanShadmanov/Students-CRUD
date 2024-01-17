import React, { useEffect,useState } from 'react'
import { Container, Table,Spinner } from "reactstrap";
import  {fetchData} from './utils/apiCalls/getData';
import SingleStudent from './SingleStudent';
import { deleteData } from './utils/apiCalls/deleteData';

export default function Students() {
  const [students, setStudents]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const fetchAndSetState = async()=>{
     setIsLoading(true)
    
    setStudents(await fetchData())
    setIsLoading(false);
  };

  useEffect(()=>{
    
    // fetchData().then((data)=>setStudents(data))
    // IIFE (imediately invoke function expression) (async()=>{setStudents(await fetchData())})()
   fetchAndSetState();
  },[])

  const handleStudentDelete =(id)=>{
    deleteData(id).then((data)=> {console.log("Successfulle deleted student", data)
    fetchAndSetState()
  })
  }

  return (
    <Container className='border p-2'>
      {
        students.length === 0 && isLoading ? (  <Spinner color="primary">
  Loading...
</Spinner>) :(<Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student,index)=>{
              return (
                <SingleStudent
                  handleStudentDelete={handleStudentDelete}
                  key={student.id}
                  {...student}
                  index={index}
                />
              );
             
              })}
            
          </tbody>
        </Table>)
      }
      
        
      </Container>
  )
}
