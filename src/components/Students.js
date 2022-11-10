import React, { useState, useEffect } from "react";

export default function Students(){

    let [student, setStudent] = useState([]);
    let [course, setCourse] = useState([]);

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

      

    function StudentDetailCard(){
        return(
            <aside id="main_student">
                <span id="lecturer_name">Enock Mokua</span>
                <img src="#" alt="lecturer" />
                <span id="lecturer_course">Machine Learning</span>
                <span id="student_number">Students: 117</span>
                <span id="average_grade">Average grade: 78</span>
                <span> Rank: 17</span>

                <span id="date_joined">Date Joined: 08/12/2012</span>
            </aside>
        )
    }

    let course_cards = course.map((item) => {
        return (
          <span className="course_item" key={item.id}>
            <span>
              <span>{item.name}</span>
              <span className="pppp">{item.description}</span>
            </span>
            <button>View</button>
          </span>
        );
      });

    function Course() {
        return (
            <div id="courses">
            <span className="title">
              <span>Courses</span>
              <form>
                <button type="submit">Search</button>
                <input type="" required />
              </form>
            </span>
            <div className="course_list">
              {course_cards}
              <button className="view_button">View All</button>
            </div>
          </div>
        );
      }

    function Grade() {
        return(
        <>
            <span id="lecturer_course">Machine Learning</span>
                <span id="average_grade">Average grade: 78</span>
            <span> Rank: 17</span>
        </>            
        )        
    }
    
    return(

    <div className='Student'>
        <div className = 'student_header_section'>
            <StudentDetailCard />
        </div>
        <div className="student_course_list">
            <Course />
            <button className="view_button">View All</button>
        </div>
        <div className = 'student_grade_display'>
            <Grade />
        </div>
    </div>

)
}