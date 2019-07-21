import React from "react";

import bottomBarStyles from "./styles/bottom_bar.module.css";
import { Link } from "gatsby";

export default () => (
  <div className={bottomBarStyles.bottomBar}>
    <div className={bottomBarStyles.leftItems}></div>
    <div className={bottomBarStyles.rightItems}>
      <Link to="/credits" key="/credits" className={bottomBarStyles.link}>
        Credits
      </Link>
    </div>
  </div>
);
