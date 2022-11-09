import React from "react";

export default function Lecturer() {
  function Student() {
    return (
      <span className="course_item">
        <img src="#" alt="course" />
        <span>
          <span></span>
          <span className="pppp">
          </span>
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
          <span className="pppp">
          </span>
        </span>
        <button>View</button>
      </span>
    );
  }

  return (
    <main id="lecturer">
      <aside></aside>
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
      <aside></aside>
    </main>
  );
}
