import React from "react";

export default function CoolButton(props) {
  const styles = {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white",
  };

  const keys = Object.keys(props);

  let stylesValuesFromKeys = "";
  keys.forEach((key) => {
    if (styles[key] !== undefined) {
      stylesValuesFromKeys += ` ${styles[key]}`;
    }
  });
  let classes = "button";
  console.log(stylesValuesFromKeys, props);
  classes += ` ${props.className} ${stylesValuesFromKeys}`;
  return <button className={classes}>{props.children}</button>;
}
