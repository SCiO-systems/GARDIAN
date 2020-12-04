import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppBreadcrumb } from "./AppBreadcrumb";
import { AppFooter } from './AppFooter';
import { AppConfig } from "./AppConfig";
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router';

import { Dashboard } from './components/Dashboard';
import { ButtonDemo } from './components/ButtonDemo';
import { ChartDemo } from './components/ChartDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { Documentation } from './components/Documentation';
import { FileDemo } from './components/FileDemo';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { ListDemo } from './components/ListDemo';
import { MiscDemo } from './components/MiscDemo';
import { MenuDemo } from './components/MenuDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { PanelDemo } from './components/PanelDemo';
import { TableDemo } from './components/TableDemo';
import { TreeDemo } from './components/TreeDemo';

import { Crud } from './pages/Crud';
import { Calendar } from './pages/Calendar';
import { Invoice } from './pages/Invoice';
import { EmptyPage } from './pages/EmptyPage';
import { Help } from './pages/Help';

import { DisplayDemo } from './utilities/DisplayDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { FlexBoxDemo } from './utilities/FlexboxDemo';
import { GridDemo } from './utilities/GridDemo';
import { IconsDemo } from './utilities/IconsDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { WidgetsDemo } from './utilities/WidgetsDemo';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './App.scss';
import 'primeicons/primeicons.css';


const App = () => {

	const [horizontal, setHorizontal] = useState(true);
	const [topbarSize, setTopbarSize] = useState('large');
	const [topbarColor, setTopbarColor] = useState('layout-topbar-blue');
	const [menuColor, setMenuColor] = useState('layout-menu-light');
	const [layoutColor, setLayoutColor] = useState('blue');
	const [themeColor, setThemeColor] = useState('blue');
	const [menuActive, setMenuActive] = useState(false);
	const [topbarUserMenuActive, setTopbarUserMenuActive] = useState(false);
	const layoutContainer = useRef(null);

	let menuClick;
	let configMenuClick;
	let userMenuClick;

	const onWrapperClick = (event) => {
		if (!menuClick) {
			setMenuActive(false)

			if (!configMenuClick) {
				unblockBodyScroll();
			}
		}

		if (!userMenuClick) {
			setTopbarUserMenuActive(false);
		}

		userMenuClick = false;
		menuClick = false;
		configMenuClick = false;
	}

	const menu = [
		{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
		{
			label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
			items: [
				{ label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
				{ label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
				{ label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
				{ label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', class: 'rotated-icon' },
				{ label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
				{ label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
				{ label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
				{ label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
				{ label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
				{ label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
				{ label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
				{ label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
				{ label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
				{ label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
				{ label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
			]
		},
		{
			label: 'Mega', icon: 'pi pi-fw pi-list', badge: 2, mega: true,
			items: [
				{
					label: 'UI Kit', icon: 'pi pi-fw pi-sitemap', badge: 6,
					items: [
						{ label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
						{ label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
						{ label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
						{ label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', class: 'rotated-icon' },
						{ label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
						{ label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
						{ label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
						{ label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
						{ label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
						{ label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
						{ label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menus' },
						{ label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
						{ label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
						{ label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
						{ label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
					]
				},
				{
					label: 'Templates',
					items: [
						{ label: 'Diamond', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/diamond-vue' },
						{ label: 'Sapphire', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/sapphire-vue' },
						{ label: 'Serenity', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/serenity-vue' },
						{ label: 'Ultima', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/ultima-vue' },
						{ label: 'Avalon', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/avalon-vue' },
						{ label: 'Babylon', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/babylon-vue' },
						{ label: 'Apollo', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/apollo-vue' },
						{ label: 'Roma', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/roma-vue' },
						{ label: 'Prestige', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/prestige-vue' }
					]
				},
				{
					label: 'Demo',
					items: [
						{ label: 'PrimeFaces', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/showcase' },
						{ label: 'PrimeNG', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/primeng' },
						{ label: 'PrimeReact', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/primereact' }
					]
				}
			]
		},
		{
			label: "Utilities", icon: 'pi pi-fw pi-globe',
			items: [
				{ label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
				{ label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
				{ label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
				{ label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
				{ label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
				{ label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
				{ label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
				{ label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
				{ label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
			]
		},
		{
			label: 'Pages', icon: 'pi pi-fw pi-clone',
			items: [
				{ label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud' },
				{ label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
				{ label: 'Landing', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank' },
				{ label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
				{ label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
				{ label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
				{ label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
				{ label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
				{ label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
				{ label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
			]
		},
		{
			label: 'Menu Hierarchy', icon: 'pi pi-fw pi-align-left',
			items: [
				{
					label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
					items: [
						{
							label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
							items: [
								{ label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
							]
						},
						{
							label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
							items: [
								{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left' }
							]
						},
					]
				},
				{
					label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
					items: [
						{
							label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
							items: [
								{ label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left' },
							]
						},
						{
							label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
							items: [
								{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
								{ label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left' }
							]
						},
					]
				}
			]
		},
		{ label: 'Documentation', icon: 'pi pi-fw pi-question', to: '/documentation' },
		{ label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" } },
	];


	const onMenuButtonClick = (event, isMenuButtonActive) => {
		menuClick = true;

		if (!isHorizontalMenuActive()) {
			this.setState({ menuActive: !isMenuButtonActive }, () => {
				if (menuActive) {
					this.blockBodyScroll();
				} else {
					this.unblockBodyScroll();
				}
			});
		}

		event.preventDefault();
	}

	const onToggleBlockBodyScroll = (add) => {
		if (add)
			blockBodyScroll();
		else
			unblockBodyScroll();

		configMenuClick = true;
	}

	const blockBodyScroll = () => {
		let className = `blocked-scroll${horizontal ? '-horizontal-menu' : ''}`;
		if (document.body.classList) {
			document.body.classList.add(className);
		} else {
			document.body.className += ` ${className}`;
		}
	}

	const unblockBodyScroll = () => {
		let className = `blocked-scroll${horizontal ? '-horizontal-menu' : ''}`;
		if (document.body.classList) {
			document.body.classList.remove(className);
		} else {
			document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
				`${className}`.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	const onTopbarUserMenuButtonClick = (event) => {
		userMenuClick = true;
		setTopbarUserMenuActive(prevState => !prevState);

		event.preventDefault();
	}

	const onTopbarUserMenuClick = (event) => {
		userMenuClick = true;

		if (event.target.nodeName === 'BUTTON' || event.target.parentNode.nodeName === 'BUTTON') {
			setTopbarUserMenuActive(false)
		}
		event.preventDefault();
	}

	const onRootMenuItemClick = (event) => {
		menuClick = true;

		if (isHorizontalMenuActive()) {
			setMenuActive(prevState => !prevState)
		}
	}

	const onMenuItemClick = (event) => {
		if (!event.item.items) {
			setMenuActive(false)
			unblockBodyScroll();
		}
	}

	const onSidebarClick = (event) => {
		menuClick = true;
	}

	const isMobile = () => {
		return window.innerWidth <= 1024;
	}

	const isHorizontalMenuActive = () => {
		return horizontal && !isMobile();
	}

	const changeTopbarSize = (event) => {
		setTopbarSize(event.size)
		event.originalEvent.preventDefault();
	}

	const changeTopbarTheme = (event) => {
		setTopbarColor('layout-topbar-' + event.color)
		event.originalEvent.preventDefault();
	}

	const changeMenuToHorizontal = (event) => {
		setHorizontal(event.mode)
		event.originalEvent.preventDefault();
	}

	const changeMenuTheme = (event) => {
		setMenuColor('layout-menu-' + event.color);
		event.originalEvent.preventDefault();
	}

	const changeComponentTheme = (event) => {
		setThemeColor(event.theme);
		let element = document.getElementById('theme-css');
		let urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = 'theme-' + event.theme + '.css';
		let newURL = urlTokens.join('/');

		replaceLink(element, newURL);

		event.originalEvent.preventDefault();
	}

	const changePrimaryColor = (event) => {
		setLayoutColor(event.color);
		let element = document.getElementById('layout-css');
		let urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = 'layout-' + event.color + '.css';
		let newURL = urlTokens.join('/');

		replaceLink(element, newURL);

		event.originalEvent.preventDefault();
	}

	const isIE = () => {
		return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
	}

	const replaceLink = (linkElement, href) => {
		if (isIE()) {
			linkElement.setAttribute('href', href);
		}
		else {
			const id = linkElement.getAttribute('id');
			const cloneLinkElement = linkElement.cloneNode(true);

			cloneLinkElement.setAttribute('href', href);
			cloneLinkElement.setAttribute('id', id + '-clone');

			linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

			cloneLinkElement.addEventListener('load', () => {
				linkElement.remove();
				cloneLinkElement.setAttribute('id', id);
			});
		}
	}

	const layoutContainerClassName = classNames('layout-container', {
		'layout-menu-horizontal': horizontal,
		'layout-menu-active': menuActive && !isHorizontalMenuActive(),
		'layout-top-small': topbarSize === 'small',
		'layout-top-medium': topbarSize === 'medium',
		'layout-top-large': topbarSize === 'large'
	}, topbarColor, menuColor);

	const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

	return (
		<div ref={layoutContainer} className={layoutContainerClassName} onClick={onWrapperClick}>
			<div className="layout-top">
				<AppTopbar topbarUserMenuActive={topbarUserMenuActive} menuActive={menuActive}
					onMenuButtonClick={onMenuButtonClick} onTopbarUserMenuButtonClick={onTopbarUserMenuButtonClick}
					onTopbarUserMenuClick={onTopbarUserMenuClick} model={menu} horizontal={horizontal} onSidebarClick={onSidebarClick}
					onRootMenuItemClick={onRootMenuItemClick} onMenuItemClick={onMenuItemClick} isHorizontalMenuActive={isHorizontalMenuActive} />

				<div className="layout-topbar-separator" />

				<AppBreadCrumbWithRouter />
			</div>

			<div className="layout-content">
				<Route path="/" exact component={Dashboard} />
				<Route path="/formlayout" component={FormLayoutDemo} />
				<Route path="/input" component={InputDemo} />
				<Route path="/button" component={ButtonDemo} />
				<Route path="/table" component={TableDemo} />
				<Route path="/list" component={ListDemo} />
				<Route path="/tree" component={TreeDemo} />
				<Route path="/panel" component={PanelDemo} />
				<Route path="/overlay" component={OverlayDemo} />
				<Route path="/menu" component={MenuDemo} />
				<Route path="/messages" component={MessagesDemo} />
				<Route path="/file" component={FileDemo} />
				<Route path="/chart" component={ChartDemo} />
				<Route path="/misc" component={MiscDemo} />
				<Route path="/documentation" component={Documentation} />
				<Route path="/crud" component={Crud} />
				<Route path="/calendar" component={Calendar} />
				<Route path="/help" component={Help} />
				<Route path="/invoice" component={Invoice} />
				<Route path="/empty" component={EmptyPage} />
				<Route path="/display" component={DisplayDemo} />
				<Route path="/elevation" component={ElevationDemo} />
				<Route path="/flexbox" component={FlexBoxDemo} />
				<Route path="/icons" component={IconsDemo} />
				<Route path="/grid" component={GridDemo} />
				<Route path="/spacing" component={SpacingDemo} />
				<Route path="/text" component={TextDemo} />
				<Route path="/typography" component={TypographyDemo} />
				<Route path="/widgets" component={WidgetsDemo} />

			</div>

			<AppConfig topbarColor={topbarColor} horizontal={horizontal}
				layoutColor={layoutColor} menuColor={menuColor} themeColor={themeColor}
				topbarSize={topbarSize} changeTopbarTheme={changeTopbarTheme}
				changeMenuToHorizontal={changeMenuToHorizontal} changeMenuTheme={changeMenuTheme} changeComponentTheme={changeComponentTheme}
				changePrimaryColor={changePrimaryColor} changeTopbarSize={changeTopbarSize} onToggleBlockBodyScroll={onToggleBlockBodyScroll} />

			{(!isHorizontalMenuActive() && menuActive) && <div className="layout-mask" />}

			<AppFooter />

		</div>
	);

}

export default App;
