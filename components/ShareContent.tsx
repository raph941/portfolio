import Image from "next/image";
import React from "react";
import styled from "styled-components";

import FacebookIcon from "/public/assets/icons/social/Facebook.svg";
import WhatsappIcon from "/public/assets/icons/social/Whatsapp.svg";
import LinkedinIcon from "/public/assets/icons/social/Linkedin.svg";
import TwitterIcon from "/public/assets/icons/social/Twitter.svg";
import classNames from "classnames";

interface ShareContentProps {
  className?: string;
  title: string;
  shareUrl: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-items-list {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    gap: 12px;
  }

  .share-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }

  ul > li > img {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

const ShareContent: React.FunctionComponent<ShareContentProps> = ({
  className,
  shareUrl,
  title,
}) => (
  <StyledWrapper className={classNames(className, "")}>
    <ul className="social-items-list">
      <li className="social-item">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://web.facebook.com/sharer.php?u=${shareUrl}`}
        >
          <Image
            loading="eager"
            width={15}
            height={15}
            src={FacebookIcon}
            alt="Facebook icon"
          />
        </a>
      </li>
      <li className="social-item">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/intent/tweet/?text=${title} on ${shareUrl}`}
        >
          <Image
            loading="eager"
            width={15}
            height={15}
            src={TwitterIcon}
            alt="Twitter icon"
          />
        </a>
      </li>
      <li className="social-item">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        >
          <Image
            loading="eager"
            width={15}
            height={15}
            src={LinkedinIcon}
            alt="LinkedIn icon"
          />
        </a>
      </li>
      <li className="social-item">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?text=${title} on ${shareUrl}`}
        >
          <Image
            loading="eager"
            width={15}
            height={15}
            src={WhatsappIcon}
            alt="Whatsapp icon"
          />
        </a>
      </li>
    </ul>
  </StyledWrapper>
);

export { ShareContent };
