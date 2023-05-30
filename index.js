const reactHeading = React.CreateElement("h1", {
  className: "head",
  id: "reactHead",
  children: "Hello React",
});

ReactDom.creatRoot(document.getElementById("root")).render(reactHeading);

console.log("react elem", reactHeading);
