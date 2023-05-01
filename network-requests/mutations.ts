import { useMutation } from "react-query";
import { BlogsTypes, StoryTypes } from "@/typings/blogs";
import { createBlogs, updateBlogs } from "./api/blogs";
import { createStory, updateStory } from "./api/stories";

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

// FOR STORIES MUTATIONS
export const useCreateNewStory = () => {
  return useMutation(
    (payload: StoryTypes): Promise<StoryTypes> => createStory(payload)
  );
};
export const useUpdateStory = (id: string) => {
  return useMutation(
    (payload: StoryTypes): Promise<StoryTypes> => updateStory(id, payload)
  );
};
