package com.example.webdevfall19serverjava.services;


import com.example.webdevfall19serverjava.models.Widget;
import com.example.webdevfall19serverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;


    @GetMapping("/api/widget")
    public List<Widget> findAllWidgets() {
        return (List<Widget>) widgetRepository.findAll();
    }


    @PostMapping("/api/widget")
    public List<Widget> saveWidgets(@RequestBody List<Widget> widgets) {
        List<Widget> saveWidgets = new ArrayList<Widget>();
        widgetRepository.deleteAll();
        for(Widget widget: widgets) {
            saveWidgets.add(widgetRepository.save(widget));
        }
        return widgets;
    }
}
