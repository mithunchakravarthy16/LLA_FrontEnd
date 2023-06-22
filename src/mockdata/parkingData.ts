const parkingData = {

  infoData: {},
  analytics: {},
  notifications: {
  parking: [
    {
      id: "prk1",
      title: "Vehicle Entered",
      area: "Parking Lot -1 ",
      entity: "LPN: ADL-D21| Sot - 18",
      venue: "",
      category: "parking",
      notificationCategory: "event",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.75055380818962,
        lng: -105.00000034678636,
      },
    },
    {
      id: "prk2",
      title: "vehicle Exited",
      area: "Parking Lot -3 ",
      entity: "LPN: 510-IBD | Spot - 05",
      venue: "",
      category: "parking",
      notificationCategory: "event",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.75781397788408,
        lng: -104.9972290784235,
      },
    },
 
    {
      id: "prk3",
      title: "Wrong Parking",
      area: "Parking Lot -1 ",
      entity: "LPN: ADL-D21| Sot - 18",
      venue: "",
      category: "parking",
      notificationCategory: "incident",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.75753621957562,
        lng: -104.99984856660626,
      },
    },
    {
      id: "prk4",
      title: "Double Parking",
      area: "Parking Lot -3 ",
      entity: "LPN: 510-IBD | Spot - 05",
      venue: "",
      category: "parking",
      notificationCategory: "incident",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.75706749988997,
        lng: -104.99973565763285,
      },
    },
 
    {
      id: "prk5",
      title: "Parking Temporarily Unavailable",
      area: "LLA Building 1 ",
      entity: "Parking lot C spot13",
      venue: "",
      category: "parking",
      notificationCategory: "oprAlert",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.757102219976076,
        lng: -105.0022874004316,
      },
    },
    {
      id: "prk6",
      title: "Entrance Blocked",
      area: "LLA Building 1",
      entity: "Parking lot B spot18",
      venue: "",
      category: "parking",
      notificationCategory: "oprAlert",
      timeStamp: "09:41 AM",
      location: {
        lat: 39.756216852312875,
        lng: -104.99993889378497,
      },
    },
   
  ],
},
};

export default parkingData;
