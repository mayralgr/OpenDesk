import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import LinkButton from "./components/Button";
import Labels from "./components/Labels";
import EmployeesLabel from "./components/EmployeesLabel";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { toAbsoluteUrl } from "../../utils/utils";
import ButtonsMobile from "./components/ButtonsMobile";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    background: {
        default: "#263238"
    }
  },
});

const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      display: "flex",
    },
    employeesArea: {
        paddingLeft: "2.813rem",
        paddingTop: "3rem"
    },
    linkArea: {
        paddingTop: "7.375rem"
    },
    labelsArea: {
      color: "#FFFFFF",
      paddingLeft: "11.375rem",
      paddingTop: "3rem",
      fontSize: "1.5rem",
      letterSpacing: "0.01rem",
      textAlign: "center",
      lineHeight: "2.25rem"
    },
    // Mobile
    employeesLabel: {
      paddingTop: "3rem",
      width: "100%"
    },
    search: {
      paddingTop: "1.25rem",
      float: "right",
      paddingRight: "1.25rem",
    },
    employeesInvited: {
      color: "#FFFFFF",
      textAlign: "center",
      paddingTop: "8.125rem",
      fontSize: "1.125rem",
      textWeight: "500",
      lineHeight: "1.688rem",
    },
    labels: {
      paddingTop: "14rem",
      fontSize: "1rem",
      textAlign: "center",
      color: "#FFFFFF",
      textWeight: "600",
      lineHeight: "1.5rem",
    },
    buttonsMobile: {
      
    }
  }));

export default function EmployeesPage() {
    const classes = useStyle();
    const desktop = useMediaQuery('(min-width:992px)');
    if (desktop) {
      return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar/>
              <div className={classes.root}>
                <div className={classes.employeesArea}>
                    <TextArea/>
                    <div className={classes.linkArea}>
                      <LinkButton/>
                    </div>
                </div>
                <div className={classes.labelsArea}>
                      <Labels/>
                </div>
              </div>
              
          </ThemeProvider>
      );
    }
    else{
      // mobile
      return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <img
              className={classes.search}
              alt="Search"
              src={toAbsoluteUrl("/media/home/icons/search.svg")}
            />
            <div className={classes.employeesLabel}>
              <EmployeesLabel/>
              <div className={classes.employeesInvited}> 
                1672 Employees Invited 
              </div>
              <div className={classes.labels}> 
                Invite Employees Check <br/> Employees List 
              </div> 
            </div>
            <div className={classes.buttonsMobile}>
              < ButtonsMobile />
            </div>
            
            
        </ThemeProvider>
    );
    }
} 