import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
import styled from "styled-components";

interface RightLeftNavProps {
  onClickRight: () => void;
  onClickLeft: () => void;
  disabledRight?: boolean;
  disabledLeft?: boolean;
}

const StyledButtonGroup = styled(ButtonGroup)`
  button {
    display: flex;
    align-items: center;

    :focus {
      box-shadow: none;
    }

    svg {
      fill: ${({ theme }) => theme.variables.background};
    }
  }
`;

const RightLeftNav: React.FunctionComponent<RightLeftNavProps> = ({
  onClickLeft,
  onClickRight,
  disabledLeft,
  disabledRight,
}) => {

  return (
    <div>
      <StyledButtonGroup className="me-2" aria-label="First group">
        <Button
          disabled={disabledLeft}
          onClick={() => onClickLeft()}
          className="btn btn-primary"
        >
          <LeftOutlined />
        </Button>
        <Button
          disabled={disabledRight}
          onClick={() => onClickRight()}
          className="btn btn-primary"
        >
          <RightOutlined />
        </Button>
      </StyledButtonGroup>
    </div>
  );
};

export { RightLeftNav };
