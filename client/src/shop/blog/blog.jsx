import React from "react";
import BlogCard from "./blog-card";

const BlogInfo = [
  {
    title: "IIT TIRUPATI",
    description: "The blog is about IIT Tirupati WiFi",
    writtenBy: "Abhijith Shaji",
    date: "08/04/2023",
    id: "1",
  },
  {
    title: "G BLOCK",
    description: "The blog is about IIT Tirupati G Block",
    writtenBy: "Abhijith Shaji",
    date: "09/04/2023",
    id: "2",
  },
  {
    title: "Our Website",
    description: "New Website Lorem Ipsum",
    writtenBy: "Abhijith Shaji",
    date: "09/04/2023",
    id: "3",
  },
];

function Blog() {
  return (
    <div>
      <div>Blog</div>
      <div>
        {BlogInfo.map(({ title, description, writtenBy, date }, index) => {
          return (
            <BlogCard
              title={title}
              description={description}
              writenBy={writtenBy}
              date={date}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
