import moment from "moment";

export const formatttedDashboardNotification = (
  data: any,
  tabIndex: number
) => {

  const sortedNotifications = data.sort((a:any, b:any) => {
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
    if (value?.notificationType === "event") {
      notiEventArray.push(value);
    } else if (value?.notificationType === "incident") {
      notiIncidentArray.push(value);
    } else if (value?.notificationType === "oprAlert") {
      notiOprAlertArray.push(value);
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
};

export const formatttedDashboardNotificationCount = (data: any) => {
  let notificationCount: any = [];
  let notiEventArray: any = [];
  let notiIncidentArray: any = [];
  let notiOprAlertArray: any = [];
  data?.map((value: any, index: number) => {
    if (value?.notificationType === "event") {
      notiEventArray.push(value);
    } else if (value?.notificationType === "incident") {
      notiIncidentArray.push(value);
    } else if (value?.notificationType === "oprAlert") {
      notiOprAlertArray.push(value);
    }
  });
  notificationCount = [
    notiEventArray?.length,
    notiIncidentArray?.length,
    notiOprAlertArray?.length,
  ];
  return notificationCount;
};

export const formatttedDashboardAPINotificaiton = (data: any) => {
  const { events, incidents, alerts } = data;
  const combinedNotifications: any = [];

  events?.eventsList?.forEach((event: any, index: number) => {
    combinedNotifications.push({
      ...event,
    });
  });

  incidents?.incidentList?.forEach((incidents: any, index: number) => {
    combinedNotifications.push({
      ...incidents,
    });
  });

  alerts?.alertList?.forEach((alerts: any, index: number) => {
    combinedNotifications.push({
      ...alerts,
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
    timeArrayNew.push({ currentTimeStamp: currentTimeStampValue });
  }

  let dashboardDataList = timeArrayNew?.map((item: any, i: any) =>
    Object.assign({}, item, combinedNotifications[i])
  );


  return dashboardDataList;
};

export const formatttedAssetAPINotification = (data: any) => {
  const { events, incidents, alerts } = data;
  const combinedNotifications: any = [];

  events?.eventsList?.forEach((event: any, index: number) => {
    combinedNotifications.push({
      ...event,
      category: "asset",
      title: event?.reason,
      id: event?.assetNotificationId,
      currentTimeStamp: moment
        .utc(event?.notificationDate)
        .format("MM-DD-YYYY | h:mm A"),
    });
  });

  incidents?.incidentList?.forEach((incidents: any, index: number) => {
    combinedNotifications.push({
      ...incidents,
      category: "asset",
      title: incidents?.reason,
      id: incidents?.assetNotificationId,
      currentTimeStamp: moment
        .utc(incidents?.notificationDate)
        .format("MM-DD-YYYY | h:mm A"),
    });
  });

  alerts?.alertList?.forEach((alerts: any, index: number) => {
    combinedNotifications.push({
      ...alerts,
      category: "asset",
      title: alerts?.reason,
      id: alerts?.assetNotificationId,
      currentTimeStamp: moment
        .utc(alerts?.notificationDate)
        .format("MM-DD-YYYY | h:mm A"),
    });
  });

  return combinedNotifications;
};

export const formatttedFleetAPINotification = (data: any) => {
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
};
