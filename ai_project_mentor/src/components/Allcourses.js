import React, { useEffect, useState } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses";
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        setCourses(response.data);
      },
      (error) => {
        toast.error("Failed to load courses");
      }
    );
  };

  const removeCourseById = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2 className='text-center'>All Courses</h2>
      <p className='text-center'>List of courses are as follows:</p>
      {
        courses.length > 0 ? 
          courses.map(course => (
            <Course key={course.id} course={course} update={removeCourseById} />
          )) : 
          <p>No courses available</p>
      }
    </div>
  );
};

export default Allcourses;
