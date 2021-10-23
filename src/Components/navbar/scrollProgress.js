import React, { useEffect } from "react";
import styled from "styled-components";

function ScrollProgress() {
  const [width, setWidth] = React.useState("0%");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let changeWodth =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setWidth(changeWodth);

      console.log(
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
      );
    });
  }, []);

  return (
    <div style={{ background: "#f2f2f2", height: "10px" }}>
      <ScrollBar width={width}></ScrollBar>
    </div>
  );
}

export default ScrollProgress;
const ScrollBar = styled.div`
  background: red;
  height: 10px;
  width: ${(props) => props.width * 100};
  z-index: 2;
`;
