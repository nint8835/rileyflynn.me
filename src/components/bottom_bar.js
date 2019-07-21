import React from "react";

import bottomBarStyles from "./styles/bottom_bar.module.css";
import { Link } from "gatsby";
import Octicon, { GitCommit } from "@primer/octicons-react";

const commitHash = (process.env.DRONE_COMMIT || "Unknown").substring(0, 7);
const commitUrl =
  process.env.DRONE_COMMIT_LINK || `https://github.com/nint8835/rileyflynn.me/`;

export default () => (
  <div className={bottomBarStyles.bottomBar}>
    <div className={bottomBarStyles.leftItems}>
      <a href={commitUrl} className={bottomBarStyles.link}>
        <Octicon icon={GitCommit} /> {commitHash}
      </a>
    </div>
    <div className={bottomBarStyles.rightItems}>
      <Link to="/credits" key="/credits" className={bottomBarStyles.link}>
        Credits
      </Link>
    </div>
  </div>
);
