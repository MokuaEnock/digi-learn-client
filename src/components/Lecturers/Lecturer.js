import React, { useState, useEffect } from "react";
import "./lec.css";

export default function Lecturer() {
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
  let [filterCourse, setFilterCourse] = useState([]);
  let [filterStudent, setFilterStudent] = useState([]);

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

  /* create function to search courses */
  function handleSearchCourses(e) {
    e.preventDefault();
    const filteredCourses = course.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === "string" && val.includes(searchCourse)
      )
    );
    setFilterStudent(filteredCourses);
  }

  /* function to create student object */
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

  /* create function to search students */
  function handleSearchStudent(e) {
    e.preventDefault();
    const filteredStudents = students.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === "string" && val.includes(searchStudent)
      )
    );
    setFilterStudent(filteredStudents);
  }

  /* function to handle studnet view button */
  let handleStudentView = (index) => () => {
    let newItem = students[index];
    return setNewStudentItem([newItem]);
  };

  /* function to handle studnet view button */
  let handleCourseView = (index) => () => {
    let newItem = course[index];
    return setNewCourseItem([newItem]);
  };

  /* function to render studnet cards set with data */
  let student_cards = students.map((item, index) => {
    return (
      <span className="course_item" key={item.id}>
        <img src={item.image} alt="course" />
        <span>
          <span>{item.name}</span>
          <span className="pppp">
            Grade: {item.grade}&nbsp; Date: {item.date_joined.slice(0, 10)}
          </span>
        </span>
        <button onClick={handleStudentView(index)}>View</button>
      </span>
    );
  });

  let filter_students = filterStudent.map((item, index) => {
    return (
      <span className="course_item" key={item.id}>
        <img src={item.image} alt="course" />
        <span>
          <span>{item.name}</span>
          <span className="pppp">
            Grade: {item.grade}&nbsp; Date: {item.date_joined.slice(0, 10)}
          </span>
        </span>
        <button onClick={handleStudentView(index)}>View</button>
      </span>
    );
  });

  console.log(lecturer);

  /* fucntion render cards to main aside student component */
  let aside_student = newStudentItem.map((item, index) => {
    return (
      <section className="aside1" key={index}>
        <div>Student</div>
        <span>{item.name}</span>
        <span>Course: {item.course}</span>
        <span>Grade: {item.grade}</span>
        <span>{item.date_joined.slice(0, 10)}</span>
      </section>
    );
  });

  /* fucntion render cards to main aside student component */
  let aside_course = newCourseItem.map((item) => {
    return (
      <section className="aside1" key={item.id}>
        <div>Course</div>
        <span>{item.name}</span>
        <span>Duration: {item.duration} months.</span>
        <span>Lec: {item.description}</span>
        <span>{item.updated_at.slice(0, 10)}</span>
      </section>
    );
  });

  console.log(filterCourse, filterStudent);

  /* function to render course cards set with data */
  let course_cards = course.map((item, index) => {
    return (
      <span className="course_item" key={item.id}>
        <span>
          <span>{item.name}</span>
          <span className="pppp">{item.description}</span>
        </span>
        <button onClick={handleCourseView(index)}>View</button>
      </span>
    );
  });

  let filter_courses = filterCourse.map((item, index) => {
    return (
      <span className="course_item" key={item.id}>
        <span>
          <span>{item.name}</span>
          <span className="pppp">{item.description}</span>
        </span>
        <button onClick={handleCourseView(index)}>View</button>
      </span>
    );
  });

  function display(a, b) {
    if (a.length === 0) {
      return b;
    } else {
      return a;
    }
  }

  return (
    <main id="lecturer">
      <aside id="main_lecturer">
        <span id="lecturer_name">Enock Mokua</span>
        <img
          src="https://robohash.org/essenatuset.png?size=300x300&set=set1"
          alt="lecturer"
        />
        <span id="lecturer_course">Machine Learning</span>
        <span id="student_number">Students: {user.length}</span>
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
              <button type="submit" onClick={handleSearchCourses}>
                Search
              </button>
              <input
                type="text"
                value={searchCourse}
                required
                onChange={(e) => setSearchCourse(e.target.value)}
              />
            </form>
          </span>
          <div className="course_list">
            {display(filter_courses, course_cards)}
            {/* <button className="view_button">View All</button> */}
          </div>
        </div>

        {/* students */}
        <div id="students">
          <span className="title">
            <span>Students</span>
            <form>
              <button type="submit" onClick={handleSearchStudent}>
                Search
              </button>
              <input
                type="text"
                value={searchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
                required
              />
            </form>
          </span>
          <div className="student_list">
            {display(filter_students, student_cards)}
          </div>
        </div>
      </section>

      <aside id="aside1">
        {aside_course}
        {aside_student}
      </aside>
    </main>
  );
}
