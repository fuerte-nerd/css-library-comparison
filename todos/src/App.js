import React, { useEffect } from "react";

import { connect } from "react-redux";
import { toggleAddTodoDialog } from "./redux/actions";

import "./App.css";

import Head from "./comps/Head";
import Todos from "./comps/Todos";
import AddTodo from "./comps/AddTodo";

import { Container, Typography, Fab, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function App(props) {
  const toggle = () => {
    props.dispatch(toggleAddTodoDialog());
  };

  useEffect(() => {
    localStorage.setItem("daves_todo_app", JSON.stringify(props.todos));
  }, [props.todos]);

  return (
    <>
      <Head />
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
        }}
        onClick={toggle}
      >
        <AddIcon />
      </Fab>
      <AddTodo />
      <Container>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h1">Todos</Typography>
          <Typography variant="subtitle2">
            What have you got to do today?
          </Typography>
        </Box>
        <Box>
          <Todos />
        </Box>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(App);
