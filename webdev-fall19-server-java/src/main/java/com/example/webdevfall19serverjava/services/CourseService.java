package com.example.webdevfall19serverjava.services;

import com.example.webdevfall19serverjava.models.Course;
import com.example.webdevfall19serverjava.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/api/course")
    public List<Course> findAllCourses() {
        System.out.println("dddddddd");
        return (List<Course>) courseRepository.findAll();
    }
}
