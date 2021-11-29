import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Card} from "primereact/card";
import MetadataService from "../service/MetadataService";
import {Divider} from "primereact/divider";
import {Helmet} from "react-helmet";
import {FairScoring} from "../components/FairScoring";
import {DynamicDivs} from "../components/DynamicDivs";
import {TagCloud} from "../components/TagCloud";
import {TreeCountries} from "../components/TreeCountries";
import {MapCountries} from "../components/MapCountries";
import {RelevantTable} from "../components/RelevantTable";
import {ModalAccessRights} from "../components/ModalAccessRights";
import {ResourceFilesTable} from "../components/ResourceFilesTable";
import {Button} from "primereact/components/button/Button";

export const Landing = () => {
    const [publication, setPublication] = useState(null);
    const nullQuery = {search_query: null};

     const  id   = useParams();

    useEffect(() => {
        const metadataService = new MetadataService();
        metadataService.getMetadata().then(data => setPublication(data));
    }, []);

    const renderPage = () => {

        return (
            <div className="p-grid p-dir-rev">
                <div className="p-col">
                    <Card className="cards-margin-bottom">
                        <DynamicDivs type="titles" data={publication.title} ></DynamicDivs>
                        <p className="p-type-landing">{publication.resource_type}</p>
                        <Divider align="center" className="divider-landing" ></Divider>
                        <p className="p-publishers-landing">PUBLISHER(S)</p>
                        <p className="p-providers-landing">
                            <DynamicDivs type="providers" data={publication.providers} ></DynamicDivs>
                        </p>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <div className="p-col-8">
                                <h2  className="h2-landing-authors">AUTHORS</h2>
                                <DynamicDivs type="authors" data={publication.authors} ></DynamicDivs>
                            </div>
                            <div className="p-col-4">
                                <h2 className="h2-landing-contact">CONTACT POINT</h2>
                                <DynamicDivs type="contact" data={publication.contact_point} ></DynamicDivs>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <h2 className="h2-summary-landing">SUMMARY</h2>
                        <DynamicDivs type="summaries" data={publication.summary} ></DynamicDivs>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <div className="p-col-6">
                                <h2 className="h2-landing tagcloud">AGROVOC terms</h2>
                                <TagCloud cloudId="agrovoc_landing" filter_query={nullQuery} cloud={publication.agrovoc}></TagCloud>
                            </div>
                            <div  className="p-col-6">
                                <h2 className="h2-landing tagcloud">OTHER KEYWORDS</h2>
                                <TagCloud cloudId="keyword_landing" filter_query={nullQuery} cloud={publication.keywords}></TagCloud>
                           </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <h2 className="h2-landing">GEOGRAPHY</h2>
                        <div className="p-grid">
                            <div className="p-col-6">
                                <MapCountries mapLandingId="map-chart-landing" mapData={publication.country_codes}></MapCountries>
                            </div>
                            <div  className="p-col-6">
                                <TreeCountries treeData={publication.geography}></TreeCountries>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <div className="p-col">
                                <h2  className="h2-landing-project">PROJECT</h2>
                                <p className="p-project-landing">{publication.project_info.project_id}</p>
                                <DynamicDivs type="project" data={publication.project_info.project_name} ></DynamicDivs>
                            </div>
                        </div>
                        <div className="p-grid" style={{paddingTop: "15px"}}>
                            <div className="p-col-8">
                                <h2 className="h2-landing-project">PARTNERS</h2>
                                <DynamicDivs type="partners" data={publication.project_info.project_partners} ></DynamicDivs>
                            </div>
                            <div className="p-col-4">
                                <h2 className="h2-landing-project">FUNDERS</h2>
                                <DynamicDivs type="funders" data={publication.project_info.funding_organisations} ></DynamicDivs>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <h2 className="h2-landing">RESOURCE FILES</h2>
                        <div className="p-grid">
                            <div className="p-col">
                                <div style={{marginRight: "8px",display:" flex", justifyContent: "flex-end"}}>
                                    <Button label="Download Resource" icon="fad fa-folder-download fa-lg" ></Button>
                                </div>
                                <ResourceFilesTable dataResource={publication.resource_files}></ResourceFilesTable>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <h2 className="h2-landing">RELEVANT DATASETS</h2>
                        <div className="p-grid">
                            <div className="p-col">
                                <RelevantTable dataRelevant={publication.related_resources}></RelevantTable>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="p-col-fixed landing-fixed">
                    <Card className="cards-margin-bottom">
                        <h2 className="h2-landing-citation">HOW TO CITE</h2>
                        <div className="p-grid">
                            <div  className="p-col-fixed landing-thumbnail-fixed">
                                <img className="title-thumbnail" alt="thumbnail" src={publication.thumbnail_url} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                            </div>
                            <div  className="p-col">
                                <p className="citation">{publication.citation}</p>
                            </div>
                        </div>
                        <div className="addthis_inline_share_toolbox" style={{paddingTop: "12px"}}></div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <h2 className="h2-landing">ACCESS RIGHTS</h2>
                            <div className="p-col-12">
                                <div className="div-align-left">
                                   <p style={{fontWeight: "bold"}}>License</p>
                                    <DynamicDivs type="license" data={publication.rights}></DynamicDivs>
                                    {

                                        publication.rights.terms_of_use.length === 0 ? console.log() : <ModalAccessRights type="access-modal" data={publication.rights.terms_of_use}></ModalAccessRights>
                                    }
                                    {
                                        publication.rights.rights_holder.length === 0 ? console.log() : <>
                                            <Divider align="center" className="divider-landing" ></Divider>
                                            <p className="p-rights-holder">Rights Holder</p>
                                            <DynamicDivs type="rights_holder" data={publication.rights.rights_holder}></DynamicDivs>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <h2 className="h2-landing">LINKS</h2>
                            <div className="p-col-12">
                                <div className="div-align-left">
                                    <DynamicDivs type="dois" data={publication.dois} ></DynamicDivs>
                                    <DynamicDivs type="url" data={publication.providers} ></DynamicDivs>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <h2 className="h2-landing">IDENTIFIERS</h2>
                            <div className="p-col-12">
                                <div className="div-align-left">
                                    <DynamicDivs type="identifiers" data={publication.other_pids} ></DynamicDivs>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <div className="p-grid">
                            <h2 className="h2-landing">FAIR COMPLIANCE</h2>
                            <div className="p-col fair-scoring-align">
                                <FairScoring fairId="fair-scoring-chart" fair={publication.fair_score}></FairScoring>
                            </div>
                        </div>
                    </Card>
                    <Card className="cards-margin-bottom">
                        <h2 className="h2-landing-citation">ATTENTION & CITATIONS</h2>
                        <div className="p-grid">
                            <div  className="p-col-6">
                                <div className="altmetric-embed" data-badge-popover="right" data-badge-type="donut" data-doi={publication.dois[0].value} data-hide-no-mentions="true" data-link-target='_blank'></div>
                            </div>
                            <div  className="p-col-6">
                                <div className="dimen-badge">
                                    <span className="__dimensions_badge_embed__" data-doi={publication.dois[0].value}  data-hide-zero-citations="true" data-style="small_circle"></span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <script async="true" type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
                <script async="true" src="https://badge.dimensions.ai/badge.js" charSet="utf-8"></script>
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60d8677064ad774c"></script>
            </Helmet>

            <div className="p-grid our-layout-content landing-container">
                {
                    publication?renderPage():console.log()
                }
            </div>
        </>

    );
}
