import React from "react";
import "./NavSection.css";

import StickerPackLink from "../StickerPackLink/StickerPackLink";

class NavSection extends React.Component {
  constructor(props) {
    super(props);

    this.clickHander = this.clickHander.bind(this);

    this.state = {
      arrowIcon: "",
      collapseSection: "",
      navbarSection: "",
      collapseTriggerWrapper: "",
    };

    this.classNames = {
      isOpen: {
        arrowIcon: "fa-chevron-up",
        collapseSection: "open-section",
        navbarSection: "open-element",
        collapseTriggerWrapper: "open-link",
      },
      isClose: {
        arrowIcon: "fa-chevron-down",
        collapseSection: "hidden-section",
        navbarSection: "",
        collapseTriggerWrapper: "",
      },
    };
  }

  clickHander(e) {
    const eventTrigger = e.currentTarget,
      uniqueID = eventTrigger.dataset.num;

    const collapse = document.querySelector(
        `.custom-collapse[data-num='${uniqueID}']`
      ),
      arrowIcon = document.querySelector(`i[data-num='${uniqueID}']`);

    if (collapse.classList.contains("hidden-section")) {
      arrowIcon.classList.remove("fa-chevron-down");
      arrowIcon.classList.add("fa-chevron-up");

      collapse.classList.remove("hidden-section");
      collapse.classList.add("open-section");

      collapse.parentNode.classList.add("open-element");
      eventTrigger.classList.add("open-link");
    } else {
      arrowIcon.classList.remove("fa-chevron-up");
      arrowIcon.classList.add("fa-chevron-down");

      collapse.classList.remove("open-section");
      collapse.classList.add("hidden-section");

      collapse.parentNode.classList.remove("open-element");

      setTimeout(() => {
        eventTrigger.classList.remove("open-link");
      }, 400);
    }
  }

  componentWillMount() {
    if (this.props.isOpen) this.setState(this.classNames.isOpen);
    else this.setState(this.classNames.isClose);
  }

  render() {
    let content;

    if (this.props.isInfo) {
      content = this.props.content.map((val, index) => {
        return <ExpandElement key={index} packName={val} />;
      });
    } else {
      content = this.props.content.map((val, index) => {
        return <StickerPackLink key={index} packName={val} />;
      });
      content.push(<CreateNewPack key={9999} />);
    }

    return (
      <div className={"navbar-section " + this.state.navbarSection}>
        <div
          className={
            "collapse-trigger-wrapper " + this.state.collapseTriggerWrapper
          }
          onClick={this.clickHander}
          data-num={this.props.num}
        >
          <a href="javascript:void(0)" className="collapse-trigger">
            {this.props.head}
          </a>
          <i
            className={"fas " + this.state.arrowIcon}
            data-num={this.props.num}
          ></i>
        </div>

        <ul
          className={"custom-collapse " + this.state.collapseSection}
          data-num={this.props.num}
        >
          {content}
        </ul>
      </div>
    );
  }
}

const ExpandElement = (props) => {
  return (
    <li className="custom-collapse__element">
      <a href="javascript:void(0)" className="custom-collapse__element__link">
        {props.packName}
      </a>
    </li>
  );
};
const CreateNewPack = (props) => {
  return (
    <li className="custom-collapse__element">
      <a
        href="javascript:void(0)"
        className="custom-collapse__element__link d-flex align-items-center"
        style={{ color: "#00d7d2" }}
      >
        <i className="fas fa-plus create-new-icon"></i>
        <span style={{ fontSize: "15px" }}>New Pack</span>
      </a>
    </li>
  );
};

export default NavSection;
