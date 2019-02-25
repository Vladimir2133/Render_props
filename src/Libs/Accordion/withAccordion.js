import React from "react";

const WithAccordion = Component => {
  return class WithAccordion extends React.Component {
    state = {
      ONE: false,
      TWO: false,
      THREE: false
    };

    handleActiveAcc = AccIndex => {
      this.setState({
        [AccIndex]: !this.state[AccIndex]
      });
    };

    handleChangeImg = AccIndex => {
      const BackgAcc = this.state[AccIndex] === true ? "180deg" : "";
      return BackgAcc;
    };

    render() {
      return (
        <Component
          {...this.props}
          activeAcc={this.state}
          handleActiveAcc={this.handleActiveAcc}
          handleChangeImg={this.handleChangeImg}
        />
      );
    }
  };
};

export { WithAccordion };
