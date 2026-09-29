package com.ifti.spring_boot_library_boi_sync.controller;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import com.ifti.spring_boot_library_boi_sync.service.BookService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService)
    {
        this.bookService = bookService;
    }

    //rest api for Get All Books
    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public Page<Book> getAllBooks(@RequestParam(defaultValue = "0") int pageNo,
                                  @RequestParam(defaultValue = "5") int pageSize)
    {
        return bookService.getAllBooks(pageNo,pageSize);
    }

    //rest api for Search by Title
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/search/title")
    public Page<Book> findByTitleContaining(
            @RequestParam String title,
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "5") int pageSize)
    {
        return  bookService.findByTitleContaining(title,pageNo, pageSize);
    }

    //rest api for Search by Category
    @GetMapping("/search/category")
    @ResponseStatus(HttpStatus.OK)
    public Page <Book> findByCategoryContaining(
            @RequestParam String category,
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "5") int pageSize)
    {
        return bookService.findByCategoryContaining(category,pageNo,pageSize);
    }

    //rest api for Get Book by Id
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable long id){
        return bookService.getBookById(id);
    }

}
