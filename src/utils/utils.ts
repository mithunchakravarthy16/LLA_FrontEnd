import moment from "moment";

export const formatttedDashboardNotification = (
  data: any,
  tabIndex: number
) => {
  if (data && data !== undefined) {
    const sortedNotifications = data?.sort((a: any, b: any) => {
      if (
        moment(a?.currentTimeStamp, "MM-DD-YYYY | h:mm A").isBefore(
          moment(b?.currentTimeStamp, "MM-DD-YYYY | h:mm A")
        )
      )
        return 1;
      else if (
        moment(b?.currentTimeStamp, "MM-DD-YYYY | h:mm A").isBefore(
          moment(a?.currentTimeStamp, "MM-DD-YYYY | h:mm A")
        )
      )
        return -1;
      else return 0;
    });
    let notiEventArray: any = [];
    let notiIncidentArray: any = [];
    let notiOprAlertArray: any = [];
    sortedNotifications?.map((value: any, index: number) => {
      if (value?.notificationType === "Events") {
        notiEventArray?.push({
          ...value,
          markerId: value?.category === "asset" ? value?.trackerId : value?.id,
        });
      } else if (value?.notificationType === "Incident") {
        notiIncidentArray?.push({
          ...value,
          markerId: value?.category === "asset" ? value?.trackerId : value?.id,
        });
      } else if (value?.notificationType === "Alerts") {
        notiOprAlertArray?.push({
          ...value,
          markerId: value?.category === "asset" ? value?.trackerId : value?.id,
        });
      }
    });

    switch (tabIndex) {
      case 0:
        return notiEventArray;
      case 1:
        return notiIncidentArray;
      case 2:
        return notiOprAlertArray;
    }
  }
};

export const formatttedParkingNotification = (data: any, tabIndex: number) => {
  if (data && data !== undefined) {
    const sortedNotifications = data?.sort((a: any, b: any) => {
      if (
        moment(a?.currentTimeStamp, "MM-DD-YYYY | h:mm A").isBefore(
          moment(b?.currentTimeStamp, "MM-DD-YYYY | h:mm A")
        )
      )
        return 1;
      else if (
        moment(b?.currentTimeStamp, "MM-DD-YYYY | h:mm A").isBefore(
          moment(a?.currentTimeStamp, "MM-DD-YYYY | h:mm A")
        )
      )
        return -1;
      else return 0;
    });
    let notiEventArray: any = [];
    let notiIncidentArray: any = [];
    let notiOprAlertArray: any = [];
    sortedNotifications?.map((value: any, index: number) => {
      if (value?.notificationType === "Events") {
        notiEventArray?.push(value);
      } else if (value?.notificationType === "Incident") {
        notiIncidentArray?.push(value);
      } else if (value?.notificationType === "Alerts") {
        notiOprAlertArray?.push(value);
      }
    });

    switch (tabIndex) {
      case 0:
        return notiEventArray;
      case 1:
        return notiIncidentArray;
      case 2:
        return notiOprAlertArray;
    }
  }
};

export const formatttedDashboardNotificationCount = (data: any) => {
  if (data && data !== undefined) {
    let notificationCount: any = [];
    let notiEventArray: any = [];
    let notiIncidentArray: any = [];
    let notiOprAlertArray: any = [];
    data?.map((value: any, index: number) => {
      if (value?.notificationType === "Events") {
        notiEventArray.push(value);
      } else if (value?.notificationType === "Incident") {
        notiIncidentArray.push(value);
      } else if (value?.notificationType === "Alerts") {
        notiOprAlertArray.push(value);
      }
    });
    notificationCount = [
      notiEventArray?.length,
      notiIncidentArray?.length,
      notiOprAlertArray?.length,
    ];
    return notificationCount;
  }
};

export const formatttedDashboardAPINotificaiton = (data: any) => {
  if (data && data !== undefined) {
    const { events, incidents, alerts } = data;
    const combinedNotifications: any = [];

    events?.eventsList?.forEach((event: any, index: number) => {
      combinedNotifications?.push({
        ...event,
        markerId: event?.id,
      });
    });

    incidents?.incidentList?.forEach((incidents: any, index: number) => {
      combinedNotifications?.push({
        ...incidents,
        markerId: incidents?.id,
      });
    });

    alerts?.alertList?.forEach((alerts: any, index: number) => {
      combinedNotifications?.push({
        ...alerts,
        markerId: alerts?.id,
      });
    });

    let currentTimeStampValue;
    let timeArrayNew: any = [];
    for (let i = 0; i < combinedNotifications?.length; i++) {
      currentTimeStampValue = moment()
        .subtract({
          hours: i === 0 ? i : i > 20 ? 20 : i + 1,
          minutes: i + 59,
          seconds: i + 49,
        })
        .format("MM-DD-YYYY | h:mm A");
      timeArrayNew?.push({ currentTimeStamp: currentTimeStampValue });
    }

    let dashboardDataList = timeArrayNew?.map((item: any, i: any) =>
      Object.assign({}, item, combinedNotifications[i])
    );

    return dashboardDataList;
  }
};

export const formatttedAssetAPINotification = (data: any) => {
  if (data && data !== undefined) {
    const { events, incidents, alerts } = data;
    const combinedNotifications: any = [];

    events?.eventsList?.forEach((event: any, index: number) => {
      combinedNotifications?.push({
        ...event,
        category: "asset",
        title: event?.reason,
        id: event?.assetNotificationId,
        markerId: event?.id,
        currentTimeStamp: moment
          .utc(event?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    incidents?.incidentList?.forEach((incidents: any, index: number) => {
      combinedNotifications?.push({
        ...incidents,
        category: "asset",
        title: incidents?.reason,
        id: incidents?.assetNotificationId,
        markerId: incidents?.id,
        currentTimeStamp: moment
          .utc(incidents?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    alerts?.alertList?.forEach((alerts: any, index: number) => {
      combinedNotifications?.push({
        ...alerts,
        category: "asset",
        title: alerts?.reason,
        id: alerts?.assetNotificationId,
        currentTimeStamp: moment
          .utc(alerts?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    combinedNotifications.sort((a: any, b: any) => {
      const dateA: any = new Date(a.notificationDate);
      const dateB: any = new Date(b.notificationDate);

      return dateB - dateA;
    });

    let uniqueTrackerIds: any = {};

    const uniqueData = combinedNotifications.filter((item: any) => {
      if (!uniqueTrackerIds[item.trackerId]) {
        uniqueTrackerIds[item.trackerId] = true;
        return true;
      }
      return false;
    });

    const updatedUniqueData = combinedNotifications.map(
      (combinedDataItem: any) => {
        const uniqueDataItem = uniqueData.find(
          (uniqueDataItem: any) =>
            uniqueDataItem.trackerId === combinedDataItem.trackerId
        );

        if (uniqueDataItem) {
          return {
            ...combinedDataItem,
            location: uniqueDataItem.currentLocation,
            recentMarkerType: uniqueDataItem.notificationType,
          };
        }

        return combinedDataItem;
      }
    );

    return updatedUniqueData;
  }
};

export const formatttedFleetAPINotification = (data: any) => {
  if (data && data !== undefined) {
    const { events, incidents, alerts } = data;
    const combinedNotifications: any = [];

    events?.eventsList?.forEach((event: any, index: number) => {
      combinedNotifications.push({
        ...event,
        category: "fleet",
        title: event?.reason,
        id: event?.notificationId,
        currentTimeStamp: moment
          .utc(event?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    incidents?.incidentList?.forEach((incidents: any, index: number) => {
      combinedNotifications.push({
        ...incidents,
        category: "fleet",
        title: incidents?.reason,
        id: incidents?.notificationId,
        currentTimeStamp: moment
          .utc(incidents?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    alerts?.alertList?.forEach((alerts: any, index: number) => {
      combinedNotifications.push({
        ...alerts,
        category: "fleet",
        title: alerts?.reason,
        id: alerts?.notificationId,
        currentTimeStamp: moment
          .utc(alerts?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    return combinedNotifications;
  }
};

export const formattedViolationsList = (data: any) => {
  if (data && data !== undefined) {
    const { events, incidents, alerts } = data;
    const combinedNotifications: any = [];

    // events?.eventsList?.forEach((event: any, index: number) => {
    //   combinedNotifications.push({
    //     ...event,
    //     category: "fleet",
    //     title: event?.reason,
    //     id: event?.notificationId,
    //     currentTimeStamp: moment
    //       .utc(event?.notificationDate)
    //       .format("MM-DD-YYYY | h:mm A"),
    //   });
    // });

    incidents?.incidentList?.forEach((incidents: any, index: number) => {
      combinedNotifications.push({
        ...incidents,
        category: "fleet",
        title: incidents?.reason,
        id: incidents?.notificationId,
        currentTimeStamp: moment
          .utc(incidents?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    alerts?.alertList?.forEach((alerts: any, index: number) => {
      combinedNotifications.push({
        ...alerts,
        category: "fleet",
        title: alerts?.reason,
        id: alerts?.notificationId,
        currentTimeStamp: moment
          .utc(alerts?.notificationDate)
          .format("MM-DD-YYYY | h:mm A"),
      });
    });

    return combinedNotifications;
  }
};

export const formattedOverallNotificationCount = (
  apiData: any,
  mockData: any,
  pageName: any,
  searchOpen: boolean
) => {
  if (apiData && apiData !== undefined) {
    let count: any = [];
    if (pageName === "dashboard") {
      let eventDashboardCount =
        apiData?.events?.overallCount + (searchOpen ? 0 : 2);
      let incidentDashboardCount =
        apiData?.incidents?.overallCount + (searchOpen ? 0 : 4);
      let alertsDashboardCount =
        apiData?.alerts?.overallCount + (searchOpen ? 0 : 2);
      count = [
        eventDashboardCount,
        incidentDashboardCount,
        alertsDashboardCount,
      ];
    } else {
      let eventCount = apiData?.events?.overallCount;
      let incidentCount = apiData?.incidents?.overallCount;
      let alertsCount = apiData?.alerts?.overallCount;
      count = [eventCount, incidentCount, alertsCount];
    }
    return count;
  }
};
