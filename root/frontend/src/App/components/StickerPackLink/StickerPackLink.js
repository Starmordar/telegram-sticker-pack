import React from "react";
import "./StickerPackLink.css";

const HALF_HEIGHT_OF_LINK = 10;
const WIDTH_OF_LINK = 220;
const MAX_LENGTH_OF_DISPLAYED_NAME = 13;

class StickerPackLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
    };

    this.spanRef = React.createRef();

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  mouseOverHandler(e) {
    const eventTrigger = e.currentTarget;

    if (eventTrigger.firstChild.classList.contains("custom-tooltip")) {
      const tooltip = eventTrigger.firstChild;

      const scrollTopLinks = eventTrigger.parentNode.scrollTop,
        scrollTopNavbar = document.querySelector(".navbar-content").scrollTop;

      const topPosition =
        eventTrigger.offsetTop +
        HALF_HEIGHT_OF_LINK -
        (scrollTopNavbar + scrollTopLinks);

      tooltip.style.top = `${topPosition}px`;
      tooltip.style.left = `${WIDTH_OF_LINK}px`;
      tooltip.style.display = "block";
    }
  }

  mouseOutHandler(e) {
    const tooltip = e.currentTarget.firstChild;

    if (tooltip.classList.contains("custom-tooltip")) {
      tooltip.style.display = "none";
    }
  }

  componentDidMount() {
    const ellipsisText = this.spanRef.current;

    if (ellipsisText.offsetWidth < ellipsisText.scrollWidth) {
      this.setState({ showTooltip: true });
    }
  }

  render() {
    return (
      <li
        className="custom-collapse__element"
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
      >
        {this.state.showTooltip ? (
          <Tooltip packName={this.props.packName} />
        ) : null}

        <a
          href="javascript:void(0)"
          className="custom-collapse__element__link d-flex align-items-center"
        >
          <img
            src={require("../../assets/images/octopus.png")}
            alt=""
            width="30"
            height="30"
            className="nav-link-icon"
          />

          <span ref={this.spanRef} className="ellipsis-text">
            {this.props.packName}
          </span>
        </a>
      </li>
    );
  }
}

function Tooltip(props) {
  return <div className="custom-tooltip">{props.packName}</div>;
}

export default StickerPackLink;
