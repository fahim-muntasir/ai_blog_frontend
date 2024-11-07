"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";

type BlogPost = {
  avatarSrc: string;
  avatarAlt: string;
  authorName: string;
  category: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blogPosts: BlogPost[] = [
    {
      avatarSrc: "/images/avatar2.avif",
      avatarAlt: "user avatar",
      authorName: "Fahim Muntasir",
      category: "Artificial Intelligence",
      date: "November 1, 2023",
      title: "The Future of AI: Trends to Watch",
      description:
        "Artificial intelligence is evolving rapidly. Discover the key trends shaping the future of AI and its potential applications in various fields.",
      likes: 2300,
      comments: 45,
      shares: 78,
    },
    {
      avatarSrc: "/images/avatar1.avif",
      avatarAlt: "user avatar",
      authorName: "John Smith",
      category: "Blockchain Technology",
      date: "November 5, 2023",
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      description:
        "Blockchain is not just about cryptocurrency. Explore its real-world applications in industries like supply chain, healthcare, and finance.",
      likes: 3200,
      comments: 23,
      shares: 59,
    },
    {
      avatarSrc: "/images/avatar3.avif",
      avatarAlt: "user avatar",
      authorName: "Emily Brown",
      category: "Cybersecurity",
      date: "November 10, 2023",
      title: "Understanding Cybersecurity Threats and How to Stay Protected",
      description:
        "Cybersecurity threats are on the rise. Learn about the common types of threats and how you can protect yourself and your organization.",
      likes: 4000,
      comments: 12,
      shares: 45,
    },
  ];

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section>
      <div className="bg-secondary border-b border-dark20 py-10 md:py-16 lg:20">
        <div className="container mx-auto px-6 md:px-0 font-medium md:flex md:justify-between md:gap-20 items-center">
          <div>
            <p className="bg-dark20 inline-block py-2 px-3 mb-4 rounded-md text-sm md:text-base">
              A Knowledge Treasure Trove
            </p>
            <h3 className="font-kumbh text-[28px] md:text-[44px] lg:text-[58px] mb-8">
              Explore FutureTech&apos;s In-Depth Blog Posts
            </h3>
          </div>
          <button className="flex items-center gap-1 text-grey60 border border-dark20 w-full md:w-[250px] justify-center md:px-5 py-3 rounded-xl text-sm md:text-base">
            View All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>

      <BlogCategories onCategorySelect={setSelectedCategory} />

      {filteredPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </section>
  );
}
