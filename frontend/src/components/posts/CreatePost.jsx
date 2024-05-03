import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@tanstack/react-query";
import { createPostApi } from "../../services/post.api";

export const CreatePost = () => {
  const postMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPostApi,
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    //validation
    validationSchema: Yup.object({
      title: Yup.string().required("Tittle is required!"),
      description: Yup.string().required("description is required!"),
    }),
    onSubmit: (value) => {
      const payload = { title: value.title, description: value.description };
      postMutation.mutate(payload);
    },
  });

  // get loadin state;
  const isLoading = postMutation.isPending;
  const isError = postMutation.isError;
  const isSuccess = postMutation.isSuccess;
  const error = postMutation.error;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>post created successfully</p>}
      {isError && <p>{error.message}</p>}

      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter title"
          {...formik.getFieldProps("title")}
        />
        {/* display error message */}
        {formik.touched.title && formik.errors.title && (
          <span>{formik.errors.title}</span>
        )}
        <input
          type="text"
          name="description"
          placeholder="enter description"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description && (
          <span>{formik.errors.description}</span>
        )}
        <button type="submit">submit post</button>
      </form>
    </div>
  );
};
