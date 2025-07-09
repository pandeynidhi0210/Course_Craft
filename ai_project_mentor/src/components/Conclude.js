import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Conclude = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [course, setCourse] = useState({
    id: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    document.title = isEdit ? "Update Course" : "Add Course";
    const storedCourse = localStorage.getItem('editCourse');
    if (storedCourse) {
      setCourse(JSON.parse(storedCourse));
      setIsEdit(true);
      localStorage.removeItem('editCourse');
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    if (!course.id || !course.title || !course.description) {
      toast.error("All fields are required!");
      return;
    }

    if (isEdit) {
      updateCourse(course);
    } else {
      addCourse(course);
    }
  };

  const addCourse = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      () => {
        toast.success("Course added successfully");
        clearForm();
      },
      () => {
        toast.error("Failed to add course");
      }
    );
  };

  const updateCourse = (data) => {
    axios.put(`${base_url}/courses/${data.id}`, data).then(
      () => {
        toast.success("Course updated successfully");
        clearForm();
        setIsEdit(false);
      },
      () => {
        toast.error("Update failed");
      }
    );
  };

  const clearForm = () => {
    setCourse({ id: '', title: '', description: '' });
    setIsEdit(false);
  };

  return (
    <Container>
      <h1 className="text-center my-3">{isEdit ? "Update Course" : "Add Course"}</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="id">Course Id</Label>
          <Input
            type="text"
            name="id"
            id="id"
            placeholder="Enter Course ID"
            value={course.id}
            onChange={(e) => setCourse({ ...course, id: e.target.value })}
            disabled={isEdit}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter Description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </FormGroup>
        <Button type="submit" color="success" className="me-2">
          {isEdit ? "Update" : "Add"} Course
        </Button>
        <Button type="button" color="warning" onClick={clearForm}>
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default Conclude;
