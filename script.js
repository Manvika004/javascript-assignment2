// Define the gallery items in an array (Object format)
const galleryItems = [
	{ category: "chocolate", full: "image2.jpg", thumb: "image2.jpg", caption: "Indulge in the rich, velvety embrace of pure bliss" },
	{ category: "chocolate", full: "image1.jpg", thumb: "image1.jpg", caption: "Decadent, Dreamy, Delightful" },
	{ category: "chocolate", full: "image2.jpg", thumb: "image2.jpg", caption: "Irresistible Chocolate Heaven" },
	{ category: "chocolate", full: "image3.jpg", thumb: "image3.jpg", caption: "Sweetness Unleashed Daily" },
	{ category: "chocolate", full: "image4.jpg", thumb: "image4.jpg", caption: "Pure Cocoa Indulgence" },
	{ category: "chocolate", full: "image5.jpg", thumb: "image4.jpg", caption: "Tempting Chocolate Bliss" }
  ];
  
  // Function to display the thumbnail images dynamically
  function displayThumbnails() {
	const thumbnailList = document.getElementById("thumbnail-list");
  
	// Iterate through the galleryItems array and create <li> and <img> for each item
	galleryItems.forEach(item => {
	  const listItem = document.createElement("li");
	  const img = document.createElement("img");
	  img.src = item.thumb;
	  img.alt = item.category;
	  img.classList.add("thumbnail");
	  listItem.appendChild(img);
	  thumbnailList.appendChild(listItem);
  
	  // Add event listener to update the featured image and caption when a thumbnail is clicked
	  img.addEventListener("click", function() {
		const featuredImg = document.getElementById("featured-img");
		const caption = document.getElementById("image-caption");
		featuredImg.src = item.full;
		caption.textContent = item.caption;
		
		// Update the active state for thumbnails
		document.querySelectorAll(".thumbnail").forEach(thumbnail => thumbnail.classList.remove("active"));
		img.classList.add("active");
	  });
	});
  }
  
  // Call the function to populate the thumbnails
  displayThumbnails();