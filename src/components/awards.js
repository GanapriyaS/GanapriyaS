import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deepOrange } from "@mui/material/colors";

function Awards() {
  return (
    <section className="section discount">
      <h2 className="section__title">Awards & Activities</h2>
      <div className="discount__container container grid">
        <div className="discount__data">
          <h2 className="discount__title">Awards</h2>
          <ul style={{ textAlign: "left" }}>
            <li>
              <KeyboardArrowRightIcon
                style={{ verticalAlign: "bottom" }}
                sx={{ color: deepOrange[500] }}
              />
              Secured First prize in Debugging contest and Third prize in
              Technical Connections - Technical Symposium TECHNOTRON 2021
              conducted by PSG College of Arts and Science, Coimbatore
            </li>
            <li>
              <KeyboardArrowRightIcon
                style={{ verticalAlign: "bottom" }}
                sx={{ color: deepOrange[500] }}
              />{" "}
              Awarded First prize for Coding Skills and Second prize for Web
              Development in SSQ 2021, an intra-college level event hosted by
              CSEA{" "}
            </li>
            <li>
              <KeyboardArrowRightIcon
                style={{ verticalAlign: "bottom" }}
                sx={{ color: deepOrange[500] }}
              />{" "}
              Academic scholarship (2019 - 2021) awarded by Foundation For
              Excellence (FFE)
            </li>
          </ul>
          <h2 className="discount__title" style={{ marginTop: "1rem" }}>
            Activities
          </h2>
          <ul style={{ textAlign: "left" }}>
            <li>
              <KeyboardArrowRightIcon
                style={{ verticalAlign: "bottom" }}
                sx={{ color: deepOrange[500] }}
              />
              Served as an Active Member (2020 - 2021) in Y's Service Club of
              GCT YOUTH contributing in community and educational services.
            </li>
            <li>
              <KeyboardArrowRightIcon
                style={{ verticalAlign: "bottom" }}
                sx={{ color: deepOrange[500] }}
              />{" "}
              Board Member (2021 - 2022) in Y's Service Club of GCT YOUTH -
              Maintaining a club website as a Web Master Designation
            </li>
          </ul>
        </div>

        {/* <img src={dis} alt="" className="discount__img"></img> */}
      </div>
    </section>
  );
}

export default Awards;
