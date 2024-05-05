import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSinglePostApi } from "../../services/post.api";

function PostDetail() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchSinglePostApi(id),
  });

  console.log(data);
  return (
    <div>
      {isLoading && <span>...fetching data</span>}
      {isError && <span>{error.message}</span>}
      {isSuccess && <span>Successfully fetch post</span>}
      <h1>Detail Page</h1>
      <h2>{data?.data?.title}</h2>
      <p>{data?.data?.description}</p>
    </div>
  );
}

export default PostDetail;
