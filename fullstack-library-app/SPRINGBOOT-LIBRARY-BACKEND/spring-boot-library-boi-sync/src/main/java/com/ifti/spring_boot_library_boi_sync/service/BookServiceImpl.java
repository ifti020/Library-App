package com.ifti.spring_boot_library_boi_sync.service;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import com.ifti.spring_boot_library_boi_sync.repository.BookRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{

    private final BookRepository bookRepository;
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public Page<Book> getAllBooks( int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);

        return bookRepository.findAll(pageable);
    }
}
