import React, {useEffect, useRef, useState} from "react";
import {Column} from "primereact/column";
import {DataTable} from "primereact/components/datatable/DataTable";
import { BreadCrumb } from 'primereact/breadcrumb';
import { Button } from 'primereact/button';
import {InputText} from "primereact/inputtext";
import { Tooltip } from 'primereact/tooltip';
import {MultiSelect} from "primereact/multiselect";
import { SplitButton } from 'primereact/splitbutton';
import { Menu } from 'primereact/menu';
import {Sidebar} from "primereact/sidebar";

export const ResultsTable = props => {
    const [mainData, setMainData] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [visiblePanel, setVisiblePanel] = useState(false);
    const dt = useRef(null);
    const menu = useRef(null);
    const urlPath = '/#/publication/';

    useEffect(() => {
        if(props.tableData){
            let table = [...props.tableData];
            table.forEach(arr => arr.providers.forEach(obj => {
                if(arr.shortNames){
                    arr.shortNames = arr.shortNames + "," + obj.short_name;
                }else {
                    arr.shortNames = obj.short_name;
                }
            }))

        }
           setMainData(props.tableData);
    }, []);

    const representatives = [
        {type: "Scientific Publication"},
        {type: "Book / Monograph"},
        {type: "Report / Factsheet"},
        {type: "Working Paper"},
        {type: "Poster / Presentation"},
        {type: "Thesis"},
        {type: "Digital Material"},
        {type: "Other"}
    ];

    const providers = [
        {name: "CGIAR - Consortium of International Agricultural Research Centers", short: "CGIAR"},
        {name: "AfricaRice", short: "AfricaRice"},
        {name: "Bioversity International", short: "Bioversity International"},
        {name: "Bioversity-CIAT Alliance", short: "Bioversity-CIAT Alliance"},
        {name: "CIFOR - Center for International Forestry Research", short: "CIFOR"},
        {name: "ICARDA - International Center for Agricultural Research in the Dry Areas", short: "ICARDA"},
        {name: "CIAT - International Center for Tropical Agriculture", short: "CIAT"},
        {name: "ICRISAT - International Crops Research Institute for the Semi-Arid Tropics", short: "ICRISAT"},
        {name: "IFPRI - International Food Policy Research Institute", short: "IFPRI"},
        {name: "IITA - International Institute of Tropical Agriculture", short: "IITA"},
        {name: "ILRI - International Livestock Research Institute", short: "ILRI"},
        {name: "CIMMYT - International Maize and Wheat Improvement Center", short: "CIMMYT"},
        {name: "IRRI - International Rice Research Institute", short: "IRRI"},
        {name: "IRRI - Farm Household Survey Database", short: "IRRI"},
        {name: "IWMI - International Water Management Institute", short: "IWMI"},
        {name: "ICRAF - World Agroforestry Centre", short: "ICRAF"},
        {name: "WorldFish", short: "WorldFish"}
    ];

    const access_type = [
        {access: "Is Open", value: true},
        {access: "Restricted", value: false}
    ];

    const items = [
        { label: 'All Results' },
        { label: 'Filter 1' },
        { label: 'Filter 2' },
        { label: 'Filter 3' },
    ];

    const cols = [
        { field: 'issued_year', header: 'Year' },
        { field: 'title', header: 'Title' },
        { field: 'type', header: 'Type' },
        { field: 'providers', header: 'Providers' },
        { field: 'is_open', header: 'Access Type' }
    ];

    const items2 = [
        {
            label: 'CSV',
            icon: 'fad fa-file-csv fa-lg',
            command: () => exportCSV(false)
        },
        {
            label: 'XLS',
            icon: 'fad fa-file-excel fa-lg',
            command: () => exportExcel()
        },
        {
            label: 'PDF',
            icon: 'fad fa-file-pdf fa-lg',
            command: () => exportPdf()
        }
    ];


    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

    const onRepresentativesChange = e => {
        dt.current.filter(e.value, "type" , 'in');
        setSelectedRepresentative(e.value);
    }

    const onProvidersChange = e => {
        dt.current.filter(e.value, "shortNames" , 'in');
        setSelectedProvider(e.value);
        // dt.current.filter(e.value, "shortNames" , 'in');
        // console.log( dt.current);

        // props.tableData.filter(
        //     data =>{
        //         console.log(data.shortNames)
        //     }
        // )
        // setSelectedProvider(e.value);
    }

    const onTypesChange = e => {
        dt.current.filter(e.value, 'is_open', 'in');
        setSelectedType(e.value);
    }

    const reset = () => {
        setSelectedRepresentative(null);
        setSelectedProvider(null);
        setSelectedType(null);
        dt.current.reset();
    }

    const exportCSV = selectionOnly => {
        dt.current.exportCSV({ selectionOnly });
    }

    const exportPdf = () => {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, mainData);
                doc.save('products.pdf');
            })
        })
    }

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(mainData);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    }

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    const titleBodyTemplate = data => {
        return <div className="title-column">
            <img className="title-thumbnail" alt="thumbnail" src={data.thumbnail_url} onError={e => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={45} />
            <span className="image-text"><a href={urlPath + data.gardian_id}>{data.title}</a></span>
        </div>;
    }

    const imageBodyTemplate = data => {
        if(data.is_open){
            return <>
                <Tooltip target=".image-table"/>
                <img src={'assets/layout/images/open.png'} data-pr-tooltip={data.license} className="image-table"/>
            </>;
        } else {
          return <>
              <Tooltip target=".image-table"/>
              <img src={'assets/layout/images/close.png'} data-pr-tooltip={data.license} className="image-table"/>
          </>;
        }
    }

    const providersBodyTemplate = data => {
        let shortNames = [];
        let providers = data.providers;
        providers.forEach(name => shortNames.push(name.short_name));
        let combineNames = shortNames.join(" , ");
        return combineNames;
    }

    const header = <div className="p-grid">

        <div className="p-col">
            <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
        </div>

        <div className="p-col p-d-flex p-jc-center">
            <Button icon="fad fa-analytics" onClick={() => setVisiblePanel(true)} className="p-mr-2 filter-button" label=" Result Analytics" ></Button>
        </div>

        <div className="p-col p-d-flex p-jc-end">
            <Button label="Export" icon="fad fa-file-download fa-lg" className="exportButton" style={{marginRight: "8px"}} onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
            <Menu model={items2} popup ref={menu} id="popup_menu"/>
        </div>


    </div>

    const representativeFilter = <MultiSelect value={selectedRepresentative} options={representatives} onChange={onRepresentativesChange} optionLabel="type" optionValue="type" placeholder="All" className="p-column-filter" />;
    const providersFilter = <MultiSelect value={selectedProvider} options={providers} onChange={onProvidersChange} optionLabel="name" optionValue="short" placeholder="All" className="p-column-filter" />;
    const typesFilter = <MultiSelect value={selectedType} options={access_type} onChange={onTypesChange} optionLabel="access" optionValue="value" placeholder="All" className="p-column-filter" />;

    return <>
        <Sidebar className="" visible={visiblePanel} onHide={() => setVisiblePanel(false)}>
            <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
            <Button type="button" onClick={() => setVisiblePanel(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
            <Button type="button" onClick={() => setVisiblePanel(false)} label="Cancel" className="p-button-secondary" />
        </Sidebar>

        <Tooltip target=".export-buttons>button" position="bottom" />
        <DataTable  ref={dt} header={header}  paginator value={mainData} rows={20} rowsPerPageOptions={[20,50]}>
            <Column field="issued_year" header="Year" sortable filter filterPlaceholder="Search" filterMatchMode="contains" style={{width: "120px"}}></Column>
            <Column field="title" header="Title" body={titleBodyTemplate} sortable filter filterPlaceholder="Search by title" filterMatchMode="contains"></Column>
            <Column field="type" header="Type" sortable filter filterElement={representativeFilter}  style={{width: "150px"}} ></Column>
            <Column field="providers" header="Providers" body={providersBodyTemplate} sortable filter filterElement={providersFilter} style={{width: "150px"}}></Column>
            <Column field="is_open" header="Access Type" body={imageBodyTemplate} sortable filter filterElement={typesFilter}  style={{width: "150px"}} ></Column>
        </DataTable>
    </>;
}
