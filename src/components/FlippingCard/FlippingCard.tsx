/** @format */

import { useState } from "react";
import { useSpring } from "@react-spring/web";
import {
  Wrapper,
  RootContainer,
  SkewContainer,
  SkewBackContainer,
  ContentContainer,
  CardImage,
  CardTitle,
  CardTitleSmall,
  BackContentContainer,
  CardValuesWrapper,
  CardValuesSkewContainer,
  CardValuesContainer,
  ValueWrapper,
  Value,
  Label,
  NoteContainer,
  NoteLabel,
  NoteValue,
  NoteDifferenceIndicator,
  CardValuesSplitter,
  InnerCardWrapper,
  setTheme,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useTranslation from "localization/translations";
import { useDispatch, useSelector } from "react-redux";
import {
  assetTracking,
  energyManagement,
  lighting,
  parking,
  security,
  fleetManagement,
  ParkingHover,
  SecurityHover,
  AssetHover,
  EnergyHover,
  LightingHover,
  FleetHover,
  cardDifferenceIndicator,
  assetTrackingLight,
  energyManagementLight,
  fleetManagementLight,
  parkingLight,
  securityLight,
  lightingLight,
  parkingHoverWhite,
  energyManagementWhite,
  securityHoverWhite,
  lightingHoverWhite,
  fleetManagementWhite,
  assetHoverWhite,
} from "../../assets/images";

/*
Prop Type
*/

type CardPropType = {
  card: {
    title: string;
    image: any;
    category: string;
    translatedTitle: string;
  };
  currentOpenedCard: any;
  setCurrentOpenedCard: any;
  focusedCategory: any;
  setFocusedCategory: any;
  fleetManagementTripDetailsResponse: any;
};

const Card = ({
  card,
  currentOpenedCard,
  setCurrentOpenedCard,
  setFocusedCategory,
  focusedCategory,
  fleetManagementTripDetailsResponse,
}: CardPropType) => {
  const navigate = useNavigate();
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );
  setTheme(adminPanelData?.appearance);
  const containerTransform = useSpring({
    opacity: currentOpenedCard === card.title ? 1 : 0,
    transform: `skew(0deg) perspective(600px) rotateY(${
      currentOpenedCard === card.title ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const contentTransform = useSpring({
    opacity: currentOpenedCard === card.title ? 1 : 0,
    transform: `perspective(600px) rotateY(${
      currentOpenedCard === card.title ? 360 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const { dashboard } = useTranslation();

  const DEMO_VALUES: any = {
    parking: {
      values: [
        {
          label: dashboard.available,
          value: 228,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard.occupied,
          value: 370,
          suffix: "",
        },
      ],
      noteLabel: dashboard?.parkingNoteLabel,
      noteValue: "19.5Hrs",
      noteDifference: "+",
    },
    energy_management: {
      values: [
        {
          label: dashboard?.runningUnits,
          value: 20,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard?.alertsText,
          value: "10",
          suffix: "",
        },
      ],
      noteLabel: dashboard?.energyNoteLabel,
      noteValue: "100kWh",
      noteDifference: "-",
    },
    security: {
      values: [
        {
          label: dashboard.cameras,
          value: 10,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard.alerts,
          value: 50,
          suffix: "",
        },
      ],
      // noteLabel: dashboard?.securityNoteLabel.substring(0, 23) + "...",
      noteLabel: dashboard?.securityNoteLabel,
      noteValue: "20",
      noteDifference: "+",
    },
    lighting: {
      values: [
        {
          label: dashboard?.smartLights,
          value: 10,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard?.alertsText,
          value: 30,
          suffix: "",
        },
      ],
      noteLabel: dashboard?.electricityNoteLabel,
      noteValue: "16kW",
      noteDifference: "-",
    },
    fleet_management: {
      values: [
        {
          label: dashboard?.fleet,
          value: fleetManagementTripDetailsResponse?.data?.totalLiveVehicles,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard?.violations,
          value: fleetManagementTripDetailsResponse?.data?.totalViolations,
          suffix: "",
        },
      ],
      noteLabel: dashboard?.tripsNoteLabel,
      noteValue: fleetManagementTripDetailsResponse?.data?.totalCompletedTrip,
      noteDifference: "+",
    },
    assets_tracking: {
      values: [
        {
          label: dashboard.assets,
          value: 52,
          suffix: "",
        },
        {
          type: "splitter",
        },
        {
          label: dashboard.alerts,
          value: 50,
          suffix: "",
        },
      ],
      noteLabel: dashboard?.assetsNoteLabel,
      noteValue: "30",
      noteDifference: "-",
    },
  };

  return (
    <RootContainer
      onMouseOver={() => setFocusedCategory(card?.category)}
      onMouseLeave={() => setFocusedCategory("")}
      onDoubleClick={() => navigate("/gridView")}
      onClick={() =>
        setCurrentOpenedCard((prev: any) =>
          prev === card?.title ? "" : card?.title
        )
      }
    >
      <SkewContainer
        isFocused={focusedCategory === card.category}
        style={{
          transform: containerTransform.transform,
          opacity: containerTransform.opacity.to((o) => 1 - o),
        }}
      />
      <SkewBackContainer
         themeapi={adminPanelData?.appearance}
        style={{
          transform: containerTransform.transform,
          opacity: containerTransform.opacity,
        }}
      />
      <ContentContainer
        style={{
           transform: contentTransform.transform,
          opacity: contentTransform.opacity.to((o) => 1 - o),
        }}
      >
        <InnerCardWrapper>
          <CardImage src={card.image} />
          <CardTitle focusedCategory={focusedCategory === card?.category}>
            {card.translatedTitle.replaceAll("_", " ")}
          </CardTitle>
        </InnerCardWrapper>
      </ContentContainer>
      <BackContentContainer
        style={{
           transform: contentTransform.transform,
          opacity: contentTransform.opacity,
        }}
      >
        <CardTitleSmall>
          {card.translatedTitle.replaceAll("_", " ")}
        </CardTitleSmall>
        <CardValuesWrapper>
          <CardValuesSkewContainer themeapi={adminPanelData?.appearance}/>
          <CardValuesContainer>
            {DEMO_VALUES[card?.title].values?.map((value: any) =>
              value?.type === "splitter" ? (
                <CardValuesSplitter themeapi={adminPanelData?.appearance}/>
              ) : (
                <ValueWrapper>
                  <Value themeapi={adminPanelData?.appearance}>
                    {value.value} {value.suffix}
                  </Value>
                  <Label>{value.label}</Label>
                </ValueWrapper>
              )
            )}
          </CardValuesContainer>
        </CardValuesWrapper>
        <NoteContainer>
          <NoteLabel>
            {
              //ts-ignore
              DEMO_VALUES[card?.title]?.noteLabel
            }
          </NoteLabel>
          <NoteValue>
            {
              //ts-ignore
              DEMO_VALUES[card?.title]?.noteValue
            }
          </NoteValue>
          {/* {adminPanelData?.appearance === "light" &&
          card?.title === "assets_tracking" ? null : (
            <NoteDifferenceIndicator
              src={cardDifferenceIndicator}
              difference={DEMO_VALUES[card?.title]?.noteDifference}
            />
          )} */}
        </NoteContainer>
      </BackContentContainer>
    </RootContainer>
  );
};

const FlippingCard = (props: any) => {
  const {
    focusedCategory,
    setFocusedCategory,
    selectedTheme,
    fleetManagementTripDetailsResponse,
  } = props;
  const { dashboard } = useTranslation();
  // const [selectedTheme, setSelectedTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")!)
  // )

  const CARD_LIST: any = [
    {
      title: "parking",
      image:
        focusedCategory === "parking"
          ? selectedTheme === "light" ? parkingHoverWhite : ParkingHover
          : selectedTheme !== "light"
          ? parking
          : parkingLight,
      category: "parking",
      translatedTitle: dashboard.parking,
    },
    {
      title: "energy_management",
      image:
        focusedCategory === "energy"
          ? selectedTheme === "light" ? energyManagementWhite : EnergyHover
          : selectedTheme !== "light"
          ? energyManagement
          : energyManagementLight,
      category: "energy",
      translatedTitle: dashboard.energyManagement,
    },
    {
      title: "security",
      image:
        focusedCategory === "security"
          ? selectedTheme === "light" ? securityHoverWhite : SecurityHover
          : selectedTheme !== "light"
          ? security
          : securityLight,
      category: "security",
      translatedTitle: dashboard.security,
    },
    {
      title: "lighting",
      image:
        focusedCategory === "lighting"
          ? selectedTheme === "light" ? lightingHoverWhite : LightingHover
          : selectedTheme !== "light"
          ? lighting
          : lightingLight,
      category: "lighting",
      translatedTitle: dashboard.lighting,
    },
    {
      title: "fleet_management",
      image:
        focusedCategory === "fleet"
          ? selectedTheme === "light" ? fleetManagementWhite : FleetHover
          : selectedTheme !== "light"
          ? fleetManagement
          : fleetManagementLight,
      category: "fleet",
      translatedTitle: dashboard.fleetManagement,
    },
    {
      title: "assets_tracking",
      image:
        focusedCategory === "asset"
          ? selectedTheme === "light" ? assetHoverWhite : AssetHover
          : selectedTheme !== "light"
          ? assetTracking
          : assetTrackingLight,
      category: "asset",
      translatedTitle: dashboard.assetsTracking,
    },
  ];

  return (
    <Wrapper>
      {CARD_LIST.map((card: any) => (
        <Card
          card={card}
          currentOpenedCard={props.currentOpenedCard}
          setCurrentOpenedCard={props.setCurrentOpenedCard}
          focusedCategory={focusedCategory}
          setFocusedCategory={setFocusedCategory}
          fleetManagementTripDetailsResponse={
            fleetManagementTripDetailsResponse
          }
        />
      ))}
    </Wrapper>
  );
};

export default FlippingCard;
