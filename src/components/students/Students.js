import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./student.css";

export default function Students() {
  let [lecturer, setLecturer] = useState([]);
  let [user, setUser] = useState([]);
  let [student, setStudent] = useState([]);
  let [course, setCourse] = useState([]);
  let [cohort, setCohort] = useState([]);
  let [searchCourse, setSearchCourse] = useState([]);
  let [searchStudent, setSearchStudent] = useState([]);
  let [newStudentItem, setNewStudentItem] = useState([]);
  let [newCourseItem, setNewCourseItem] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:7000/users")
  //     .then((r) => r.json())
  //     .then((r) => setUser(r));
  // }, [setUser]);

  // useEffect(() => {
  //   fetch("http://localhost:7000/lecturers")
  //     .then((r) => r.json())
  //     .then((r) => setLecturer(r));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:7000/students")
      .then((r) => r.json())
      .then((r) => setStudent(r));
  }, []);

  /*   let h  = {if (student === 0) {
    return "Loading ..... ";
  } else {
    console.log(student);
  }} */

  let all = student === false ? "Loading ..." : student;

  let all1 = all[0];

  console.log(all1);
  // useEffect(() => {
  //   fetch("http://localhost:7000/courses")
  //     .then((r) => r.json())
  //     .then((r) => setCourse(r));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:7000/cohorts")
  //     .then((r) => r.json())
  //     .then((r) => setCohort(r));
  // }, []);

  return (
    <main id="student">
      <section id="profile">
        <img src={all1.image} alt="user" />
        <span>Grade: {all1.grade}</span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <section id="details">
        <div id="lecturer">
          <img src="#" alt="lecturer" id="lec_image" />
          <span id="lec_details">
            <span id="lec_name">Enock Mokua</span>
            <span id="course_details">
              <p>Number of students: 119</p>
              <p>Course length: 6 months</p>
            </span>
          </span>
        </div>
        <div id="course">
          <span id="title">Machine Learning</span>
          <span id="description">
            Machine learning is a subfield of artificial intelligence (AI). The
            goal of machine learning generally is to understand the structure of
            data and fit that data into models that can be understood and
            utilized by people.
          </span>
          <ul id="objectives">
            <li>
              Unsupervised learning is commonly used for transactional data
            </li>
            <li>
              Unsupervised learning is commonly used for transactional data
            </li>
            <li>
              Unsupervised learning is commonly used for transactional data
            </li>
          </ul>
        </div>
      </section>
      <section id="waste"></section>
    </main>
  );
}
