import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Log from "../Log";
import sanityAPI from "../../../../sanitySetup";

function TransLogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "log"]';
    const subscription = sanityAPI.listen(query).subscribe((update) => {
      const { documentId, result, transition } = update;

      setData((prevData) => {
        let newData;

        if (transition === "appear" || transition === "update") {
          // Update existing item or add new item
          newData = prevData.map((item) => (item._id === documentId ? result : item));
          if (!prevData.some((item) => item._id === documentId)) {
            newData.push(result);
          }
        } else if (transition === "disappear") {
          // Remove item
          newData = prevData.filter((item) => item._id !== documentId);
        } else {
          newData = prevData;
        }

        return newData;
      });
    });

    // Fetch initial data
    sanityAPI.fetch(query).then((initialData) => {
      setData(initialData);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  let colorData = {
    "uptown.com": "green",
    "funbond.com": "purple",
    "goldie.com": "gold",
  };

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Transactions Log
        </SoftTypography>
        {/* <button
          onClick={() => {
            sanityAPI.delete({ query: `*[_type == "log"]` });
          }}
        >
          Delete
        </button> */}

        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {data
            .slice()
            .reverse()
            .map((i, j) => {
              // Check if i.value is defined before using it
              const value = i.value || "";
              return (
                <Log
                  key={j}
                  color={i.value[0] + "" === "-" ? "error" : "success"}
                  icon={colorData[i.provider.split("@")[1]]}
                  name={i.username || "Unknown"}
                  description={"27 March 2020, at 04:30 AM"}
                  value={i.value[0] + "" === "-" ? value : "+" + value}
                />
              );
            })}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default TransLogs;
