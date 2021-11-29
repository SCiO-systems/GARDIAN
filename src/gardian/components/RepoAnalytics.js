import React, {useEffect,useState} from 'react';
import {Am_DonutChart} from "./am_DonutChart";
import {Am_AssetsOverTimeChart} from "./am_AssetsOverTimeChart";
import {Am_FairScoring} from "./am_FairScoring";
import {Am_FairOverTimeChart} from "./am_FairOverTimeChart";
import {Am_TagCloud} from "./am_TagCloud";
import {Am_MapChart} from "./am_MapChart";
import {Am_HBarChart} from "./am_HBarChart";
import {Am_VBarChart} from "./am_VBarChart";

export const CenterAnalytics = (props) => {

    const [analyticsData, setAnalyticsData] = useState(null);
    const [chartAccessTitle, setChartAccessTitle] = useState("");
    const [accessRightsSummary, setAccessRightsSummary] = useState(null);
    const [fairScoreSummary, setFairScoreSummary] = useState(null);

    useEffect( () => {

        if (props.data) {

            let new_data = {...props.data};
            setAnalyticsData({...new_data});

            //-----------------------------

            if (props.data.access_rights_over_time) {

                let endAccessRec = props.data.access_rights_over_time[props.data.access_rights_over_time.length-1];

                let accessRightsSummaryStr = [
                    {   "value": "Open",
                        "frequency": endAccessRec.Open
                    },
                    {   "value": "Restricted",
                        "frequency": endAccessRec.Restricted
                    }
                ];

                setAccessRightsSummary(accessRightsSummaryStr);

            }

            //-----------------------------

            if (props.data.fair_over_time) {

                let endFairRec = props.data.fair_over_time[props.data.fair_over_time.length-1];

                let fairScoreSummaryStr = [
                    {
                        "category": "R",
                        "cat": "Reusable",
                        "value": endFairRec.Reusable,
                        "full": 5
                    }, {
                        "category": "I",
                        "cat": "Interoperable",
                        "value": endFairRec.Interoperable,
                        "full": 5
                    }, {
                        "category": "A",
                        "cat":"Accessible",
                        "value": endFairRec.Accessible,
                        "full": 5
                    }, {
                        "category": "F",
                        "cat": "Findable",
                        "value": endFairRec.Findable,
                        "full": 5
                    }
                ];

                setFairScoreSummary(fairScoreSummaryStr);

            }

        }

    }, [props.data])

    //------------------------------------------------

    useEffect( () => {
        if (props.analyticstype) {
            let title = props.analyticstype + " over time";
            setChartAccessTitle(title);
        }

    }, [props.analyticstype])

    //------------------------------------------------


    return (
        <>
            <div className="p-grid">
                <div className="p-col">
                    {   analyticsData?accessRightsSummary?
                        <div className="card analytics-card">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-4">
                                    <h2 className="h2-title">ACCESS RIGHTS</h2>
                                    <div style={{paddingTop:"40px"}}>
                                        <Am_DonutChart chartId = "analytics-access-overview"
                                                       chartData = {accessRightsSummary}
                                                       useVOC = "false"
                                                       useNAME ="false"
                                                       showLEGEND = "true"
                                                       showNUM ="5"
                                                       chartHeight="260px">
                                        </Am_DonutChart>
                                    </div>
                                </div>
                                <div className="p-col">
                                        <Am_AssetsOverTimeChart chartId="analytics-assets-overtime"
                                                                chartData= {analyticsData.access_rights_over_time }
                                                                chartTitle={chartAccessTitle}
                                                                useVOC="false"
                                                                useNAME="false"
                                                                chartHeight="340px">
                                        </Am_AssetsOverTimeChart>
                                </div>
                            </div>
                        </div>
                        :console.log():console.log()
                    }
                </div>
            </div>

            <div className="p-grid">
                <div className="p-col">
                    {   analyticsData?fairScoreSummary?
                        <div className="card analytics-card">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-4">
                                    <h2 className="h2-title">FAIR COMPLIANCE</h2>
                                    <div style={{paddingTop:"40px", textAlign: '-webkit-center'}}>
                                        <Am_FairScoring chartId="fair-scoring-chart"
                                                        chartData={fairScoreSummary}>
                                        </Am_FairScoring>
                                    </div>
                                </div>
                                <div className="p-col">
                                    <Am_FairOverTimeChart chartId="analytics-fair-overtime"
                                                          chartData= {analyticsData.fair_over_time}
                                                          chartTitle= "COMPLIANCE over time"
                                                          useVOC="false"
                                                          useNAME="false"
                                                          chartHeight="340px">
                                    </Am_FairOverTimeChart>
                                </div>
                            </div>
                        </div>
                        :console.log():console.log()
                    }
                </div>
            </div>

            <div className="p-grid">

                {   analyticsData?(analyticsData.agrovoc)&&(analyticsData.agrovoc.length>0)?
                    ((analyticsData.keywords)&&(analyticsData.keywords.length>0))?
                        <div className="p-col-12 p-md-6">
                            <div className="card analytics-card">
                                <h2 className="h2-title">AGROVOC Terms</h2>
                                <Am_TagCloud chartId="agrovoc_filter"
                                             chartData={analyticsData.agrovoc}
                                             useVOC="false"
                                             useNAME="false"
                                             chartHeight="260px">
                                </Am_TagCloud>
                            </div>
                        </div>
                        :<div className="p-col">
                            <div className="card analytics-card">
                                <h2 className="h2-title">AGROVOC Terms</h2>
                                <Am_TagCloud chartId="agrovoc_filter"
                                             chartData={analyticsData.agrovoc}
                                             useVOC="false"
                                             useNAME="false"
                                             chartHeight="260px">
                                </Am_TagCloud>
                            </div>
                        </div>

                    :console.log():console.log()
                }

                {   analyticsData?(analyticsData.keywords)&&(analyticsData.keywords.length>0)?
                    <div className="p-col">
                        <div className="card analytics-card">
                            <h2 className="h2-title">OTHER KEYWORDS</h2>
                            <Am_TagCloud chartId="keywords_filter"
                                         chartData={analyticsData.keywords}
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

                {   analyticsData?(analyticsData.countries)&&(analyticsData.countries.length>0)?
                    <div className="p-col">
                        <div className="card analytics-card">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-6">
                                    <h2 className="h2-title">COUNTRIES</h2>
                                    <Am_MapChart chartId="countries-map-chart"
                                                 chartData={analyticsData.countries}
                                                 useVOC="true"
                                                 useNAME="false"
                                                 chartHeight="340px">
                                    </Am_MapChart>
                                </div>
                                <div className="p-col">
                                    <Am_HBarChart chartId="countries-bar-chart"
                                                  chartData={analyticsData.countries.slice(0,15)}
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

                {   analyticsData?(analyticsData.projects)&&(analyticsData.projects.length>0)?
                    <div className="p-col-12 p-lg-6">
                        <div className="card analytics-card">
                            <h2 className="h2-title">PROJECTS & PLATFORMS</h2>
                            <Am_DonutChart chartId="projects-pie-chart"
                                           chartData={analyticsData.projects}
                                           useVOC="false"
                                           useNAME="true"
                                           showNUM="5"
                                           chartHeight="365px">
                            </Am_DonutChart>
                        </div>
                    </div>
                    :console.log():console.log()
                }

                {   analyticsData?(analyticsData.funders)&&(analyticsData.funders.length>0)?
                    <div className="p-col">
                        <div className="card analytics-card">
                            <h2 className="h2-title">FUNDERS & INVESTORS</h2>
                            <Am_VBarChart chartId="funders-bar-chart"
                                          chartData={analyticsData.funders.slice(0,10)}
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


        </>
    )
}
