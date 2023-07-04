import Arcade from "../src/assets/icon-arcade.svg";
import Advanced from "../src/assets/icon-advanced.svg";
import Pro from "../src/assets/icon-pro.svg";
const links = [
  {
    id: 1,
    name: "YOUR INFO",
  },
  {
    id: 2,
    name: "SELECT PLAN",
  },
  {
    id: 3,
    name: "ADD-ONS",
  },
  {
    id: 4,
    name: "SUMMARY",
  },
];

const paymentMonthly = [
  {
    id: "Arcade",
    cost: "$9/mo",
    logo: Arcade,
  },
  {
    id: "Advanced",
    cost: "$12/mo",
    logo: Advanced,
  },
  {
    id: "Pro",
    cost: "$15/mo",
    logo: Pro,
  },
];
const paymentAnnual = [
  {
    id: "Arcade",
    cost: "$90/yr",
    logo: Arcade,
  },
  {
    id: "Advanced",
    cost: "$120/yr",
    logo: Advanced,
  },
  {
    id: "Pro",
    cost: "$150/yr",
    logo: Pro,
  },
];

export { links, paymentMonthly, paymentAnnual };
