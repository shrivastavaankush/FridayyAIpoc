import React, { useState, useEffect } from "react";
import CategoryMenu from "@/components/CategoryMenu";
import { useRouter } from "next/router";
import fetchProducts from "@/utils";

//fake data
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All Brands", href: "/category" },
  { name: "Backpacks", href: "/category" },
  { name: "Travel Bags", href: "/category" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];



const Index = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const productsData = await fetchProducts(); // Call  fetchProducts function
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <CategoryMenu
        sortOptions={sortOptions}
        filters={filters}
        subCategories={subCategories}
        content={router.query.slug}
        products={products}
      />
    </>
  );
};

export default Index;