import React, { useEffect, useState } from "react";
import { Container, Table, Spinner } from "reactstrap";
import { fetchData } from "./utils/apiCalls/getData";
import SingleStudent from "./SingleStudent";
import { deleteData } from "./utils/apiCalls/deleteData";
import AppModal from "./AppModal";

export default function Students({ searchQuery }) {
  const [students, setStudents] = useState([]);
  const [stId, setStId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const toggle = (id) => {
    setModal(!modal);
    setStId(id);
  };

  const fetchAndSetState = async () => {
    setIsLoading(true);

    setStudents(await fetchData());
    setIsLoading(false);
  };

  useEffect(() => {
    // fetchData().then((data)=>setStudents(data))
    // IIFE (imediately invoke function expression) (async()=>{setStudents(await fetchData())})()
    fetchAndSetState();
  }, []);

  const handleStudentDelete = (id) => {
    deleteData(id).then((data) => {
      console.log("Successfulle deleted student", data);
      fetchAndSetState();
    });
  };

  const filteredStudents = students.filter(
    (student) =>
      student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="border p-2">
      {filteredStudents.length === 0 && isLoading ? (
        <Spinner color="primary">Loading...</Spinner>
      ) : (
        <Table bordered hover responsive>
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
            {filteredStudents.map((student, index) => {
              return (
                <SingleStudent
                  toggle={toggle}
                  handleStudentDelete={handleStudentDelete}
                  key={student.id}
                  {...student}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      )}
      <AppModal
        stId={stId}
        modal={modal}
        toggle={toggle}
        handleStudentDelete={handleStudentDelete}
      />
    </Container>
  );
}
