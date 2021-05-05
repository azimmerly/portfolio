import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogCard from "../BlogCard";
import { BlogList } from "./style";

function BlogCardList() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            tags
            date(formatString: "MMMM Do, YYYY")
            image {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1200)
            }
          }
        }
      }
    }
  `);

  return (
    <BlogList>
      {data.allContentfulBlogPost.edges.map((blogPost) => {
        return <BlogCard key={blogPost.node.id} blogPost={blogPost.node} />;
      })}
    </BlogList>
  );
}

export default BlogCardList;
