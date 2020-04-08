import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote, loadNote, toggleViewer } from "../redux/actions";
import newNoteConfig from "./newNoteConfig";
import {
  Container,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const Header = (props) => {
  const [anchor, setAnchor] = useState(false);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleNewNoteClick = () => {
    setAnchor(null);
    const newNote = newNoteConfig();
    props.dispatch(addNote(newNote));
    props.dispatch(loadNote(newNote.id));
    props.dispatch(toggleViewer());
  };

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography>Main Menu</Typography>
          <span style={{ flex: 1 }} />
          <IconButton
            onClick={handleClick}
            aria-controls="mainmenu"
            edge="end"
            color="inherit"
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="mainmenu"
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleNewNoteClick}>New note</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <Typography align="center" variant="h1">
          Notes
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          color="textSecondary"
          style={{ fontStyle: "italic" }}
        >
          "Either write something worth reading or do something worth writing."
          <span style={{ display: "block" }}>Benjamin Franklin</span>
        </Typography>
      </Container>
    </header>
  );
};

export default connect()(Header);
