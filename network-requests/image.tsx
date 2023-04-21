import axios from "./axios";

// blog image upload..
export const uploadBlogImage = async (image: Blob) => {
  const formdata = new FormData();
  formdata.append("image", image);

  console.log(formdata);
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/uploads`, formdata, {
      withCredentials: false,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};