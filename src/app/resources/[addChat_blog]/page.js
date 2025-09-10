import React from "react";
import Blog from "@/app/components/blogs_items/blog/page";

export async function generateStaticParams() {
  const addChat_blog = [
    "blog",


  ];
  return addChat_blog.map((addChat_blog) => ({ addChat_blog }));
}

export default async function AddChatBlogPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { addChat_blog } = resolvedParams;

  const featureComponents = {
    "blog": <Blog />,

  };

  const Component = featureComponents[addChat_blog];
  if (!Component) return <h1>Feature not found</h1>;

  return Component;
}
