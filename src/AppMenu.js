import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AppSubmenu extends Component {

    static defaultProps = {
        className: null,
        items: null,
        onMenuItemClick: null,
        onRootItemClick: null,
        root: false,
        mega: false,
        horizontal: null,
		menuHoverActive: false,
		parentMenuItemActive: false
    }

    static propTypes = {
        className: PropTypes.string,
        items: PropTypes.array,
        onMenuItemClick: PropTypes.func,
        onRootItemClick: PropTypes.func,
        root: PropTypes.bool,
        mega: PropTypes.bool,
        horizontal: PropTypes.bool,
		menuHoverActive: PropTypes.bool,
		parentMenuItemActive: PropTypes.bool
    }
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    onMenuItemClick(event, item, index) {
        //avoid processing disabled items

        if(item.disabled) {
            event.preventDefault();
            return true;
        }

        if(this.props.root && this.props.onRootItemClick) {
            this.props.onRootItemClick({
                originalEvent: event,
                item: item
            });
        }
                        
        //execute command
        if(item.command) {
            item.command({originalEvent: event, item: item});
        }

        if(index === this.state.activeIndex)
            this.setState({activeIndex: null});    
        else
            this.setState({activeIndex: index});

        if(this.props.onMenuItemClick) {
            this.props.onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

	isTablet() {
		let width = window.innerWidth;
		return width <= 1024 && width > 640;
	}

	isMobile() {
		return window.innerWidth <= 1024;
	}
    
    onMenuItemMouseEnter(index) {
        if(this.props.root && this.props.menuHoverActive && this.props.horizontal && !this.isMobile() && !this.isTablet()) {
            this.setState({activeIndex: index});
        }
    }

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.parentMenuItemActive === false) {
			return {
				activeIndex: null
			}
		}

		return null;
	}
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.horizontal && prevProps.menuHoverActive && !this.props.menuHoverActive) {
            this.setState({activeIndex: null});
        }
    }

	renderLinkContent(item) {
		let submenuIcon = item.items && <i className="material-icons layout-submenu-toggler">keyboard_arrow_down</i>;
		let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

		return (
			<React.Fragment>
				<i className="material-icons">{item.icon}</i>
				<span className="menuitem-text">{item.label}</span>
				{submenuIcon}
				{badge}
			</React.Fragment>
		);
	}

	renderLink(item, i) {
		let content = this.renderLinkContent(item);

		if (item.to) {
			return (
				<NavLink activeClassName="active-menuitem-routerlink" to={item.to} onClick={(e) => this.onMenuItemClick(e, item, i)} exact
						 target={item.target} onMouseEnter={(e) => this.onMenuItemMouseEnter(i)} className={classNames("ripplelink",item.styleClass)}>{content}</NavLink>
			)
		}
		else {
			return (
				<a className={classNames("ripplelink",item.styleClass)} href={item.url} onClick={(e) => this.onMenuItemClick(e, item, i)} target={item.target}
				   onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}>
					{content}
				</a>
			);

		}
	}
    
    render() {
        var items = this.props.items && this.props.items.map((item, i) => {
            let active = this.state.activeIndex === i;
            let styleClass = classNames(item.badgeStyleClass, {'active-menuitem': active});
            let containerClass = classNames('layout-submenu-container', {'layout-submenu-megamenu-container':item.mega});
            let submenuClass = classNames('layout-submenu', {'layout-megamenu': item.mega})

            return (
                <li className={styleClass} key={i}>
                    {this.renderLink(item, i)}
					{!this.props.root && this.props.mega && <span className="layout-megamenu-submenu-text">{item.label}</span>}
					{item.items &&
					<div className={containerClass} style={{padding: active ? '' : '0'}}>
						<AppSubmenu items={item.items} className={submenuClass} onMenuItemClick={this.props.onMenuItemClick} horizontal={this.props.horizontal}
									menuHoverActive={this.props.menuHoverActive} mega={item.mega} parentMenuItemActive={active}/>
					</div>
					}
                </li>
            )
        });
        
        return <ul className={this.props.className}>{items}</ul>;
    }
}

export class AppMenu extends Component {

    static defaultProps = {
        model: null,
		horizontal: null,
		menuHoverActive: null,
        onMenuItemClick: null,
        onRootMenuItemClick: null,
		onSidebarClick: null
    }

    static propTypes = {
        model: PropTypes.array,
        horizontal: PropTypes.bool,
		menuHoverActive: PropTypes.bool,
        onMenuItemClick: PropTypes.func,
        onRootMenuItemClick: PropTypes.func,
		onSidebarClick: PropTypes.func
    }

    render() {
        return <div className="layout-menu-container" onClick={this.props.onSidebarClick}>
				<div className="layout-menu-wrapper">
					<AppSubmenu items={this.props.model} className="layout-menu" mega={false} root={true} parentMenuItemActive={true}
								menuHoverActive={this.props.menuHoverActive} onRootItemClick={this.props.onRootMenuItemClick}
								onMenuItemClick={this.props.onMenuItemClick} horizontal={this.props.horizontal}/>
				</div>
			</div>
    }
}