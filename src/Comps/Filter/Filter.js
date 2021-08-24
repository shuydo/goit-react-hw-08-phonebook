import { useDispatch } from "react-redux";
import { filterChange } from "../../redux/slices/filter";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={e => dispatch(filterChange(e.target.value))}
        // onChange={e => console.log(e.target.value)}
      ></input>
    </>
  );
}
