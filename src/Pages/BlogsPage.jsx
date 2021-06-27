import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsPageStyled>
        <InnerLayout className={"blog"}>Blogs Page</InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  );
}

const BlogsPageStyled = styled.div``;

export default BlogsPage;
