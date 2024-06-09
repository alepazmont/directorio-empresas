/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fetchEmpresas } from "../../services/empresaService";
import Card from "react-bootstrap/esm/Card";
import { BarChart } from "@tremor/react";
import { fetchUsers } from "../../services/userService";

const Graficos = () => {
  const [empresas, setEmpresas] = useState([]);
  const [numEmpresas, setNumEmpresas] = useState(0);

  const [usuarios, setUsuarios] = useState([]);
  const [numUsuarios, setNumUsuarios] = useState(0);

  useEffect(() => {
    const loadEmpresas = async () => {
      try {
        const empresasData = await fetchEmpresas();
        setEmpresas(empresasData);
        setNumEmpresas(empresasData.length);
        console.log('Empresas cargadas:', empresasData);  // Verificación en la consola
      } catch (error) {
        console.error("Error obteniendo empresas", error);
      }
    };



    loadEmpresas();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsuarios(usersData);
        setNumUsuarios(usersData.length);        
        console.log('Usuarios cargados:', usersData);  // Verificación en la consola

      } catch (error) {
        console.error("Error obteniendo usuarios", error);
      }
    };

    loadUsers();
  }, []);

  const chartdata = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
    },
    {
      name: "Ferns",
      "Number of threatened species": 281,
    },
    {
      name: "Arachnids",
      "Number of threatened species": 251,
    },
    {
      name: "Corals",
      "Number of threatened species": 232,
    },
    {
      name: "Algae",
      "Number of threatened species": 98,
    },
  ];

  const dataFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Subtitle>Gráficos de uso</Card.Subtitle>
        <Card.Body>
          <BarChart
            data={chartdata}
            index="name"
            categories={["Number of threatened species"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            onValueChange={(v) => console.log(v)}
          />
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Graficos;
