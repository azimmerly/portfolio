import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, StyledLink, Title, Date, Tags } from "./style";

function BlogCard({ blogPost }) {
  const { slug, title, tags, date, image } = blogPost;
  return (
    <Card>
      <StyledLink to={`/blog/${slug}`}>
        <GatsbyImage image={image.gatsbyImageData} alt={title} draggable={false} />
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Tags>
          {tags.map((tag, index) => (
            <p key={`${tag}-${index}`}>{`#${tag}`}</p>
          ))}
        </Tags>
      </StyledLink>
    </Card>
  );
}

export default BlogCard;
