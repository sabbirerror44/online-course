import React from 'react';
import './CourseField.css';

const CourseField = (props) => {
    const {name, instructor, price} = props.course;
    return (
        <div className="course-unit">
            <h4>Course Title : {name}</h4>
            <h5>Instructor : {instructor}</h5>
            <h5>Price: $ {price}</h5>
            <button className="btn-outline-primary" onClick={() => props.handleAddCourse(props.course)}> Enroll Now</button>
        </div>
    );
};

export default CourseField;