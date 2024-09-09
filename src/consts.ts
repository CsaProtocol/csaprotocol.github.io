import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "CodeChronicles",
  DESCRIPTION: "Welcome to CodeChronicles, portfolio and blog managed by CsaProtocol.",
  AUTHOR: "CsaProtocol",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "csaprotocol@proton.me",
    HREF: "mailto:csaprotocol@proton.me",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "csaprotocol",
    HREF: "https://github.com/CsaProtocol"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "gaudiosied",
    HREF: "https://www.linkedin.com/in/gaudiosied/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "csaprotocol",
    HREF: "https://twitter.com/csaprotocol",
  },
]

