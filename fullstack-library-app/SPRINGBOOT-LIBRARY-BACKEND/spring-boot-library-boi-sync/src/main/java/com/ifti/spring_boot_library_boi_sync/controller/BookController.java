package com.ifti.spring_boot_library_boi_sync.controller;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import com.ifti.spring_boot_library_boi_sync.service.BookService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @ResponseStatus(HttpStatus.OK)
   @GetMapping
    public Page<Book> getAllBooks(@RequestParam(defaultValue = "0") int pageNo,
                                  @RequestParam(defaultValue = "5") int pageSize)
    {
        return bookService.getAllBooks(pageNo,pageSize);
    }



}
