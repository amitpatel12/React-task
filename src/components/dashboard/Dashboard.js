import {
  Box,
  Button,
  Drawer,
  Typography,
  backdropClasses,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import Person2Icon from "@mui/icons-material/Person2";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Padding, Style } from "@mui/icons-material";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const DashboardContainer = styled(Box)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(54, 49, 171, 1) 22%,
    rgba(12, 12, 71, 1) 66%,
    rgba(6, 19, 91, 1) 100%
  );
  color: white;
  min-height: 100vh;
  display: flex;
`;

const BoxRow = styled(Box)`
  color: white;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;

  & > svg {
    background-color: #2c2c2e;
    color: blue;
    border-radius: 5px;
    padding: 5px;
    font-size: 28px;
  }

  &:hover {
    background-color: gray;
    color: white;
  }

  &:hover & > svg {
    color: white;
  }
`;

const Heading = styled(Box)`
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0px;
  color: white;
`;

const Line = styled(Box)`
  box-shadow: rgba(255, 255, 255, 0.2) 0px 2px 4px 0px inset;
  height: 1px;
  margin-bottom: 20px;
`;
const drawerStyle = {
  left: 0,
  top: 0,
  height: "100%",
  width: "20%",
  boxShadow: "none",
  background: "#191650",
  padding: "30px",
};

const InfoContainer = styled(Box)`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
color: white;
margin-top: 20px;
background-color:gray;
padding: 50px;
`




const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const handleClose = () => {
    
  };

  useEffect(() => {
    if(!token){
        navigate('/')
    }
  }, [token]);


  const handleLogout = (e) => {
    console.log("logout")
    localStorage.clear()
    navigate('/')
  }


  return (
    <DashboardContainer>
      <Drawer
        open={open}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <Line></Line>

        <BoxRow>
          <HomeIcon
            style={{
              backgroundColor: "#2c2c2e",
              color: "blue",
              padding: "5px",
              fontSize: "28px",
              borderRadius: "5px",
            }}
          />
          <span style={{ marginLeft: "10px" }}>Dashboard</span>
        </BoxRow>

        <BoxRow>
          <BarChartIcon />
          <span style={{ marginLeft: "10px" }}>Table</span>
        </BoxRow>

        <BoxRow>
          <AccountBalanceWalletIcon />
          <span style={{ marginLeft: "10px" }}>Billing</span>
        </BoxRow>

        <BoxRow>
          <ChecklistRtlIcon />
          <span style={{ marginLeft: "10px" }}>RTL</span>
        </BoxRow>

        <Heading>ACCOUNT PAGES</Heading>

        <BoxRow>
          <Person2Icon />
          <span style={{ marginLeft: "10px" }}>Profile</span>
        </BoxRow>
        
      
            <>
        <BoxRow>
          <VpnKeyIcon />
          <span style={{ marginLeft: "10px" }}>SignIn</span>
        </BoxRow>
        <BoxRow>
          <Padding />
          <span style={{ marginLeft: "10px" }}>SignUp</span>
        </BoxRow>
        </>
       
      </Drawer>

      <Box
        style={{
          color: "white",
          marginLeft: "30%",
          marginTop: "50px",
          fontSize: "30px",
          zIndex: '1502'
        }}
      >
        <Box>Welcome to Dashboard - {user.chk_user_first_name}</Box>

        { user &&(
            <InfoContainer>
          <Box style={{marginBottom:'20px'}}>User Information</Box>
          <Box>
            <img src={user.store_image} alt ="image"/>
          </Box>
          <Typography>
            UserId <span>{user.user_id}</span>
          </Typography>

          <Typography>
            Store id <span>{user.store_id}</span>
          </Typography>
          <Typography>
            Name{" "}
            <span>
              {" "}
              {user.chk_user_first_name} {user.chk_user_lastname}
            </span>
          </Typography>
          <Typography>
            Role <span> {user.role} </span>
          </Typography>

          <Typography>
            Email <span> {user.chk_user_email
} </span>
          </Typography>
        </InfoContainer>
        )}
 <button type="submit" onClick={handleLogout}className="logoutButton">
              LOGOUT
            </button>
        
      </Box>
     
    </DashboardContainer>
      
  );
};

export default Dashboard;
