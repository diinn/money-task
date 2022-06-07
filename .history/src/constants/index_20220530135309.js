export const PUBLIC_LAYOUT = "default";

export const PROFILE_OPTIONS = [
  {
    name: "Tổng chi tiêu",
    icon: "t2ico-wallet",
    route: {
      name: "TotalTransaction",
      params: {},
    },
  },
  {
    name: "Các giao dịch",
    icon: "t2ico-ticket-star",
    route: {
      name: "Home",
      params: {},
    },
  },
  {
    name: "Thông tin phiên bản",
    icon: "t2ico-info-square",
    route: {
      name: "Home",
      params: {},
    },
  },
];

export const NAVIGATION_BOTTOM_ITEMS = [
  {
    icon: "t2ico-category",
    text: "Home",
    name: "Home",
  },
  {
    icon: "t2ico-plus",
    text: "NewTransaction",
    name: "NewTransaction",
  },
  {
    icon: "t2ico-logout",
    text: "Logout",
    name: "Logout",
  },
];
