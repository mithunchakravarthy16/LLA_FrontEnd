const energyManagment = {
	"panel1": {
		"electricityConsumption": {},
		"havc": {},
		"waterConsumption": {},
		"energySavings": "15%",
		"incidentsCount": "123",
		"oprAlertsCount": "27"
	},
	"panel2": {
		"buildings": {},
		"labs": {},
		"dataCenter": {},
		"offices": {}
	},
	"panel3": {
		"year": "2020",
		"kiloLitres": "1592",
		"electricitySavings": "192",
		"gasSavings": "319",
		"kgco2reduced": "1163"

	},
	notifications: {
		events: {
		  totalCount: "40",
		  list: [
			{
			  category: "outdoors",
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
				category: "outdoors",
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
				category: "outdoors",
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

export default energyManagment;
