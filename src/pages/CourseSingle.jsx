import { useParams } from "react-router-dom";

function CourseSingle() {
  const { id } = useParams();
  return <div>Place Page: {id}</div>;
}

export default CourseSingle;
