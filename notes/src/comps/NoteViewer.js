import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleViewer, updateNote } from "../redux/actions";
import {
  Dialog,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ArrowBack, LockOpen, Lock, Delete } from "@material-ui/icons";

import moment from "moment";

const dummyBody =
  "Ipsum dolores consequatur hic accusamus possimus? Totam voluptatibus rem excepturi saepe quia, eum iusto? Cupiditate minus repellendus quidem maxime nobis Placeat laborum corrupti dignissimos eum sit! Nisi illo cum omnis nisi repellendus optio? Quia praesentium libero reiciendis non veritatis. Tempora quibusdam eaque enim aut labore? Et dolorum omnis tenetur fugit?\n\nMore text here.";

const NoteViewer = (props) => {
  const {
    id,
    title,
    body,
    create_date,
    modified_date,
    locked,
  } = props.noteLoaded;

  const handleBackClick = () => {
    props.dispatch(toggleViewer());
  };

  const handleChange = (e) => {
    props.dispatch(
      updateNote({
        ...props.noteLoaded,
        [e.target.id]: e.target.value,
      })
    );
  };

  return props.noteLoaded ? (
    <Dialog open={props.isOpen} fullScreen transitionDuration={500}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>
          <Typography onClick={handleBackClick}>Back to main menu</Typography>
          <span style={{ flex: 1 }} />
          <IconButton color="inherit">
            <LockOpen />
          </IconButton>
          <IconButton color="inherit" i edge="end">
            <Delete />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "6rem" }}>
        <TextField
          fullWidth
          id="title"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "6rem", fontWeight: 300 },
          }}
          onChange={handleChange}
          value={title}
        />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {moment(create_date).format("D MMM")}
        </Typography>
        <TextField
          fullWidth
          multiline
          id="body"
          value={body}
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
          }}
        />
      </Container>
    </Dialog>
  ) : null;
};
const mapStateToProps = (state) => ({
  isOpen: state.isViewerOpen,
  noteLoaded: state.noteLoaded,
});
export default connect(mapStateToProps)(NoteViewer);
