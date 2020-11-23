import React, { Component } from "react";
import "./Avatar.scss";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customColors: [
        ["#E3E7F9", "#405493"],
        ["#CEF0F4", "#34ADC6"],
        ["#F0F4E1", "#ACAF36"],
        ["#FEE8D3", "#E97428"],
      ],
      avatarColors: [],
    };
  }

  componentDidMount() {
    this.colorPicker();
  }

  colorPicker() {
    const { customColors } = this.state;
    const randomColor =
      customColors[Math.floor(Math.random() * customColors.length)];
    this.setState({
      avatarColors: randomColor,
    });
  }

  render() {
    const { avatarColors } = this.state;
    const { initials } = this.props;
    const avatarStyle = {
      backgroundColor: avatarColors[0],
    };

    const initialsStyle = {
      color: avatarColors[1],
    };
    return (
      <div className="avatar-circle" style={avatarStyle}>
        <span className="initials" style={initialsStyle}>
          {initials}
        </span>
      </div>
    );
  }
}

export default Avatar;
