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
  Note,
} from "./styles";
import { useNavigate } from "react-router-dom";
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
} from "../../assets/images";

/*
Prop Type
*/
const DEMO_VALUES: any = {
  parking: {
    values: [
      {
        label: "available",
        value: 228,
        suffix: "",
      },
      {
        label: "occupied",
        value: 370,
        suffix: "",
      },
    ],
    note: "19.5 hrs saved",
  },
  energy_management: {
    values: [
      {
        label: "consumed",
        value: 100,
        suffix: "kWh",
      },
      {
        label: "savings",
        value: 15,
        suffix: "%",
      },
    ],
    note: "20Kg CO2 Emmission Reduced",
  },
  security: {
    values: [
      {
        label: "cameras",
        value: 10,
        suffix: "",
      },
      {
        label: "alerts",
        value: 50,
        suffix: "",
      },
    ],
    note: "15% Issues Resolved",
  },
  lighting: {
    values: [
      {
        label: "electricity",
        value: 16,
        suffix: "kWh",
      },
      {
        label: "data",
        value: 1,
        suffix: "TB",
      },
    ],
    note: "PM2.5 - 458 | PM2.5 - 458",
  },
  fleet_management: {
    values: [
      {
        label: "fleet",
        value: 8,
        suffix: "",
      },
      {
        label: "trips",
        value: 50,
        suffix: "",
      },
    ],
    note: "20Kg CO2 Emmission Reduced",
  },
  assets_tracking: {
    values: [
      {
        label: "assets",
        value: 200,
        suffix: "",
      },
      {
        label: "alerts",
        value: 50,
        suffix: "",
      },
    ],
    note: "200 Asset’s Location Changed",
  },
};


type CardPropType = {
  card: {
    title: string;
    image: any;
    category: string;
  };
  currentOpenedCard: any;
  setCurrentOpenedCard: any;
  focusedCategory: any;
  setFocusedCategory: any;
};

const Card = ({
  card,
  currentOpenedCard,
  setCurrentOpenedCard,
  setFocusedCategory,
  focusedCategory
}: CardPropType) => {
  
  const navigate = useNavigate();
  const containerTransform = useSpring({
    opacity: currentOpenedCard === card.title ? 1 : 0,
    transform: `skew(-18deg) perspective(600px) rotateY(${
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
        style={{
          transform: containerTransform.transform,
          opacity: containerTransform.opacity.to((o) => 1 - o),
        }}
      />
      <SkewBackContainer
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
        <CardImage src={card.image} />
        <CardTitle focusedCategory={focusedCategory === card?.category}>{card.title.replaceAll("_", " ")}</CardTitle>
      </ContentContainer>
      <BackContentContainer
        style={{
          transform: contentTransform.transform,
          opacity: contentTransform.opacity,
        }}
      >
        <CardTitleSmall>{card.title.replaceAll("_", " ")}</CardTitleSmall>
        <CardValuesWrapper>
          <CardValuesSkewContainer />
          <CardValuesContainer>
            {DEMO_VALUES[card?.title].values?.map((value: any) => (
              <ValueWrapper>
                <Value>
                  {value.value} {value.suffix}
                </Value>
                <Label>{value.label}</Label>
              </ValueWrapper>
            ))}
          </CardValuesContainer>
        </CardValuesWrapper>
        <Note>
          {
            //ts-ignore
            DEMO_VALUES[card?.title]?.note
          }
        </Note>
      </BackContentContainer>
    </RootContainer>
  );
};

const FlippingCard = (props: any) => {
  const { focusedCategory, setFocusedCategory } = props;
  const CARD_LIST: any = [
    {
      title: "parking",
      image: focusedCategory === "parking" ? ParkingHover  : parking ,
      category: "parking",
    },
    {
      title: "energy_management",
      image: focusedCategory === "energy" ? EnergyHover  : energyManagement,
      category: "energy",
    },
    {
      title: "security",
      image: focusedCategory === "security" ? SecurityHover  : security,
      category: "security",
    },
    {
      title: "lighting",
      image: focusedCategory === "lighting" ? LightingHover  : lighting,
      category: "lighting",
    },
    {
      title: "fleet_management",
      image: focusedCategory === "fleet" ? FleetHover  : fleetManagement,
      category: "fleet",
    },
    {
      title: "assets_tracking",
      image: focusedCategory === "asset" ? AssetHover  : assetTracking,
      category: "asset",
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
        />
      ))}
    </Wrapper>
  );
};

export default FlippingCard;
