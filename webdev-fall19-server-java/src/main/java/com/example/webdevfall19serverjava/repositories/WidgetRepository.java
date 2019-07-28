package com.example.webdevfall19serverjava.repositories;


import com.example.webdevfall19serverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {
}
