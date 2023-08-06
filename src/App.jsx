import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/slices/homeSlice/homeSlice";

function App() {

	const dispatch = useDispatch();
	const { url } = useSelector((state) =>
		state.home
	)

	useEffect(() => {
		apiTesting()
	}, [])
	const apiTesting = () => {
		fetchDataFromApi("movie/popular")
			.then((response) => {
				console.log(response);
				dispatch(getApiConfiguration(response))
			})
			.catch(error => { console.log(error); })
	}
	return <div>{url?.total_pages}</div>;
}

export default App;
