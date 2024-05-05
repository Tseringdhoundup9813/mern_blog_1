import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcPostAPi } from "../../services/post.api";
import { NavLink } from "react-router-dom";
function PostList() {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["list-posts"],
    queryFn: fetcPostAPi,
    staleTime: 10000 * 10,
    refetchOnWindowFocus: false,
  });
  return (
    <div>
      {isLoading && <p>...loading</p>}
      {isSuccess && <p>posts have fetch successfully</p>}
      {isError && <p>{error.message}</p>}

      {data?.data.map((item) => {
        return (
          <div>
            <NavLink to={`/posts/detail/${item._id}`}>Detail</NavLink>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <NavLink to={`/posts/update/${item._id}`}>Edit Posts</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
