import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcPostAPi } from "../../services/post.api";
function PostList() {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["list-posts"],
    queryFn: fetcPostAPi,
  });
  return (
    <div>
      {isLoading && <p>...loading</p>}
      {isSuccess && <p>posts have fetch successfully</p>}
      {isError && <p>{error.message}</p>}

      {data?.data.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
