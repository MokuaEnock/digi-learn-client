import React, { useState, useEffect } from "react";
import "./student.css";

export default function Students() {
  // let [student, setStudent] = useState([]);
  // let [course, setCourse] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:7000/students")
  //     .then((r) => r.json())
  //     .then((r) => setStudent(r));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:7000/courses")
  //     .then((r) => r.json())
  //     .then((r) => setCourse(r));
  // }, []);

  // function StudentDetailCard() {
  //   return (
  //     <aside id="main_student">
  //       <span id="lecturer_name">Enock Mokua</span>
  //       <img src="#" alt="lecturer" />
  //       <span id="lecturer_course">Machine Learning</span>
  //       <span id="student_number">Students: 117</span>
  //       <span id="average_grade">Average grade: 78</span>
  //       <span> Rank: 17</span>

  //       <span id="date_joined">Date Joined: 08/12/2012</span>
  //     </aside>
  //   );
  // }

  // let course_cards = course.map((item) => {
  //   return (
  //     <span className="course_item" key={item.id}>
  //       <span>
  //         <span>{item.name}</span>
  //         <span className="pppp">{item.description}</span>
  //       </span>
  //       <button>View</button>
  //     </span>
  //   );
  // });

  // function Course() {
  //   return (
  //     <div id="courses">
  //       <span className="title">
  //         <span>Courses</span>
  //         <form>
  //           <button type="submit">Search</button>
  //           <input type="" required />
  //         </form>
  //       </span>
  //       <div className="course_list">
  //         {course_cards}
  //         <button className="view_button">View All</button>
  //       </div>
  //     </div>
  //   );
  // }

  // function Grade() {
  //   return (
  //     <>
  //       <span id="lecturer_course">Machine Learning</span>
  //       <span id="average_grade">Average grade: 78</span>
  //       <span> Rank: 17</span>
  //     </>
  //   );
  // }

  return (
    <main id="student">
      <section id="profile">
        <img src="#" alt="user" />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <section id="details">
        <div id="lecturer">
          <span id="lec_image"></span>
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
