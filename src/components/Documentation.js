import React, { Component } from 'react';
import './Documentation.css';
import {CodeHighlight} from "./CodeHighlight";

export class Documentation extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="ui-g">
                <div className="ui-g-12">
                    <div className="card docs">
                        <div className="card-title">Current Version</div>
                        <p>React 16.11.0 and PrimeReact 3.4.x</p>

                        <div className="card-title">Getting Started</div>
                        <p>Sapphire is an application template for React based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
<pre>
{
`npm install

# OR

yarn
`}
</pre>

                        <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.
                        That is it, you may now start with the development of your application using the Sapphire template.</p>

<pre>
{
`npm start

# OR

yarn start
`}
</pre>

                        <div className="card-title">React Scripts</div>
                        <p>Following commands are derived from create-app-app.</p>
<pre>
{
`"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</pre>
                        <div className="card-title">Dependencies</div>
                        <p>Dependencies of Sapphire are listed below and needs to be added to package.json. Sapphire has no direct dependency, even PrimeReact components are an optional dependency.</p>

                        <pre>
{
`"primereact": "^3.4.0",              //optional: PrimeReact components
"primeicons": "^2.0.0",              //optional: PrimeReact component icons
"primeflex": "1.0.0",                //optional: Samples
"react-router-dom": "^4.2.2"         //optional: Router
`
}
</pre>
                        <div className="card-title">Structure</div>
                        <p>Sapphire consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                        <div className="card-title">Template</div>
                        <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is render method of the
                            App.js component that implements the logic such as menu state, layout modes and so on.
                        </p>

<CodeHighlight>
{
`
render() {
    const layoutContainerClassName = classNames('layout-container', {
        'layout-menu-horizontal': this.state.horizontal,
        'layout-menu-active': this.state.menuActive && !this.isHorizontalMenuActive(),
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
                           onRootMenuItemClick={this.onRootMenuItemClick} onMenuItemClick={this.onMenuItemClick} isHorizontalMenuActive={this.isHorizontalMenuActive}/>

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

            <AppConfig topbarColor={this.state.topbarColor} horizontal={this.state.horizontal}
                    layoutColor={this.state.layoutColor} menuColor={this.state.menuColor} themeColor={this.state.themeColor}
                    topbarSize={this.state.topbarSize} changeTopbarTheme={this.changeTopbarTheme}
                    changeMenuToHorizontal={this.changeMenuToHorizontal} changeMenuTheme={this.changeMenuTheme} changeComponentTheme={this.changeComponentTheme}
                    changePrimaryColor={this.changePrimaryColor} changeTopbarSize={this.changeTopbarSize} onToggleBlockBodyScroll={this.onToggleBlockBodyScroll}/>

            {(!this.isHorizontalMenuActive() && this.state.menuActive) && <div className="layout-mask"/>}

            <AppFooter />

        </div>
    );
}

`
}
</CodeHighlight>

                        <div className="card-title">Menu</div>
                        <p>Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API. In order to define the menuitems,
                            navigate to createMenu() method App.js file and define your own model as a nested structure. Here is the menu component from the demo application.
                            Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style={{overflow: 'auto', height: '400px'}}>
<CodeHighlight lang="js">
{
`
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
    
`}
</CodeHighlight>
</div>

                        <div className="card-title">Theme and Layout SASS</div>
                        <p>Sapphire provides 18 PrimeReact themes out of the box, setup of a theme simple including the css of theme to your page that are located inside assets/theme folder.</p>

                        <ul>
                            <li>theme-amber</li>
                            <li>theme-blue</li>
                            <li>theme-bluegrey</li>
                            <li>theme-brown</li>
                            <li>theme-cyan</li>
                            <li>theme-deeporange</li>
                            <li>theme-deeppurple</li>
                            <li>theme-gray</li>
                            <li>theme-green</li>
                            <li>theme-indigo</li>
                            <li>theme-lightblue</li>
                            <li>theme-lightgreen</li>
                            <li>theme-lime</li>
                            <li>theme-orange</li>
                            <li>theme-pink</li>
                            <li>theme-purple</li>
                            <li>theme-teal</li>
                            <li>theme-yellow</li>
                        </ul>

                        <p>A custom theme can be developed by the following steps.</p>
                        <ul>
                            <li>Choose a custom theme name such as theme-myown.</li>
                            <li>Create a file named theme-myown.scss under <i>public/assets/theme folder</i>.</li>
                            <li>Define the variables listed below and import the <i>../sass/theme/_theme.scss</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Include the generated theme.css to your application.</li>
                        </ul>

                        <p>Here are the variables required to create a theme.</p>

<CodeHighlight lang="css">
{
`
$primaryColor:#1E88E5;
$primaryDarkColor:#1565C0;
$primaryLightColor:#42A5F5;
$primaryLightestColor:#E3F2FD;
$primaryTextColor:#ffffff;
$accentColor:#FFB300;
$accentDarkColor: #FF8F00;
$accentLightColor: #FFCA28;
$accentTextColor: #212121;

@import '../sass/theme/_theme';

`
}
</CodeHighlight>

                        <p>You may import the scss directly in your App.js if you prefer webpack to include the theme however if you'd like to do it manually, an example sass command to compile the css would be;</p>

<pre>
sass public/assets/theme/theme-myown.scss:public/assets/theme/theme-myown.css
</pre>

                        <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                        so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<pre>
sass --watch public/assets/theme/theme-myown.scss:public/assets/theme/theme-myown.css  --sourcemap=none
</pre>

<div className="card-title">TopBar</div>

                        <p>TopBar comes in 3 sizes; large, medium and small. A specific style class with the layout-top-* prefix is defined at the main container element in order to apply a size. Below are the all 3 options;</p>
<pre>
{
`<div className="layout-container layout-top-small">
<div className="layout-container layout-top-medium">
<div className="layout-container layout-top-large">
`
}
</pre>

                        <p>Similarly TopBar style theme is also defined at the main container element, template below uses the default blue topbar.</p>
<pre>
&lt;div className="layout-container layout-topbar-blue"&gt;
</pre>

                        <p>Full list of topbar options are the following, note that <i>layout-topbar-</i> prefix needs to be added to apply the style such as <b>layout-topbar-midnight</b>.</p>

                        <ul>
                            <li>aerial</li>
                            <li>apricot</li>
                            <li>aquarelle</li>
                            <li>architecture</li>
                            <li>ash</li>
                            <li>balloon</li>
                            <li>beach</li>
                            <li>beyoglu</li>
                            <li>bloom</li>
                            <li>blue</li>
                            <li>canvas</li>
                            <li>circuit</li>
                            <li>city</li>
                            <li>classic</li>
                            <li>coffee</li>
                            <li>condo</li>
                            <li>connectionsone</li>
                            <li>connectionstwo</li>
                            <li>crystal</li>
                            <li>dark</li>
                            <li>dawn</li>
                            <li>desert</li>
                            <li>destination</li>
                            <li>disco</li>
                            <li>dock</li>
                            <li>downtown</li>
                            <li>emptiness</li>
                            <li>exposure</li>
                            <li>faraway</li>
                            <li>flamingo</li>
                            <li>flight</li>
                            <li>fluid</li>
                            <li>forest</li>
                            <li>fruity</li>
                            <li>grape</li>
                            <li>hallway</li>
                            <li>harvey</li>
                            <li>hazy</li>
                            <li>highline</li>
                            <li>island</li>
                            <li>jet</li>
                            <li>kashmir</li>
                            <li>light</li>
                            <li>lights</li>
                            <li>lille</li>
                            <li>louisville</li>
                            <li>marley</li>
                            <li>materialone</li>
                            <li>materialtwo</li>
                            <li>midnight</li>
                            <li>mountain</li>
                            <li>mural</li>
                            <li>night</li>
                            <li>norge</li>
                            <li>northern</li>
                            <li>olympic</li>
                            <li>orange</li>
                            <li>palm</li>
                            <li>perfection</li>
                            <li>pine</li>
                            <li>polygons</li>
                            <li>reflection</li>
                            <li>revolt</li>
                            <li>river</li>
                            <li>road</li>
                            <li>rose</li>
                            <li>royal</li>
                            <li>sandiego</li>
                            <li>seagull</li>
                            <li>sky</li>
                            <li>skyline</li>
                            <li>skyscaper</li>
                            <li>snow</li>
                            <li>splash</li>
                            <li>spray</li>
                            <li>station</li>
                            <li>sunset</li>
                            <li>symmetry</li>
                            <li>timelapse</li>
                            <li>tinfoil</li>
                            <li>tractor</li>
                            <li>tropical</li>
                            <li>urban</li>
                            <li>vanusa</li>
                            <li>volcano</li>
                            <li>wall</li>
                            <li>waterfall</li>
                            <li>waves</li>
                            <li>wing</li>
                        </ul>

                        <p>Creating your own topbar requires a couple of steps.</p>
                        <ul>
                            <li>Choose a topbar name such as mytopbar.</li>
                            <li>Create an empty file named _topbar_mytopbar.scss inside public/assets/sass/layout/topbar/themes folder.</li>
                            <li>Add your file to the import section of the _topbar.scss in the same folder.</li>
                            <li>Define the variables listed below and import the <i>../_topbar_theme</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Apply layout-topbar-mytopbar class to the main wrapper element of in app.main.component template.</li>
                        </ul>

<pre>
&lt;div class="layout-container layout-topbar-mytopbar"&gt;
</pre>

                        <p>Here are the variables required to create a gradient based topbar.</p>

<CodeHighlight lang="css">
{
`
.layout-topbar-mytopbar {
    $topbarLeftBgColor:#F1719A;
    $topbarRightBgColor:#FE9473;
    $topbarSearchInputColor:#FDD5CF;
    $topbarSearchFocusedInputColor:#ffffff;
    $topbarUserIconHoverBorderColor:#ffffff;
    $topbarSeparatorColor:#ffffff;

    //vertical menubutton
    $menuButtonBgColor:#fafafa;
    $menuButtonIconColor:#F1719A;
    $menuButtonHoverBgColor:#e0e0e0;
    $menuButtonHoverIconColor:#F1719A;
    $menuButtonActiveBgColor:rgba(169,53,89,.6);
    $menuButtonActiveIconColor:#ffffff;

    //horizontal menu
    $horizontalMenuitemTextColor:#ffffff;
    $horizontalMenuitemIconColor:#ffffff;
    $horizontalMenuitemActiveBorderColor:#ffffff;
    $horizontalMenuitemHoverBorderColor:#FDD5CF;

    //breadcrumb
    $breadcrumbIconColor:#ffffff;
    $breadcrumbTextColor:#ffffff;
    $breadcrumbLinkColor:#80CBC4;
    
    @import '../_topbar_theme';
}

`
}
</CodeHighlight>

                        <p>If you prefer an image for the background, use the template below.</p>

<CodeHighlight lang="css">
{
`
.layout-topbar-mytopbar {
    $topbarBgImage:'reflection-topbar.jpg';
    $topbarSearchInputColor:#BFDEE2;
    $topbarSearchFocusedInputColor:#ffffff;
    $topbarUserIconHoverBorderColor:#ffffff;
    $topbarSeparatorColor:#ffffff;

    //vertical menubutton
    $menuButtonBgColor:#fafafa;
    $menuButtonIconColor:#1C1F20;
    $menuButtonHoverBgColor:#e0e0e0;
    $menuButtonHoverIconColor:#1C1F20;
    $menuButtonActiveBgColor:rgba(0,172,193,.6);
    $menuButtonActiveIconColor:#ffffff;

    //horizontal menu
    $horizontalMenuitemTextColor:#ffffff;
    $horizontalMenuitemIconColor:#ffffff;
    $horizontalMenuitemActiveBorderColor:#ffffff;
    $horizontalMenuitemHoverBorderColor:#BFDEE2;

    //breadcrumb
    $breadcrumbIconColor:#ffffff;
    $breadcrumbTextColor:#ffffff;
    $breadcrumbLinkColor:#4DD0E1;

    @import '../_topbar_theme';
}
`
}
</CodeHighlight>

                        <div className="card-title">Menu Themes</div>
                        <p>Menu themes apply to the vertical menu, submenus of horizontal menu and the profile menu. Menu style used across the template is defined at the main container element, template below uses the default light menus.</p>
<pre>
&lt;div className="layout-container layout-menu-light"&gt;
</pre>

                        <p>Full list of menu themes are the following, note that <i>layout-menu-</i> prefix needs to be added to apply the style such as <b>layout-menu-dark</b>.</p>

                        <ul>
                            <li>aerial</li>
                            <li>apricot</li>
                            <li>aquarelle</li>
                            <li>architecture</li>
                            <li>ash</li>
                            <li>balloon</li>
                            <li>beach</li>
                            <li>beyoglu</li>
                            <li>bloom</li>
                            <li>blue</li>
                            <li>canvas</li>
                            <li>circuit</li>
                            <li>city</li>
                            <li>classic</li>
                            <li>coffee</li>
                            <li>condo</li>
                            <li>connectionsone</li>
                            <li>connectionstwo</li>
                            <li>crystal</li>
                            <li>dark</li>
                            <li>dawn</li>
                            <li>desert</li>
                            <li>destination</li>
                            <li>disco</li>
                            <li>dock</li>
                            <li>downtown</li>
                            <li>emptiness</li>
                            <li>exposure</li>
                            <li>faraway</li>
                            <li>flamingo</li>
                            <li>flight</li>
                            <li>fluid</li>
                            <li>forest</li>
                            <li>fruity</li>
                            <li>grape</li>
                            <li>hallway</li>
                            <li>harvey</li>
                            <li>hazy</li>
                            <li>highline</li>
                            <li>island</li>
                            <li>jet</li>
                            <li>kashmir</li>
                            <li>light</li>
                            <li>lights</li>
                            <li>lille</li>
                            <li>louisville</li>
                            <li>marley</li>
                            <li>materialone</li>
                            <li>materialtwo</li>
                            <li>midnight</li>
                            <li>mountain</li>
                            <li>mural</li>
                            <li>night</li>
                            <li>norge</li>
                            <li>northern</li>
                            <li>olympic</li>
                            <li>orange</li>
                            <li>palm</li>
                            <li>perfection</li>
                            <li>pine</li>
                            <li>polygons</li>
                            <li>reflection</li>
                            <li>revolt</li>
                            <li>river</li>
                            <li>road</li>
                            <li>rose</li>
                            <li>royal</li>
                            <li>sandiego</li>
                            <li>seagull</li>
                            <li>sky</li>
                            <li>skyline</li>
                            <li>skyscaper</li>
                            <li>snow</li>
                            <li>splash</li>
                            <li>spray</li>
                            <li>station</li>
                            <li>sunset</li>
                            <li>symmetry</li>
                            <li>timelapse</li>
                            <li>tinfoil</li>
                            <li>tractor</li>
                            <li>tropical</li>
                            <li>urban</li>
                            <li>vanusa</li>
                            <li>volcano</li>
                            <li>wall</li>
                            <li>waterfall</li>
                            <li>waves</li>
                            <li>wing</li>
                        </ul>

                        <p>Creating your own menu theme requires a couple of steps.</p>
                        <ul>
                            <li>Choose a menu name such as mymenu.</li>
                            <li>Create an empty file named _menu_mymenu.scss inside public/assets/sass/layout/menu/themes folder.</li>
                            <li>Add your file to the import section of the _menu.scss in the same folder.</li>
                            <li>Define the variables listed below and import the <i>../_menu_theme</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Add layout-menu-mymenu to the main wrapper element of in app.main.component template.</li>
                        </ul>

<pre>
&lt;div className="layout-container layout-menu-mymenu"&gt;
</pre>

                        <p>Here are the variables required to create a gradient based topbar.</p>

<CodeHighlight lang="css">
{
`
.layout-menu-mymenu {
    $menuTopBgColor:#457fca;
    $menuBottomBgColor:#5691c8;
    $menuitemTextColor:#ffffff;
    $menuitemIconColor:#ffffff;
    $menuitemHoverBgColor:#578bcf;
    $menuitemHoverTextColor:#ffffff;
    $menuitemHoverIconColor:#ffffff;
    $menuitemActiveTextColor:#ffc107;
    $menuitemActiveIconColor:#ffc107;
    $verticalActiveRootMenuitemBgColor:#ffffff; 
    $verticalActiveRootMenuitemTextColor:#457fca;   
    $verticalActiveRootMenuitemIconColor:#457fca;
    $verticalSubmenuBgColor:#6a98d4;

    @import '../_menu_theme';
}
`
}
</CodeHighlight>

                        <p>If you prefer an image for the background, use the template below.</p>

<CodeHighlight lang="css">
{
`
.layout-menu-mymenu {
    $menuBgImage:'architecture-menu.jpg';
    $menuitemTextColor:#ffffff;
    $menuitemIconColor:#ffffff;
    $menuitemHoverBgColor:rgba(255,255,255,0.32);
    $menuitemHoverTextColor:#ffffff;
    $menuitemHoverIconColor:#ffffff;
    $menuitemActiveTextColor:#B39DDB;
    $menuitemActiveIconColor:#B39DDB;
    $verticalActiveRootMenuitemBgColor:#673AB7; 
    $verticalActiveRootMenuitemTextColor:#ffffff;   
    $verticalActiveRootMenuitemIconColor:#ffffff;
    $verticalSubmenuBgColor:rgba(0,0,0,0.2);

    @import '../_menu_theme';
}
`
}
</CodeHighlight>

                        <div className="card-title">Menu Highlight Color</div>
                        <p>When light and dark menus are used, a highlight color needs to be defined to show the selected menuitem whereas in other menu themes, the highlight color is defined by the menu theme itself.
                            This color scheme is specified by the layout file such as layout-blue.scss which is still a mandatory file to be included regardless of the menu type as it defines the structure for the layout itself.</p>

                        <p>Full list of menu highlight themes are the following.</p>
                        <ul>
                            <li>amber</li>
                            <li>blue</li>
                            <li>bluegray</li>
                            <li>brown</li>
                            <li>cyan</li>
                            <li>deeporange</li>
                            <li>deeppurple</li>
                            <li>gray</li>
                            <li>green</li>
                            <li>indigo</li>
                            <li>lightblue</li>
                            <li>lightgreen</li>
                            <li>lime</li>
                            <li>orange</li>
                            <li>pink</li>
                            <li>purple</li>
                            <li>teal</li>
                            <li>yellow</li>
                        </ul>

                        <p>Creating your own menu highlight theme requires a couple of steps.</p>
                        <ul>
                            <li>Choose a layout name such as myown.</li>
                            <li>Create an empty file named layout-myown.scss inside public/assets/layout/css folder.</li>
                            <li>Define the variables listed below and import the <i>../../sass/layout/_layout</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Import the layout css file in your application.</li>
                        </ul>

<CodeHighlight lang="css">
{
`
$primaryColor:#607D8B;
$primaryTextColor:#ffffff;
$accentColor:#FFC107;
$accentTextColor:#212121;

@import '../../sass/layout/_layout';
`
}
</CodeHighlight>

                        <div className="card-title">Common SASS Variables</div>
                        <p>In case you'd like to customize the shared variables, use the variables files under sass/variables folder.</p>

<h3>sass/_common.scss</h3>
<CodeHighlight lang="css">
{
`
//general
$fontSize:14px;
$fontFamily:"Roboto","Helvetica Neue",sans-serif;
$textColor:#212121;
$textSecondaryColor:#616161;
$borderRadius:2px;
$letterSpacing:.25px;
$transitionDuration:.2s;

//icons
$iconWidth:20px;
$iconHeight:20px;
$iconFontSize:20px;

//list item hover
$hoverBgColor:#e8e8e8;
$hoverTextColor:#000000;

$dividerColor:#dbdbdb;
$dividerLightColor:#f8f8f8;
`
}
</CodeHighlight>

<h3>sass/variables/_layout.scss</h3>
<CodeHighlight lang="css">
{
`
@import './common';

$bodyBgColor:#f4f4f7;
$bodySidePadding:100px;
$mobileBreakpoint:1024px;
$footerBgColor:#212121;
$footerTextColor:#9f9f9f;
$menuitemBorderRadius:6px;
$maskBgColor:#252529;

//horizontal menu
$horizontalOverlaySubmenuShadow:0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
`
}
</CodeHighlight>

<h3>sass/variables/_theme.scss</h3>
<CodeHighlight lang="css">
{
`
@import './common';

$headerPadding:.714em 1em;
$headerTextColor:#ffffff;
$headerFontWeight:500;

$contentPadding:.857em 1em;
$contentBorderColor:#d8d8d8;
$contentBgColor:#ffffff;

$inputBorderColor:#bdbdbd;
$inputInvalidBorderColor:#e62a10;
$inputBgColor:#ffffff;
$inputErrorTextColor:#e62a10;
$inputHeaderPadding:.714em 1em;
$inputBorderErrorColor:#e62a10;
$inputFieldLabelTextColor:#999999;
$inputFieldBoxBgColor:#f7f7f7;
$inputFieldFillBgColor:#f7f7f7;
$inputAutoFillBorderColor:#bdbdbd;
$textboxBgColor:#f7f7f7;

//inputs with lists
$inputListPadding: .5em 0;

//groups
$inputGroupBorderColor:#bdbdbd;
$inputGroupBgColor:transparent;
$inputGroupTextColor:#757575;
$inputGroupIconColor:#bdbdbd;
$inputGroupAddonMinWidth:2*$fontSize;
$checkboxWidth:18px;
$checkboxHeight:18px;
$inputGroupPadding:2px 2px 1px 2px;
$inputGroupIconFontSize: 1.5em;

//panels
$accordionHeaderBgColor:#eeeeee;
$accordionHeaderTextColor:$textColor;
$accordionHeaderHoverBgColor:#d9d9d9;
$accordionHeaderHoverTextColor:$textColor;

$panelContentLineHeight:1.5;
$panelLightHeaderBgColor:#eeeeee;
$panelLightHeaderTextColor:$textColor;
$panelLightHeaderIconHoverBgColor:#d9d9d9;
$panelDarkHeaderBgColor:#212121;
$panelDarkHeaderTextColor:#ffffff;
$panelDarkHeaderIconHoverBgColor:#424242;

$buttonTextColor:#ffffff;

$listItemPadding:.571em .857em;

$radioButtonBorderColor:#757575;
$checkboxBorderColor:#757575;

$errorMessageFontSize:11px;
$errorMessageIconFontSize:13px;

//data
$dataTableHeaderPadding:.857em;
$dataTableCellPadding:.714em .857em;
$dataTableRowBgColorEven:#f4f4f4;
$paginatorPadding:.714em 1em;

//menus
$menuitemPadding:.571em .857em;
$menuListPadding: .5em 0;   
}
`
}
</CodeHighlight>

                        <div className="card-title">Menu Modes</div>
                        <p>Menu has 2 modes; horizontal and overlay. Layout container element in App.js is used to define which mode to use by adding specific classes. List
                        below indicates the style classes for each mode.</p>

                        <ul>
                            <li>Horizontal: <b>"layout-container layout-menu-horizontal"</b></li>
                            <li>Overlay: <b>"layout-container"</b></li>
                        </ul>

                        <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes.
                            Sample application has an example implementation of such use case. Refer to App.js for an example..</p>

                        <p>Result will be reflected at application breadcrumb component such as "Home Icon" -> "Admin" -> "Control Panel".</p>

                        <div className="card-title">PrimeFlex Grid Syste</div>
                        <p>Sapphire uses PrimeFlex Grid System throughout the samples, although any Grid library can be used we suggest using PrimeFlex as your grid system as it is well tested and supported by PrimeReact.
                            PrimeFlex is available at npm and defined at package.json of Ultima so that it gets installed by default.</p>

                        <div className="card-title">Customizing Styles</div>
                        <p>It is suggested to add your customizations in the following sass files under the overrides folder instead of adding them to the
                            scss files under sass folder to avoid maintenance issues after an update.</p>

                        <ul>
                            <li><b>_layout_variables</b>: Variables of the layout.</li>
                            <li><b>_layout_styles</b>: Styles for the layout.</li>
                            <li><b>_theme_variables</b>: Variables of the theme.</li>
                            <li><b>_theme_styles</b>: Styles for the theme.</li>
                        </ul>

						<div className="card-title">Migration Guide</div>

						<p>1.0.0 to 1.0.1</p>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

                    </div>
                </div>
            </div>
        )
    }
}
