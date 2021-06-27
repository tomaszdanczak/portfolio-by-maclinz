import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import blogs from "../data/blogs";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsPageStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  );
}

const BlogsPageStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }

  .blog-item {
    background-color: var(--background-dark-grey);
    padding: 1rem 1rem;
  }

  .image {
    width: 100%;
    overflow: hidden;
    padding-bottom: 0.5rem;

    img {
      width: 100%;
      height: 90%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: rotate(3deg) scale(1.1);
      }
    }
  }

  .title {
    a {
      font-size: 1.8rem;
      color: var(--white-color);
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export default BlogsPage;
