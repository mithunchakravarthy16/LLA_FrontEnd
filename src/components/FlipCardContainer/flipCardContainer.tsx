import React, { useEffect, useState } from 'react';
import ReactCardFlip from "react-card-flip";
import useStyles from "./styles";

const FlipCardContainer = () => {

    const [appTheme, setAppTheme] = useState();
    // const [selectedTheme, setSelectedTheme] = useState(
    //     JSON.parse(localStorage.getItem("theme")!)
    //   );

    //   useEffect(() => {
    //     switch (selectedTheme) {
    //       case "light":
    //         setAppTheme(customTheme?.lightTheme);
    //         break;
    //       case "dark":
    //         setAppTheme(customTheme?.darkTheme);
    //         break;
    //       default:
    //         setAppTheme(customTheme?.defaultTheme);
    //         break;
    //     }
    //   }, [selectedTheme]);

    const {
        flipCardContainer,
        frontFlipCard,
        backFlipCard,
      } = useStyles(appTheme);

const [isFlipped, setIsFlipped]=useState<boolean>(false)

const handleFlipCardClick = ()=>{
    setIsFlipped(!isFlipped)
}

  return (
    <>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack={2}
          flipSpeedBackToFront={2}
          containerStyle={{ width: "150px" }}
          infinite={true}
        >
          <div className={frontFlipCard}>This is the front of the card.</div>

          <div className={backFlipCard}>This is the back of the card.</div>
        </ReactCardFlip>
        <button onClick={handleFlipCardClick}>Click to flip</button>
      </>
  )
}

export default FlipCardContainer
