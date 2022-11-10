import React, { useState, useEffect } from "react";

export default function Lecturer() {
  /* usestate and useeffect */
  let [lecturer, setLecturer] = useState([]);
  let [user, setUser] = useState([]);
  let [student, setStudent] = useState([]);
  let [course, setCourse] = useState([]);
  let [cohort, setCohort] = useState([]);

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

  let students = student.map((item) => {
    let student_id = item.id;
    let lecturer_id = item.lecturer_id;
    let user_item = user.filter((item) => item.id === student_id)[0];
    let lecturer_item = lecturer.filter((item) => item.id === lecturer_id)[0];
    let user_lecturer_item = user.filter(
      (item) => item.id === lecturer_item.user_id
    )[0];

    let course_item = course.filter(
      (item) => item.id === lecturer_item.course_id
    )[0];

    let cohort_item = cohort.filter(
      (item) => item.id === lecturer_item.cohort_id
    );

    let lecturer_name = user_lecturer_item.name;
    let email = user_item.email;
    let name = user_item.name;
    let grade = item.grade;
    let image = item.image;
    let date_joined = user_item.created_at;

    return {
      student_id: student_id,
      name: name,
      email: email,
      lecturer_id: lecturer_id,
      lecturer: lecturer_name,
      image: image,
      grade: grade,
      cohort: cohort_item.name,
      cohort_id: lecturer_item.cohort_id,
      date_joined: date_joined,
      course: course_item.name,
      course_id: lecturer_item.course_id,
    };
  });

  // let courses = course.map((item) => {
  //   let lecturers = lecturer.filter((item) => {
  //     return item.id === 1;
  //   });
  //   return {
  //     id: item.id,
  //     name: item.name,
  //     desciption: item.desciption,
  //     duration: item.duration,
  //     created_at: item.created_at,
  //   };
  // });

  // console.log("course all data", courses);
  console.log("course item", course);

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
        <span id="student_number">May Intake</span>
        <span id="average_grade">Average grade: 78</span>
        <span> Rank: 17</span>

        <span id="date_joined">Date Joined: 08/12/2012</span>
      </aside>
    </main>
  );
}
