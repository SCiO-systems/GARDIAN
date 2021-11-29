import React, {useState} from "react";
import {TabPanel, TabView} from "primereact/tabview";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {ResultsAnalytics} from "../components/ResultsAnalytics";
import {Menu} from "primereact/menu";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Divider} from "primereact/divider";


export const Tools = () => {


    return (
        <>
            <div>
                <div className="fair-layout-content">

                    <div className="p-grid">
                        <div className="p-col">
                            <div className="card analytics-card">
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6" style={{paddingRight:"24px",paddingLeft:"24px"}}>
                                        <h2 className="h2-title">GARDIAN TOOLS</h2>
                                        <div style={{paddingTop:"10px"}}>
                                            <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                One of the grand challenges of data-intensive science is to facilitate knowledge
                                                discovery by assisting humans and machines in their discovery of, access to, integration and analysis of, task-appropriate scientific
                                                data and their associated algorithms and workflows.
                                            </p>

                                            <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                The <a target="_blank" href="https://www.force11.org/group/fairgroup/fairprinciples">FAIR Data Principles</a> is a set of guiding
                                                principles to make data Findable, Accessible, Interoperable, and Reusable. However, those principles are not orthogonal and have not been
                                                designed for automated machine-based evaluation. To this end, we have adopted the Netherlands Institute for Permanent Access to Digital
                                                Research Resources (DANS) <a target="_blank" href="https://planeurope.files.wordpress.com/2015/03/doorn-fair-interoperability-poznan-plan-e-april-2017.pdf">metrics
                                                for FAIR compliance</a>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-col" style={{paddingRight:"24px",paddingLeft:"24px"}}>
                                        <h2 className="h2-title">RELEVANT STANDARDS</h2>
                                        <div style={{paddingTop:"10px",textAlign:"left",fontSize:"18px"}}>
                                            <div>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://github.com/AgriculturalSemantics/cg-core">CG Core metadata schema</a>
                                                <p style={{fontSize:"16px", textAlign:"justify", marginTop:"10px"}}>
                                                    The CG Core metadata schema is a minimum set of metadata elements, closely aligned with Dublin Core. CG Core facilitates data discovery,
                                                    meta-searching and indexing across CGIAR repositories and inter-linking across related resources (e.g. data with publications). It is openly available with
                                                    a <a href="https://agriculturalsemantics.github.io/cg-core/cgcore.html"  target="_blank">reference guide</a> to help users understand and apply it.
                                                </p>
                                            </div>

                                            <div style={{paddingTop:"15px"}}>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://bigdata.cgiar.org/resources/agronomy-ontology/">Agronomy Ontology (AgrO)</a>
                                                <p style={{fontSize:"16px", textAlign:"justify", marginTop:"10px"}}>
                                                    AgrO includes terms from the agronomy domain that are semantically organized and can facilitate the collection, storage and use of agronomic data. It enables
                                                    easy interpretation, aggregation, and reuse of the data by humans and machines alike.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-grid">
                        <div className="p-col">
                            <div className="card analytics-card">
                                <div className="p-grid">
                                    <div className="p-col">
                                        {/*<h2 className="h2-title">GARDIAN TOOLS</h2>*/}
                                        <div style={{paddingTop:"10px"}}>

                                            <TabView className="tableview-tab">
                                                <TabPanel leftIcon="fad fa-table" header="DATA COLLECTION">


                                                    {/*------------------- AGROFIMS */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-80px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images//forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/AgroFIMS-logo-500.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>AgroFIMS</h4>
                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The Agronomy Field Information Management System (AgroFIMS) enables the creation of field books for digital data collection,
                                                                    using an ontology-based set of variables, units and protocols, hence generating FAIR data. AgroFIMS is organized around modules
                                                                    that represent the typical cycle of operations in agronomic trial management, and includes algorithms for statistical analysis of the collected data.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    AgroFIMS allows users to create fieldbooks to collect agronomic data that is already tied to a metadata standard
                                                                    (the <a href="https://github.com/AgriculturalSemantics/cg-core" target="_blank">CG Core Metadata Schema</a>,
                                                                    aligned with the standard Dublin Core), and semantic standards like
                                                                    the <a href="https://bigdata.cgiar.org/resources/agronomy-ontology/" target="_blank">Agronomy Ontology (AgrO)</a>,
                                                                    generating data that is Findable, Accessible,
                                                                    Interoperable, and Reusable (FAIR) at collection. AgroFIMS therefore standardizes data collection and description for easy aggregation and
                                                                    inter-linking across disparate datasets. The fieldbooks you create can be exported to the
                                                                    Android-based <a href="https://www.kddart.org/kdsmart.html" target="_blank">KDSmart</a> data collection application,
                                                                    and collected data imported back to AgroFIMS for statistical analysis and reports.
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>AgroFIMS is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*------------------- AGROFIMS+ */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-80px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images/forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/AgroFIMSplus-logo-500.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>AgroFIMS+</h4>


                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    On top of AgroFIMS features, AgroFIMS+ allows the collaborative creation and management of agronomic survey questionnaires.
                                                                    It incorporates features for defining and using question groups as templates, thus facilitating and speeding up the questionnaire creation process.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The AgroFIMS+ workflow facilitates the semi-automatic annotation of question segments included in the questionnaire with standardized terms from a
                                                                    broad set of metadata schemas and ontologies. It furthermore allows users to define, reuse and make available to other users their own controlled term
                                                                    sets for questionnaire annotation.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    AgroFIMS+ also incorporates text analysis features that allows the definition of text-level similarities between question and learn from user feedback.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The tool is fully compliant with the <a href="https://xlsform.org/en/" target="_blank">XLSForm specification</a> and thus allows the exporting of questionnaires
                                                                    in formats that can be used with any compliant application like the <a href="https://opendatakit.org/" target="_blank">Open Data Kit (ODK)</a> suite. Additionally,
                                                                    its integration with FAIRscribe allows the easy upload of your “born FAIR” data to <a href="https://dataverse.org/" target="_blank">Dataverse</a> and/or <a href="https://ckan.org/" target="_blank">CKAN</a> repository
                                                                    platforms with <a href="https://www.dublincore.org/specifications/dublin-core/" target="_blank">Dublin Core</a> or <a href="https://github.com/AgriculturalSemantics/cg-core" target="_blank">CG Core</a> compliant metadata schemas.
                                                                </p>

                                                                <hr></hr>


                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>AgroFIMS+ is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>



                                                </TabPanel>



                                                <TabPanel leftIcon="fad fa-database" header="DATA CURATION">


                                                    {/*------------------- FIARscribe */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-80px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images/forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/FAIRscribe.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>FAIRscribe</h4>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    FAIRscribe implements a data FAIRification workflow for publishing scientific outputs (publications and datasets of different nature and scope), thus
                                                                    leveraging FAIR Data Principles from the beginning of the data management lifecycle.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    It builds on top of an extensive descriptive model compatible with semantic standards
                                                                    like <a href="https://www.dublincore.org/specifications/dublin-core/" target="_blank">Dublin Core</a> and <a href="https://github.com/AgriculturalSemantics/cg-core" target="_blank">CG Core</a>,
                                                                    supporting the definition of detailed metadata for CGIAR outputs. Its collaboration features allow consistent quality control and provenance monitoring throughout the metadata creation process.

                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    Finally, FAIRscribe incorporates intuitive upload mechanisms of the processed data and their metadata description
                                                                    to <a href="https://dataverse.org/" target="_blank">Dataverse</a> and <a href="https://ckan.org/" target="_blank">CKAN</a> repository platforms, appropriately interpreting the provided metadata
                                                                    to the schemas supported by each platform.
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>FAIRscribe is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*------------------- VMapper+ */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-40px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images/forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{width:"100%", paddingLeft:"16%"}}>
                                                                    <center>
                                                                        <span style={{fontSize:"46px", fontWeight:"600"}}>VMapper+</span>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>VMapper+</h4>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    VMapper+ is an annotation service for tabular data that allows the association of each data column with entities defined in controlled knowledge organization
                                                                    systems (KOS). Entities that can be used for the annotation include <a href="http://research.agmip.org/display/dev/ICASA+Master+Variable+List" target="_blank">ICASA variables</a>,
                                                                    classes defined by a set of approximately 30 ontologies available via
                                                                    the <a href="https://www.ebi.ac.uk/ols/index" target="_blank">Ontology Lookup Service (OLS)</a> of
                                                                    the <a href="https://www.ebi.ac.uk/" target="_blank">European Bioinformatics Institute (EMBL-EBI)</a>, as well as custom entities defined by the user.
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-8">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>VMapper+ is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-4">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-docker fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*------------------- PII Engine */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-40px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images/forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{width:"100%", paddingLeft:"16%"}}>
                                                                    <center>
                                                                        <span style={{fontSize:"46px", fontWeight:"600"}}>PII Engine</span>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>PII Engine</h4>
                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    Personally Identifiable Information (PII) is any information that can be used to uniquely identify, contact or locate an individual, or can be used
                                                                    with other sources to uniquely identify a person. It consists of a broad range of information, including names, addresses, geolocation, and much more.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    As CGIAR research data are routinely collected in-field and, furthermore, carry geolocation information often at the parcel levels, there is inevitably
                                                                    a large probability that the originally collected data carry PII in different modalities and levels.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    To allow publication and exchange of such data, the GARDIAN PII Engine reliably identifies and pinpoints the presence of such information in the datasets
                                                                    and users are appropriately notified on the presence and nature of PII in their data, allowing them to decide how to deal with it before publication.
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>PII Engine is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </TabPanel>

                                                <TabPanel leftIcon="fad fa-analytics" header="DATA ANALYSIS">

                                                    {/*------------------- CGLabs */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-40px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images//forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/CG-LABS-trans.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>CG Labs</h4>
                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The Collaborative GARDIAN Labs (CGLabs) is an open collaborative data science platform that allows researchers to work together on the same
                                                                    data science project using datasets securely transferred from GARDIAN and other trusted sources.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    CGLabs facilitates the discoverability, visualization, and analysis of datasets and collaborative analytics using R and Python
                                                                    computer programming languages. CGLabs establishes a secure transfer and storage of computer program codes and data files
                                                                    through <a href="https://www.globus.org/" target="_blank">Globus</a>. It builds
                                                                    on industry standards such as the Jupyter ecosystem (<a href="https://jupyter.org/" target="_blank">JupyterLab</a>, <a href="https://jupyter.org/hub" target="_blank">JupyterHub</a>) and
                                                                    can be deployed over different infrastructural settings (on-prem, cloud and hybrid).
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>CG Labs is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*------------------- Geo Toolkit */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-80px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images//forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/GARDIAN-GIS-Toolkit.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>Geo Toolkit</h4>
                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The GARDIAN Geo Toolkit allows the quick and easy setup of a comprehensive geospatial analysis environment over the Jupyter ecosystem
                                                                    powering CGLabs. It is implemented and distributed as a Jupyter Docker Stack image, fully compliant with
                                                                    the <a href="https://jupyter-docker-stacks.readthedocs.io/en/latest/contributing/stacks.html" target="_blank">guidelines of the relevant community</a> for the configuration of such images.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The toolkit incorporates 76 R and 13 Python libraries, handpicked in collaboration with
                                                                    the <a href="https://cgiarcsi.community/" target="_blank">CGIAR Consortium for Spatial Information (CGIAR-CSI)</a>, which allow working with
                                                                    a broad range of geospatial analytics as well as operating over climatic data.
                                                                </p>

                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>CG Labs is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*------------------- Crop Modeling Cloud Toolkit */}

                                                    <div className="card" style={{marginTop:"40px",paddingTop:"0px",paddingLeft:"0px"}}>
                                                        <div className="p-grid">
                                                            <div className="p-col-3" style={{paddingTop:"0px"}} >

                                                                <div style={{marginBottom:"-40px"}}>
                                                                    <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                        <img src="assets/layout/images//forkme_left_orange_ff7600.png" alt="Fork me on GitHub" data-recalc-dims="1"/>
                                                                    </a>
                                                                </div>

                                                                <div style={{paddingLeft:"16%"}}>
                                                                    <img src={'assets/layout/images/GARDIAN-Cloud-Toolkit.png'}  style={{width:"100%"}}/>
                                                                </div>
                                                            </div>
                                                            <div className="p-col-1" style={{paddingTop:"25px"}} >
                                                                <Divider layout="vertical">
                                                                </Divider>
                                                            </div>
                                                            <div className="p-col-8 p-ai-center p-jc-center" style={{paddingTop:"25px",paddingRight:"4%"}} >
                                                                <h4 style={{fontWeight:"600"}}>Crop Modeling Cloud Toolkit</h4>
                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The GARDIAN Crop Modeling Cloud Toolkit facilitate and speeds up crop analytics by providing important relevant computational models as
                                                                    services over a serverless architecture, readily incorporated via simple service calls in any analytics pipeline. Thus, the toolkit eliminates
                                                                    the need of setting up specialized infrastructures and dedicating internal resources for carrying out crop modeling analysis.
                                                                </p>

                                                                <p style={{fontSize:"16px", textAlign:"justify"}}>
                                                                    The current version of the toolkit exposes as services the following tools / models:
                                                                </p>

                                                                <ul style={{fontSize:"16px"}}>
                                                                    <li style={{paddingTop:"5px"}}>< a href="https://www.apsim.info/apsim-model/" target="_blank">Agricultural Production Systems sIMulator (APSIM)</a> <span style={{color:"red"}}>(comming soon)</span></li>
                                                                    <li style={{paddingTop:"15px"}}><a href="https://dssat.net/" target="_blank">Decision Support System for Agrotechnology Transfer (DSSAT)</a> <span style={{color:"red"}}>(comming soon)</span></li>
                                                                    <li style={{paddingTop:"15px"}}><a href="https://rdrr.io/cran/dismo/man/ecocrop.html" target="_blank">ECOCROP Model</a></li>
                                                                    <li style={{paddingTop:"15px"}}><a href="https://reagro.org/methods/explanatory/quefts.html" target="_blank">QUantitative Evaluation of the Fertility of Tropical Soils (QUEFTS)</a></li>
                                                                    <li style={{paddingTop:"15px"}}><a href="https://rdrr.io/rforge/Rwofost/man/wofost.html" target="_blank">WOFOST Crop Growth Simulation Model</a></li>
                                                                </ul>



                                                                <hr></hr>

                                                                <div className="p-grid">
                                                                    <div className="p-col-10">

                                                                        <div className="p-grid">
                                                                            <div  className="p-col-fixed" style={{width:"64px"}}>
                                                                                <a href="https://choosealicense.com/licenses/gpl-3.0/" target={"_blank"}>
                                                                                    <img style={{height:"48px"}} src="assets/layout/images/license_GPL_128.png" />
                                                                                </a>
                                                                            </div>
                                                                            <div  className="p-col" style={{marginTop:"12px"}}>
                                                                                <span style={{fontSize: "18px"}}>CG Labs is under GNU GPLv3 license.</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div className="p-col-2">
                                                                        <a href="https://github.com/AGROFIMS/hagrofims" target="_blank">
                                                                            <i className="fab fa-github fa-4x" style={{color:"#f7941d", float:"right"}}></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </TabPanel>

                                            </TabView>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );

}
