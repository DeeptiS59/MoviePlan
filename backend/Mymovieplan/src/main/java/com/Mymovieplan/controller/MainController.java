package com.Mymovieplan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.Mymovieplan.model.Movie;
import com.Mymovieplan.model.Genre;
import com.Mymovieplan.model.ResetPwd;
import com.Mymovieplan.model.User;
import com.Mymovieplan.repository.CartRepository;
import com.Mymovieplan.repository.CategoryRepository;
import com.Mymovieplan.repository.MovieRepository;
import com.Mymovieplan.repository.UserRepository;
import com.Mymovieplan.model.Cart;







@RestController
public class MainController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	MovieRepository movieRepository;
	@GetMapping("/hello") 
	public String sayHello() {
		return "hello";
	}
	@GetMapping("/user") 
	public String getUser() {
		return "User";
		
	}	
	@PostMapping("/userLogin")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User  user)
	{
		Optional<User> u= userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			boolean isCorrect= u.get().getPassword().equals(user.getPassword());
			if(isCorrect) {
				return u.get();
			}			
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	@PostMapping("/resetpwd")
	@CrossOrigin(origins = "http://localhost:4200")
	public void changePassword(@RequestBody ResetPwd resetPwd) {
		Optional<User> u= userRepository.findByUsername("admin");
		if(u.isPresent()) {
			if(u.get().getPassword().equals(resetPwd.getOldPassword())) {
				u.get().setPassword(resetPwd.getNewPassword());
				userRepository.save(u.get());
				return;
			}
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> createUser(@RequestBody User  user)
	{
		User u= new User();
		u.setUsername(user.getUsername());
		u.setPassword(user.getPassword());
		u.setRole("standard");
		userRepository.save(u);
		return null; 
	}
	@GetMapping("/movie")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Movie> getMovies()
	{
		return movieRepository.findAll() ;
	}
	@GetMapping("/movie/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  Optional<Movie> findMovie(@PathVariable int id)
	{
	 return	movieRepository.findById(id);
	}
	@PatchMapping("/movie/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void updateMovie(@PathVariable int id,@RequestBody Movie movie)
	{
		Optional<Movie> m=movieRepository.findById(id);
		if(m.isPresent()) {
			m.get().setName(movie.getName());
			m.get().setPrice(movie.getPrice());
			m.get().setEnable(movie.isEnable());
			m.get().setDescription(movie.getDescription());
			m.get().setDateTime(movie.getDateTime());
			Genre c=new Genre();
			c.setId(movie.getGenre().getId());
			m.get().setGenre(c);
			movieRepository.save(m.get());
		}
	}
	@PostMapping("/movie")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Movie> saveMovie(@RequestBody Movie movie)
	{
		Movie m= new Movie();
		m.setName(movie.getName());
		m.setPrice(movie.getPrice());
		m.setEnable(movie.isEnable());
		m.setDescription(movie.getDescription());
		m.setDateTime(movie.getDateTime());
		Genre c=new Genre();
		c.setId(movie.getGenre().getId());
		m.setGenre(c);
		movieRepository.save(m);
		return null; 
	}
	@DeleteMapping("/movie/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteMedicine(@PathVariable int id)
	{
		movieRepository.deleteById(id);
	}
	@GetMapping("/genre")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Genre> getCategories()
	{
		return categoryRepository.findAll() ;
	}
	@PostMapping("/genre")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Genre> saveCategory(@RequestBody Genre category)
	{
		Genre c= new Genre();
		c.setName(category.getName());
		categoryRepository.save(c);
		return null; 
	}
	@DeleteMapping("/genre/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteCategory(@PathVariable int id)
	{
		categoryRepository.deleteById(id);
	}
	@GetMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Cart> getAllCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		return cartItems;
	}
	@PostMapping("/addToCart/{userId}/{movieId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addCartItem(@PathVariable int userId,@PathVariable int movieId) {
		
		Optional<User> u= userRepository.findById(userId);
		Optional<Movie> m= movieRepository.findById(movieId);
		if(u.isPresent()&& m.isPresent()) {
			Cart c= new Cart();
			c.setUser(u.get());
			c.setMovie(m.get());
			cartRepository.save(c);	
		}

	}
	@DeleteMapping("/cart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteCartItem(@PathVariable int id)
	{
		cartRepository.deleteById(id);
	}
	@GetMapping("/emptyCart/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void  emptyCartItems(@PathVariable int id) {
		List <Cart> cartItems= cartRepository.findAllByUser_Id(id);
		for(Cart item:cartItems) {
			cartRepository.deleteById(item.getId());
		}
	}
	
}
