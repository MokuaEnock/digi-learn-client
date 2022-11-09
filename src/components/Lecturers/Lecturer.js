import React from "react";

export default function Lecturer() {
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
            <span className="course_item">
              <img src="#" alt="course" />
              <span>
                <span>jwjhhh jejejej jejejej</span>
                <span className="pppp">
                  wefjlwfbb ehehhe ejejejejje ejejejej ejejejjej
                </span>
              </span>
              <button>View</button>
            </span>
            <span className="course_item"></span>
            <span className="course_item"></span>
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
            <span className="course_item">
              <img src="#" alt="course" />
              <span>
                <span>jwjhhh jejejej jejejej</span>
                <span className="pppp">
                  wefjlwfbb ehehhe ejejejejje ejejejej ejejejjej
                </span>
              </span>
              <button>View</button>
            </span>
            <span className="student_item"></span>
            <span className="student_item"></span>
            <button className="view_button">View All</button>
          </div>
        </div>
      </section>
      <aside></aside>
    </main>
  );
}
