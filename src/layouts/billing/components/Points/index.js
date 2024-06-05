import React from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

function Points(data) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Points
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <MiniStatisticsCard
          count={`${data.userPoints} points`}
          icon={{ color: "info", component: "paid" }}
        />
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} display="flex" justifyContent="space-between">
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(500)}>
          + 500
        </SoftButton>
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(-500)}>
          - 500
        </SoftButton>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} display="flex" justifyContent="space-between">
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(1000)}>
          + 1000
        </SoftButton>
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(-1000)}>
          - 1000
        </SoftButton>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} display="flex" justifyContent="space-between">
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(1500)}>
          + 1500
        </SoftButton>
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(-1500)}>
          - 1500
        </SoftButton>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} display="flex" justifyContent="space-between">
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(2000)}>
          + 2000
        </SoftButton>
        <SoftButton variant="gradient" color="dark" onClick={() => data.changePoints(-2000)}>
          - 2000
        </SoftButton>
      </SoftBox>
    </Card>
  );
}

export default Points;
