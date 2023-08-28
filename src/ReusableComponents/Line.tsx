//import React from "react";

interface LineProps {
  width: string;
}

function Line({ width }: LineProps) {
  return <hr style={{ color: "#E0E0E0", width: width, borderTop: "1px" }} />;
}

export default Line;
