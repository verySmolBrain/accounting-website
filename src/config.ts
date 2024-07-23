import type { ContactDetails, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com",

  title: "Accounting Firm Name",
  desc: "Accounting Website",
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
    name: "Facebook",
    href: "example.com",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "example.com",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Phone",
    href: "tel:123456789",
    linkTitle: `Call ${SITE.title}`,
    active: true,
  },
];

export const CONTACT_DETAILS: ContactDetails = {
  email: "yourmail@gmail.com",
  phone: "123456789",
  fax: "123456789",
};
