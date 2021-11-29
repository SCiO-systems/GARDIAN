import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Card} from "primereact/card";
import MetadataService from "../service/MetadataService";
import {Helmet} from "react-helmet";
import {FairScoring} from "../components/FairScoring";
import {DynamicDivs} from "../components/DynamicDivs";
import {Am_TagCloud} from "../components/am_TagCloud";
import {GeographyTree} from "../components/GeographyTree";
import {Am_MapChart} from "../components/am_MapChart";
import {RelevantTable} from "../components/RelevantTable";
import {ModalAccessRights} from "../components/ModalAccessRights";
import {ResourceFilesTable} from "../components/ResourceFilesTable";
import {Button} from "primereact/components/button/Button";
import {Tooltip} from "primereact/tooltip";



export const AssetInfo = () => {
    const [assetMetadata, setAssetMetadata] = useState(null);

    const  id   = useParams();

    useEffect(() => {
        const metadataService = new MetadataService();
        metadataService.getMetadata().then(data => setAssetMetadata(data));
    }, []);

    const renderPage = () => {

        let RelevantResHeader = "RELEVANT DATASETS";
        if  ((assetMetadata.resource_type.type).toLowerCase().includes("dataset")) {  RelevantResHeader = "RELEVANT PUBLICATIONS"; }
        //------------------------------

        return (
            <div className="p-grid p-dir-rev">
                <div className="p-col-12 p-lg-8">

                    { assetMetadata?(assetMetadata.title)&&(assetMetadata.title.length>0)?
                    <Card className="cards-margin-bottom">
                        <div className="p-type-landing">{assetMetadata.resource_type.category}</div>
                        <DynamicDivs type="titles" data={assetMetadata.title} ></DynamicDivs>

                        { (assetMetadata.providers)&&(assetMetadata.providers.length>0)?
                            <>
                                <hr/>
                                <p className="p-publishers-landing">PUBLISHER(s)</p>
                                <p className="p-providers-landing">
                                    <DynamicDivs type="providers" data={assetMetadata.providers} ></DynamicDivs>
                                </p>
                            </>
                        :console.log()
                        }

                    </Card>
                    :console.log():console.log()
                    }


                    { assetMetadata? ( ((assetMetadata.authors)&&(assetMetadata.authors.length>0)) ||
                                       ((assetMetadata.contact_point)&&(assetMetadata.contact_point.length>0)) )?

                          <Card className="cards-margin-bottom">
                              <div className="p-grid">

                                  { ((assetMetadata.contact_point)&&(assetMetadata.contact_point.length>0)) ?
                                      <div className="p-col-12 p-md-8">
                                          <h2  className="h2-landing-authors">AUTHORS</h2>
                                          <DynamicDivs type="authors" data={assetMetadata.authors} ></DynamicDivs>
                                      </div>
                                      :
                                      <div className="p-col">
                                          <h2  className="h2-landing-authors">AUTHORS</h2>
                                          <DynamicDivs type="authors" data={assetMetadata.authors} ></DynamicDivs>
                                      </div>
                                  }

                                  <div className="p-col">
                                      <h2 className="h2-landing-contact">CONTACT POINT</h2>
                                      <DynamicDivs type="contact" data={assetMetadata.contact_point} ></DynamicDivs>
                                  </div>
                              </div>
                          </Card>

                    :console.log():console.log()
                    }


                    { assetMetadata?(assetMetadata.summary)&&(assetMetadata.summary.length>0)?
                        <Card className="cards-margin-bottom" style={{textAlign:"justify"}}>
                            <h2 className="h2-summary-landing">SUMMARY</h2>
                            <DynamicDivs type="summaries" data={assetMetadata.summary} ></DynamicDivs>
                        </Card>
                    :console.log():console.log()
                    }

                    <div className="p-grid">

                        {   assetMetadata?(assetMetadata.agrovoc)&&(assetMetadata.agrovoc.length>0)?

                            ((assetMetadata.keywords)&&(assetMetadata.keywords.length>0))?
                                <div className="p-col-12 p-md-6">
                                    <Card className="cards-margin-bottom" title="AGROVOC Terms">
                                        <Am_TagCloud chartId="agrovoc_tag_cloud"
                                                     chartData={assetMetadata.agrovoc}
                                                     useVOC="false"
                                                     useNAME="false"
                                                     chartHeight="260px">
                                        </Am_TagCloud>
                                    </Card>
                                </div>
                                :<div className="p-col">
                                    <Card className="cards-margin-bottom" title="AGROVOC Terms">
                                        <Am_TagCloud chartId="agrovoc_tag_cloud"
                                                     chartData={assetMetadata.agrovoc}
                                                     useVOC="false"
                                                     useNAME="false"
                                                     chartHeight="260px">
                                        </Am_TagCloud>
                                    </Card>
                                </div>

                        :console.log():console.log()
                        }

                        { assetMetadata?(assetMetadata.keywords)&&(assetMetadata.keywords.length>0)?
                            <div  className="p-col">
                                <Card className="cards-margin-bottom" title="OTHER KEYWORDS">
                                    <Am_TagCloud chartId="keyword_tag_cloud"
                                                 chartData={assetMetadata.keywords}
                                                 useVOC="false"
                                                 useNAME="false"
                                                 chartHeight="260px">
                                    </Am_TagCloud>
                                </Card>
                            </div>
                        :console.log():console.log()
                        }

                    </div>

                    {   assetMetadata?(assetMetadata.geography) &&
                        ( ((assetMetadata.geography.countries) && (assetMetadata.geography.countries.length>0)) ||
                          ((assetMetadata.geography.regions  ) && (assetMetadata.geography.regions.length>0  )) ) ?
                        <Card className="cards-margin-bottom">
                            <h2 className="h2-landing">GEOGRAPHY</h2>
                            <div className="p-grid">

                                { (assetMetadata.geography.countries)&&(assetMetadata.geography.countries.length>0)?
                                <div className="p-col-12 p-md-6">
                                    <Am_MapChart chartId="asset-map-chart"
                                                 chartData={assetMetadata.geography.countries}
                                                 useVOC="false"
                                                 useNAME="false"
                                                 chartHeight="340px">
                                    </Am_MapChart>
                                </div>
                                :console.log()
                                }

                                <div  className="p-col">
                                    <GeographyTree treeData={assetMetadata.geography}></GeographyTree>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.project_info)&&(assetMetadata.project_info.project_name)&&(assetMetadata.project_info.project_name.length>0)?
                        <Card className="cards-margin-bottom">
                            <div className="p-grid">
                                <div className="p-col">
                                    <h2  className="h2-landing-project">PROJECT</h2>
                                    <p className="p-project-landing">{assetMetadata.project_info.project_id}</p>
                                    <DynamicDivs type="project" data={assetMetadata.project_info.project_name} ></DynamicDivs>
                                </div>
                            </div>


                            { (assetMetadata.project_info.project_partners)&&(assetMetadata.project_info.project_partners.length>0) ||
                              (assetMetadata.project_info.funding_organisations)&&(assetMetadata.project_info.funding_organisations.length>0) ?
                                <hr></hr>
                            :console.log()
                            }

                            <div className="p-grid" style={{paddingTop: "15px"}}>

                                { (assetMetadata.project_info.project_partners)&&(assetMetadata.project_info.project_partners.length>0)?

                                     (assetMetadata.project_info.funding_organisations)&&(assetMetadata.project_info.funding_organisations.length>0) ?
                                        <div className="p-col-12 p-md-6">
                                            <h2 className="h2-landing-project">PARTNERS</h2>
                                            <DynamicDivs type="partners" data={assetMetadata.project_info.project_partners} ></DynamicDivs>
                                        </div>
                                        :
                                        <div className="p-col">
                                            <h2 className="h2-landing-project">PARTNERS</h2>
                                            <DynamicDivs type="partners" data={assetMetadata.project_info.project_partners} ></DynamicDivs>
                                        </div>

                                :console.log()
                                }

                                { (assetMetadata.project_info.funding_organisations)&&(assetMetadata.project_info.funding_organisations.length>0) ?
                                    <div className="p-col">
                                        <h2 className="h2-landing-project">FUNDERS</h2>
                                        <DynamicDivs type="funders" data={assetMetadata.project_info.funding_organisations} ></DynamicDivs>
                                    </div>
                                :console.log()
                                }

                            </div>

                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.resource_files)&&(assetMetadata.resource_files.length>0)?
                        <Card className="cards-margin-bottom">
                            <h2 className="h2-landing">RESOURCE FILES</h2>
                            <div className="p-grid">
                                <div className="p-col">
                                    <div style={{marginRight: "8px",display:" flex", justifyContent: "flex-end"}}>
                                        <Button label="Download Resource" icon="fad fa-folder-download fa-lg" ></Button>
                                    </div>
                                    <ResourceFilesTable dataResource={assetMetadata.resource_files}></ResourceFilesTable>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.related_resources)&&(assetMetadata.related_resources.length>0)?
                        <Card>
                            <h2 className="h2-landing">{RelevantResHeader}</h2>
                            <div className="p-grid">
                                <div className="p-col">
                                    <RelevantTable dataRelevant={assetMetadata.related_resources}></RelevantTable>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                </div>


                <div className="p-col-12 p-lg-4">

                    {   assetMetadata?(assetMetadata.citation)?
                        <Card className="cards-margin-bottom">
                            <h2 className="h2-landing-citation">HOW TO CITE</h2>
                            <div className="p-grid">
                                <div  className="p-col-fixed landing-thumbnail-fixed">
                                    <img className="title-thumbnail" alt="thumbnail" style={{width: "110px"}} src={assetMetadata.thumbnail_url} onError={(e) =>
                                        (assetMetadata.resource_type.type=='publication')?
                                        e.target.src = 'assets/layout/images/publication-icon.png'
                                        :e.target.src = 'assets/layout/images/spreadsheet-icon.png'} />
                                </div>
                                <div  className="p-col">
                                    <p className="citation">{assetMetadata.citation}</p>
                                </div>
                            </div>
                            <div className="addthis_inline_share_toolbox" style={{paddingTop: "12px"}}></div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.rights)?
                        <Card className="cards-margin-bottom">
                            <div className="p-grid">
                                <h2 className="h2-landing">ACCESS RIGHTS</h2>

                                { (assetMetadata.rights.access==="Open")?
                                    <div className="div-access-asset">
                                        <Tooltip target=".image-access-asset"/>
                                        <img src={'assets/layout/images/open.png'} data-pr-tooltip={assetMetadata.rights.access} className="image-access-asset"/>
                                    </div>

                                    :<div className="div-access-asset">
                                        <Tooltip target=".image-access-asset" mouseTrack mouseTrackLeft={10}/>
                                        <img src={'assets/layout/images/close.png'} data-pr-tooltip={assetMetadata.rights.access} className="image-access-asset"/>
                                    </div>
                                }

                                <div className="p-col-12">
                                    <div className="div-align-left">
                                        <p style={{fontWeight: "bold"}}>License</p>
                                        <DynamicDivs type="license" data={assetMetadata.rights}></DynamicDivs>

                                        { (assetMetadata.rights.terms_of_use)&&(assetMetadata.rights.terms_of_use.length>0)?
                                            <ModalAccessRights type="access-modal" data={assetMetadata.rights.terms_of_use}></ModalAccessRights>
                                            :console.log()
                                        }

                                        { (assetMetadata.rights.rights_holder)&&(assetMetadata.rights.rights_holder.length>0)?
                                             <>
                                                <hr/>
                                                <p style={{fontWeight: "bold"}}>Rights Holder</p>
                                                <DynamicDivs type="rights_holder" data={assetMetadata.rights.rights_holder}></DynamicDivs>
                                            </>
                                            : console.log()
                                        }

                                    </div>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata? ((assetMetadata.dois)&&(assetMetadata.dois.length>0)) || ((assetMetadata.providers)&&(assetMetadata.providers.length>0))?
                        <Card className="cards-margin-bottom">
                            <div className="p-grid">
                                <h2 className="h2-landing">LINKS</h2>
                                <div className="p-col-12">
                                    <div className="div-align-left">

                                        { (assetMetadata.dois)&&(assetMetadata.dois.length>0)?<DynamicDivs type="dois" data={assetMetadata.dois} ></DynamicDivs>:console.log() }

                                        { (assetMetadata.providers)&&(assetMetadata.providers.length>0)?<DynamicDivs type="url" data={assetMetadata.providers} ></DynamicDivs>:console.log() }

                                    </div>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.other_pids)&&(assetMetadata.other_pids.length>0)?
                        <Card className="cards-margin-bottom">
                            <div className="p-grid">
                                <h2 className="h2-landing">IDENTIFIERS</h2>
                                <div className="p-col-12">
                                    <div className="div-align-left">
                                        <DynamicDivs type="identifiers" data={assetMetadata.other_pids} ></DynamicDivs>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.fair_score)&&(assetMetadata.fair_score.length>0)?
                        <Card className="cards-margin-bottom">
                            <div className="p-grid">
                                <div className="p-col">
                                    <h2 className="h2-landing" style={{ marginBottom: '0px'}}>FAIR COMPLIANCE</h2>
                                    <div style={{textAlign: '-webkit-center'}}>
                                        <FairScoring fairId="fair-scoring-chart" fair={assetMetadata.fair_score}></FairScoring>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

                    {   assetMetadata?(assetMetadata.dois)&&(assetMetadata.dois.length>0)?
                        <Card className="cards-margin-bottom">
                            <h2 className="h2-landing-citation">ATTENTION & CITATIONS</h2>
                            <div className="p-grid">
                                <div  className="p-col-6">
                                    <div className="altmetric-embed" data-badge-popover="right" data-badge-type="medium-donut" data-doi={assetMetadata.dois[0].value} data-hide-no-mentions="true" data-link-target='_blank'></div>
                                </div>
                                <div  className="p-col-6">
                                    <div className="dimen-badge">
                                        <span className="__dimensions_badge_embed__" data-doi={assetMetadata.dois[0].value}  data-hide-zero-citations="true"></span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    :console.log():console.log()
                    }

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
                    assetMetadata?renderPage():console.log()
                }
            </div>
        </>

    );
}
