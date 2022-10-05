import React from 'react';
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Inject,
    Page,
    Search,
    Toolbar
} from '@syncfusion/ej2-react-grids';
import {employeesData, employeesGrid} from "../data/dummy";
import {Header} from '../components';

const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees"></Header>
            <GridComponent width="auto" dataSource={employeesData} allowPaging allowSorting toolbar={['Search']}>
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}></ColumnDirective>
                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]}></Inject>
            </GridComponent>
        </div>
    );
}

export default Employees;