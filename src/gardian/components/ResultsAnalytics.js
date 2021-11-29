import React, {useState} from "react";
import {Dialog} from "primereact/dialog";

export const Privacy = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    return (
        <>
            <a className="footer-menu border-right" onClick={() => onClick('displayBasic')}> Privacy </a>
            <Dialog className="modal-footer" visible={displayBasic} position={position} style={{ width: '70vw' }}  onHide={() => onHide('displayBasic')}>
                <center><h2>PRIVACY NOTICE</h2></center>
                <div className="privacy-container">
                    <p className="modal-paragraph">GARDIAN is an online portal that provides access to agricultural research data produced by <a className="footer-anchor-link" target={"_blank"}  href={"https://www.cgiar.org/"}> CGIAR </a>
                        Centers and their implementing partners. It is administered by the <a className="footer-anchor-link"  target={"_blank"} href={"https://bigdata.cgiar.org/"} > CGIAR Platform for Big Data in Agriculture </a>
                        (which is co-led by the International Center for Tropical Agriculture and the International Food Policy Research Institute).
                        Access to GARDIAN is provided as a public good in accordance with <a className="footer-anchor-link"  target={"_blank"} href={"https://www.cgiar.org/how-we-work/strategy/"} > CGIAR’s mission </a> to reduce poverty, improve food and nutrition security, and improve natural resources and ecosystem services.</p>
                    <p className="modal-paragraph">The <a className="footer-anchor-link"  target={"_blank"} href={"https://bigdata.cgiar.org/"}> CGIAR Platform for Big Data in Agriculture </a> is committed to user privacy and this notice explains how we manage personally identifiable information collected from you when you use GARDIAN.
                        It also explains our practices regarding personally identifiable information of third parties which may be accessible or discoverable through GARDIAN.</p>
                    <p className="modal-paragraph"> <center> <strong>Use of GARDIAN and its contents is subject to our TERMS OF USE which incorporate this PRIVACY NOTICE by reference. </strong></center> <center> <strong> PLEASE DO NOT ACCESS OR USE GARDIAN IF YOU DO NOT AGREE TO THE TERMS OF USE  OR THIS PRIVACY NOTICE. </strong></center></p>
                </div> <br/><br/>
                <div>
                    <strong>COOKIES AND AUTOMATED TRACKING TOOLS </strong>
                    <p className="modal-paragraph">We use cookies to collect anonymous information and aggregate it to help us better understand how users interact with GARDIAN. Our use of cookies or other automated tracking tools or services does not involve the collection of any personally identifiable information. As an example, we use Google Analytics software to temporarily store and analyze a variety of information about your visit, however, this information cannot be used by us to identify you as an individual. Further information explaining how Google Analytics collects and uses data is available <a className="footer-anchor-link"  target={"_blank"} href={"https://policies.google.com/technologies/partner-sites"}> here. </a> </p>
                    <p className="modal-paragraph"> <em>If you do not wish to have session or persistent cookies placed on your computer, you can disable them at any time from your web browser. If you opt out of cookies, you will still have access to all GARDIAN information and resources, but you may not be able to use cookie-dependent features.</em></p>
                </div><br/>
                <div>
                    <strong>YOUR PERSONALLY IDENTIFIABLE INFORMATION </strong>
                    <p className="modal-paragraph"> We request personally identifiable information in relation to particular functions or services associated with GARDIAN. For example, to subscribe for updates we require your first and last name, email address, and organization name and type. We respect user privacy; accordingly, any personally identifiable information you provide is protected by SSL encryption when it is exchanged with GARDIAN and will only be used for internal purposes in accordance with site-specific policies, or in ways to which you have explicitly consented. This information is password-protected, accessible only by designated staff  who require this information to perform their duties, and is retained only for as long as reasonably needed for the purpose you have consented to or as required by law. We do not market, sell or transfer personally identifiable information to third parties unless required by law.  </p>
                </div><br/>
                <div>
                    <strong> THIRD-PARTY CONTENT </strong>
                    <p className="modal-paragraph"> GARDIAN allows users to access content created by third-parties. The administrators of GARDIAN promote responsible practices regarding privacy, however, no responsibility is assumed for third-party content that is discoverable or accessible through GARDIAN, including but not limited to compliance with institutional, legal or regulatory requirements concerning privacy protection or the management of personally identifiable information. Further information is available in our DISCLAIMER NOTICE. </p>
                </div><br/>
                <div>
                    <strong> THIRD-PARTY SITES OR SERVICES </strong>
                    <p className="modal-paragraph"> GARDIAN may link to third-party sites or services. Since we do not control them we are not responsible for their privacy practices and you use such sites and services entirely at your own risk. Further information is available in our DISCLAIMER NOTICE. We encourage you to review the privacy policies of third-party sites or services if you are sharing any personally identifiable information with them. </p>
                </div>
            </Dialog>
        </>

    );
}
