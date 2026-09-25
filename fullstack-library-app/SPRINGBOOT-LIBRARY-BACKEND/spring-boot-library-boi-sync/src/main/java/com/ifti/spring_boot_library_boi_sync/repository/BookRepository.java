package com.ifti.spring_boot_library_boi_sync.repository;

import com.ifti.spring_boot_library_boi_sync.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository <Book, Long> {
}
