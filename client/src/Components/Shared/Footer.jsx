import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// TabPanel component to display content of each tab
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// A11yProps for accessibility in the Tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Arbitrary data for each tab
  const tabData = [
    {
      title: "Tab 1",
      data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 2",
      data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 3",
      data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 4",
      data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 5",
      data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 6",
       data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 7",
       data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 8",
       data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 9",
       data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
    {
      title: "Tab 10",
       data: [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
        "Zeta",
        "Eta",
        "Theta",
        "Iota",
        "Kappa",
        "Lambda",
        "Mu",
      ],
    },
  ];

  return (
    <div className="bg-gray-100">
      <p className="flex pt-16 text-center text-lg font-semibold ">
        Inspiration for future getaways
      </p>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Tabs centered horizontally */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            {tabData.map((tab, index) => (
              <Tab label={tab.title} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </Box>

        {/* TabPanels with Grid layout */}
        {tabData.map((tab, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Grid container spacing={2}>
              {tab.data.map((item, i) => (
                <Grid item xs={6} sm={4} md={3} key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 1,
                      p: 2,
                      height: "100%",
                      border: '1px solid lightgray', // Optional border for better visibility
                    }}
                  >
                    <Typography>{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </Box>

      <div>
        <hr />
      </div>
      <div className="flex justify-around mt-8 mb-24">
        <div>
          <p className="font-semibold">Support</p>
          <div className="flex flex-col mt-2 gap-2">
            <Link href="/help-center" className="hover:underline">
              Help Center
            </Link>
            <Link href="/aircover" className="hover:underline">
              AirCover
            </Link>
            <Link href="/anti-discrimination" className="hover:underline">
              Anti-discrimination
            </Link>
            <Link href="/disability-support" className="hover:underline">
              Disability support
            </Link>
            <Link href="/cancellation-options" className="hover:underline">
              Cancellation options
            </Link>
            <Link href="/report-neighborhood-concern" className="hover:underline">
              Report neighborhood concern
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Hosting</p>
          <div className="flex flex-col mt-2 gap-2">
            <Link href="/airbnb-your-home" className="hover:underline">
              Airbnb your home
            </Link>
            <Link href="/aircover-hosts" className="hover:underline">
              AirCover for Hosts
            </Link>
            <Link href="/anti-discrimination" className="hover:underline">
              Anti-discrimination
            </Link>
            <Link href="/disability-support" className="hover:underline">
              Disability support
            </Link>
            <Link href="/hosting-resources" className="hover:underline">
              Hosting resources
            </Link>
            <Link href="/community-forum" className="hover:underline">
              Community forum
            </Link>
            <Link href="/hosting-responsibly" className="hover:underline">
              Hosting responsibly
            </Link>
            <Link href="/airbnb-friendly-apartments" className="hover:underline">
              Airbnb-friendly apartments
            </Link>
            <Link href="/join-free-hosting-class" className="hover:underline">
              Join a free Hosting class
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Airbnb</p>
          <div className="flex flex-col mt-2 gap-2">
            <Link href="/newsroom" className="hover:underline">
              Newsroom
            </Link>
            <Link href="/new-features" className="hover:underline">
              New features
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/investors" className="hover:underline">
              Investors
            </Link>
            <Link href="/gift-cards" className="hover:underline">
              Gift cards
            </Link>
            <Link href="/airbnb-emergency-stays" className="hover:underline">
              Airbnb.org emergency stays
            </Link>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="text-sm flex my-4">
          <div>
            <p>© 2024 Airbnb, Inc.</p>
          </div>
          <div className="flex space-x-2">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <span>·</span>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/privacy-choices" className="hover:underline">
              Your Privacy Choices
            </Link>
          </div>
        </div>

        <div className="mt-2 md:mt-0">
          <div className="flex items-center space-x-4">
            <div className="flex flex-row items-center">
              <TfiWorld />
              <span className="ml-1">English (US)</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
