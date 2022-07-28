import CustomCard from "../UI/CustomCard";
import { Fragment } from "react";

import { useRef, useEffect } from "react";

const History = () => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <CustomCard
        title="About Us"
        body={
          <div ref={topRef}>
            <p>
              Whether you are new to the arts, just fooling around, or already a
              professional, we have a place for you! Join us in the joys of
              creativity and self-expression. Visit our gallery at The Art
              Center, become a member, exhibit your work, attend a class or
              workshop, or lead one yourself. You can help us offer more variety
              in our programs, and keep our group running smoothly. New energy
              keeps the Brownwood Art Association fresh and lively!
            </p>
            <p>The Art Center is also available to rent for your event.</p>
            <p>
              Right now, we have art lessons with Claudette West on Tuesday
              afternoons, a photo group that meets monthly, a People Painters
              group, and a new Fiber &amp; Textile Artists group. Gallery
              exhibits change monthly and generally feature our members’ work.
              But there is room for so much more...when YOU get involved!
              Together, we can make this the arts hub of our area.
            </p>
            <p>
              To find how you fit into the Brownwood Art Association and The Art
              Center stop by our gallery at 215 Fisk. For more information call
              325-641-2916 or email brownwoodart@gmail.com.
            </p>
            <p>Art can mean many things. Come share yours with us.</p>
            <p>
              <em> - Daniel Graham</em>
            </p>
          </div>
        }
      />
      <CustomCard
        title="Meet Our Officers!"
        body={
          <div>
            <p style={{ marginBottom: "1rem" }}>
              Brownwood Art Association membership meeting was held on April 21,
              2022 and new officers for the 2022-2023 fiscal year were elected.
              They are as follows:
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>President</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Anthony Reine
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>1st VP</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Claudette West
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>2nd VP</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Christine Brisley-Wade
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>3rd VP</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Brenda Shaw
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>Secretary</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                LeCorya Finley
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>Treasurer</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Cary Perrin
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>Reporter</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Freda Day
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>Parliamentarian</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Jim Blake
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <p
                style={{
                  marginLeft: "15rem",
                  marginRight: "2rem",
                  width: "100%",
                }}
              >
                <b>
                  <u>Auditor</u>
                </b>
              </p>
              <p
                style={{
                  marginRight: "15rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Jillian Johnson
              </p>
            </div>
          </div>
        }
      />
    </Fragment>
  );
};

export default History;
