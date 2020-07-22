import React from "react";
import IconLink from "../buttons/IconLink";
import Github from "../../res/github.png";

const Footer = () => {
    return (
        <div className="footer">
            <span>
                Developed by Portfolio Posse
            </span>
            <IconLink
                href={"https://github.com/fishbein/portfolio-posse/"}
                icon={Github}
                title="Github"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
        </div>
    );
};

export default Footer;