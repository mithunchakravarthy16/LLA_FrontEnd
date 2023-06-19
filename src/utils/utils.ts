export const formatttedDashboardNotification = (
  data: any,
  tabIndex: number
) => {
  let notiEventArray: any = [];
  let notiIncidentArray: any = [];
  let notiOprAlertArray: any = [];
  data?.map((value: any, index: number) => {
    if (value?.notificationCategory === "event") {
      notiEventArray.push(value);
    } else if (value?.notificationCategory === "incident") {
      notiIncidentArray.push(value);
    } else if (value?.notificationCategory === "oprAlert") {
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
    if (value?.notificationCategory === "event") {
      notiEventArray.push(value);
    } else if (value?.notificationCategory === "incident") {
      notiIncidentArray.push(value);
    } else if (value?.notificationCategory === "oprAlert") {
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
