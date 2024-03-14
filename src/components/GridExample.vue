<template>
    <AgGridVue
        style="width: 100%; height: 200px;"
        class="ag-theme-quartz"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :modules="modules"
    />
</template>

<script>
import { AgGridVue } from '@ag-grid-community/vue3';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';

export default {
    name: 'GridExample',
    compatConfig: {
        MODE: 3,
    },
    components: {
        AgGridVue,
    },
    data() {
    return {
        modules: [
            ClientSideRowModelModule
        ],
        rowData: [
            { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
            { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
            { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
            { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
            { make: 'Fiat', model: '500', price: 15774, electric: false },
            { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
        ],
        // Column Definitions: Defines & controls grid columns.
        columnDefs: [
            { field: 'make' },
            { field: 'model' },
            { field: 'price' },
            { field: 'electric' },
        ],
        themeClass:
            "ag-theme-quartz",
        }
    }
}
</script>