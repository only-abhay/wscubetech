import express from "express";

const server = express()

 const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    stock: 15
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 74999,
    stock: 10
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 114999,
    stock: 5
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    stock: 20
  }
];
export const categories = [
  {
    id: 1,
    name: "Living Room",
    slug: "living-room",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Stylish sofas, coffee tables, and living room furniture.",
  },
  {
    id: 2,
    name: "Bedroom",
    slug: "bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Beds, wardrobes, and bedroom essentials.",
  },
  {
    id: 3,
    name: "Dining",
    slug: "dining",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description: "Dining tables, chairs, and storage units.",
  },
  {
    id: 4,
    name: "Office",
    slug: "office",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description: "Work desks, ergonomic chairs, and office furniture.",
  },
  {
    id: 5,
    name: "Kitchen",
    slug: "kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    description: "Modern kitchen cabinets and storage solutions.",
  },
  {
    id: 6,
    name: "Outdoor",
    slug: "outdoor",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Garden furniture and outdoor seating collections.",
  },
  {
    id: 7,
    name: "Decor",
    slug: "decor",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    description: "Home decor, lighting, and accessories.",
  },
  {
    id: 8,
    name: "Kids Room",
    slug: "kids-room",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    description: "Furniture and decor designed for kids.",
  },
];

server.get( "/product", (req,res)=>{
     res.status(200).json({
        products,
        messege : "This is Data",

     })
})
server.get( "/category", (req,res)=>{
    console.log(req.query.abhay)
   res.status(200).json({
  categories,
  messege : "done"
   })
})

server.listen(5000,()=>{
    console.log("server is running")
})