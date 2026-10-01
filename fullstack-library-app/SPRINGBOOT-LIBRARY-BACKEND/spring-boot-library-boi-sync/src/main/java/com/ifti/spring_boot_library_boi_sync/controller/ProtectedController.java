package com.ifti.spring_boot_library_boi_sync.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/protected")
public class ProtectedController {

    // initially a dummy controller
    //

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public String getProtectedRoute()
    {
        return "Protected Route granted";
    }
}
