package com.Mymovieplan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Mymovieplan.model.Genre;



public interface CategoryRepository extends JpaRepository<Genre, Integer> {
    Optional<Genre> findByName(String name);

}
