import { useState } from 'react';

import {
    BadgeDelta, Card, Grid, Metric, MultiSelect, MultiSelectItem, Table, TableBody, TableCell,
    TableHead, TableHeaderCell, TableRow, Text
} from '@tremor/react';

interface Patients {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
  deltaType: string;
}

const patients: Patients[] = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "moderateIncrease",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Peter Moore",
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
];

const categories = [
  {
    title: "Sales",
    metric: "$ 23,456",
  },
  {
    title: "Profit",
    metric: "$ 13,123",
  },
  {
    title: "Total Patients",
    metric: "456",
  },
];

function Patients() {
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (patient: Patients) =>
    selectedNames.includes(patient.name as never) || selectedNames.length === 0;
  return (
    <div>
      <div className="pb-4 mb-4 border-b border-gray-300">
        <h1 className="text-4xl font-bold">Patients</h1>
        <h3 className="text-lg font-semibold text-gray-600">
          List of all the patients handled by you
        </h3>
      </div>
      <div className="flex flex-col space-y-4">
        <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          {categories.map((item) => (
            <Card key={item.title}>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            </Card>
          ))}
        </Grid>
        <Card>
          <MultiSelect
            onValueChange={setSelectedNames as never}
            placeholder="Select Patients..."
            className="max-w-xs"
          >
            {patients.map((item) => (
              <MultiSelectItem key={item.name} value={item.name}>
                {item.name}
              </MultiSelectItem>
            ))}
          </MultiSelect>
          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell className="text-right">Leads</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Sales ($)
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Quota ($)
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Variance
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Region</TableHeaderCell>
                <TableHeaderCell className="text-right">Status</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {patients
                .filter((item) => isSalesPersonSelected(item))
                .map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">{item.leads}</TableCell>
                    <TableCell className="text-right">{item.sales}</TableCell>
                    <TableCell className="text-right">{item.quota}</TableCell>
                    <TableCell className="text-right">
                      {item.variance}
                    </TableCell>
                    <TableCell className="text-right">{item.region}</TableCell>
                    <TableCell className="text-right">
                      <BadgeDelta deltaType={item.deltaType} size="xs">
                        {item.status}
                      </BadgeDelta>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default Patients;
