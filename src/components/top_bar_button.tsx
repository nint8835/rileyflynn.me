import Octicon, { Icon } from "@primer/octicons-react";
import React, { FunctionComponent } from "react";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

type TopBarButtonProps = {
  icon: Icon<number, number>;
  onClick: () => void;
};

const TopBarButton: FunctionComponent<TopBarButtonProps> = ({
  icon,
  onClick,
}) => (
  <div className={editorStyles.topBarButton} onClick={onClick}>
    <Octicon icon={icon} />
  </div>
);

export default TopBarButton;
