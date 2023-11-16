import React from "react";

function Demo() {
  return (
    <>
      <h1>My Books</h1>
      <ol>
        <li>C++</li>
        <li>JS</li>
        <li>C#</li>
        <li>Perl</li>
        <li>Python</li>
      </ol>
    </>
  );
}

function MyBooks() {
  return (
    <>
      <h1>A</h1>
    </>
  );
}

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // code

  render() {
    return(
    <>
      <Demo />
      <MyBooks />
      <h1>Hello there</h1>
    </>
    )
  }
}
export default TestClass;
