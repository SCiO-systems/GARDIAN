import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const AppSubmenu = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onMenuItemClick = (event, item, index) => {
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        if (props.root && props.onRootItemClick) {
            props.onRootItemClick({
                originalEvent: event,
                item: item
            });
        }

        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
            event.preventDefault();
        }

        if (index === activeIndex)
            setActiveIndex(null);
        else
            setActiveIndex(index)

        if (props.onMenuItemClick) {
            props.onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    const onKeyDown = (event, item, index) => {
        if (event.key === 'Enter') {
            onMenuItemClick(event, item, index);
        }
    }

    const onMenuItemMouseEnter = (index) => {
        if (props.root && props.menuActive && props.isHorizontalMenuActive()) {
            setActiveIndex(index)
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.parentMenuItemActive === false) {
    //         return {
    //             activeIndex: null
    //         }
    //     }

    //     return null;
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.horizontal && prevProps.menuActive && !this.props.menuActive) {
    //         this.setState({activeIndex: null});
    //     }
    // }

    const renderLinkContent = (item) => {
        let submenuIcon = item.items && <i className="pi pi-angle-down submenu-icon"></i>;
        let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

        return (
            <React.Fragment>
                <i className={item.icon}></i>
                <span className="menuitem-text">{item.label}</span>
                {submenuIcon}
                {badge}
            </React.Fragment>
        );
    }

    const renderLink = (item, i) => {
        let content = renderLinkContent(item);

        if (item.to) {
            return (
                <NavLink activeClassName="active-menuitem-routerlink" to={item.to}
                    onClick={(e) => onMenuItemClick(e, item, i)} exact role="menuitem"
                    target={item.target} onMouseEnter={(e) => onMenuItemMouseEnter(i)}
                    className={classNames("ripplelink", item.styleClass)}>{content}</NavLink>
            )
        } else {
            return (
                <a className={classNames("ripplelink", item.styleClass)} href={item.url} tabIndex={item.url ? '' : 0} role="menuitem"
                    onClick={(e) => onMenuItemClick(e, item, i)} target={item.target}
                    onMouseEnter={(e) => onMenuItemMouseEnter(i)} onKeyDown={(e) => onKeyDown(e, item, i)}>
                    {content}
                </a>
            );

        }
    }

    var items = props.items && props.items.map((item, i) => {
        let active = activeIndex === i;
        let styleClass = classNames(item.badgeStyleClass, { 'active-menuitem': active });
        let containerClass = classNames('layout-submenu-container', { 'layout-submenu-megamenu-container': item.mega });
        let submenuClass = classNames('layout-submenu', { 'layout-megamenu': item.mega })

        return (
            <li className={styleClass} key={i} role="none">
                {renderLink(item, i)}
                {!props.root && props.mega &&
                    <span className="layout-megamenu-submenu-text">{item.label}</span>}
                {item.items &&
                    <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={active} unmountOnExit>
                        <div className={containerClass} style={{ padding: active ? '' : '0' }}>
                            <AppSubmenu items={item.items} className={submenuClass}
                                onMenuItemClick={props.onMenuItemClick} horizontal={props.horizontal}
                                menuActive={props.menuActive} mega={item.mega}
                                parentMenuItemActive={active}
                                isHorizontalMenuActive={props.isHorizontalMenuActive} />
                        </div>
                    </CSSTransition>
                }
            </li>
        )
    });

    return <ul role="menu" className={props.className}>{items}</ul>;

}

export const AppMenu = (props) => {

    return (
        <div className="layout-menu-container" onClick={props.onSidebarClick}>
            <div className="layout-menu-wrapper">
                <AppSubmenu items={props.model} className="layout-menu" mega={false} root={true}
                    parentMenuItemActive={true}
                    menuActive={props.menuActive} onRootItemClick={props.onRootMenuItemClick}
                    onMenuItemClick={props.onMenuItemClick} horizontal={props.horizontal}
                    isHorizontalMenuActive={props.isHorizontalMenuActive} />
            </div>
        </div>
    )

}
