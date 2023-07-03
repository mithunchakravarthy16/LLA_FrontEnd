const assetTrackingResponse = {
    infoData: {
      assetTracked : 52,
      location : 30,
      outOfGeofence : 10,
      securityIncident : 75
    },
    analytics: {},
    notifications: {
        "events": {
          "totalCount": 1,
          "eventsList": [
            {
              "notificationId": "lght1",
              "notificationType": "event",
              "reason": "Asset Check-in Recorded",
              "tripId": 12345,
              "vehicleId": 0,
              "assetId": 12,
              "vehicleName": "string",
              "driverName": "string",
              "notificationDate": "2023-06-28T09:22:50.124Z",
              area: "1605-1555 Wynkoop St, Denver, CO 80202, USA",
              location: {
                lat: 39.75555358586086,
                lng: -105.01657322197286,
              },
            }
          ]
        },
        "incidents": {
          "totalCount": 1,
          "incidentList": [
            {
              "notificationId": "lght12",
              "notificationType": "incident",
              "reason": "Asset Theft Identified",
              "tripId": 35678,
              "vehicleId": 0,
              "assetId": 15,
              "vehicleName": "string",
              "driverName": "string",
              "notificationDate": "2023-06-28T09:22:50.124Z",
              area: "1605-1555 Wynkoop St, Denver, CO 80202, USA",
              location: {
                lat: 39.75729624533388,
                lng: -104.9895572496697,
              },
            }
          ]
        },
        "alerts": {
          "totalCount": 1,
          "alertList": [
            {
              "notificationId": "lght13",
              "notificationType": "oprAlert",
              "reason": "Floodlight Maintenance",
              "tripId": 65478,
              "vehicleId": 0,
              "assetId": 21,
              "vehicleName": "string",
              "driverName": "string",
              "notificationDate": "2023-06-28T09:22:50.124Z",
              area: "1605-1555 Wynkoop St, Denver, CO 80202, USA",
              location: {
                lat: 39.75932453116013,
                lng: -105.01244836237774,
              },
            }
          ]
        }
      }
  };
  
  export default assetTrackingResponse;