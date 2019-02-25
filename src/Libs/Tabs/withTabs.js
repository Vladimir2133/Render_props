import React from "react";

class WithTabs extends React.Component {
  state = {
    active: this.props.initialTab
  };
  setActiveTab = tabName => {
    this.setState({ active: tabName });
  };

  setActiveColor = tabIndex => {
    const colorTab = this.state.active === tabIndex ? "#1E90FF" : "";
    return colorTab;
  };

  render() {
    return (
      <div>
        {this.props.children({
          activeTab: this.state.active,
          setActiveTab: this.setActiveTab,
          setActiveColor: this.setActiveColor
        })}
      </div>
    );
  }
}

export default WithTabs;
