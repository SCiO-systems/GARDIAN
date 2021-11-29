import React, {useEffect, useState} from "react";
import {SearchBar} from "../components/SearchBar";
// import {SearchResultsContainer} from "../components/SearchResultsContainer";
import {AdvSearch} from "../components/AdvSearch";
import {Tabs} from "../components/Tabs";
import {TabPanel, TabView} from "primereact/tabview";
import {Datasets} from "../components/Datasets";
import {Maps} from "../components/Maps";
import {TagCloud} from "../components/TagCloud";

export const Search = () => {

    // const [results, setresults] = useState([5]);
    // const resultService = new ResultsService();
    //
    // useEffect(() => {
    //     resultService.getResults().then(data => setresults(data));
    // }, []);

    return (
        <div>
            <div className="search-bar-layout-content  search-bar" style={{width: "100%", marginBottom: "20px", borderTop: "3px solid #fff", background: "#ababab"}}>
                <span className="p-input-icon-right"  style={{display: "block"}}>
                    <SearchBar></SearchBar>
                    <AdvSearch></AdvSearch>
                </span>
            </div>
           <Tabs>
                <TagCloud></TagCloud>
           </Tabs>
        </div>
    );
}
