package com.example.webdevfall19serverjava.repositories;

import com.example.webdevfall19serverjava.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Integer> {

    // this function is tied to this query
    @Query("SELECT user FROM User user WHERE user.username=:username AND user.password=:password")
    public User findUserByCredentials(@Param("username") String u,
                                      @Param("password") String p);
}
