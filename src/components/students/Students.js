import React, { useState, useEffect } from "react";
import "./student.css";

export default function Students() {
  
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
