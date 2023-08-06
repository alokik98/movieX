import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/slices/homeSlice/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";


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
	return <BrowserRouter>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/:mediaType/:id" element={<Details />} />
			<Route exact path="/search/:query" element={<SearchResult />} />
			<Route exact path="/explore/:mediaType" element={<Explore />} />
			<Route exact path="*" element={<PageNotFound />} />
		</Routes>
		<Footer />
	</BrowserRouter>;
}

export default App;
