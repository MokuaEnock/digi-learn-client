import React, { useState, useEffect } from "react";
import "./student.css";

export default function Students() {
  /* usestate and useeffect */
  let [lecturer, setLecturer] = useState([]);
  let [user, setUser] = useState([]);
  let [student, setStudent] = useState([]);
  let [course, setCourse] = useState([]);
  let [cohort, setCohort] = useState([]);
  let [searchCourse, setSearchCourse] = useState([]);
  let [searchStudent, setSearchStudent] = useState([]);
  let [newStudentItem, setNewStudentItem] = useState([]);
  let [newCourseItem, setNewCourseItem] = useState([]);

  /* fetching data */
  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((r) => r.json())
      .then((r) => setUser(r));
  }, [setUser]);

  useEffect(() => {
    fetch("http://localhost:7000/lecturers")
      .then((r) => r.json())
      .then((r) => setLecturer(r));
  }, []);

  useEffect(() => {
    fetch("http://localhost:7000/students")
      .then((r) => r.json())
      .then((r) => setStudent(r));
  }, []);

  useEffect(() => {
    fetch("http://localhost:7000/courses")
      .then((r) => r.json())
      .then((r) => setCourse(r));
  }, []);

  useEffect(() => {
    fetch("http://localhost:7000/cohorts")
      .then((r) => r.json())
      .then((r) => setCohort(r));
  }, []);

  let all = student.length === 0 ? "Loading ..." : student;
  let users = user.length === 0 ? "Loading ..." : user;
  let lecturers = user.length === 0 ? "Loading ..." : lecturer;

  let all1 = all[0];
  let users1 = users[0];
  let rank = Math.floor(Math.random() * 10) + 1;

  return (
    <main id="student">
      <section id="profile">
        <img src={all1.image} alt="user" />
        <span>Grade: {all1.grade}</span>
        <span>Name: {users1.name}</span>
        <span>Rank: {rank}</span>
      </section>
      <section id="details">
        <div id="lecturer">
          <img src={lecturers[0].image} alt="lecturer" id="lec_image" />
          <span id="lec_details">
            <span id="lec_name">Enock</span>
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
