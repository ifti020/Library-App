package com.ifti.spring_boot_library_boi_sync.service;

import com.ifti.spring_boot_library_boi_sync.entity.Books;

import java.util.List;

public interface BookService {

    List<Books> getAllBooks();
}
