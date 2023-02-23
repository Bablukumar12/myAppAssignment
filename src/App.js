import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./redux/actionTypes";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");
	const [view, setView] = useState(0);
	const [savedItem, setSavedItem] = useState([]);

	const { recipes } = useSelector((state) => state.data);

	const updateSearch = () => {
		setQuery(search);
		setSearch("");
	};

	const handleProfile = () => {
		setView(1);
	};

	const handleSavedItem = (item) => {
    setSavedItem(prevSavedItem => [...prevSavedItem, item]);
    console.log(savedItem)
  };

	let dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: types.FETCH_RECIPE_START, query });
	}, [query]);

	return (
		<div className="App container text-center">
			<div className="row">
				<div className="col-6">
					<h4>Recipe App</h4>
				</div>
				<div className="col-6">
					{isAuthenticated ? (
						<React.Fragment>
							<button
								className="btn btn-secondary btn-sm m-2"
								onClick={() =>
									logout({ logoutParams: { returnTo: window.location.origin } })
								}>
								Log Out
							</button>
							<button
								className="btn btn-secondary btn-sm m-2"
								onClick={handleProfile}>
								My Profile
							</button>
						</React.Fragment>
					) : (
						<button
							className="btn btn-secondary btn-sm m-2"
							onClick={() => loginWithRedirect()}>
							Log In
						</button>
					)}
				</div>
			</div>

			{view === 0 ? (
				<React.Fragment>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Search here"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button className="btn btn-secondary btn-sm" onClick={updateSearch}>
							Search
						</button>
					</div>
					<div className="row">
						{recipes &&
							recipes.hits &&
							recipes.hits.map((item) => (
								<div
									onClick={() => handleSavedItem(item)}
									className="col-4 border">
									<h6>{item.recipe.label}</h6>
									<img className="img-fluid" src={item.recipe.image} alt="" />
									{item.recipe.ingredientLines.map((i) => i)}
								</div>
							))}
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<h4>User Name : {user.name}</h4>
					<h4>User Email : {user.email}</h4>
					<br />
					<h3>Saved Item</h3>
					<div className="row">
						{savedItem.map((item) => (
							<div
              
              className="col-4 border">
              <h6>{item.recipe.label}</h6>
              <img className="img-fluid" src={item.recipe.image} alt="" />
              {item.recipe.ingredientLines.map((i) => i)}
            </div>
						))}
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default App;
