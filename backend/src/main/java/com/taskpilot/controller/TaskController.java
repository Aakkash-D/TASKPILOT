
package com.taskpilot.controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

  private List<Map<String, String>> tasks = new ArrayList<>();

  @GetMapping
  public List<Map<String, String>> getTasks() {
    return tasks;
  }

  @PostMapping
  public Map<String, String> createTask(@RequestBody Map<String, String> task) {
    tasks.add(task);
    return task;
  }
}
