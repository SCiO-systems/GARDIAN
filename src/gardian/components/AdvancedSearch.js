import {Fieldset} from "primereact/fieldset";
import QueryBuilder from "react-querybuilder";
import React from "react";


export const AdvSearch = () => {

    const fields = [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'age', label: 'Age' },
        { name: 'address', label: 'Address' },
        { name: 'phone', label: 'Phone' },
        { name: 'email', label: 'Email' },
        { name: 'twitter', label: 'Twitter' },
        { name: 'isDev', label: 'Is a Developer?', defaultValue: false }
    ];

    function logQuery(query) {
        console.log(query);
    }

    return (
        <div>
            <Fieldset className="fieldset-advanced-search" legend="Advanced Search" toggleable collapsed>
                <QueryBuilder fields={fields} onQueryChange={logQuery}/>
            </Fieldset>
        </div>
    );
}
