import React from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

const ToggleSwitch = ({ handleChange }) => {
  const { colors, title } = React.useContext(ThemeContext);

  return (
    <Switch
      onChange={handleChange}
      checked={title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={colors.secondary}
      onColor={colors.primary}
      onHandleColor={colors.neutralMedium}
      offHandleColor={colors.neutralMedium}
    />
  );
};

export default ToggleSwitch;
