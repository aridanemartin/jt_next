import React from "react";

export const useSanityImage = (image) => {
  const imageProps = useNextSanityImage(sanityClient, image);
  return imageProps;
};
