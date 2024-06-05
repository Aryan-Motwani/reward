import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

// Overview page components
import Header from "layouts/profile/components/Header";

// Data
import Transactions from "layouts/billing/components/Transactions";
import Points from "layouts/billing/components/Points";

// Sanity
import sanityAPI from "../../sanitySetup";
import { auth } from "../../firebase";

function Overview(props) {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [points, setPoints] = useState(0);
  const [mainId, setMainId] = useState("");

  const location = useLocation();

  const getData = async () => {
    const id = location.pathname.split("/").pop();

    const data = await sanityAPI.fetch(`*[_type == "user" && id == $id]`, { id });
    if (data.length > 0) {
      const userData = data[0];
      setUsername(userData.username);
      setNumber(userData.phoneNumber);
      setPoints(userData.points);
      setMainId(userData._id);
    }
  };

  const updateData = async (val) => {
    if (!mainId) return;
    await sanityAPI
      .patch(mainId)
      .set({ points: points + val })
      .commit();

    sanityAPI.create({
      _type: "log",
      username: username,
      value: "" + val,
      provider: auth.currentUser.email,
    });
    // To ensure local state is updated immediately
    setPoints(points + val);
  };

  useEffect(() => {
    getData();

    if (mainId) {
      const query = `*[_type == "user" && _id == $id]`;
      const subscription = sanityAPI.listen(query, { id: mainId }).subscribe((update) => {
        const { result } = update;
        if (result) {
          setUsername(result.username);
          setNumber(result.phoneNumber);
          setPoints(result.points);
        }
      });

      return () => subscription.unsubscribe();
    }
  }, [mainId, location.pathname]);

  return (
    <DashboardLayout>
      <Header name={username} />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              info={{
                fullName: username,
                mobile: number,
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
            {/* <button onClick={() => updateData(500)}>Update</button> */}
          </Grid>

          <Grid item xs={12} xl={4}>
            <Transactions />
          </Grid>
          <Grid item xs={12} xl={4}>
            <Points userPoints={points} changePoints={updateData} />
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
