import React from "react";
const Header = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-1">Food Recipe</h1>
			<div className="input-group w-50 mx-auto">

            <input type="text" class="form-control" placeholder="Search here"/>
            <button className="btn btn-dark">Search</button>
		</div>
        </div>
	);
};

export default Header;
