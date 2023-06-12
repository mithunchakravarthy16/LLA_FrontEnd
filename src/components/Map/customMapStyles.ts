const customMapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [
      {
        color: "#0B151F",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        gamma: 0.01,
      },
      {
        lightness: 20,
      },
      {
        weight: "1.39",
      },
      {
        color: "#566278",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        weight: "0.96",
      },
      {
        saturation: "9",
      },
      {
        visibility: "on",
      },
      {
        color: "#566278",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  // {
  //   featureType: "landscape",
  //   elementType: "geometry",
  //   stylers: [
  //     {
  //       lightness: 30,
  //     },
  //     {
  //       saturation: "9",
  //     },
  //     {
  //       color: "#29446b",
  //     },
  //   ],
  // },
  // {
  //   featureType: "poi",
  //   elementType: "geometry",
  //   stylers: [
  //     {
  //       saturation: 20,
  //     },
  //   ],
  // },
  // {
  //   featureType: "poi.park",
  //   elementType: "geometry",
  //   stylers: [
  //     {
  //       lightness: 20,
  //     },
  //     {
  //       saturation: -20,
  //     },
  //   ],
  // },
  // {
  //   featureType: "road",
  //   elementType: "geometry",
  //   stylers: [
  //     {
  //       lightness: 10,
  //     },
  //     {
  //       saturation: -30,
  //     },
  //   ],
  // },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#131D27",
      },
    ],
  },

  // {
  //   featureType: "road",
  //   elementType: "geometry.stroke",
  //   stylers: [
  //     {
  //       saturation: 25,
  //     },
  //     {
  //       lightness: 25,
  //     },
  //     {
  //       weight: "0.01",
  //     },
  //   ],
  // },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        lightness: -5,
      },
    ],
  },

  {
    featureType: "all",
    elementType: "all",
    stylers: [
      // {
      //   saturation: -100,
      // },
      // {
      //   gamma: 0.5,
      // },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default customMapStyles;
