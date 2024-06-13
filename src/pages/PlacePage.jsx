import { useParams } from "react-router-dom";

function PlacePage() {
  const { id } = useParams();
  return <div>Place Page: {id}</div>;
}

export default PlacePage;
