import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItem from "@material-ui/core/ListItem";
// import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AddAlert from "@material-ui/icons/AddAlert";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fa: {
    marginTop: theme.spacing(10),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Addnotes = (props) => {
  const classes = useStyles();
  const [result, setResult] = useState([]);
  //const book = props.book_id;
  //console.log(book);
  const [status, setStatus] = useState("");
  const [pages, setPages] = useState("");
  const [readagain, setReadagain] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const [open, setOpen] = React.useState(false);
  const[bookid,setBookid]=useState("");
  const [tl, setTL] = React.useState(false);
  
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
            console.log(1+2);
          setTL(true);
          setTimeout(function() {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function() {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function() {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };


  const handleClickOpen = (e) => {
    const bok = e.currentTarget.getAttribute("data-key");
       setBookid(bok);
    axios
      .post("http://localhost:3001/api/getspecificDetails", {
        booki: bok,
      })
      .then((response) => {
        setResult(response.data);
        setStatus(response.data.[0].status);
        setRating(response.data.[0].rating);
        setReadagain(response.data.[0].readgain);
        setNotes(response.data.[0].notes);
        setPages(response.data.[0].pagefinsh);
      });
    setOpen(true);
  };
  function ChangeStatus(e){
    const status=e.target.value;
    setStatus(status);
  };
  function ChangeRating(e){
    const rating=e.target.value;
    setRating(rating);
  };
  function ChangeNotes(e){
    const notes=e.target.value;
    setNotes(notes);
  };
  function ChangeReadagain(e){
    const read=e.target.value;
    setReadagain(read);
    //console.log(read);
  };
  function ChangePages(e){
    const pages=e.target.value;
    setPages(pages);
  };

  function submithandle(e)
  {
    e.preventDefault();
    console.log(status);
    axios.post('http://localhost:3001/api/update',{status:status,pagefinsh:pages,rating:rating,notes:notes,bookid:bookid,readgain:readagain} )
        .then((data)=>{
        {showNotification("tl")}
    });

  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        data-key={props.book_id}
        onClick={handleClickOpen}
      >
        Open full-screen dialog
      </Button>
      {result.map((myReads) => (
        <Dialog
          key={result.bookid}
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {myReads.bookname}
              </Typography>
              <Button autoFocus color="danger" onClick={handleClose}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <GridContainer margin-top="100px">
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                    Edit Your Reads, Rajesh!
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    You can add Notes!
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Status"
                        id="status"
                        onChange={ChangeStatus}
                        defaultValue={myReads.status}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Where You At?"
                        id="pageno"
                        onChange={ChangePages}
                        defaultValue={myReads.pagefinsh}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="rating"
                        id="rating"
                        onChange={ChangeRating}
                        defaultValue={myReads.rating}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Read Again?"
                        id="readagain"
                        onChange={ChangeReadagain}
                        defaultValue={myReads.readgain}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText=""
                        id="last-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText=""
                        id="city"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText=""
                        id="country"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText=""
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>
                        Notes
                      </InputLabel>
                      <CustomInput
                        onChange={ChangeNotes}
                        labelText="Unique Feature of this incredible App!"
                        id="about-me"
                        defaultValue={myReads.notes}
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button onClick={submithandle} color="primary">Update Reads</Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile className={classes.fa}>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={myReads.bookthumb} alt="..." />
                  </a>
                </CardAvatar>
                <Snackbar
                  place="tl"
                  color="success"
                  icon={AddAlert}
                  message="Yay! Book Details Changed."
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
                <CardBody profile>
                  <h6 className={classes.cardCategory}>{myReads.bookname}</h6>
                  <h4 className={classes.cardTitle}>{myReads.author}</h4>
                  <p className={classes.description}>{myReads.bookdes}</p>
                  <Button color="primary" round>
                    Follow
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <Divider />
        </Dialog>
      ))}
    </div>
  );
};
export default Addnotes;
