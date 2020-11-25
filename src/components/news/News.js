import React from "react";
import Heading from "../layout/Heading";
import NewsList from "./NewsList";

export function News() {
    return (
      <>
        <Heading content="News"/>
        <NewsList/>
      </>    
    );
}

export default News;