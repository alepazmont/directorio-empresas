import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Card 
  } from '@tremor/react';
  
  const UsageStats = () => {
    return (
        <Card
        className="max-w-xs"
        decoration="top"
        decorationColor="indigo"
      >
        <div className="mx-auto max-w-2xl">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Tipo</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Cantidad
              </TableHeaderCell>

            </TableRow>
          </TableHead>
    
          <TableBody>
            <TableRow>
              <TableCell>Usuarios</TableCell>
              <TableCell className="text-right">10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Empresas</TableCell>
              <TableCell className="text-right">16</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      </Card>
    )
  }
  
  export default UsageStats