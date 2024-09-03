// import React from "react";
import bannerImage from "../images/banner.png";

const Header = () => {
	return (
		<>
			<img src={bannerImage} alt="Banner" style={styles.image} />
		</>
	);
};

export default Header;

const styles = {
	Wrapper: {
		width: "100%",
		textAlign: "center",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		objectFit: "cover",
		objectPosition: "center",
	},
};
