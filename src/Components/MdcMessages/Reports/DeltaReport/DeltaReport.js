import React, {useState} from 'react';
import MUIDataTable from "mui-datatables";
import Grid from '@material-ui/core/Grid';
import "../../../../scss/_main.scss";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CorrelationAnalysisTable from '../../../Correlation/CorrelationAnalysisScreen/CorrelationAnalysisTable';


const DeltaReport = (props) => {
  const [rowsSelectedState, setRowsSelected] = useState([]);
  const [deltaParameters, setDeltaParameters] = useState(JSON.parse(localStorage.getItem('delta-report')));

  const HandleMultipleRowSelect = (rowsSelectedData, allRows, rowsSelected) => {
    setRowsSelected(rowsSelected);
  };

  const headingStyle = {
    maxWidth:'200px',
    minWidth:'50px',
    padding:'5px',
    textAlign:"center",
    margin: '0px',
    whiteSpace: 'normal',
  }

  const columnStyle = {
    maxWidth:'150px',
    // minWidth:'100px',
    padding:'13px',
    textAlign:"left",
    margin: '0px',
    // overflowY: 'scroll',
    // maxHeight: '100px',
  }

  const columns = [
    {
      name: 'tail', 
      label: 'Tail#',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'ACSN', 
      label: 'ACSN',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'EICASMessages', 
      label: 'EICAS Related',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'mdcMessages', 
      label: 'MDC Messages',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'LRU', 
      label: 'LRU',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'ATA', 
      label: 'ATA',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'B1Equation', 
      label: 'B1 Equation',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'type', 
      label: 'Type',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
    },
    {
      name: 'equationDescription', 
      label: 'Equation Description',
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'totalOccurences', 
      label: 'Occ',
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        secondaryLabel: 'Total Occurences',
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'consecutiveDays', 
      label: 'Cons. Days',
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        secondaryLabel: 'Consecutive Days',
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'ConsecutiveFlights', 
      label: 'Cons. Legs', 
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        secondaryLabel: 'Consecutive Flight Legs',
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'intermittent', 
      label: 'Int.', 
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        secondaryLabel: 'Intermittency',
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'dateFrom', 
      label: 'Date From',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'dateTo', 
      label: 'Date To',
      options: {
        filter: true,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'reasons', 
      label: 'Reasons For Flag',
      options: {
        filter: false,
        filterType: 'dropdown',
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'priority', 
      label: 'Priority',
      options: {
       filter: true,
       filterType: 'dropdown',
       sort: true,
      }
     },
     {
      name: 'topMessage', 
      label: 'MHIRJ Known Message',
      options: {
        filter: false,
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'honey', 
      label: 'Mel or No-Dispatch',
      options: {
        filter: false,
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'input', 
      label: 'MHIRJ Input',
      options: {
        filter: false,
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'recommendation', 
      label: 'MHIRJ Recommended Action',
      options: {
        filter: false,
        sort: true,
        setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'comments', 
      label: 'MHIRJ Additional Comment',
      options: {
       filter: false,
       sort: true,
       setCellProps: () => ({style: columnStyle}),
        setCellHeaderProps: () => ({ style: headingStyle }),
      }
     },
     {
      name: 'isDarkOrange', 
      label: 'isDarkOrange',
      options: {
       filter: false,
       sort: true,
       display: false,
      }
     },
     {
      name: 'isDarkRed', 
      label: 'isDarkRed',
      options: {
       filter: false,
       sort: false,
       display: false,
      }
     },
     {
      name: 'isJam', 
      label: 'Jam',
      options: {
       filter: true,
       filterType: 'dropdown',
       customFilterListOptions: {
        render: item => item == false ? "False Jams" : "True Jams"
      },
       sort: false,
       display: false,
      }
     },
     {
      name: 'isLightOrange', 
      label: 'isLightOrange',
      options: {
       filter: false,
       sort: false,
       display: false,
      }
     },
     {
      name: 'isLightRed', 
      label: 'isLightRed',
      options: {
       filter: false,
       sort: false,
       display: false,
      }
     },
    ];

    let data = [];
      props.data?.map((item => {
        data.push(
          {
            ACSN: item["AC SN"], 
            tail: item["Tail#"],
            EICASMessages: item["EICAS Message"], 
            mdcMessages: item["MDC Message"],  
            LRU: item["LRU"],  
            ATA: item["ATA"],  
            B1Equation: item["B1-Equation"],  
            type: item["Type"],   
            equationDescription: item["Equation Description"],   
            totalOccurences: item["Total Occurences"],  
            consecutiveDays: item["Consective Days"],
            ConsecutiveFlights: item["Consecutive FL"],  
            intermittent: item["Intermittent"],  
            reasons: item["Reason(s) for flag"],   
            priority: item["Priority"],   
            topMessage: item["Known Top Message - Recommended Documents"],  
            recommendation: item["MHIRJ ISE Recommendation"], 
            comments: item["Additional Comments"],  
            input: item["MHIRJ ISE Input"],  
            isJam: item["is_jam"],
            isDarkOrange: item["is_dark_orange"],
            isDarkRed: item["is_dark_red"],
            isLightOrange: item["is_light_orange"],
            isLightRed: item["is_light_red"],
            honey: "",
            dateFrom: "",
            dateTo: "",
          }
        );
        return data;
      }
      ));

    const options = {
      selectableRows: 'multiple',
      selectableRowsOnClick: true,
      rowsSelected: rowsSelectedState,
      onRowSelectionChange: HandleMultipleRowSelect,
      filter: true,
      filterType: 'multiselect',
      responsive: "standard",
      fixedHeader: true,
      fixedSelectColumn: true,
      jumpToPage: true,
      resizableColumns: true,
      expandableRowsHeader: false,
      downloadOptions: {
        filename: 'Delta Report.csv',
        separator: ',',
      },
      expandableRows: true,
      renderExpandableRow: (rowData, rowMeta) => {
        return (    
        <TableRow>
          <TableCell colSpan={rowData.length+1}>
            <CorrelationAnalysisTable
              dateFrom = {deltaParameters.deltaFrom}
              dateTo = {deltaParameters.deltaTo}
              tail = {rowData[0]}
              EqID = {rowData[6]}
            />
            </TableCell>
        </TableRow>
        );
      },
      setRowProps: (row, index) => {
        if (row[22] === true) {
          return {style: {background: '#ff4c00'}} // dark orange - row 22 from columns
        } else if (row[23] === true) {
          return {style: {background: '#ff0000'}} // dark red - row 23 from columns
        } else if (row[24] === true) {
          return {style: {background: '#ff7f50'}} //is jam - row 24 from columns
        } else if (row[25] === true) {
           return {style: {background: '#ffb89a'}} // light orange - row 25 from columns
        } else if (row[26] === true) {
          return {style: {background: '#ff9a9a'}} // light red - row 26 from columns
        }
      },
      draggableColumns: {
        enabled: false,
        transitionTime: 300,
      },
      textLabels: {
        body: {
            noMatch: props.loading ? 'Please wait, loading data ...' : "Sorry, there is no matching data to display",
            toolTip: "Sort",
            columnHeaderTooltip: column => column.secondaryLabel ? `Sort for ${column.secondaryLabel}` : "Sort"
        },
    },
      elevation: 4,
      rowsPerPage: 10,
      rowsPerPageOptions: [10,20,50],
      selectToolbarPlacement:"none",
      tableBodyHeight: props.loading === true || data.length === 0 ? '200px' : '650px'
    };
  

  return (
    <div class="reports-root">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <MUIDataTable
            title= {props.title}
            data={data}
            columns={columns}
            options={options}
          />
        </Grid> 
      </Grid> 
    </div>
  );
}
export default DeltaReport;

