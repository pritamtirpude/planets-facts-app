type ContentSourceType = {
  content: string;
  source: string;
};

type Images = {
  planet: string;
  internal: string;
  geology: string | any;
};

export type PlanetTypeProps = {
  name: string;
  overview: ContentSourceType;
  structure: ContentSourceType;
  geology: ContentSourceType;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}[];

export type TabsProps = {
  setTabIndex: (num: number) => void;
  tabIndex: number;
};

export type MobileSidebarProps = {
  setIsSidebaropen: (bool: boolean) => void;
  setIsOpen: (bool: boolean) => void;
};
