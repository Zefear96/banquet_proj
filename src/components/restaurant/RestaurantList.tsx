import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
	ArrowBackIos,
	ArrowForwardIos,
	Favorite,
	FavoriteBorder,
} from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const ResaurantList = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [likedImages, setLikedImages] = useState();
	new Array(images.length).fill(false);

	const handleNext = () => {
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	// const toggleLike = () => {
	// 	const newLikedImages = [...likedImages];
	// 	newLikedImages[currentIndex] = !newLikedImages[currentIndex];
	// 	setLikedImages(newLikedImages);
	// };

	const getPrevImageIndex = () => {
		return (currentIndex - 1 + images.length) % images.length;
	};

	const getNextImageIndex = () => {
		return (currentIndex + 1) % images.length;
	};

	return (
		<>
			<Box
				// position="relative"
				width="60rem"
				height="40rem"
				padding="2.5rem"
				bgcolor="#fbfbfb"
				boxShadow="0px 0px 10px -4px grey"
			>
				{/* left img */}
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
					overflow="hidden"
				>
					<IconButton onClick={handlePrev}>
						<ArrowBackIos style={{ color: "#A07D50" }} />
					</IconButton>
					<Box width="70%" marginRight="-8rem">
						<img
							src={images[getPrevImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>

					{/* current img */}
					<Box width="100%" position="relative" zIndex="5">
						<IconButton
							// onClick={toggleLike}
							style={{
								position: "absolute",
								top: "5px",
								right: "5px",
								// color: likedImages[currentIndex] ? "red" : "black",
							}}
							sx={{ backgroundColor: "#F5F4F1" }}
						>
							{/* {likedImages[currentIndex] ? <Favorite /> : <FavoriteBorder />} */}
						</IconButton>
						<img
							src={images[currentIndex]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								borderRadius: "5px",
							}}
						/>
						<Box
						// position="absolute"
						// bottom="5%"
						// left="43%"
						// transform="translate(-50%, 0)"
						// color="white"
						>
							<Typography
								variant="body1"
								fontFamily="'Inter', sans-serif"
								fontSize="1.5rem"
								fontWeight="700"
							>
								{currentIndex + 1} из {images.length}
							</Typography>
						</Box>
					</Box>

					{/* right img */}

					<Box width="70%" marginLeft="-8rem">
						<img
							src={images[getNextImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>
					<IconButton onClick={handleNext}>
						<ArrowForwardIos style={{ color: "#A07D50" }} />
					</IconButton>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					gap="1.7rem"
					padding="2rem 0rem 0rem 0rem"
					color="#787878"
				>
					<Box>
						<Rating
						// value={parseInt(images.id.replace('rating_', ''), 10)}
						// readOnly
						// precision={1}
						/>
						<Typography
							variant="h3"
							style={{ color: "#A07D50" }}
							fontWeight="600"
							fontSize="1.5rem"
						>
							Золотой Дракон
						</Typography>
						<Typography variant="body1">Бишкек, Проспект Победы 351</Typography>
					</Box>
					<Typography textAlign="right">
						Банкетный чек на гостя: <br />
						от 1000с{" "}
					</Typography>
				</Box>
			</Box>
			<Box
				// position="relative"
				width="60rem"
				height="40rem"
				padding="2.5rem"
				bgcolor="#fbfbfb"
				boxShadow="0px 0px 10px -4px grey"
			>
				{/* left img */}
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
					overflow="hidden"
				>
					<IconButton onClick={handlePrev}>
						<ArrowBackIos style={{ color: "#A07D50" }} />
					</IconButton>
					<Box width="70%" marginRight="-8rem">
						<img
							src={images[getPrevImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>

					{/* current img */}
					<Box width="100%" position="relative" zIndex="5">
						<IconButton
							// onClick={toggleLike}
							style={{
								position: "absolute",
								top: "5px",
								right: "5px",
								// color: likedImages[currentIndex] ? "red" : "black",
							}}
							sx={{ backgroundColor: "#F5F4F1" }}
						>
							{/* {likedImages[currentIndex] ? <Favorite /> : <FavoriteBorder />} */}
						</IconButton>
						<img
							src={images[currentIndex]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								borderRadius: "5px",
							}}
						/>
						<Box
						// position="absolute"
						// bottom="5%"
						// left="43%"
						// transform="translate(-50%, 0)"
						// color="white"
						>
							<Typography
								variant="body1"
								fontFamily="'Inter', sans-serif"
								fontSize="1.5rem"
								fontWeight="700"
							>
								{currentIndex + 1} из {images.length}
							</Typography>
						</Box>
					</Box>

					{/* right img */}

					<Box width="70%" marginLeft="-8rem">
						<img
							src={images[getNextImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>
					<IconButton onClick={handleNext}>
						<ArrowForwardIos style={{ color: "#A07D50" }} />
					</IconButton>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					gap="1.7rem"
					padding="2rem 0rem 0rem 0rem"
					color="#787878"
				>
					<Box>
						<Rating
						// value={parseInt(images.id.replace('rating_', ''), 10)}
						// readOnly
						// precision={1}
						/>
						<Typography
							variant="h3"
							color="#A07D50"
							fontWeight="600"
							fontSize="1.5rem"
						>
							Золотой Дракон
						</Typography>
						<Typography variant="body1">Бишкек, Проспект Победы 351</Typography>
					</Box>
					<Typography textAlign="right">
						Банкетный чек на гостя: <br />
						от 1000с{" "}
					</Typography>
				</Box>
			</Box>
			<Box
				// position="relative"
				width="60rem"
				height="40rem"
				padding="2.5rem"
				bgcolor="#fbfbfb"
				boxShadow="0px 0px 10px -4px grey"
			>
				{/* left img */}
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					width="100%"
					overflow="hidden"
				>
					<IconButton onClick={handlePrev}>
						<ArrowBackIos style={{ color: "#A07D50" }} />
					</IconButton>
					<Box width="70%" marginRight="-8rem">
						<img
							src={images[getPrevImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>

					{/* current img */}
					<Box width="100%" position="relative" zIndex="5">
						<IconButton
							// onClick={toggleLike}
							style={{
								position: "absolute",
								top: "5px",
								right: "5px",
								// color: likedImages[currentIndex] ? "red" : "black",
							}}
							sx={{ backgroundColor: "#F5F4F1" }}
						>
							{/* {likedImages[currentIndex] ? <Favorite /> : <FavoriteBorder />} */}
						</IconButton>
						<img
							src={images[currentIndex]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								borderRadius: "5px",
							}}
						/>
						<Box
						// position="absolute"
						// bottom="5%"
						// left="43%"
						// transform="translate(-50%, 0)"
						// color="white"
						>
							<Typography
								variant="body1"
								fontFamily="'Inter', sans-serif"
								fontSize="1.5rem"
								fontWeight="700"
							>
								{currentIndex + 1} из {images.length}
							</Typography>
						</Box>
					</Box>

					{/* right img */}

					<Box width="70%" marginLeft="-8rem">
						<img
							src={images[getNextImageIndex()]}
							alt={images.name}
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								opacity: "0.5",
								borderRadius: "5px",
							}}
						/>
					</Box>
					<IconButton onClick={handleNext}>
						<ArrowForwardIos style={{ color: "#A07D50" }} />
					</IconButton>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					gap="1.7rem"
					padding="2rem 0rem 0rem 0rem"
					color="#787878"
				>
					<Box>
						<Rating
						// value={parseInt(images.id.replace('rating_', ''), 10)}
						// readOnly
						// precision={1}
						/>
						<Typography
							variant="h3"
							color="#A07D50"
							fontWeight="600"
							fontSize="1.5rem"
						>
							Золотой Дракон
						</Typography>
						<Typography variant="body1">Бишкек, Проспект Победы 351</Typography>
					</Box>
					<Typography textAlign="right">
						Банкетный чек на гостя: <br />
						от 1000с{" "}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default ResaurantList;
