import React, {useEffect, useState} from "react";
import {SearchBar} from "../components/SearchBar";
import {AdvancedSearch} from "../components/AdvancedSearch";
import {TabPanel, TabView} from "primereact/tabview";
import {Datasets} from "../components/Datasets";
import {Maps} from "../components/Maps";
import {TagCloud} from "../components/TagCloud";
import ResultsService from "../service/ResultsService";
import {Card} from "primereact/card";
import {FilterSidebar} from "../components/FilterSidebar";
import {Table} from "../components/Table";
import {useParams} from "react-router-dom";

export const Search = () => {

    const [result, setResult] = useState(null);
    const resultsService = new ResultsService();

    const   query   = useParams();

    useEffect(() => {
        resultsService.getResults().then(data => setResult(data));
    }, []);

    const renderPage = () => {
        return (
            <>
                <div className="p-grid">
                    <div className="p-col-fixed filter-container">
                        <Card title="Filters">
                            <div className="cloud-heading">AGROVOC Terms</div>
                            <TagCloud cloudId="agrovoc_filter" cloud={result.summaries.agrovoc}></TagCloud>
                            <div className="cloud-heading">OTHER KEYWORDS</div>
                            <TagCloud cloudId="keywords_filter" cloud={result.summaries.keywords}></TagCloud>
                        </Card>
                    </div>
                    <div className="p-col">
                        <FilterSidebar></FilterSidebar>
                        <Table tableData={result.results}></Table>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="search-bar-layout-content search-bar">
                <span className="p-input-icon-right display-search">
                    {/*<SearchBar></SearchBar>*/}
                    <AdvancedSearch></AdvancedSearch>
                </span>
            </div>
            <div className="tabview-demo our-layout-content">
                <div className="card">
                    <TabView className="tableview-tab">
                        <TabPanel leftIcon="fad fa-file-alt" header="Publications">
                            {
                                result?renderPage():console.log()
                            }
                        </TabPanel>
                        <TabPanel leftIcon="fad fa-table" header="Datasets">
                            <Datasets></Datasets>
                        </TabPanel>
                        <TabPanel leftIcon="fad fa-map-marked-alt" header="Maps">
                            <Maps></Maps>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    );
}

