import React, { FC } from "react";
import classNames from 'classnames'

import { UserDataType } from "../utils/data";
import { StyledH2, StyledH4 } from "./StyledElements";

interface WhatIDoProps {
  data: UserDataType["whatIDo"];
  className?: string;
}

const WhatIDo: FC<WhatIDoProps> = ({ data, className }) => (
    <div className={classNames(className, 'page-content')}>
        <StyledH2>What I Do</StyledH2>
    </div>
);

export { WhatIDo };
