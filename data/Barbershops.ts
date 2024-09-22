// data/barbershops.ts
export interface Barbershop {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  lat: number;
  lng: number;
  imageUrl: string;
  images?: string[]; // Add this optional property
}

export const barbershops: Barbershop[] = [
  {
    id: 1,
    name: "Classic Cuts",
    location: "Calle Mayor, San Sebastian",
    rating: 4.8,
    price: 25,
    lat: 43.3183,
    lng: -1.9812,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 2,
    name: "Gentleman's Grooming",
    location: "Paseo de la Concha, San Sebastian",
    rating: 4.7,
    price: 30,
    lat: 43.3167,
    lng: -1.9864,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 3,
    name: "The Sharp Edge",
    location: "Calle Urbieta, San Sebastian",
    rating: 4.9,
    price: 28,
    lat: 43.3147,
    lng: -1.983,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 4,
    name: "Barber & Co.",
    location: "Calle San Martín, San Sebastian",
    rating: 4.6,
    price: 22,
    lat: 43.3189,
    lng: -1.98,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 5,
    name: "Donostia Mane",
    location: "Boulevard, San Sebastian",
    rating: 4.8,
    price: 27,
    lat: 43.3224,
    lng: -1.9852,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 6,
    name: "Scissors & Razors",
    location: "Calle Garibai, San Sebastian",
    rating: 4.7,
    price: 26,
    lat: 43.3203,
    lng: -1.9836,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 7,
    name: "Basque Barbers",
    location: "Calle Hernani, San Sebastian",
    rating: 4.5,
    price: 24,
    lat: 43.3178,
    lng: -1.9821,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 8,
    name: "Coastal Cuts",
    location: "Paseo de Salamanca, San Sebastian",
    rating: 4.6,
    price: 29,
    lat: 43.3149,
    lng: -1.9887,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 9,
    name: "Urban Style",
    location: "Calle Fuenterrabía, San Sebastian",
    rating: 4.7,
    price: 31,
    lat: 43.3211,
    lng: -1.9843,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 10,
    name: "Txuri-Urdin Barbers",
    location: "Calle Easo, San Sebastian",
    rating: 4.8,
    price: 28,
    lat: 43.3156,
    lng: -1.9805,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 11,
    name: "La Concha Grooming",
    location: "Paseo de la Concha, San Sebastian",
    rating: 4.9,
    price: 33,
    lat: 43.3172,
    lng: -1.9876,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 12,
    name: "Old Town Trims",
    location: "Calle 31 de Agosto, San Sebastian",
    rating: 4.5,
    price: 26,
    lat: 43.3235,
    lng: -1.9856,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 13,
    name: "Gros Barbershop",
    location: "Calle Peña y Goñi, San Sebastian",
    rating: 4.6,
    price: 27,
    lat: 43.3261,
    lng: -1.9764,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 14,
    name: "Zurriola Cuts",
    location: "Paseo de la Zurriola, San Sebastian",
    rating: 4.7,
    price: 30,
    lat: 43.325,
    lng: -1.979,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 15,
    name: "Parte Vieja Barbers",
    location: "Calle Mayor, San Sebastian",
    rating: 4.8,
    price: 29,
    lat: 43.3241,
    lng: -1.986,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 16,
    name: "Mount Urgull Grooming",
    location: "Paseo Nuevo, San Sebastian",
    rating: 4.5,
    price: 25,
    lat: 43.3252,
    lng: -1.989,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 17,
    name: "Kursaal Clippers",
    location: "Avenida de la Zurriola, San Sebastian",
    rating: 4.6,
    price: 28,
    lat: 43.3267,
    lng: -1.9783,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 18,
    name: "Igueldo Barbers",
    location: "Plaza del Funicular, San Sebastian",
    rating: 4.7,
    price: 32,
    lat: 43.311,
    lng: -2.0054,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 19,
    name: "Ondarreta Styles",
    location: "Paseo de Ondarreta, San Sebastian",
    rating: 4.8,
    price: 31,
    lat: 43.3134,
    lng: -2.0017,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 20,
    name: "Antiguo Cuts",
    location: "Calle Matía, San Sebastian",
    rating: 4.5,
    price: 26,
    lat: 43.3145,
    lng: -2.0067,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 21,
    name: "Amara Barbers",
    location: "Calle Isabel II, San Sebastian",
    rating: 4.6,
    price: 27,
    lat: 43.3108,
    lng: -1.9778,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 22,
    name: "Anoeta Grooming",
    location: "Paseo de Anoeta, San Sebastian",
    rating: 4.7,
    price: 29,
    lat: 43.3042,
    lng: -1.9734,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 23,
    name: "Aiete Scissors",
    location: "Paseo de Aiete, San Sebastian",
    rating: 4.8,
    price: 30,
    lat: 43.3075,
    lng: -1.9904,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 24,
    name: "Miraconcha Mane",
    location: "Paseo de Miraconcha, San Sebastian",
    rating: 4.9,
    price: 33,
    lat: 43.3156,
    lng: -1.9935,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
  {
    id: 25,
    name: "Egia Edge",
    location: "Calle Virgen del Carmen, San Sebastian",
    rating: 4.5,
    price: 25,
    lat: 43.3189,
    lng: -1.9697,
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1024707978745273009/original/7d2462c3-8e66-4311-b82e-4414d91d1b2f.jpeg?im_w=720",
  },
];
