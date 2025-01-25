import React from 'react';

interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="course-card">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <small>Instructor: {course.instructor}</small>
    </div>
);

export default CourseCard;
