import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import jenny from "../../assets/images/jenny.png";
import kathreen from "../../assets/images/kathreen.png";
import jane from "../../assets/images/jane.png";
import "../../css/sectionB.css";
import Rating from "@mui/material/Rating";
import keshroot1 from "../../assets/images/keshroot1.png";
import keshroot2 from "../../assets/images/keshroot2.png";
import keshroot3 from "../../assets/images/keshroot3.png";
import keshroot4 from "../../assets/images/keshroot4.png";
import keshroot5 from "../../assets/images/keshroot5.png";
import Searchbar from "./searchbar";
import Writereview from "./writereview";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SectionB() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1 }}>
        <b className="information">Important information</b>
        <br />
        <br />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "black !important" }}
            label="  Product Details"
            {...a11yProps(0)}
          ></Tab>
          <Tab
            sx={{ color: "black !important" }}
            label="Reviews"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "black !important" }}
            label=" Shipping & Return"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <>
        {" "}
        <TabPanel value={value} index={0}>
          <div className="product-detail">
            <p>
              {" "}
              <b>Is Discontinued By Manufacturer</b> : Lorem
            </p>
            <p>
              <b>Product Dimensions</b> : Lorem Ipsum is simply
            </p>
            <p>
              <b>Date First Available </b> : Lorem Ipsum
            </p>
            <p>
              <b> Manufacturer</b> : Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </p>
            <p>
              <b>ASIN </b> : Lorem Ipsum is
            </p>
            <p>
              <b>Item model number</b> : Lorem Ipsum is simply dummy text
            </p>
            <p>
              <b>Country of Origin</b> : Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <p>
              <b>Manufacturer</b> : Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </p>
            <p>
              <b>Packer</b> : Lorem Ipsum
            </p>
            <p>
              <b>Item Weight</b> : Lorem Ipsum is simply dummy
            </p>
            <p>
              <b>Item Dimensions LxWxH</b> : Lorem Ipsum is simply dummy text of
              the printing and typesetting industry
            </p>
            <p>
              <b>Net Quantity</b> : Lorem Ipsum
            </p>
            <p>
              <b>Included Components</b> : Lorem Ipsum is simply
            </p>
            <p>
              <b>Generic Name</b> : Lorem Ipsum is simply dummy text
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
          <div className="productimg">
            <img className="keshroot" src={keshroot1} alt="img"/>
            <img className="keshroot" src={keshroot2} alt="img"/>
            <img className="keshroot-middle" src={keshroot3} alt="img"/>
            <img className="keshroot" src={keshroot4} alt="img"/>
            <img className="keshroot" src={keshroot5} alt="img"/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="upper-line-review">
        <p className="overall-rating"><h1 className="overall-rating">4.3/5 </h1> Overall rating </p> 
        <Searchbar/><Writereview/>
      </div>
          <br />
          <br />
          <section className="jenny-part1">
            <div className="jenny-logo"  ><img style={{ height: "45px", width: "45px" }} src={jenny} alt="" />
</div>
            <div className="review">
              <p className="jenny-name"> Jenny Wilson</p>   <br/>
         
              <Rating name="read-only" value={4} readOnly />
              <br/>

              <p className="review-loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <hr />
          <section className="kathryn-part2">
            <div className="kathryn-logo">
              <img
                style={{ height: "45px", width: "45px" }}
                src={kathreen}
                alt=""
              />
            </div>
            <div className="review">
              <p className="kathryn-name">Kathryn Murphy</p>   <br/>
             
              <Rating name="read-only" value={3} readOnly /> <br/>
              <p className="review-loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
          <hr />
          <section className="jane-part3">
            <div className="jane-logo">
              <img
                style={{ height: "45px", width: "45px" }}
                src={jane}
                alt=""
              />
            </div>
            <div className="review">
              <p className="jane-name">Jane Cooper</p>   <br/>
           
              <Rating name="read-only" value={4} readOnly />  <br/>
              <p className="review-loremabout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
       
          <sup><button className="see-all-review"><a href="/SeeAllReviews">See all reviews</a></button></sup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ul className="shipping-return-part1"  >
            <h4 className="shipping-font">Shipping Policy</h4>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.{" "}
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{" "}
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </li>
            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.{" "}
            </li>
          </ul>
          <ul className="shipping-return-part2">
            <h4 className="return-font">Return Policy </h4>
            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.{" "}
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.{" "}
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </li>

            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </li>
            <li className="paragraphs-fonts">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.{" "}
            </li>
          </ul>
        </TabPanel>
      </>
    </Box>
  );
}
