import defaultImage from "../../../assets/cover.jpg";

export default function CoverImage({ src }) {
  return <img alt="cover" src={src || defaultImage}></img>;
}
