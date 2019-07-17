import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {InputText} from 'primereact/components/inputtext/InputText';
import {AppMenu} from "./AppMenu";

export class AppTopbar extends Component {

	static defaultProps = {
		onMenuButtonClick: null,
		onTopbarUserMenuButtonClick: null,
		onTopbarUserMenuClick: null,
		menuActive: null,
		topbarUserMenuActive: false,

		model: null,
		horizontal: true,
		menuHoverActive: null,
		onRootMenuItemClick: null,
		onMenuItemClick: null,
		onSidebarClick: null
	}

	static propTypes = {
		onMenuButtonClick: PropTypes.func.isRequired,
		onTopbarUserMenuButtonClick: PropTypes.func.isRequired,
		onTopbarUserMenuClick: PropTypes.func.isRequired,
		menuActive: PropTypes.bool.isRequired,
		topbarUserMenuActive: PropTypes.bool.isRequired,

		model: PropTypes.array.isRequired,
		horizontal: PropTypes.bool.isRequired,
		menuHoverActive: PropTypes.bool.isRequired,
		onRootMenuItemClick: PropTypes.func.isRequired,
		onMenuItemClick: PropTypes.func.isRequired,
		onSidebarClick: PropTypes.func.isRequired
	}

	constructor() {
		super();
		this.state = {};
	}

	onTopbarUserMenuClick(event) {
		if (this.props.onTopbarUserMenuClick) {
			this.props.onTopbarUserMenuClick({
				originalEvent: event,
				target: event.target
			});
		}
	}

	render() {
		let topbarMenuClassName = classNames('layout-profile-menu fadeInDown ', {'layout-profile-menu-active': this.props.topbarUserMenuActive});
		let menuButtonClassName = classNames('layout-menubutton ', {'layout-menubutton-active': this.props.menuActive})

		return <div className="layout-topbar">
			<button className={menuButtonClassName} onClick={this.props.onMenuButtonClick}>
				<div className="layout-menubutton-icon"/>
			</button>

			<div className="layout-topbar-grid">
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<button className="layout-logo p-link">
						<img src="assets/layout/images/logo-white.svg" alt="sapphire-layout"/>
					</button>
				</div>

				<div className="layout-topbar-grid-column">
					<AppMenu model={this.props.model} horizontal={this.props.horizontal} menuHoverActive={this.props.menuHoverActive}
							 onMenuItemClick={this.props.onMenuItemClick} onRootMenuItemClick={this.props.onRootMenuItemClick} onSidebarClick={this.props.onSidebarClick}/>
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
                    <span className="layout-topbar-search">
                        <span className="md-inputfield">
                            <InputText type="text"/>
                            <label>Search</label>
                            <i className="material-icons">search</i>
                        </span>
                    </span>
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<button className="p-link profile-menu-button" onClick={this.props.onTopbarUserMenuButtonClick}>
						<img src="assets/layout/images/avatar.png" alt="Profile"/>
					</button>
					<ul className={topbarMenuClassName} onClick={e=>this.onTopbarUserMenuClick(e)}>
						<li className="layout-profile-menu-search">
                            <span className="md-inputfield">
                                <InputText type="text"/>
                                <label>Search</label>
                            </span>
						</li>

						<li role="menuitem">
							<button className="p-link ripplelink">
								<i className="material-icons">account_circle</i>
								<span>Profile</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link ripplelink">
								<i className="material-icons">inbox</i>
								<span>Inbox</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link ripplelink">
								<i className="material-icons">settings</i>
								<span>Settings</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link ripplelink">
								<i className="material-icons">cancel</i>
								<span>Logout</span>
							</button>
						</li>
					</ul>

				</div>

			</div>
		</div>;
	}
}