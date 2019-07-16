package com.example.webdevfall19serverjava.services;

import com.example.webdevfall19serverjava.models.User;
import com.example.webdevfall19serverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;


@RestController
public class UserService {

    @Autowired
    UserRepository userRepository;

    // function listening to register request
    @PostMapping("/register")
    public User register(@RequestBody User user, HttpSession session) {
        // first check this username has been taken or not
        Boolean usernameExits = (userRepository.isUsernameTaken(user.getUsername()));
        if(usernameExits) {
            throw new Error("Username Exits");

        }
        else {
            User cu = userRepository.save(user);
            session.setAttribute("currentUser", cu);
            return cu;
        }
    }


    // function listening to login request
    @PostMapping("/login")
    public User login(@RequestBody User user, HttpSession session) {
        User user_ = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());

        // if user cannot get the username, it will return error
        System.out.println(user.getUsername());
        session.setAttribute("currentUser", user);
        return user;
    }

    // function getting all users from database
    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }


    // function to fetch the currentUser using HttpSession
    @GetMapping("/profile")
    public Optional<User> profile(HttpSession session) {
        // fetch the currentUser from session Attribute
        User currentUser = (User) session.getAttribute("currentUser");
        return userRepository.findById(currentUser.getId());
    }

    // function is to delete the user from database base on id
    @DeleteMapping("/api/user/delete/{userId}")
    public void deleteUser(@PathVariable("userId") int id) {
        userRepository.deleteById(id);
    }
}
