package com.example.back.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class UserController {

    @RequestMapping("/user")
    public String User() {
        return "connection test";
    }
    
    
}
