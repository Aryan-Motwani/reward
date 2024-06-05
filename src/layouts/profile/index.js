/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Invoices from "layouts/billing/components/Invoices";
import Transactions from "layouts/billing/components/Transactions";
import Points from "layouts/billing/components/Points";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import PaymentMethod from "layouts/billing/components/PaymentMethod";

import sanityAPI from "../../sanitySetup";
import { useEffect, useState } from "react";

function Overview() {
  const [pointsData, setPointsData] = useState({
    uptown: [0, 0, , 0],
    funbond: [0, 0, 0],
    goldie: [0, 0, 0],
  });

  const getData = async () => {
    const data = await sanityAPI.fetch(`*[_type == "log"]`);
    console.log(data);
    let newData = {
      uptown: [0, 0, 0],
      funbond: [0, 0, 0],
      goldie: [0, 0, 0],
    };
    data.forEach((i) => {
      if (i.value[0] == "-") {
        console.log("minus " + i.provider.split("@")[1].split(".")[0], i.value);
        newData[i.provider.split("@")[1].split(".")[0]][1] += +i.value.slice(1);
      } else {
        console.log("plus " + i.provider.split("@")[1].split(".")[0], i.value);
        newData[i.provider.split("@")[1].split(".")[0]][0] += +i.value;
      }
      // data[i.provider.split("@")[1].split(".")[0]] = i.value;
    });
    console.log(newData);
    setPointsData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Uptown"
              info={{
                "Claimed Points": pointsData.uptown[0],
                "Rewarded Points": pointsData.uptown[1],
                Account: pointsData.uptown[3],
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
            {/* <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" /> */}
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Fun Bond"
              info={{
                "Claimed Points": pointsData.funbond[0],
                "Rewarded Points": pointsData.funbond[1],
                Account: pointsData.funbond[2],
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
            {/* <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" /> */}
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Goldie"
              info={{
                "Claimed Points": pointsData.goldie[0],
                "Rewarded Points": pointsData.goldie[1],
                Account: pointsData.goldie[2],
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
            {/* <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" /> */}
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
