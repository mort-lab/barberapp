/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "images.pexel.com",
      "source.unsplash.com", // Agregar este dominio
      "a0.muscache.com",
    ],
  },
};

export default nextConfig;
