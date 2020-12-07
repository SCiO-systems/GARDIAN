import React from 'react';
import classNames from 'classnames';
import AppMenu from './AppMenu';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';

const AppTopbar = (props) => {

	let topbarMenuClassName = classNames('layout-profile-menu fadeInDown ', { 'layout-profile-menu-active': props.topbarUserMenuActive });
	let menuButtonClassName = classNames('layout-menubutton ', { 'layout-menubutton-active': props.menuActive })

	return (
		<div className="layout-topbar">
			<button type="button" className={menuButtonClassName} onClick={props.onMenuButtonClick}>
				<div className="layout-menubutton-icon" />
			</button>

			<div className="layout-topbar-grid">
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<button type="button" className="layout-logo p-link" onClick={() => { window.location = "/#" }}>
						<img src="assets/layout/images/logo-white.svg" alt="sapphire-layout" />
					</button>
				</div>

				<div className="layout-topbar-grid-column">
					<AppMenu model={props.model} horizontal={props.horizontal} menuHoverActive={props.menuHoverActive} isMobile={props.isMobile}
						onMenuItemClick={props.onMenuItemClick} onRootMenuItemClick={props.onRootMenuItemClick} onSidebarClick={props.onSidebarClick} />
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<span className="layout-topbar-search">
						<span className="p-input-icon-right">
							<InputText id="search" type="text" placeholder="Search"/>
							<i className="topbar-icon pi pi-search"></i>
						</span>
					</span>
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<button type="button" className="p-link profile-menu-button" onClick={props.onTopbarUserMenuButtonClick}>
						<img src="assets/layout/images/avatar.png" alt="Profile" />
					</button>
					<ul className={topbarMenuClassName} onClick={props.onTopbarUserMenuClick}>
						<li className="layout-profile-menu-search">
							<span className="p-float-label">
								<InputText type="text" />
								<label>Search</label>
							</span>
						</li>

						<li role="menuitem">
							<button type="button" className="p-link">
								<i className="pi pi-user"></i>
								<span>Profile</span>
                                <Ripple />
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link">
								<i className="pi pi-envelope"></i>
								<span>Inbox</span>
                                <Ripple />
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link">
								<i className="pi pi-cog"></i>
								<span>Settings</span>
                                <Ripple />
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link">
								<i className="pi pi-times"></i>
								<span>Logout</span>
                                <Ripple />
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AppTopbar;
