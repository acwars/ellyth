import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom"; //传送门 将节点挂载在root 节点之外
import cls from "classnames";
import { CloseIcon } from "../icon";

const placements = {
  right: "right",
  top: "top",
  bottom: "bottom",
  left: "left"
};

const ESC_KEY_CODE = 27

export default class Drawer extends PureComponent {
  state = {
    init: false
  };
  static defaultProps = {
    prefixCls: "ellyth-drawer",
    visible: false,
    getPopupContainer: () => document.body,
    title: "",
    onClose: () => {},
    maskClosable: true,
    closable: true,
    showMask: true,
    width: 300,
    height: 300,
    zIndex: 999,
    placement: placements.right,
    footer: null,
    escClose: true,
  };
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    showMask: PropTypes.bool,
    zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placement: PropTypes.oneOf(Object.values(placements)),
    getPopupContainer: PropTypes.func,
    onClose: PropTypes.func,
    wrapperClassName: PropTypes.string,
    escClose: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.wrapperRef = createRef()
  }
  disableScroll = () => {
    document.body.style.overflow = "hidden";
    //滚动条的宽度 防止鬼畜
    document.body.style.paddingRight = "15px";
  };
  enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = 0;
  };
  static getDerivedStateFromProps({ visible }) {
    if (visible === true) {
      return {
        init: true,
        visible
      };
    }
    return null;
  }
  componentDidUpdate() {
    if (this.props.visible === true) {
      this.disableScroll();
      if(this.wrapperRef.current){
        this.wrapperRef.current.focus()
      }
    } else {
      this.enableScroll();
    }
  }

  onKeyDown = (e) => {
    if(!this.props.escClose) {
      return
    }
    if(e.keyCode === ESC_KEY_CODE) {
      e.stopPropagation();
      if(this.props.onClose){
        this.props.onClose()
      }
    }
  }
  render() {
    const {
      prefixCls,
      children,
      title,
      visible,
      onClose,
      className,
      getPopupContainer,
      closable,
      maskClosable,
      showMask,
      width,
      height,
      zIndex,
      placement,
      style,
      footer,
      wrapperClassName,
      escClose, // eslint-disable-line
      ...attr
    } = this.props;

    const { init } = this.state;

    const maskClickHandle = maskClosable ? { onClick: onClose } : {};

    return createPortal(
      <>
        {showMask && (
          <div
            className={cls(`${prefixCls}-mask`, {
              [`${prefixCls}-mask-show`]: visible,
              [`${prefixCls}-mask-hide`]: init && !visible
            })}
            {...maskClickHandle}
          />
        )}
        <div
          tabIndex="-1"
          className={cls(`${prefixCls}-wrap`, wrapperClassName, {
            [`${prefixCls}-wrap-visible`]: visible,
          })}
          onKeyDown={this.onKeyDown}
          ref={this.wrapperRef}
        >
          <div
            className={cls(
              prefixCls,
              className,
              {
                [`${prefixCls}-open`]: visible,
                [`${prefixCls}-close`]: init && !visible,
                [`${prefixCls}-no-title`]: !title
              },
              `${prefixCls}-${placement}`
            )}
            style={{
              ...style,
              width,
              height:
                placement === "bottom" || placement === "top" ? height : "100%",
              zIndex
            }}
            {...attr}
          >
            <section className={`${prefixCls}-header`}>
              <h2 className={`${prefixCls}-title`}>{title}</h2>
              {closable && (
                <CloseIcon className={`${prefixCls}-close`} onClick={onClose} />
              )}
            </section>
            <section className={`${prefixCls}-content`}>{children}</section>
            {footer && (
              <section className={`${prefixCls}-footer`}>{footer}</section>
            )}
          </div>
        </div>
      </>,
      getPopupContainer()
    );
  }
}
