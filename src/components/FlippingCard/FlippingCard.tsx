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
  cardDifferenceIndicator,
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
        type: 'splitter'
      },
      {
        label: "occupied",
        value: 370,
        suffix: "",
      },
    ],
    noteLabel: "Drive hours saved",
    noteValue: "19.5",
    noteDifference: "+"
  },
  energy_management: {
    values: [
      {
        label: "consumed",
        value: 100,
        suffix: "kWh",
      },
      {
        type: 'splitter'
      },
      {
        label: "savings",
        value: 15,
        suffix: "%",
      },
    ],
    noteLabel: "Energy Consumed",
    noteValue: "100kWh",
    noteDifference: "-"
  },
  security: {
    values: [
      {
        label: "cameras",
        value: 10,
        suffix: "",
      },
      {
        type: 'splitter'
      },
      {
        label: "alerts",
        value: 50,
        suffix: "",
      },
    ],
    noteLabel: "Security Breaches Avoided",
    noteValue: "20",
    noteDifference: "+"
  },
  lighting: {
    values: [
      {
        label: "electricity",
        value: 16,
        suffix: "kWh",
      },
      {
        type: 'splitter'
      },
      {
        label: "data",
        value: 1,
        suffix: "TB",
      },
    ],
    noteLabel: "Electricity Consumed",
    noteValue: "16kWh",
    noteDifference: "-"
  },
  fleet_management: {
    values: [
      {
        label: "fleet",
        value: 8,
        suffix: "",
      },
      {
        type: 'splitter'
      },
      {
        label: "trips",
        value: 50,
        suffix: "",
      },
    ],
    noteLabel: "Trips Completed",
    noteValue: "20",
    noteDifference: "+"
  },
  assets_tracking: {
    values: [
      {
        label: "assets",
        value: 200,
        suffix: "",
      },
      {
        type: 'splitter'
      },
      {
        label: "alerts",
        value: 50,
        suffix: "",
      },
    ],
    noteLabel: "Location Changed",
    noteValue: "30",
    noteDifference: "-"
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
            {DEMO_VALUES[card?.title].values?.map((value: any) => value?.type === 'splitter' ? <CardValuesSplitter /> : (
              <ValueWrapper>
                <Value>
                  {value.value} {value.suffix}
                </Value>
                <Label>{value.label}</Label>
              </ValueWrapper>
            ))}
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
          <NoteDifferenceIndicator src={cardDifferenceIndicator} difference={DEMO_VALUES[card?.title]?.noteDifference} />
        </NoteContainer>
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
