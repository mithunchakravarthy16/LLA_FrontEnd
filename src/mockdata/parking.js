const parking = {
  panel1: {
    analytics: {
      graphData: [
        {
          time: "1 AM",
          parkedVehicals: 4,
        },
        {
          time: "2 AM",
          parkedVehicals: 2,
        },
        {
          time: "3 AM",
          parkedVehicals: 5,
        },
        {
          time: "4 AM",
          parkedVehicals: 2,
        },
        {
          time: "5 AM",
          parkedVehicals: 5,
        },
        {
          time: "6 AM",
          parkedVehicals: 3,
        },
        {
          time: "7 AM",
          parkedVehicals: 5,
        },
        {
          time: "8 AM",
          parkedVehicals: 8,
        },
        {
          time: "9 AM",
          parkedVehicals: 5,
        },
        {
          time: "10 AM",
          parkedVehicals: 16,
        },
        {
          time: "11 AM",
          parkedVehicals: 28,
        },
        {
          time: "12 PM",
          parkedVehicals: 27,
        },
        {
          time: "1 PM",
          parkedVehicals: 26,
        },
        {
          time: "2 PM",
          parkedVehicals: 15,
        },
        {
          time: "3 PM",
          parkedVehicals: 23,
        },
        {
          time: "4 PM",
          parkedVehicals: 28,
        },
        {
          time: "5 PM",
          parkedVehicals: 28,
        },
        {
          time: "6 PM",
          parkedVehicals: 24,
        },
        {
          time: "7 PM",
          parkedVehicals: 15,
        },
        {
          time: "8 PM",
          parkedVehicals: 10,
        },
        {
          time: "9 PM",
          parkedVehicals: 5,
        },
        {
          time: "10 PM",
          parkedVehicals: 3,
        },
        {
          time: "11 PM",
          parkedVehicals: 2,
        },
        {
          time: "12 AM",
          parkedVehicals: 2,
        },
      ],
    },
    live: {
      available: "542",
      occupied: "138",
    },
    lastWeek: {
      hoursSaved: "19.5",
      galSaved: "15",
      metricTonsco2reduced: "0.15",
    },
  },
  panel2: {
    analytics: {},
    img1: "",
    img2: "",
    currentOccupancy: {
      general: "72",
      electric: "12",
      accessibility: "5",
      expMothers: "3",
      DFS: "2",
    },
  },
  panel3: {
    analytics: {
      graphData: [
        {
          month: "January",
          carbonEmissionReduction: 500,
        },
        {
          month: "Febuary",
          carbonEmissionReduction: 800,
        },
        {
          month: "March",
          carbonEmissionReduction: 700,
        },
        {
          month: "April",
          carbonEmissionReduction: 900,
        },
        {
          month: "May",
          carbonEmissionReduction: 1000,
        },
        {
          month: "June",
          carbonEmissionReduction: 500,
        },
        {
          month: "July",
          carbonEmissionReduction: 800,
        },
        {
          month: "August",
          carbonEmissionReduction: 600,
        },
        {
          month: "September",
          carbonEmissionReduction: 700,
        },
        {
          month: "October",
          carbonEmissionReduction: 500,
        },
        {
          month: "November",
          carbonEmissionReduction: 400,
        },
        {
          month: "December",
          carbonEmissionReduction: 600,
        },
      ],
    },
    year: "2020",
    hoursSaved: "592",
    hoursSaved2: "172",
    galSaved: "180",
    metricTons: "7.5",
  },
  notifications: {
    events: {
      totalCount: "40",
      list: [
        {
          category: "parking",
          id: "evt-01",
          title: "Parked at Building N",
          observbation: "",
          area: "Parked at Building N",
          timeStamp: "12-15-2022 | 09:00 AM",        
          location: {
            lat: 40.75636780531853,
            lng: -73.84443159837639,
          }
        }    
      ]
    },
    incidents: {
      totalCount: "39",
      list: [
        {
            category: "parking",
            id: "ict-01",
            title: "Parked at Building N",
            observbation: "",
            area: "Parked at Building N",
            timeStamp: "12-15-2022 | 09:00 AM",        
            location: {
              lat: 40.75636780531853,
              lng: -73.84443159837639,
            }
        }
      ]
    },
    operationalAlerts: {
      totalCount: "35",
      list: [
        {
            category: "parking",
            id: "opr-01",
            title: "Parked at Building N",
            observbation: "",
            area: "Parked at Building N",
            timeStamp: "12-15-2022 | 09:00 AM",        
            location: {
              lat: 40.75636780531853,
              lng: -73.84443159837639,
            }
        }
      ]
    }
  }
};

export default parking;
