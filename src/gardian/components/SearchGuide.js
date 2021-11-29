import React, {useEffect, useState} from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {Am_TagCloud} from "./am_TagCloud";
import {Am_MapChart} from "./am_MapChart";
import {Am_HBarChart} from "./am_HBarChart";
import {Am_VBarChart} from "./am_VBarChart";
import {useHistory} from "react-router-dom";
import {Am_DonutChart} from "./am_DonutChart";

export const ResultsAnalytics = props => {

    const [resultsDATA,setResultsDATA]= useState(null);
    const [search_query,setSearch_query]= useState(null);
    const [ui_query,setUi_query]= useState(null);

    const [displayBasic, setDisplayBasic] = useState(false);

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    }

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }


    useEffect(() => {

        if(props.resultsDATA){

            setResultsDATA(props.resultsDATA);
            //----------------------
            setSearch_query(props.fullQUERY.json_query);
            setUi_query(props.fullQUERY.user_query);

        };

    }, [props.resultsDATA]);

    let history = useHistory();

    const filterAMChartHandler = (value) => {

        let pre_filter_str = "";
        let post_filter_str = "";
        let newQuery = "";
        //---------------------------------------------
        let tempstr = (ui_query).replace(/\"/g, "\\\"");
        while (tempstr.includes("\\\\")) { tempstr = tempstr.replace(/\\\\/g, "\\"); }
        //---------------------------------------------
        post_filter_str = ",\"operator\":\"=\"}],\"combinator\":\"and\",\"not\":false}}";
        //---------------------------------------------
        if (search_query.combinator !== "and") {

            pre_filter_str  = "/search-results/0/" +
                "{\"user_query\":\"" + tempstr + "\"" +
                ",\"json_query\":{\"rules\":[" + JSON.stringify(search_query);
        }
        else {

            let xquery = JSON.stringify(search_query);
            if (xquery.includes("],\"combinator\":\"and\"")) {
                pre_filter_str = "/search-results/0/" +
                    "{\"user_query\":\"" + tempstr + "\"" +
                    ",\"json_query\":" + xquery.slice(0,xquery.lastIndexOf("],\"combinator\":\"and\""));

            }
        }
        //---------------------------------------------
        if(value.type === "agrovoc")    {  pre_filter_str += ",{\"field\":\"controlledTerms\",\"value\":";  }
        else if(value.type === "keywords")  {  pre_filter_str += ",{\"field\":\"otherKeywords\",\"value\":"; }
        else if(value.type === "country")   {  pre_filter_str += ",{\"field\":\"country\",\"value\":"; }
        else if(value.type === "provider")  {  pre_filter_str += ",{\"field\":\"provider\",\"value\":"; }
        else if(value.type === "authors")   {
                                                pre_filter_str += ",{\"field\":\"author\",\"value\":";
                                                post_filter_str = ",\"operator\":\"contains\"}],\"combinator\":\"and\",\"not\":false}}";
                                            }
        else if(value.type === "project")   {  pre_filter_str += ",{\"field\":\"project\",\"value\":"; }
        else if(value.type === "funder")    {
                                                pre_filter_str += ",{\"field\":\"funder\",\"value\":";
                                                post_filter_str = ",\"operator\":\"contains\"}],\"combinator\":\"and\",\"not\":false}}";
                                            }

        //---------------------------------------------
        newQuery = pre_filter_str +"\""+ value.term + "\""+ post_filter_str;
        //---------------------
        if (pre_filter_str !=="") {
            setDisplayBasic(false);
            history.push(newQuery); }
    }

    return (
        <>

            <Button icon="fad fa-analytics" onClick={() => onClick('displayBasic')} className="p-mr-2 filter-button" label=" Result Analytics" ></Button>

            <Dialog header="RESULT ANALYTICS" blockScroll visible={displayBasic} position='center' style={{ width: '90vw' }}  onHide={() => onHide('displayBasic')}>

                <div className="p-grid">

                    {   resultsDATA?(resultsDATA.summaries.agrovoc)&&(resultsDATA.summaries.agrovoc.length>0)?

                        ((resultsDATA.summaries.keywords)&&(resultsDATA.summaries.keywords.length>0))?
                            <div className="p-col-12 p-md-6">
                                <div className="card analytics-card">
                                    <h2 className="h2-title">CONTROLLED TERMS</h2>
                                    <Am_TagCloud callback={filterAMChartHandler}
                                                 filter_query={search_query}
                                                 filterType="agrovoc"
                                                 chartId="agrovoc_filter"
                                                 chartData={resultsDATA.summaries.agrovoc}
                                                 useVOC="false"
                                                 useNAME="false"
                                                 chartHeight="260px">
                                    </Am_TagCloud>
                                </div>
                            </div>
                           :<div className="p-col">
                                <div className="card analytics-card">
                                    <h2 className="h2-title">AGROVOC Terms</h2>
                                    <Am_TagCloud callback={filterAMChartHandler}
                                                 filter_query={search_query}
                                                 filterType="agrovoc"
                                                 chartId="agrovoc_filter"
                                                 chartData={resultsDATA.summaries.agrovoc}
                                                 useVOC="false"
                                                 useNAME="false"
                                                 chartHeight="260px">
                                    </Am_TagCloud>
                                </div>
                            </div>

                        :console.log():console.log()
                    }

                    {   resultsDATA?(resultsDATA.summaries.keywords)&&(resultsDATA.summaries.keywords.length>0)?
                        <div className="p-col">
                            <div className="card analytics-card">
                                <h2 className="h2-title">OTHER KEYWORDS</h2>
                                <Am_TagCloud callback={filterAMChartHandler}
                                             filter_query={search_query}
                                             filterType="keywords"
                                             chartId="keywords_filter"
                                             chartData={resultsDATA.summaries.keywords}
                                             useVOC="false"
                                             useNAME="false"
                                             chartHeight="260px">
                                </Am_TagCloud>
                            </div>
                        </div>
                        :console.log():console.log()
                    }

                </div>

                <div className="p-grid">

                    {   resultsDATA?(resultsDATA.summaries.countries)&&(resultsDATA.summaries.countries.length>0)?
                        <div className="p-col">
                            <div className="card analytics-card">
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-6">
                                        <h2 className="h2-title">COUNTRIES</h2>
                                        <Am_MapChart callback={filterAMChartHandler}
                                                     filter_query={search_query}
                                                     filterType="country"
                                                     chartId="countries-map-chart"
                                                     chartData={resultsDATA.summaries.countries}
                                                     useVOC="true"
                                                     useNAME="false"
                                                     chartHeight="340px">
                                        </Am_MapChart>
                                    </div>
                                    <div className="p-col">
                                        <Am_HBarChart callback={filterAMChartHandler}
                                                      filter_query={search_query}
                                                      filterType="country"
                                                      chartId="countries-bar-chart"
                                                      chartData={resultsDATA.summaries.countries.slice(0,15)}
                                                      chartTitle="Top 15 Countries"
                                                      useVOC="true"
                                                      useNAME="false"
                                                      showNUM="7"
                                                      chartHeight="340px">
                                        </Am_HBarChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :console.log():console.log()
                    }

                </div>

                <div className="p-grid">

                    {   resultsDATA?(resultsDATA.summaries.authors)&&(resultsDATA.summaries.authors.length>0)?
                        <div className="p-col-12 p-lg-6">
                            <div className="card analytics-card">
                                <h2 className="h2-title">AUTHORS</h2>
                                <Am_HBarChart callback={filterAMChartHandler}
                                              filter_query={search_query}
                                              filterType="authors"
                                              chartId="authors-bar-chart"
                                              chartData={resultsDATA.summaries.authors.slice(0,10)}
                                              chartTitle="Top 10 ORCids"
                                              useVOC="true"
                                              useNAME="false"
                                              showNUM="7"
                                              chartHeight="340px">
                                </Am_HBarChart>
                            </div>
                        </div>
                        :console.log():console.log()
                    }


                    {   resultsDATA?(resultsDATA.summaries.providers)&&(resultsDATA.summaries.providers.length>0)?
                        <div className="p-col">
                            <div className="card analytics-card">
                                <h2 className="h2-title">PROVIDERS</h2>
                                <Am_DonutChart callback={filterAMChartHandler}
                                               filter_query={search_query}
                                               filterType="provider"
                                               chartId="providers-pie-chart"
                                               chartData={resultsDATA.summaries.providers}
                                               useVOC="false"
                                               useNAME="true"
                                               showNUM="5"
                                               chartHeight="365px">
                                </Am_DonutChart>
                            </div>
                        </div>
                        :console.log():console.log()
                    }

                </div>

                <div className="p-grid">

                    {   resultsDATA?(resultsDATA.summaries.projects)&&(resultsDATA.summaries.projects.length>0)?
                        <div className="p-col-12 p-lg-6">
                            <div className="card analytics-card">
                                <h2 className="h2-title">PROJECTS & PLATFORMS</h2>
                                <Am_DonutChart callback={filterAMChartHandler}
                                               filter_query={search_query}
                                               filterType="project"
                                               chartId="projects-pie-chart"
                                               chartData={resultsDATA.summaries.projects}
                                               useVOC="false"
                                               useNAME="true"
                                               showNUM="5"
                                               chartHeight="365px">
                                </Am_DonutChart>
                            </div>
                        </div>
                        :console.log():console.log()
                    }

                    {   resultsDATA?(resultsDATA.summaries.funders)&&(resultsDATA.summaries.funders.length>0)?
                        <div className="p-col">
                            <div className="card analytics-card">
                                <h2 className="h2-title">FUNDERS & INVESTORS</h2>
                                <Am_VBarChart callback={filterAMChartHandler}
                                              filter_query={search_query}
                                              filterType="funder"
                                              chartId="funders-bar-chart"
                                              chartData={resultsDATA.summaries.funders.slice(0,10)}
                                              chartTitle="Top 10 RORids"
                                              useVOC="true"
                                              useNAME="true"
                                              showNUM="7"
                                              chartHeight="340px">
                                </Am_VBarChart>
                            </div>
                        </div>
                        :console.log():console.log()
                    }

                </div>
            </Dialog>
        </>

    );
}
