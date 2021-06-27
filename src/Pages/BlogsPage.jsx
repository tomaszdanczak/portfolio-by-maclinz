import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsPageStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>Blogs Page</InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  );
}

const BlogsPageStyled = styled.div``;

export default BlogsPage;
