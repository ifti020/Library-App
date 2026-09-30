package com.ifti.spring_boot_library_boi_sync.repository;

import com.ifti.spring_boot_library_boi_sync.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page <Review> findByBookId(Long bookId, Pageable pageable);

}
