package com.ifti.spring_boot_library_boi_sync.service;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import org.springframework.data.domain.Page;


public interface BookService {

    Page<Book> getAllBooks(int pageNo, int pageSize);
}
