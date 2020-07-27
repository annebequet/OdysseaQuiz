"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightBlue = "#6cdbdc";
var lightGray = "#b7b7b7";

var styles = {
  boxStyle: {
    width: "300px",
    minHeight: "200px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    border: "2px solid " + lightBlue,
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#fff"
  },
  heading: {
    title: {
      textAlign: "center",
      fontWeight: "bold",
      color: lightBlue,
      fontSize: "1.4em",
      margin: "5px 0"
    },
    description: {
      textAlign: "justify",
      textJustify: "inter-word",
      padding: "0 20px"
    }
  },
  question: {
    text: {
      fontWeight: "bold"
    }
  },
  buttons: {
    basic: {
      padding: "5px 15px",
      backgroundColor: "#fff",
      borderRadius: "20px",
      cursor: "pointor"
    },
    next: {
      border: "1px solid " + lightGray,
      margin: "0 auto",
      display: "block"
    }
  },
  displayControl: {
    layout: {
      marginBottom: "2px"
    },
    buttons: {
      backgroundColor: "#fff",
      border: "1px solid " + lightGray,
      fontWeight: "bolder",
      fontSize: "2em",
      lineHeight: "20px",
      color: lightGray,
      overflow: "hidden"
    }
  },
  foldedStyle: {
    minHeight: "50px",
    height: "50px",
    overflow: "hidden"
  },
  hiddenStyle: {
    display: "none"
  }
};

exports.styles = styles;