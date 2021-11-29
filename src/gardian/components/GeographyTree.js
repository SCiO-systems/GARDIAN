import React, { useState} from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';

export const TreeCountries = (props) => {
    const [expandedKeys, setExpandedKeys] = useState({});

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of props.treeData) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    }

    const collapseAll = () => {
        setExpandedKeys({});
    }

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    
    return (
        <div>
            <div className="p-mb-4">
                <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
            </div>
            <Tree value={props.treeData} expandedKeys={expandedKeys}
                  onToggle={e => setExpandedKeys(e.value)} />
        </div>

    );
}
