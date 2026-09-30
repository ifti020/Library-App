package com.ifti.spring_boot_library_boi_sync.service;

import com.ifti.spring_boot_library_boi_sync.entity.Review;
import org.springframework.data.domain.Page;

public interface ReviewService {
    Page<Review> getReviewByBookId(Long bookId, int pageNo, int pageSize);
}
