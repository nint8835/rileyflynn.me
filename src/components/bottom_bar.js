import React from "react";

import bottomBarStyles from "./styles/bottom_bar.module.css";

export default () => (
  <div className={bottomBarStyles.bottomBar}>
    <div className={bottomBarStyles.leftItems}>I'm on the left!</div>
    <div className={bottomBarStyles.rightItems}>I'm on the right!</div>
  </div>
);
