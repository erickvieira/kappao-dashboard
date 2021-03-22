import React from "react";
import "./Image.less";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "alt"> & {
  alt: string;
};
const Image: React.FC<Props> = ({ src, alt, ...props }) => {
  return <img src={`${process.env.PUBLIC_URL}/${src}`} alt={alt} {...props} />;
};

export default Image;
