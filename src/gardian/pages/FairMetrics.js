import React, {useEffect, useState} from "react";
import AnalyticsService from "../service/AnalyticsService";
import {TabPanel, TabView} from "primereact/tabview";
import {Maps} from "../components/Maps";
import {Am_DonutChart} from "../components/am_DonutChart";
import {Am_MapChart} from "../components/am_MapChart";
import {Am_HBarChart} from "../components/am_HBarChart";
import {Am_AssetsOverTimeChart} from "../components/am_AssetsOverTimeChart";
import {Dropdown} from "primereact/dropdown";
import {CenterAnalytics} from "../components/CenterAnalytics";
import {RepoAnalytics} from "../components/RepoAnalytics";
import {Am_VBarChart} from "../components/am_VBarChart";



export const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [dataPublications, setDataPublications] = useState(null);
    const [dataDatasets, setDataDatasets] = useState(null);
    const [dataRepositories, setDataRepositories] = useState(null);

    const [selectedPROVIDER, setSelectedPROVIDER] = useState(null );
    const [selectedREPO, setSelectedREPO] = useState(null );

    const PROVIDERS = [
        {name: "CGIAR", label: "CGIAR - Consortium of International Agricultural Research Centers"},
        {name: "AfricaRice", label: "Africa Rice Center"},
        {name: "Bioversity", label: "Bioversity International"},
        {name: "Bioversity-CIAT", label: "Bioversity-CIAT Alliance"},
        {name: "CIFOR", label: "CIFOR - Center for International Forestry Research"},
        {name: "ICARDA", label: "ICARDA - International Center for Agricultural Research in the Dry Areas"},
        {name: "CIAT", label: "CIAT - International Center for Tropical Agriculture"},
        {name: "ICRISAT", label: "ICRISAT - International Crops Research Institute for the Semi-Arid Tropics"},
        {name: "IFPRI", label: "IFPRI - International Food Policy Research Institute"},
        {name: "IITA", label: "IITA - International Institute of Tropical Agriculture"},
        {name: "ILRI", label: "ILRI - International Livestock Research Institute"},
        {name: "CIMMYT", label: "CIMMYT - International Maize and Wheat Improvement Center"},
        {name: "IRRI", label: "IRRI - International Rice Research Institute"},
        {name: "IWMI", label: "IWMI - International Water Management Institute"},
        {name: "ICRAF", label: "ICRAF - World Agroforestry Centre"},
        {name: "WorldFish", label: "WorldFish"}
    ];

    const REPOSITORIES = [
        {name: "CGSpace", label: "CGSpace - Repository of Agricultural Research Outputs"},
        {name: "IFPRI-Ebrary", label: "IFPRI's institutional repository"}
    ];


    useEffect(() => {
        const analyticsService = new AnalyticsService();
        analyticsService.getAnalytics().then(data => setAnalyticsData(data));

    }, []);


    const loadProviderAnalyticsData = (PROVIDERname) => {

        let dataP = null;
        let dataD = null;
        //-------------------------
        if ((analyticsData)&&(analyticsData.publications)) {
            for (let i = 0; i < analyticsData.publications.length; i++) {
                if (analyticsData.publications[i].provider == PROVIDERname) {  dataP = {...analyticsData.publications[i]} ; }
            }
        }
        //-------------------------
        if ((analyticsData)&&(analyticsData.datasets)) {
            for (let i = 0; i < analyticsData.datasets.length; i++) {
                if (analyticsData.datasets[i].provider == PROVIDERname) {  dataD = {...analyticsData.datasets[i] }; }
            }
        }
        //-------------------------
        setDataPublications(dataP);
        setDataDatasets(dataD);

    }

    const loadRepoAnalyticsData = (REPOSITORYRname) => {

        let dataR = null;
        //-------------------------
        if ((analyticsData)&&(analyticsData.sources)) {
            for (let i = 0; i < analyticsData.sources.length; i++) {
                if (analyticsData.sources[i].system == REPOSITORYRname) {  dataR = {...analyticsData.sources[i]} ; }
            }
        }
        //-------------------------
        setDataRepositories(dataR);
    }


    const onProviderChange = (e: { value: any}) => {
        setSelectedPROVIDER(e.value);
        //-------------------------
        loadProviderAnalyticsData(e.value.name);
    }


    const onRepoChange = (e: { value: any}) => {
        setSelectedREPO(e.value);
        //-------------------------
        loadRepoAnalyticsData(e.value.name);
    }


    const renderProviderSelector = () => {

        return (
            <div className="p-grid">
                <div className="p-col">
                    <div className="card analytics-card">
                        <div className="p-grid" style={{marginTop:"0px"}}>
                            <div className="p-col">
                                <h2 className="h2-title">PROVIDER ANALYTICS</h2>
                                <Dropdown value={selectedPROVIDER} options={PROVIDERS} onChange={onProviderChange} optionLabel="label" placeholder="Select Provider" style={{float:'left'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    const renderAssetOverview = (dataSUMMARY, assetTypeName) => {

        return (


            <div className="p-grid">
                <div className="p-col">
                        <div className="card analytics-card">
                            <div className="p-grid">
                                <div className="p-col-12 p-lg-7">
                                    <h2 className="h2-title">OVERVIEW</h2>
                                    <div style={{paddingTop:"30px"}}>
                                        <Am_DonutChart chartId = "overview-asset-types"
                                                       chartData = {dataSUMMARY.asset_types}
                                                       useVOC = "false"
                                                       useNAME ="false"
                                                       showLEGEND = "false"
                                                       useTotalTXT ={assetTypeName}
                                                       WordWrap = "14"
                                                       showNUM ="5"
                                                       chartHeight="280px">
                                        </Am_DonutChart>
                                    </div>
                                </div>
                                <div className="p-col">
                                    <Am_HBarChart chartId = "overview-asset-providers"
                                                  chartData = {dataSUMMARY.providers}
                                                  chartTitle = "PROVIDERS"
                                                  useVOC = "false"
                                                  useNAME ="true"
                                                  // showNUM="7"
                                                  chartHeight="325px">
                                    </Am_HBarChart>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


        )

    }


    return (
        <>
            <div>
                <div className="analytics-layout-content">
                    <TabView className="tableview-tab">
                        <TabPanel leftIcon="fad fa-file-alt" header="Publications">
                            {   analyticsData?analyticsData.publications_summary?
                                renderAssetOverview(analyticsData.publications_summary,"publications")
                                :console.log():console.log()
                            }
                            { renderProviderSelector() }
                            {
                                dataPublications?
                                    <CenterAnalytics data={dataPublications} analyticstype="Publications"></CenterAnalytics>
                                    :console.log()
                            }
                        </TabPanel>
                        <TabPanel leftIcon="fad fa-table" header="Datasets">
                            {   analyticsData?analyticsData.datasets_summary?
                                renderAssetOverview(analyticsData.datasets_summary,"datasets")
                                :console.log():console.log()
                            }
                            { renderProviderSelector() }
                            {
                                dataDatasets?
                                    <CenterAnalytics data={dataDatasets} analyticstype="Datasets"></CenterAnalytics>
                                    :console.log()
                            }
                        </TabPanel>
                        <TabPanel leftIcon="fad fa-database" header="Sources">

                            {   analyticsData?analyticsData.sources_summary?
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6">
                                        <div className="card analytics-card">
                                            <h2 className="h2-title">PUBLICATION REPOSITORIES / PORTALS</h2>
                                            <div>
                                                <Am_HBarChart chartId = "overview-pub-sources"
                                                              chartData = {analyticsData.sources_summary.publication_repos}
                                                    //chartTitle = "PUBLICATION REPOSITORIES/PORTALS"
                                                              useVOC = "false"
                                                              useNAME ="false"
                                                    // showNUM="7"
                                                              chartHeight="325px">
                                                </Am_HBarChart>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-col">
                                        <div className="card analytics-card">
                                            <h2 className="h2-title">DATASET REPOSITORIES / PORTALS</h2>
                                            <div>
                                                <Am_HBarChart chartId = "overview-data-sources"
                                                              chartData = {analyticsData.sources_summary.dataset_repos}
                                                    //chartTitle = "DATASET REPOSITORIES/PORTALS"
                                                              useVOC = "false"
                                                              useNAME ="false"
                                                    // showNUM="7"
                                                              chartHeight="325px">
                                                </Am_HBarChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :console.log():console.log()
                            }

                            <div className="p-grid">
                                <div className="p-col">
                                    <div className="card analytics-card">
                                        <div className="p-grid" style={{marginTop:"0px"}}>
                                            <div className="p-col">
                                                <h2 className="h2-title">REPOSITORY / PORTAL ANALYTICS</h2>
                                                <Dropdown value={selectedREPO} options={REPOSITORIES} onChange={onRepoChange} optionLabel="label" placeholder="Select Repository / Portal" style={{float:'left'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                dataRepositories?
                                    <RepoAnalytics data={dataRepositories}></RepoAnalytics>
                                    :console.log()
                            }
                        </TabPanel>
                    </TabView>
                </div>

            </div>
        </>
    );

}
