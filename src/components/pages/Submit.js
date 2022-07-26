import React, { Component } from "react";

class Submit extends Component {
  constructor(props){
    super(props);
    this.state = { employerInfo: [] };
  }

  componentDidMount()  {
     fetch("/submit")
      .then((res) => res.json())
      .then((employerInfo) =>
        this.setState({ employerInfo }, () =>
          console.log("employerInfo", employerInfo)
        )
      );
  }
  render() {
    return (
      <div>
        {this.state.employerInfo.map((employerInfo) => {
          return (
            <h1 key={employerInfo.id}>
              {`hi  ${ employerInfo.name} I recieved your request`}
              {employerInfo.company}
              {employerInfo.email}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default Submit;
