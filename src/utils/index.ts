import cogoToast from "cogo-toast";

export const SidebarMenu = [
  {
    label: "Home",
    link: "/",
    icon: "material-symbols:home",
  },
  {
    label: "Players",
    link: "/players",
    icon: "mdi:people-group",
  },
  {
    label: "Settings",
    link: "/settings",
    icon: "material-symbols:settings",
  },
];

export const showToast = (
  message: string,
  type: "success" | "info" | "loading" | "warn" | "error"
) => {
  switch (type) {
    case "success":
      cogoToast.success(message, { position: "top-right", hideAfter: 5 });
      break;
    case "info":
      cogoToast.info(message, { position: "top-right", hideAfter: 5 });
      break;
    case "loading":
      cogoToast.loading(message, { position: "top-right", hideAfter: 5 });
      break;
    case "warn":
      cogoToast.warn(message, { position: "top-right", hideAfter: 5 });
      break;
    case "error":
      cogoToast.error(message, { position: "top-right", hideAfter: 5 });
      break;

    default:
      cogoToast.info(message, { position: "top-right", hideAfter: 5 });
      break;
  }
};

export const _create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};
