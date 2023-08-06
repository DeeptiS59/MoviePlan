package com.Mymovieplan.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Movie {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="id")
		private Long id;
		private String name;
		private double price;
		@Column(name="enable")
		boolean enable;
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="category_id", referencedColumnName ="id" )
		private Genre genre;
		@Column(name = "purchaseDate", columnDefinition = "TIMESTAMP")
		private LocalDateTime dateTime;
		private String description;
		private String imageName;
		
		public boolean isEnable() {
			return enable;
		}
		public void setEnable(boolean enable) {
			this.enable = enable;
		}
		public Movie() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		
		
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		
		public Genre getGenre() {
			return genre;
		}
		public void setGenre(Genre genre) {
			this.genre = genre;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getImageName() {
			return imageName;
		}
		public void setImageName(String imageName) {
			this.imageName = imageName;
		}
		public LocalDateTime getDateTime() {
			return dateTime;
		}
		public void setDateTime(LocalDateTime dateTime) {
			this.dateTime = dateTime;
		}
		
		
		@Override
		public String toString() {
			return "Product [id=" + id + ", name=" + name + ", genre=" + genre + ", price=" + price + 
					 ", description=" + description + ", imageName=" + imageName + "]";
		}
}
