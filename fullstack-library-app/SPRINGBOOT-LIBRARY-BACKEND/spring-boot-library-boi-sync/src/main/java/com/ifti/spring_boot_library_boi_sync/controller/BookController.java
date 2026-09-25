package com.ifti.spring_boot_library_boi_sync.controller;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import com.ifti.spring_boot_library_boi_sync.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
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
    public List<Book> getAllBooks()
    {
        return bookService.getAllBooks();
    }



}
