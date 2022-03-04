const donateLink =
  "//checkout.square.site/merchant/3M8VC0T8TZ955/checkout/CGOPRSY5DJFUMQZHL5MXFQU4";
const membershipLink =
  "//checkout.square.site/merchant/3M8VC0T8TZ955/checkout/BRMFSPKMUFN3T3XT2SYEYPZ6";
const pages = [
  { name: "Home", path: "/" },
  { name: "Member Galleries", path: "/members" },
  { name: "Donations", link: donateLink },
  { name: "Membership", link: membershipLink },
  { name: "About Us", path: "/about" },
  { name: "Our History", path: "/history", hide: true }
];

export default pages;