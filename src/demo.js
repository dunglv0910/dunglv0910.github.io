import React from "react";

function DemoProps({ content }) {
  return (
    <>
      <h1>Hello: {content}</h1>
    </>
  );
}
function Demo() {
    
  return (
    <>
      <DemoProps content="Dung la doi buon ma" />
    </>
  );
}

export default Demo;
