import craig from "../../assets/craig.jpg";

import CustomCard from "../UI/CustomCard";

const Daniel = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", sm: "60%", md: "45%" }}
      title="A Huge Thank You to Craig Seger!"
      body={
        <div>
          <p>
            2021 was quite a year! Thanks to a burst pipe above the the
            classroom and gallery at The Art Center during our Big Freeze, there
            was many thousands of dollars worth of damage. Lots of work was done
            by plumbers, air conditioner technicians, flooring installers,
            builders, electricians, and other assorted workers, but through it
            all, there was Craig. Craig was in the midst of every step of
            getting the building repaired and rehabbed. Without Craig's
            leadership and attention, parts of the building would probably still
            be unusable. He was president throughout the damage, and really
            stepped up to make sure everything was put back together better than
            ever. So, if you enjoy The Art Center, be sure to tell Craig thank
            you for all he did!
          </p>
        </div>
      }
      imgPath={craig}
    ></CustomCard>
  );
};

export default Daniel;
