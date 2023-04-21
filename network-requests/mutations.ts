import { useMutation } from "react-query";
import { createBlogs, updateBlogs } from "./api/blogs";
import { BlogsTypes } from "@/typings/blogs";

// FOR BLOGS MUTATIONS...
export const useCreateNewBlog = () => {
  return useMutation(
    (payload: BlogsTypes): Promise<BlogsTypes> => createBlogs(payload)
  );
};
export const useUpdateBlog = (id: string) => {
  return useMutation(
    (payload: BlogsTypes): Promise<BlogsTypes> => updateBlogs(id, payload)
  );
};
