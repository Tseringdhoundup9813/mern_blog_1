import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSinglePostApi, updatePostApi } from "../../services/post.api";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

function UpdatePosts() {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post-details"],
    queryFn: () => fetchSinglePostApi(id),
  });

  //   mution
  const updatePosts = useMutation({
    mutationKey: ["update-posts"],
    mutationFn: updatePostApi,
  });

  //   form handling
  const formik = useFormik({
    initialValues: {
      title: data?.data?.title || "",
      description: data?.data?.description || "",
    },
    enableReinitialize: true,
    // validate
    validationSchema: Yup.object({
      title: Yup.string().required("title is required field!"),
      description: Yup.string().required("description is required field!"),
    }),
    onSubmit: (value) => {
      const payload = {
        id: id,
        title: value.title,
        description: value.description,
      };
      updatePosts.mutate(payload);
      queryClient.invalidateQueries({ queryKey: ["list-posts"] });
    },
  });

  const title = data?.data.title;
  const fetchIsLoading = isLoading;
  const fetchError = isError;
  const fetchErrorMessage = error;

  return (
    <div>
      {fetchIsLoading && <h1>....fetching Data</h1>}
      {fetchError && <h1>{fetchErrorMessage}</h1>}
      <h1>Updating {title}</h1>

      {updatePosts.isPending && <span>...updating data</span>}
      {updatePosts.isSuccess && <span>successfully updated posts</span>}
      {updatePosts.isError && <span>{updatePostApi.error}</span>}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="enter title"
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title && (
          <span>{formik.errors.title}</span>
        )}
        <input
          type="text"
          placeholder="enter description"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description && (
          <span>{formik.errors.description}</span>
        )}
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default UpdatePosts;
