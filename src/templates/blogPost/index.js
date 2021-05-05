import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../../components/SEO";
import Layout from "../../components/Layout";
import {
  BlogPost,
  Title,
  Date,
  Tags,
  StyledImg,
  BlogBody,
  StyledLink,
} from "./style";

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      tags
      date(formatString: "MMMM Do, YYYY")
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1600)
      }
      body {
        raw
      }
    }
  }
`;

const BlogPostPage = ({ data }) => {
  const { title, date, image, body, tags } = data.contentfulBlogPost;

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  const bodyText = renderRichText(body, options);

  return (
    <>
      <SEO title={title} />
      <Layout>
        <BlogPost>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Tags>
            {tags.map((tag, index) => (
              <p key={`${tag}-${index}`}>{`#${tag}`}</p>
            ))}
          </Tags>
          <StyledImg image={image.gatsbyImageData} alt={title} />
          <BlogBody>
            {bodyText}
            <StyledLink to="/blog">
              <FaArrowLeft /> Back to all blogs
            </StyledLink>
          </BlogBody>
        </BlogPost>
      </Layout>
    </>
  );
};

export default BlogPostPage;
