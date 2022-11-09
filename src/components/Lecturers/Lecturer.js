import React from "react";

export default function Lecturer() {
  return (
    <main id="lecturer">
      <aside></aside>
      <section>
        <span>
          <span>Courses</span>
          <form>
            <input type="text" placeholder="Search ..." />
            <button type="submit">Search</button>
          </form>
        </span>
        <ul></ul>
        <button>View All</button>
        <span>
          <span>Students</span>
          <form>
            <input type="text" placeholder="Search ..." />
            <button type="submit">Search</button>
          </form>
        </span>
        <ul></ul>
        <button>View All</button>
      </section>
      <aside></aside>
    </main>
  );
}
