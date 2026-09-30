package com.ifti.spring_boot_library_boi_sync.service;

import com.ifti.spring_boot_library_boi_sync.entity.Review;
import com.ifti.spring_boot_library_boi_sync.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewServiceImpl implements ReviewService{

    private final ReviewRepository reviewRepository;
    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }



    @Override
    @Transactional(readOnly = true)
    public Page<Review> getReviewByBookId(Long bookId, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);

        return reviewRepository.findByBookId(bookId, pageable);
    }
}
