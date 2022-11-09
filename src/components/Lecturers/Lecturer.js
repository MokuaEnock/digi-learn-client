import React from "react";

export default function Lecturer() {
  return (
    <main id="lecturer">
      <aside></aside>
      <section>
        {/* courses */}
        <div id="courses">
          <span className="title"></span>
          <div className="course_list">
            <button className="view_button">View All</button>
          </div>
        </div>

        {/* students */}
        <div id="students"></div>
      </section>
      <aside></aside>
    </main>
  );
}
