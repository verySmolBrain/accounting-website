import type { ContactDetails, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com",

  title: "Weichen (Willis) Wang, CA",
  desc: "Chartered Accountant",
  author: "Brian Huang",

  ogImage: "",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
};

export const LOGO_IMAGE = {
  svg: true,
  enable: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:weichenwong@hotmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Phone",
    href: "tel:0434721796",
    linkTitle: `Call ${SITE.title}`,
    active: true,
  },
];

export const CONTACT_DETAILS: ContactDetails = {
  email: "weichenwong@hotmail.com",
  phone: "0434721796",
  abn: "13655186489",
};
