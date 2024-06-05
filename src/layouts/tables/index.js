// Import necessary dependencies
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import sanityAPI from "../../sanitySetup";

// Assets
import team2 from "assets/images/team-2.jpg";

// QR Code Reader
import { Html5Qrcode } from "html5-qrcode";

function Author(image, name, email) {
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

function Tables() {
  const [scanResult, setScanResult] = useState(null);
  const [open, setOpen] = useState(false);
  const [qrtext, setQrText] = useState(null);
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (window.qrCodeScanner) {
      window.qrCodeScanner
        .stop()
        .then(() => {
          window.qrCodeScanner.clear();
          window.qrCodeScanner = null;
          setOpen(false);
        })
        .catch((err) => {
          console.error("Failed to stop the scanner: ", err);
          setOpen(false);
        });
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        window.qrCodeScanner = new Html5Qrcode("reader");
        window.qrCodeScanner
          .start(
            { facingMode: "environment" },
            {
              fps: 5,
              qrbox: { width: 250, height: 250 },
            },
            (decodedText) => {
              setScanResult(decodedText);
              if (decodedText.split("/").indexOf("profile") != -1) {
                location.href = `/profile/${
                  decodedText.split("/")[decodedText.split("/").length - 1]
                }`;
                setQrText(`/profile/${decodedText.split("/")[decodedText.split("/").length - 1]}`);
              }
              setQrText(decodedText);
              handleClose();
            },
            (errorMessage) => {
              console.warn(errorMessage);
            }
          )
          .catch((err) => {
            console.error("Unable to start scanning. ", err);
          });
      }, 500);
    }

    return () => {
      if (window.qrCodeScanner) {
        window.qrCodeScanner
          .stop()
          .then(() => {
            window.qrCodeScanner.clear().catch((error) => {
              console.error("Failed to clear qrCodeScanner: ", error);
            });
          })
          .catch((error) => {
            console.error("Failed to stop qrCodeScanner: ", error);
          });
        window.qrCodeScanner = null;
      }
    };
  }, [open]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Authors table</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SoftButton variant="gradient" color={"dark"} onClick={handleOpen}>
                  Scan Code
                </SoftButton>
              </SoftBox>
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        {/* <Button>Open modal</Button> */}
        <Typography>{qrtext}</Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" onClick={handleOpen}>
              Scan QR Code
            </Typography>
            <div id="reader"></div>
            <div>{scanResult}</div>
            <SoftButton color="dark" onClick={handleClose}>
              Close
            </SoftButton>
          </Box>
        </Modal>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
