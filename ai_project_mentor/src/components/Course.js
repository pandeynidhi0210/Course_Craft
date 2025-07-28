import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Course = ({ course, update }) => {
  
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id); // inform parent to update state
      },
      (error) => {
        toast.error("Delete failed");
      }
    );
  };

  const handleUpdate = () => {
    localStorage.setItem('editCourse', JSON.stringify(course));
    window.location.href = "/add-course"; // navigate to update form
  };

  return (
    <Card className='text-center'>
      <CardBody>
        <CardTitle className='fw-bold'>{course.title}</CardTitle>
        <CardSubtitle className='mb-2 text-muted'>ID: {course.id}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Button color='danger' onClick={() => deleteCourse(course.id)} className='me-2'>Delete</Button>
        <Button color='warning' onClick={handleUpdate}>Update</Button>
      </CardBody>
    </Card>
  );
};

export default Course;
