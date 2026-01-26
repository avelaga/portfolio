// src/data/photos.js

// User Void
export const userVoidImages = Array.from({ length: 21 }, (_, i) =>
  `/images/photos/uservoid/uservoid${i + 1}.jpg`
);

// Portfolio
export const portfolioImages = Array.from({ length: 20 }, (_, i) =>
  `/images/photos/portfolio/p${i + 1}.jpg`
);

// Miami Vice Cocaine Dream
export const miamiImages = Array.from({ length: 30 }, (_, i) =>
  `/images/photos/miami/miami${i + 1}.jpg`
);

// Published Spark
export const sparkImages = Array.from({ length: 23 }, (_, i) =>
  `/images/photos/published/${i + 1}.jpg`
);

// Miami Book
export const miamiBookPics = [
  "/images/photos/published/book1.jpg",
  "/images/photos/published/book2.jpg",
  "/images/photos/published/book3.jpg",
  "/images/photos/published/book4.jpg",
];

export const miamiBookPicsCarousel = miamiBookPics.map((img) => ({
  original: img,
  originalWidth: "500px",
}));

// Spark Magazine spread
export const sparkMagPics = [
  "/images/photos/published/spark/cover.jpg",
  "/images/photos/published/spark/11.jpg",
  "/images/photos/published/spark/13.jpg",
  "/images/photos/published/spark/14.jpg",
  "/images/photos/published/spark/21.jpg",
  "/images/photos/published/spark/23.jpg",
  "/images/photos/published/spark/24.jpg",
  "/images/photos/published/spark/31.jpg",
  "/images/photos/published/spark/32.jpg",
];

export const sparkMagPicsCarousel = sparkMagPics.map((img) => ({
  original: img,
  originalWidth: "500px",
}));
