import React, { PureComponent, Fragment } from "react";
import propTypes from "prop-types";
import { createPortal, render } from "react-dom";
import cls from "classnames";
import Button from "../button";
import { CloseIcon } from "../icon";

export default class Modal extends PureComponent {
	state = {
		init: false
	};
	static defaultProps = {
		prefixCls: "ellyth-modal",
		visible: false,
		targetAtNode: document.body,
		title: "",
		onOk: () => {},
		onCancel: () => {},
		okText: "确定",
		cancelText: "取消",
		footer: [],
		content: "",
		confirmLoading: false,
		maskClosable: true,
		centered: false,
		closable: true,
		showMask: true
	};
	static propTypes = {
		onCancel: propTypes.func,
		onOk: propTypes.func,
		title: propTypes.oneOfType([propTypes.string, propTypes.object]),
		okText: propTypes.oneOfType([propTypes.string, propTypes.object]),
		cancelText: propTypes.oneOfType([propTypes.string, propTypes.object]),
		content: propTypes.oneOfType([propTypes.string, propTypes.object]),
		confirmLoading: propTypes.bool,
		visible: propTypes.bool,
		centered: propTypes.bool,
		closable: propTypes.bool,
		maskClosable: propTypes.bool,
		showMask: propTypes.bool,
		footer: propTypes.oneOfType([
			//footer 不需要设置为 footer={null}
			propTypes.array,
			propTypes.bool,
			propTypes.object
		])
	};
	constructor(props) {
		super(props);
	}
	static confirm = options => {
		render(
			<Modal
				className="ellyth-modal-confirm"
				showMask={false}
				closable={false}
				visible
				{...options}
			/>,
			document.getElementById("root")
		);
	};
	componentWillReceiveProps({ visible }) {
		if (visible === true) {
			this.setState({
				init: true
			});
		}
	}
	render() {
		const {
			prefixCls,
			children,
			content,
			title,
			visible,
			onCancel,
			onOk,
			className,
			footer,
			okText,
			cancelText,
			confirmLoading,
			targetAtNode,
			centered,
			closable,
			maskClosable,
			showMask,
			...attr
		} = this.props;

		const { init } = this.state;

		const initModalAnimate = init
			? { [`${prefixCls}-open`]: visible, [`${prefixCls}-close`]: !visible }
			: { [`${prefixCls}-open`]: visible };

		const initMaskAnimate = init
			? {
					[`${prefixCls}-mask-show`]: visible,
					[`${prefixCls}-mask-hide`]: !visible
			}
			: { [`${prefixCls}-mask-show`]: visible };

		const maskClickHandle = maskClosable ? { onClick: onCancel } : {};

		return createPortal(
			<Fragment>
				{showMask ? (
					<div
						className={cls(`${prefixCls}-mask`, initMaskAnimate)}
						{...maskClickHandle}
					/>
				) : (
					undefined
				)}
				<div
					role="dialog"
					tabIndex="-1"
					className={cls(`${prefixCls}-wrap`, {
						[`${prefixCls}-centered`]: centered
					})}
				>
					<div
						className={cls(prefixCls, className, initModalAnimate)}
						ref={node => (this.modal = node)}
						{...attr}
					>
						<section className={`${prefixCls}-header`}>
							<h2 className={`${prefixCls}-title`}>{title}</h2>
							{closable ? (
								<CloseIcon
									className={`${prefixCls}-close`}
									onClick={onCancel}
								/>
							) : (
								undefined
							)}
						</section>
						<section className={`${prefixCls}-content`}>
							{content || children}
						</section>
						{footer && footer.length >= 1 ? (
							<section className={`${prefixCls}-footer`}>
								{footer.map(buttonGroup => buttonGroup)}
							</section>
						) : footer instanceof Array ? (
							<section className={`${prefixCls}-footer`}>
								<Button onClick={onCancel}>{cancelText}</Button>
								<Button type="primary" loading={confirmLoading} onClick={onOk}>
									{okText}
								</Button>
							</section>
						) : (
							undefined
						)}
					</div>
				</div>
			</Fragment>,
			targetAtNode
		);
	}
}
