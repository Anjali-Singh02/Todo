import React from "react";

export const Footer = () => {
  let footer = {
    position: "absolute",
    marginTop:"35vh",
    width:"100%"
  }
  return (
    <div className="footer text-center bg-secondary text-white py-4" style={footer}>
      Copyright &copy; TodoList
    </div>
  );
};
