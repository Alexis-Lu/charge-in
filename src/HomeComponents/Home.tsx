import { useState, useEffect } from "react";
import "./home.css";
import Logo from "../ReusableComponents/Logo";
import ComponentButtonHome from "./ComponentButtonHome";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { Drawer, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen, setActiveButtonId } from "../navigationSlice";
import { RootState } from "../store";
import DropdownButton from "./ComponentButtonDrop";
import ComponentHomeHeader from "./ComponentHomeHeader";
import Line from "../ReusableComponents/Line";
import Dashboard from "./Dashboard";
import ProfileComponent from "./ProfileComponent";
import ComponentHouse from "./ComponentHouse";
import Profile from "./Profile";

function Home() {
  const isMobile = window.innerWidth <= 600;
  const openDrawer = useSelector(
    (state: RootState) => state.navigation.drawerOpen
  );
  const activeButtonId = useSelector(
    (state: RootState) => state.navigation.activeButtonId
  );

  const [activeContent, setActiveContent] = useState<string>("default");

  useEffect(() => {
    updateActiveContent(activeButtonId);
  }, [activeButtonId]);

  const updateActiveContent = (buttonId: number) => {
    switch (buttonId) {
      case 1:
        setActiveContent("accueil");
        break;
      case 2:
        setActiveContent("maisons");
        break;
      case 3:
        setActiveContent("projectManagers");
        break;
      case 20:
        setActiveContent("profile");
        break;
      default:
        setActiveContent("accueil");
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="leftContainer">
        {!isMobile && (
          <div className="left">
            <div className="logo">
              <Logo />
            </div>
            <ComponentButtonHome
              icon={
                <GridViewSharpIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Accueil"
              isActive={activeButtonId === 1}
              onClick={() => {
                dispatch(setActiveButtonId(1));
              }}
            />
            <p className="title">Opportunités</p>

            <DropdownButton
              icon={<HouseOutlinedIcon />}
              text="Maisons"
              isActive={activeButtonId === 2}
              onClick={() => {
                dispatch(setActiveButtonId(2));
              }}
              expandIcon={<AddSharpIcon style={{ color: "white" }} />}
            />
            <DropdownButton
              icon={<HouseOutlinedIcon />}
              text="Appartements"
              isActive={activeButtonId === 3}
              onClick={() => {
                dispatch(setActiveButtonId(3));
              }}
              expandIcon={<AddSharpIcon style={{ color: "white" }} />}
            />
            <DropdownButton
              icon={<BusinessOutlinedIcon />}
              text="Etudes"
              isActive={activeButtonId === 4}
              onClick={() => {
                dispatch(setActiveButtonId(4));
              }}
              expandIcon={<AddSharpIcon style={{ color: "white" }} />}
            />

            <p className="title">Utilisateurs</p>
            <ComponentButtonHome
              icon={
                <SecurityOutlinedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="CEO & Admins"
              isActive={activeButtonId === 5}
              onClick={() => {
                dispatch(setActiveButtonId(5));
              }}
            />
            <ComponentButtonHome
              icon={
                <PersonOutlineRoundedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Project Managers"
              isActive={activeButtonId === 6}
              onClick={() => {
                dispatch(setActiveButtonId(6));
              }}
            />
            <ComponentButtonHome
              icon={
                <PersonOutlineRoundedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Installateurs"
              isActive={activeButtonId === 7}
              onClick={() => {
                dispatch(setActiveButtonId(7));
              }}
            />
            <ComponentButtonHome
              icon={
                <PersonOutlineRoundedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Clients B2C"
              isActive={activeButtonId === 8}
              onClick={() => {
                dispatch(setActiveButtonId(8));
              }}
            />
            <p className="title">Données</p>
            <ComponentButtonHome
              icon={
                <BoltRoundedIcon style={{ color: "white", display: "flex" }} />
              }
              text="Bornes"
              isActive={activeButtonId === 9}
              onClick={() => {
                dispatch(setActiveButtonId(9));
              }}
            />
            <ComponentButtonHome
              icon={
                <DirectionsCarFilledOutlinedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Véhicules"
              isActive={activeButtonId === 10}
              onClick={() => {
                dispatch(setActiveButtonId(10));
              }}
            />
            <ComponentButtonHome
              icon={
                <HandymanOutlinedIcon
                  style={{ color: "white", display: "flex" }}
                />
              }
              text="Accesoires"
              isActive={activeButtonId === 11}
              onClick={() => {
                dispatch(setActiveButtonId(11));
              }}
            />
            <ComponentButtonHome
              icon={<TvOutlinedIcon />}
              text="Objectifs"
              isActive={activeButtonId === 12}
              onClick={() => {
                dispatch(setActiveButtonId(12));
              }}
            />
          </div>
        )}
        {isMobile && (
          <div>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={() => dispatch(setDrawerOpen(false))}
            >
              <div className="drawerContent">
                <div className="logo">
                  <Logo />
                </div>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => dispatch(setDrawerOpen(false))}
                >
                  <CloseOutlinedIcon style={{ color: "white" }} />
                </IconButton>
                <ComponentButtonHome
                  icon={
                    <GridViewSharpIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Accueil"
                  isActive={activeButtonId === 1}
                  onClick={() => {
                    dispatch(setActiveButtonId(1));
                  }}
                />
                <p className="title">Opportunités</p>

                <DropdownButton
                  icon={<HouseOutlinedIcon />}
                  text="Maisons"
                  isActive={activeButtonId === 2}
                  onClick={() => {
                    dispatch(setActiveButtonId(2));
                  }}
                  expandIcon={<AddSharpIcon style={{ color: "white" }} />}
                />
                <DropdownButton
                  icon={<HouseOutlinedIcon />}
                  text="Appartements"
                  isActive={activeButtonId === 3}
                  onClick={() => {
                    dispatch(setActiveButtonId(3));
                  }}
                  expandIcon={<AddSharpIcon style={{ color: "white" }} />}
                />
                <DropdownButton
                  icon={<BusinessOutlinedIcon />}
                  text="Etudes"
                  isActive={activeButtonId === 4}
                  onClick={() => {
                    dispatch(setActiveButtonId(4));
                  }}
                  expandIcon={<AddSharpIcon style={{ color: "white" }} />}
                />

                <p className="title">Utilisateurs</p>
                <ComponentButtonHome
                  icon={
                    <SecurityOutlinedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="CEO & Admins"
                  isActive={activeButtonId === 5}
                  onClick={() => {
                    dispatch(setActiveButtonId(5));
                  }}
                />
                <ComponentButtonHome
                  icon={
                    <PersonOutlineRoundedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Project Managers"
                  isActive={activeButtonId === 6}
                  onClick={() => {
                    dispatch(setActiveButtonId(6));
                  }}
                />
                <ComponentButtonHome
                  icon={
                    <PersonOutlineRoundedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Installateurs"
                  isActive={activeButtonId === 7}
                  onClick={() => {
                    dispatch(setActiveButtonId(7));
                  }}
                />
                <ComponentButtonHome
                  icon={
                    <PersonOutlineRoundedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Clients B2C"
                  isActive={activeButtonId === 8}
                  onClick={() => {
                    dispatch(setActiveButtonId(8));
                  }}
                />
                <p className="title">Données</p>
                <ComponentButtonHome
                  icon={
                    <BoltRoundedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Bornes"
                  isActive={activeButtonId === 9}
                  onClick={() => {
                    dispatch(setActiveButtonId(9));
                  }}
                />
                <ComponentButtonHome
                  icon={
                    <DirectionsCarFilledOutlinedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Véhicules"
                  isActive={activeButtonId === 10}
                  onClick={() => {
                    dispatch(setActiveButtonId(10));
                  }}
                />
                <ComponentButtonHome
                  icon={
                    <HandymanOutlinedIcon
                      style={{ color: "white", display: "flex" }}
                    />
                  }
                  text="Accesoires"
                  isActive={activeButtonId === 11}
                  onClick={() => {
                    dispatch(setActiveButtonId(11));
                  }}
                />
                <ComponentButtonHome
                  icon={<TvOutlinedIcon />}
                  text="Objectifs"
                  isActive={activeButtonId === 12}
                  onClick={() => {
                    dispatch(setActiveButtonId(12));
                  }}
                />
              </div>
            </Drawer>
          </div>
        )}
      </div>
      <div className="rightContainer">
        <div className="headerContainer">
          <div>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => dispatch(setDrawerOpen(true))}
              >
                <MenuOpenOutlinedIcon />
              </IconButton>
            )}
          </div>
          <div>
            <ComponentHomeHeader
              prenom="Prénom"
              nom="Nom"
              notif={true}
              avatar={<ProfileComponent popoverId={1} />}
            />
          </div>
        </div>

        <Line width="95%" />
        {activeContent === "accueil" && <Dashboard />}
        {activeContent === "maisons" && <ComponentHouse />}
        {activeContent === "profile" && <Profile />}
      </div>
    </div>
  );
}

export default Home;
