import React, { useContext } from 'react'
import { CODE, TableContext } from './MineSearch';

const Td = ({ rowIndex, cellIndex }) => {
    const { tableData } = useContext(TableContext);
    
    return (
        <td>
					{tableData[rowIndex][cellIndex]}
				</td>
    )

}

export default Td;