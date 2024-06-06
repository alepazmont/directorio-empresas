import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react"
import Card from "react-bootstrap/Card"

  const UsageStats = () => {
    return (
      <Card>
        <Card.Body>
          <Card.Subtitle>Datos del directorio</Card.Subtitle>
          
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

        </Card.Body>      
    </Card>

       
    )
  }
  
  export default UsageStats