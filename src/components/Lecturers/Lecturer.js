import React, { useState, useEffect } from "react";

export default function Lecturer() {
  /* usestate and useeffect */
  let [lecturer, setLecturer] = useState([]);
  let [user, setUser] = useState([]);
  let [student, setStudent] = useState([]);

  /* fetching data */
  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((r) => r.json())
      .then((r) => setUser(r));
  }, []);

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

  // console.log("user", user);
  // console.log("lecturer", lecturer);
  console.log("student", student);

  let students = student.map((item, { user, lecturer }) => {
    function studentName(user, item) {
      if (user.id === item.id) {
        return user.name;
      }
    }
    let student_id = item.id;
    let name = {};
    return {
      student_id: student_id,
      name: "",
      lecturer_id: "",
      lecturer: "",
      image: "",
      grade: "",
      cohort: "",
      cohort_id: "",
      date_joined: "",
      course: "",
      course_id: "",
    };
  });

  console.log("student item", students);
  function Student() {
    return (
      <span className="course_item">
        <img src="#" alt="course" />
        <span>
          <span></span>
          <span className="pppp"></span>
        </span>
        <button>View</button>
      </span>
    );
  }

  function Course() {
    return (
      <span className="course_item">
        <img src="#" alt="course" />
        <span>
          <span></span>
          <span className="pppp"></span>
        </span>
        <button>View</button>
      </span>
    );
  }

  return (
    <main id="lecturer">
      <aside id="main_lecturer">
        <span id="lecturer_name">Enock Mokua</span>
        <img src="#" alt="lecturer" />
        <span id="lecturer_course">Machine Learning</span>
        <span id="student_number">Students: 117</span>
        <span id="average_grade">Average grade: 78</span>
        <span id="date_joined">Date Joined: 08/12/2012</span>
        <span></span>
      </aside>

      <section>
        {/* courses */}
        <div id="courses">
          <span className="title">
            <span>Courses</span>
            <form>
              <button type="submit">Search</button>
              <input type="" required />
            </form>
          </span>
          <div className="course_list">
            <Course />
            <button className="view_button">View All</button>
          </div>
        </div>

        {/* students */}
        <div id="students">
          <span className="title">
            <span>Students</span>
            <form>
              <button type="submit">Search</button>
              <input type="" required />
            </form>
          </span>
          <div className="student_list">
            <Student />
            <button className="view_button">View All</button>
          </div>
        </div>
      </section>

      <aside id="main_student">
        <span id="lecturer_name">Enock Mokua</span>
        <img src="#" alt="lecturer" />
        <span id="lecturer_course">Machine Learning</span>
        <span id="student_number">Students: 117</span>
        <span id="average_grade">Average grade: 78</span>
        <span> Rank: 17</span>

        <span id="date_joined">Date Joined: 08/12/2012</span>
      </aside>
    </main>
  );
}
