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
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import { Grid } from "@mui/material";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MiniStatisticsCard
          title={{ text: "today's money" }}
          count="$53,000"
          percentage={{ color: "success", text: "+55%" }}
          icon={{ color: "info", component: "paid" }}
        />
        {/* <SoftTypography variant="h6" fontWeight="medium">
          Points
        </SoftTypography> */}
        {/* <SoftButton variant="outlined" color="info" size="small">
          view all
        </SoftButton> */}
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="2500" price="$180" />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Invoices;
