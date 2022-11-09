import React from "react";

export default function Lecturer() {
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
        <span id="date_joined">Date Joined: 08/12/2012</span>
      </aside>
    </main>
  );
}
