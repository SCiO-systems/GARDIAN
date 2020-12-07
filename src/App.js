import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppBreadcrumb from './AppBreadcrumb';

import { Dashboard } from './components/Dashboard';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { TableDemo } from './components/TableDemo';
import { ListDemo } from './components/ListDemo';
import { TreeDemo } from './components/TreeDemo';
import { PanelDemo } from './components/PanelDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { MediaDemo } from './components/MediaDemo';
import { MenuDemo } from './components/MenuDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { FileDemo } from './components/FileDemo';
import { ChartDemo } from './components/ChartDemo';
import { MiscDemo } from './components/MiscDemo';
import { Documentation } from './components/Documentation';
import { IconsDemo } from './utilities/IconsDemo';
import { Widgets } from './utilities/Widgets';
import { GridDemo } from './utilities/GridDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { DisplayDemo } from './utilities/DisplayDemo';
import { FlexBoxDemo } from './utilities/FlexBoxDemo';
import { CrudDemo } from './pages/CrudDemo';
import { CalendarDemo } from './pages/CalendarDemo';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';
import { EmptyPage } from './pages/EmptyPage';

import PrimeReact from 'primereact/utils';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

const App = () => {

    const [horizontal, setHorizontal] = useState(true);
    const [topbarSize, setTopbarSize] = useState('large');
    const [topbarColor, setTopbarColor] = useState('layout-topbar-blue');
    const [menuColor, setMenuColor] = useState('layout-menu-light');
    const [menuActive, setMenuActive] = useState(false);
    const [menuHoverActive, setMenuHoverActive] = useState(false);
    const [topbarUserMenuActive, setTopbarUserMenuActive] = useState(false);
    const [compactMode, setCompactMode] = useState(false);
    const [layoutColor, setLayoutColor] = useState('blue');
    const [themeColor, setThemeColor] = useState('blue');
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);

    PrimeReact.ripple = true;

    const menu = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        {
            label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
            items: [
                { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
                { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/floatlabel' },
                { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', class: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
                { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
                { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
                { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
                { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
                { label: 'Media', icon: 'pi pi-fw pi-image', to: '/media' },
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
                        { label: 'Diamond', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/diamond-react' },
                        { label: 'Sapphire', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/sapphire-react' },
                        { label: 'Serenity', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/serenity-react' },
                        { label: 'Ultima', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/ultima-react' },
                        { label: 'Avalon', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/avalon-react' },
                        { label: 'Babylon', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/babylon-react' },
                        { label: 'Apollo', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/apollo-react' },
                        { label: 'Roma', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/layouts/roma-react' },
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

    const routers = [
        { path: '/', component: Dashboard, exact: true },
        { path: '/formlayout', component: FormLayoutDemo },
        { path: '/input', component: InputDemo },
        { path: '/floatlabel', component: FloatLabelDemo },
        { path: '/button', component: ButtonDemo },
        { path: '/table', component: TableDemo },
        { path: '/list', component: ListDemo },
        { path: '/tree', component: TreeDemo },
        { path: '/panel', component: PanelDemo },
        { path: '/overlay', component: OverlayDemo },
        { path: '/media', component: MediaDemo },
        { path: '/menu', component: MenuDemo },
        { path: '/messages', component: MessagesDemo },
        { path: '/file', component: FileDemo },
        { path: '/chart', component: ChartDemo },
        { path: '/misc', component: MiscDemo },
        { path: '/icons', component: IconsDemo },
        { path: '/widgets', component: Widgets },
        { path: '/grid', component: GridDemo },
        { path: '/spacing', component: SpacingDemo },
        { path: '/elevation', component: ElevationDemo },
        { path: '/typography', component: TypographyDemo },
        { path: '/display', component: DisplayDemo },
        { path: '/flexbox', component: FlexBoxDemo },
        { path: '/text', component: TextDemo },
        { path: '/crud', component: CrudDemo },
        { path: '/calendar', component: CalendarDemo },
        { path: '/invoice', component: Invoice },
        { path: '/help', component: Help },
        { path: '/empty', component: EmptyPage },
        { path: '/documentation', component: Documentation }
    ];

    let menuClick;
    let userMenuClick;

    const onWrapperClick = () => {
        if (!menuClick) {
            setMenuActive(false)
            unblockBodyScroll();

            if (horizontal) {
                setMenuHoverActive(false);
            }
        }

        if (!userMenuClick) {
            setTopbarUserMenuActive(false);
        }

        userMenuClick = false;
        menuClick = false;
    };

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (!horizontal || isMobile()) {
            setMenuActive(prevMenuActive => !prevMenuActive);
        }

        event.preventDefault();
    };

    const blockBodyScroll = useCallback(() => {
        let className = `blocked-scroll${horizontal ? '-horizontal-menu' : ''}`;
        if (document.body.classList) {
            document.body.classList.add(className);
        }
        else {
            document.body.className += ` ${className}`;
        }
    }, [horizontal]);

    const unblockBodyScroll = useCallback(() => {
        let className = `blocked-scroll${horizontal ? '-horizontal-menu' : ''}`;
        if (document.body.classList) {
            document.body.classList.remove(className);
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                `${className}`.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }, [horizontal]);

    const onTopbarUserMenuButtonClick = (event) => {
        userMenuClick = true;
        setTopbarUserMenuActive(prevTopbarUserMenuActive => !prevTopbarUserMenuActive);

        event.preventDefault();
    };

    const onTopbarUserMenuClick = (event) => {
        userMenuClick = true;

        if (event.target.nodeName === 'BUTTON' || event.target.parentNode.nodeName === 'BUTTON') {
            setTopbarUserMenuActive(false)
        }
        event.preventDefault();
    };

    const onRootMenuItemClick = (event) => {
        menuClick = true;
        if (horizontal && isMobile()) {
            setMenuHoverActive(event.isSameIndex ? false : true);
        }
        else {
            setMenuHoverActive(prevMenuHoverActive => !prevMenuHoverActive);
        }
    };

    const onMenuItemClick = (event) => {
        if (event.item && !event.item.items) {
            if (!horizontal || isMobile()) {
                setMenuActive(false);
                unblockBodyScroll();
            }

            setMenuHoverActive(false);
        }
    };

    const onSidebarClick = () => {
        menuClick = true;
    };

    const isMobile = () => {
        return window.innerWidth <= 1024;
    };

    const onTopbarSizeChange = (size) => {
        setTopbarSize(size);
    };

    const onTopbarThemeChange = (color) => {
        setTopbarColor('layout-topbar-' + color);
    };

    const onMenuToHorizontalChange = (mode) => {
        setHorizontal(mode);
    };

    const onMenuThemeChange = (color) => {
        setMenuColor('layout-menu-' + color);
    };

    const onThemeColorChange = (color) => {
        setThemeColor(color);
    };

    const onLayoutColorChange = (color) => {
        setLayoutColor(color)
    };

    const onCompactModeChange = (mode) => {
        setCompactMode(mode);
    };

    useEffect(() => {
        if (menuActive) {
            blockBodyScroll();
        }
        else {
            unblockBodyScroll();
        }
    }, [menuActive, blockBodyScroll, unblockBodyScroll]);

    const layoutContainerClassName = classNames('layout-container', {
        'layout-menu-horizontal': horizontal,
        'layout-menu-active': menuActive,
        'layout-top-small': topbarSize === 'small',
        'layout-top-medium': topbarSize === 'medium',
        'layout-top-large': topbarSize === 'large',
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple,
    }, topbarColor, menuColor);

    return (
        <div className={layoutContainerClassName} onClick={onWrapperClick}>
            <div className="layout-top">
                <AppTopbar topbarUserMenuActive={topbarUserMenuActive} menuActive={menuActive} menuHoverActive={menuHoverActive}
                    onMenuButtonClick={onMenuButtonClick} onTopbarUserMenuButtonClick={onTopbarUserMenuButtonClick}
                    onTopbarUserMenuClick={onTopbarUserMenuClick} model={menu} horizontal={horizontal} onSidebarClick={onSidebarClick}
                    onRootMenuItemClick={onRootMenuItemClick} onMenuItemClick={onMenuItemClick} isMobile={isMobile} />

                <div className="layout-topbar-separator" />

                <AppBreadcrumb />
            </div>

            <div className="layout-content">
                {
                    routers.map((router, index) => {
                        if (router.exact) {
                            return <Route key={`router${index}`} path={router.path} exact component={router.component} />
                        }

                        return <Route key={`router${index}`} path={router.path} component={router.component} />
                    })
                }
            </div>

            <AppConfig topbarSize={topbarSize} onTopbarSizeChange={onTopbarSizeChange}
                topbarColor={topbarColor} onTopbarThemeChange={onTopbarThemeChange}
                horizontal={horizontal} onMenuToHorizontalChange={onMenuToHorizontalChange}
                menuColor={menuColor} onMenuThemeChange={onMenuThemeChange}
                themeColor={themeColor} onThemeColorChange={onThemeColorChange}
                layoutColor={layoutColor} onLayoutColorChange={onLayoutColorChange}
                compactMode={compactMode} onCompactModeChange={onCompactModeChange}
                rippleActive={ripple} onRippleChange={onRippleChange}
                inputStyle={inputStyle} onInputStyleChange={onInputStyleChange} />

            <AppFooter />

            {menuActive && <div className="layout-mask" />}
        </div>
    );

}

export default App;
