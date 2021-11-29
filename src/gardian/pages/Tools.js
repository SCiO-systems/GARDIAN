import React, {useState} from "react";
import {TabPanel, TabView} from "primereact/tabview";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {ResultsAnalytics} from "../components/ResultsAnalytics";
import {Menu} from "primereact/menu";


export const FairMetrics = () => {

    let pubFINDABLE = [
        {  "condition": "RESOURCE has at least one URL defined in metadata", "score" : "0.5 points ( =A )"  },
        {  "condition": "At least one URL is a HANDLER", "score" : "0.5 points additional to A ( =B )"  },
        {  "condition": "At least one HANDLER is a DOI", "score" : "0.5 points additional to B"  },
        {  "condition": "RESOURCE has TITLE defined in metadata", "score" : "0.125 points"  },
        {  "condition": "RESOURCE has DESCRIPTION defined in metadata", "score" : "0.5 points"  },
        {  "condition": "RESOURCE has AUTHORS defined in metadata", "score" : "0.125 points ( =C )"  },
        {  "condition": "At least one AUTHOR is defined using ORCID or RORid", "score" : "0.5 points additional to C"  },
        {  "condition": "RESOURCE has ISSUED DATE defined in metadata", "score" : "0.25 points"  },
        {  "condition": "KEYWORDS in metadata are defined using controlled terms (from vocabularies, thesauri, ontologies)", "score" : "min( 0.25 * #TERMS, 1 ) points"  },
        {  "condition": "If no controlled term is used in KEYWORDS", "score" : "min( 0.0625 * #KEYWORDS, 0.25 ) points"  },
        {  "condition": "SPATIAL COVERAGE is defined using UN-M49 or ISO3166.1.(a2/a3)  terms", "score" : "1 point"  },
        {  "condition": "if SPATIAL COVERAGE is not applicable relevant Crop Species are defined using controlled terms", "score" : "( 1 point )"  }
    ];

    let pubACCESSIBLE = [
        {  "condition": "RESOURCE has LICENCE or TERMS of USE defined in metadata", "score" : "1 point ( =A )"  },
        {  "condition": "RESOURCE has Open Source or CC0 or CC-BY license", "score" : "2 points additional to A"  },
        {  "condition": "RESOURCE has any other standard license", "score" : "1 point additional to A"  },
        {  "condition": "URLs of physical files are provided in metadata", "score" : "2 points"  }
    ];

    let pubINTEROPERABLE = [
        {  "condition": "RESOURCE files use ONLY domain-relevant community open formats", "score" : "4 points"  },
        {  "condition": "if not, RESOURCE files use formats that are proprietary, but can be recognized and used by freely available tools", "score" : "2 points"  },
        {  "condition": "RESOURCE is linked to relevant DATASETS or other RESOURCES to provide context", "score" : "1 point"  }
    ];

    let pubREUSABLE = [
        {  "condition": "RESOURCE complies with basic Personal Information Protection principles ", "score" : "2 points"  },
        {  "condition": "RESOURCE has Open Source or CC0 or CC-BY license", "score" : "1 point"  },
        {  "condition": "If not, RESOURCE has CC-BY-NC license", "score" : "0.5 points"  },
        {  "condition": "Reusability is directly linked to its Findability, Accessibility and Interoperability qualities", "score" : "(max 2 points) calculated as: ( F + A + I ) / 7.5" }
    ];

    //--------------------------------------------------------------

    let dataFINDABLE = [
        {  "condition": "DATASET has at least one URL defined in metadata", "score" : "0.5 points ( =A )"  },
        {  "condition": "At least one URL is a HANDLER", "score" : "0.5 points additional to A ( =B )"  },
        {  "condition": "At least one HANDLER is a DOI", "score" : "0.5 points additional to B"  },
        {  "condition": "DATASET has TITLE defined in metadata", "score" : "0.125 points"  },
        {  "condition": "DATASET has DESCRIPTION defined in metadata", "score" : "0.5 points"  },
        {  "condition": "DATASET has AUTHORS defined in metadata", "score" : "0.125 points ( =C )"  },
        {  "condition": "At least one AUTHOR is defined using ORCID or RORid", "score" : "0.5 points additional to C"  },
        {  "condition": "DATASET has ISSUED DATE defined in metadata", "score" : "0.25 points"  },
        {  "condition": "KEYWORDS in metadata are defined using controlled terms (from vocabularies, thesauri, ontologies)", "score" : "min( 0.25 * #TERMS, 1 ) points"  },
        {  "condition": "If no controlled term is used in KEYWORDS", "score" : "min( 0.0625 * #KEYWORDS, 0.25 ) points"  },
        {  "condition": "SPATIAL COVERAGE is defined using UN-M49 or ISO3166.1.(a2/a3)  terms", "score" : "1 point"  },
        {  "condition": "if SPATIAL COVERAGE is not applicable relevant Crop Species are defined using controlled terms", "score" : "( 1 point )"  }
    ];

    let dataACCESSIBLE = [
        {  "condition": "DATASET has LICENCE or TERMS of USE defined in metadata", "score" : "1 point ( =A )"  },
        {  "condition": "DATASET has Open Source or CC0 or CC-BY license", "score" : "2 points additional to A"  },
        {  "condition": "DATASET has any other standard license", "score" : "1 point additional to A"  },
        {  "condition": "URLs of physical files are provided in metadata", "score" : "2 points"  }
    ];

    let dataINTEROPERABLE = [
        {  "condition": "DATASET files use ONLY domain-relevant community open formats", "score" : "2 points"  },
        {  "condition": "if not, DATASET files use formats that are proprietary, but can be recognized and used by freely available tools", "score" : "0.5 points"  },
        {  "condition": "The data included in the DATASET are annotated and/or carry a legend clarifying their meaning", "score" : "1 point ( =A )"  },
        {  "condition": "Data annotations are built using controlled terms (defined in a vocabulary, thesaurus or ontology)", "score" : "1 point additional to A"  },
        {  "condition": "DATASET is linked to relevant PUBLICATIONS to provide context", "score" : "1 point"  }
    ];

    let dataREUSABLE = [
        {  "condition": "DATASET complies with basic Personal Information Protection principles ", "score" : "2 points"  },
        {  "condition": "DATASET has Open Source or CC0 or CC-BY license", "score" : "1 point"  },
        {  "condition": "If not, DATASET has CC-BY-NC license", "score" : "0.5 points"  },
        {  "condition": "Reusability is directly linked to its Findability, Accessibility and Interoperability qualities", "score" : "(max 2 points) calculated as: ( F + A + I ) / 7.5" }
    ];

    const TableHeader = (HeaderTitle) => {

        return(

            <div className="p-grid">
                <div className="p-col">
                    <h2 className="h2-title">{HeaderTitle}</h2>
                </div>
                <div className="p-col p-d-flex p-jc-end">
                    <h5 style={{paddingTop:"5px",margin:"0px"}}>(max 5 points)</h5>
                </div>

            </div>
        )
    }



    return (
        <>
            <div>
                <div className="fair-layout-content">

                    <div className="p-grid">
                        <div className="p-col">
                            <div className="card analytics-card">
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-7" style={{paddingRight:"10px",paddingLeft:"10px"}}>
                                        <h2 className="h2-title">FAIR METRICS</h2>
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
                                    <div className="p-col" style={{paddingRight:"10px",paddingLeft:"10px"}}>
                                        <h2 className="h2-title">USEFUL RESOURCES</h2>
                                        <div style={{paddingTop:"10px",textAlign:"left",fontSize:"18px"}}>
                                            <div>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://www.nature.com/articles/sdata201618">FAIR Guiding Principles (original paper)</a>
                                            </div>

                                            <div style={{paddingTop:"15px"}}>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://www.go-fair.org/fair-principles/">FAIR explained by GO FAIR Initiative</a>
                                            </div>
                                            <div style={{paddingTop:"15px"}}>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://www.howtofair.dk/">How to FAIR by DM Forum</a>
                                            </div>
                                            <div style={{paddingTop:"15px"}}>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://www.rd-alliance.org/fair">FAIR @ Research Data Alliance (RDA)</a>
                                            </div>

                                            <div style={{paddingTop:"15px"}}>
                                                <i className="fad fa-link"></i> <a target="_blank" href="https://conference.codata.org/FAIRconvergence2020/programme/">International FAIR Convergence Symposium 2020</a>
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
                                        <h2 className="h2-title">GARDIAN FAIR SCORING SYSTEM</h2>
                                        <div style={{paddingTop:"10px"}}>

                                            <TabView className="tableview-tab">
                                                <TabPanel leftIcon="fad fa-file-alt" header="Documents / Digital Assets">
                                                    <DataTable  header={TableHeader("FINDABLE")}  value={pubFINDABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("ACCESSIBLE")}  value={pubACCESSIBLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("INTEROPERABLE")}  value={pubINTEROPERABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("REUSABLE")}  value={pubREUSABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                </TabPanel>
                                                <TabPanel leftIcon="fad fa-table" header="Datasets">
                                                    <DataTable  header={TableHeader("FINDABLE")}  value={dataFINDABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("ACCESSIBLE")}  value={dataACCESSIBLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("INTEROPERABLE")}  value={dataINTEROPERABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
                                                    <DataTable  header={TableHeader("REUSABLE")}  value={dataREUSABLE}>
                                                        <Column field="condition" header="Metadata Property / Condition" style={{textAlign: "center"}}></Column>
                                                        <Column field="score" header="Scoring in FAIR" style={{textAlign: "center"}}></Column>
                                                    </DataTable>
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
