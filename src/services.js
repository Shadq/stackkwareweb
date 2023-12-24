import image from "./assets/image.png";
import landing from "./assets/landing.webp";
import smartcontracts from "./assets/smartcontract.jpg";

const services = [
  {
    title: "Fullstack Apps",
    content: (
      <p>
        Get ahead of your competitions with apps made by <br /> cutting hedge
        technologies
      </p>
    ),
    image: image,
  },
  {
    title: "Landing Pages",
    content: (
      <p>
        Expand in your industry and get noticed by every possible <br /> clients
        with professional landing pages.
      </p>
    ),
    image: landing,
  },
  {
    title: "Smart Contracts",
    content: (
      <p>
        Create the next NFT Project that will change the web3 <br /> world with
        smart contracts.
      </p>
    ),
    image: smartcontracts,
  },
];

export default services;
