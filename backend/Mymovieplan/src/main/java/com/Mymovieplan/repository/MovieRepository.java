package com.Mymovieplan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Mymovieplan.model.Movie;



public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Optional<Movie> findByName(String name);

}