import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

export default {
  tooltip: "Talk To Us!",
  openOnStart: false,
  icons: [
    {
      icon: SiWhatsapp,
      backgroundColor: "#25D366",
      color: "#fff",
      link: "https://www.twitch.tv/kitboga",
      tooltip: "WhatsApp",
    },
    {
      icon: AiOutlineMail,
      // backgroundColor: primary,
      // color: neutralLight,
      link: "https://www.twitch.tv/kitboga",
      tooltip: "Email",
    },
    {
      icon: IoCallOutline,
      // backgroundColor: primary,
      // color: neutralLight,
      link: "https://www.twitch.tv/kitboga",
      tooltip: "Número de Contato",
    },
  ],
};
