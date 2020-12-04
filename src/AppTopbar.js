import React from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/components/inputtext/InputText';
import { AppMenu } from "./AppMenu";


export const AppTopbar = (props) => {

	let isMenuButtonActive = !props.isHorizontalMenuActive() && props.menuActive;
	let topbarMenuClassName = classNames('layout-profile-menu fadeInDown ', { 'layout-profile-menu-active': props.topbarUserMenuActive });
	let menuButtonClassName = classNames('layout-menubutton ', { 'layout-menubutton-active': isMenuButtonActive })

	return (
		<div className="layout-topbar">
			<button type="button" className={menuButtonClassName} onClick={(e) => props.onMenuButtonClick(e, isMenuButtonActive)}>
				<div className="layout-menubutton-icon" />
			</button>

			<div className="layout-topbar-grid">
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<button type="button" className="layout-logo p-link" onClick={() => { window.location = "/#" }}>
						<img src="assets/layout/images/logo-white.svg" alt="sapphire-layout" />
					</button>
				</div>

				<div className="layout-topbar-grid-column">
					<AppMenu model={props.model} horizontal={props.horizontal} menuActive={props.menuActive} isHorizontalMenuActive={props.isHorizontalMenuActive}
						onMenuItemClick={props.onMenuItemClick} onRootMenuItemClick={props.onRootMenuItemClick} onSidebarClick={props.onSidebarClick} />
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed">
					<span className="layout-topbar-search">
						<span className="p-float-label p-input-icon-right">
							<InputText id="search" type="text" placeholder="Search" />
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
							<span className="md-inputfield">
								<InputText type="text" />
								<label>Search</label>
							</span>
						</li>

						<li role="menuitem">
							<button type="button" className="p-link ripplelink">
								<i className="pi pi-user"></i>
								<span>Profile</span>
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link ripplelink">
								<i className="pi pi-envelope"></i>
								<span>Inbox</span>
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link ripplelink">
								<i className="pi pi-cog"></i>
								<span>Settings</span>
							</button>
						</li>
						<li role="menuitem">
							<button type="button" className="p-link ripplelink">
								<i className="pi pi-times"></i>
								<span>Logout</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

}