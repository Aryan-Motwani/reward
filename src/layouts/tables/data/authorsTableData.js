/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftButton from "components/SoftButton";
import { Icon } from "@mui/material";
import { useEffect } from "react";
import sanityAPI from "../../../sanitySetup";

const getData = async () => {
  const data = await sanityAPI.fetch(`*[_type == "user"]`);
  console.log(data);
};

function Author({ image, name, email }) {
  useEffect(() => {
    getData();
  }, []);
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "name", align: "left" },
    { name: "phone number", align: "center" },
    { name: "points", align: "left" },
    { name: "last visited", align: "center" },
    { name: "status", align: "center" },
    { name: " ", align: "center" },
  ],

  userData: [{ name: "Aryan Motwani" }],

  rows: [
    {
      name: <Author image={team2} name="Aryan Motwani" />,
      // function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      "last visited": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      points: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          2500
        </SoftTypography>
      ),
      "phone number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          976377204
        </SoftTypography>
      ),
      " ": (
        <SoftButton variant="gradient" color="dark">
          Message
        </SoftButton>
      ),
    },
    {
      name: <Author image={team3} name="Gulshan Karmani" />,
      // function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      "last visited": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      points: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          1500
        </SoftTypography>
      ),
      "phone number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          8447377224
        </SoftTypography>
      ),
      " ": (
        <SoftButton variant="gradient" color="dark">
          Message
        </SoftButton>
      ),
    },
    {
      name: <Author image={team2} name="Aryan Motwani" />,
      // function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      "last visited": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      points: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          2500
        </SoftTypography>
      ),
      "phone number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          976377204
        </SoftTypography>
      ),
      " ": (
        <SoftButton variant="gradient" color="dark">
          Message
        </SoftButton>
      ),
    },
  ],

  rowss: [
    {
      name: <Author image={team2} name="Aryan Motwani" />,
      // function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      "last visited": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      points: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          2500
        </SoftTypography>
      ),
      "phone number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          976377204
        </SoftTypography>
      ),
      " ": (
        <SoftButton variant="gradient" color="dark">
          Message
        </SoftButton>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="inactive"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      "phone number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          976377204
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="inactive"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="inactive"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
