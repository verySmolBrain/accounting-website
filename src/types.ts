import type socialIcons from "@assets/Icons/socialIcons";

export type Site = {
  website: string;

  title: string;
  desc: string;
  author: string;

  ogImage: string;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
