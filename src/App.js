import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppBreadcrumb} from "./AppBreadcrumb";
import {AppFooter} from './AppFooter';
import {Route} from 'react-router-dom'
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import {UtilsDemo} from './components/UtilsDemo';
import {Documentation} from './components/Documentation';
import { withRouter } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './ripple.js';
import './App.css';
import {AppConfig} from "./AppConfig";

class App extends Component {

	constructor() {
		super();
		this.state = {
			horizontal: true,
			topbarSize: 'large',
			topbarColor: 'layout-topbar-blue',
			menuColor: 'layout-menu-light',
			layoutColor: 'blue',
			themeColor: 'blue',
			menuActive: false,
			configDialogActive: false,
			menuHoverActive: false
		};

		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
		this.onTopbarUserMenuButtonClick = this.onTopbarUserMenuButtonClick.bind(this);
		this.onTopbarUserMenuClick = this.onTopbarUserMenuClick.bind(this);
		this.onConfigButtonClick = this.onConfigButtonClick.bind(this);
		this.onConfigCloseClick = this.onConfigCloseClick.bind(this);
		this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
		this.onMenuItemClick = this.onMenuItemClick.bind(this);
		this.onSidebarClick = this.onSidebarClick.bind(this);
		this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
		this.changeTopbarSize = this.changeTopbarSize.bind(this);
		this.changeMenuToHorizontal = this.changeMenuToHorizontal.bind(this);
		this.changeMenuTheme = this.changeMenuTheme.bind(this);
		this.changeComponentTheme = this.changeComponentTheme.bind(this);
		this.changePrimaryColor = this.changePrimaryColor.bind(this);
		this.createMenu();
	}

	onWrapperClick(event) {
		if (!this.menuClick) {
			this.setState({menuActive: false});
		}

		if (!this.userMenuClick) {
			this.setState({topbarUserMenuActive: false});
		}

		if (!this.menuClick) {
			this.setState({menuHoverActive: false});
			this.unblockBodyScroll();
		}

		this.userMenuClick = false;
		this.menuClick = false;
	}

	onMenuButtonClick(event) {
		this.menuClick = true;

		if (!this.state.horizontal || this.isMobile()) {
			this.setState({menuActive: !this.state.menuActive});

			if (!this.state.menuActive) {
				this.blockBodyScroll();
			} else {
				this.unblockBodyScroll();
			}
		}

		event.preventDefault();
	}

	blockBodyScroll() {
		if (document.body.classList) {
			document.body.classList.add('blocked-scroll');
		} else {
			document.body.className += ' blocked-scroll';
		}
	}

	unblockBodyScroll() {
		if (document.body.classList) {
			document.body.classList.remove('blocked-scroll');
		} else {
			document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
				'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	onTopbarUserMenuButtonClick(event) {
		this.userMenuClick = true;
		this.setState({topbarUserMenuActive: !this.state.topbarUserMenuActive});

		event.preventDefault();
	}

	onTopbarUserMenuClick(event) {
		this.userMenuClick = true;

		if (event.target.nodeName === 'BUTTON' || event.target.parentNode.nodeName === 'BUTTON') {
			this.setState({topbarUserMenuActive: false});
		}

		event.originalEvent.preventDefault();
	}

	onConfigButtonClick() {
		if(!this.state.horizontal)
			this.setState({menuActive: false});
		else
			this.setState({menuHoverActive: false});

		if (!this.userMenuClick) {
			this.setState({topbarUserMenuActive: false});
		}

		this.setState({configDialogActive: true})
	}

	onConfigCloseClick() {
		this.setState({configDialogActive: false})
	}

	onRootMenuItemClick(event) {
		this.menuClick = true;
		this.setState({
			menuHoverActive: !this.state.menuHoverActive
		});
	}

	onMenuItemClick(event) {
		if(!event.item.items) {
			if(!this.state.horizontal)
				this.setState({menuActive: false})

			this.setState({menuHoverActive: false});
		}
	}

	onSidebarClick(event) {
		this.menuClick = true;
	}

	isMobile() {
		return window.innerWidth <= 1024;
	}

	changeTopbarSize(event) {
		this.setState({topbarSize: event.size});

		event.originalEvent.preventDefault();
	}

	changeTopbarTheme(event) {
		this.setState({topbarColor: 'layout-topbar-' + event.color});

		event.originalEvent.preventDefault();
	}

	changeMenuToHorizontal(event) {
		this.setState({horizontal: event.mode});

		event.originalEvent.preventDefault();
	}

	changeMenuTheme(event) {
		this.setState({menuColor: 'layout-menu-' + event.color});

		event.originalEvent.preventDefault();
	}

	changeComponentTheme(event) {
		this.setState({themeColor: event.theme});

		let element = document.getElementById('theme-css');
		let urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = 'theme-' + event.theme + '.css';
		let newURL = urlTokens.join('/');
		element.setAttribute('href', newURL);

		event.originalEvent.preventDefault();
	}

	changePrimaryColor(event) {
		this.setState({layoutColor: event.color});

		let element = document.getElementById('layout-css');
		let urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = 'layout-' + event.color + '.css';
		let newURL = urlTokens.join('/');
		element.setAttribute('href', newURL);

		event.originalEvent.preventDefault();
	}

	createMenu() {
		this.menu = [
			{label: 'Dashboard', icon: 'dashboard', to: '/'},
			{
				label: 'Components', icon: 'list',
				items: [
					{label: 'Sample Page', icon: 'desktop_mac', to: '/sample'},
					{label: 'Forms', icon: 'input', to: '/forms'},
					{label: 'Data', icon: 'grid_on', to: '/data'},
					{label: 'Panels', icon: 'content_paste', to: '/panels'},
					{label: 'Overlays', icon: 'content_copy', to: '/overlays'},
					{label: 'Menus', icon: 'menu', to: '/menus'},
					{label: 'Messages', icon: 'message',to: '/messages'},
					{label: 'Charts', icon: 'insert_chart', to: '/charts'},
					{label: 'Misc', icon: 'toys', to: '/misc'}
				]
			},
			{
				label: 'Mega', icon: 'list', badge: 2, mega: true,
				items: [
					{
						label: 'Components',
						items: [
							{label: 'Sample Page', icon: 'desktop_mac', to: '/sample'},
							{label: 'Forms', icon: 'input', to: '/forms'},
							{label: 'Data', icon: 'grid_on', to: '/data'},
							{label: 'Panels', icon: 'content_paste', to: '/panels'},
							{label: 'Overlays', icon: 'content_copy', to: '/overlays'},
							{label: 'Menus', icon: 'menu', to: '/menus'},
							{label: 'Messages', icon: 'message',to: '/messages'},
							{label: 'Charts', icon: 'insert_chart', to: '/charts'},
							{label: 'Misc', icon: 'toys', to: '/misc'}
						]
					},
					{
						label: 'Templates',
						items: [
							{label: 'Ultima', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/ultima-ng' },
							{label: 'Serenity', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/serenity-ng'},
							{label: 'Avalon', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/avalon-ng'},
							{label: 'Apollo', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/apollo-ng'},
							{label: 'Roma', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/roma-ng'},
							{label: 'Babylon', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/babylon-ng'},
							{label: 'Manhattan', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/manhattan-ng'},
							{label: 'Verona', icon: 'desktop_mac', url: 'https://www.primefaces.org/layouts/verona-ng'},
							{label: 'Olympia', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/olympia-ng'},
							{label: 'Ecuador', icon: 'desktop_mac',  url: 'https://www.primefaces.org/layouts/ecuador-ng'}
						]
					},
					{
						label: 'Demo',
						items: [
							{label: 'PrimeFaces', icon: 'desktop_mac', url: 'https://www.primefaces.org/showcase'},
							{label: 'PrimeNG', icon: 'desktop_mac',  url: 'https://www.primefaces.org/primeng'},
							{label: 'PrimeReact', icon: 'desktop_mac',  url: 'https://www.primefaces.org/primereact'}
						]
					}
				]
			},
			{
				label: 'Pages', icon: 'get_app',
				items: [
					{label: 'Empty Page', icon: 'hourglass_empty', to: '/empty'},
					{label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
					{label: 'Login Page', icon: 'verified_user', to: '/login'},
					{label: 'Error Page', icon: 'error', to: '/error'},
					{label: '404 Page', icon: 'error_outline', to: '/notfound'},
					{label: 'Access Denied Page', icon: 'security', to: '/access'}
				]
			},
			{
				label: 'Hierarchy', icon: 'menu',
				items: [
					{
						label: 'Submenu 1', icon: 'subject',
						items: [
							{
								label: 'Submenu 1.1', icon: 'subject',
								items: [
									{label: 'Submenu 1.1.1', icon: 'subject'},
									{label: 'Submenu 1.1.2', icon: 'subject'},
									{label: 'Submenu 1.1.3', icon: 'subject'},
								]
							},
							{
								label: 'Submenu 1.2', icon: 'subject',
								items: [
									{label: 'Submenu 1.2.1', icon: 'subject'},
									{label: 'Submenu 1.2.2', icon: 'subject'}
								]
							},
						]
					},
					{
						label: 'Submenu 2', icon: 'subject',
						items: [
							{
								label: 'Submenu 2.1', icon: 'subject',
								items: [
									{label: 'Submenu 2.1.1', icon: 'subject'},
									{label: 'Submenu 2.1.2', icon: 'subject'},
									{label: 'Submenu 2.1.3', icon: 'subject'},
								]
							},
							{
								label: 'Submenu 2.2', icon: 'subject',
								items: [
									{label: 'Submenu 2.2.1', icon: 'subject'},
									{label: 'Submenu 2.2.2', icon: 'subject'}
								]
							},
						]
					}
				]
			},
			{label: 'Utils', icon: 'build',  command:()=>{ window.location = "#/utils"}},
			{label: 'Documentation', icon: 'find_in_page',  command:()=>{ window.location = "#/documentation"}},
			{label: 'Buy Now', icon: 'credit_card', command: () => { window.location = "https://www.primefaces.org/store"}},
		];
	}

	render() {
		const layoutContainerClassName = classNames('layout-container', {
			'layout-menu-horizontal': this.state.horizontal,
			'layout-menu-active': this.state.menuActive,
			'layout-top-small': this.state.topbarSize === 'small',
			'layout-top-medium': this.state.topbarSize === 'medium',
			'layout-top-large': this.state.topbarSize === 'large'
		}, this.state.topbarColor, this.state.menuColor);

		const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

		return (
			<div ref={(el) => this.layoutContainer = el} className={layoutContainerClassName}  onClick={this.onWrapperClick}>
				<div className="layout-top">
					<AppTopbar topbarUserMenuActive={this.state.topbarUserMenuActive} menuActive={this.state.menuActive}
							   onMenuButtonClick={this.onMenuButtonClick} onTopbarUserMenuButtonClick={this.onTopbarUserMenuButtonClick}
							   onTopbarUserMenuClick={this.onTopbarUserMenuClick} model={this.menu} horizontal={this.state.horizontal} onSidebarClick={this.onSidebarClick}
							   menuHoverActive={this.state.menuHoverActive}  onRootMenuItemClick={this.onRootMenuItemClick} onMenuItemClick={this.onMenuItemClick}/>

					<div className="layout-topbar-separator"/>

					<AppBreadCrumbWithRouter />
				</div>

				<div className="layout-content">
					<Route path="/" exact component={Dashboard} />
					<Route path="/forms" component={FormsDemo} />
					<Route path="/sample" component={SampleDemo} />
					<Route path="/data" component={DataDemo} />
					<Route path="/panels" component={PanelsDemo} />
					<Route path="/overlays" component={OverlaysDemo} />
					<Route path="/menus" component={MenusDemo} />
					<Route path="/messages" component={MessagesDemo} />
					<Route path="/charts" component={ChartsDemo} />
					<Route path="/misc" component={MiscDemo} />
					<Route path="/empty" component={EmptyPage} />
					<Route path="/utils" component={UtilsDemo} />
					<Route path="/documentation" component={Documentation} />
				</div>

				<button className="layout-config-button p-link " onClick={this.onConfigButtonClick}>
					<i className="material-icons">settings</i>
				</button>

				<CSSTransition classNames="layout-config" timeout={{enter: 150, exit: 150}} in={this.state.configDialogActive}>
					<AppConfig topbarColor={this.state.topbarColor} horizontal={this.state.horizontal}
							layoutColor={this.state.layoutColor} menuColor={this.state.menuColor} themeColor={this.state.themeColor}
							topbarSize={this.state.topbarSize} onConfigCloseClick={this.onConfigCloseClick} changeTopbarTheme={this.changeTopbarTheme}
							changeMenuToHorizontal={this.changeMenuToHorizontal} changeMenuTheme={this.changeMenuTheme} changeComponentTheme={this.changeComponentTheme}
							changePrimaryColor={this.changePrimaryColor} changeTopbarSize={this.changeTopbarSize}/>
				</CSSTransition>
				{this.state.menuActive && <div className="layout-mask"/>}

				<AppFooter />

				{this.state.configDialogActive && <div className="layout-config-mask"/>}
			</div>
		);
	}
}

export default App;
