import React from 'react';
import {
    ColumnDirective,
    ColumnsDirective,
    Edit,
    Filter,
    GridComponent,
    Inject,
    Page,
    Selection,
    Sort,
    Toolbar
} from '@syncfusion/ej2-react-grids';
import {Header} from "../components";
import {customersData, customersGrid} from "../data/dummy";

const Customers = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers"></Header>
            <GridComponent id="gridcomp" dataSource={customersData} allowPaging allowSorting toolbar={['Delete']}
                           editSettings={{allowDeleting: true, allowEditing: true}}>
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}></ColumnDirective>
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}></Inject>
            </GridComponent>
        </div>
    );
}

export default Customers;