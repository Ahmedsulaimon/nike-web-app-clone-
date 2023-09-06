export interface DataTypes {
  collection: {
    id: number;
    img: string;
    title: string;
  }[];
  trends: {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: string;
    link: string;
  }[];
  Icons: {
    id: number;
    img: string;
    title: string;
  }[];
  explore: {
    id: number;
    img: string;
    btnOne: string;
    btntwo: string;
  }[];
  sport: {
    id: number;
    img: string;
    title: string;
  }[];
  apps: {
    id: number;
    img: string;
    desktopImg: string;
    desc: string;
    btn: string;
  }[];
  nikeMembership: {
    id: number;
    img: string;
    title: string;
  }[];
  general: string[];
  getHelp: string[];
  aboutNike: string[];
  moreInformation: string[];
  joinUs: string[];
  categories: {
    new: string;
    men: string;
    women: string;
    kids: string;
    sale: string;
  };
  NewFeature: string[];
  bestRead: string[];
  guide: string[];
  dunkLow: string[];
  dunkSizes: {
    size: string;
    quantity: number;
  }[];
  shoes: string[];
  featured: string[];
  youngOnes: string[];
  dropUp: string[];
  AutoSlider: {
    header: string;
    desc: string;
    learnMore: string;
    joinUs: string;
    shop: string;
  }[];
}
