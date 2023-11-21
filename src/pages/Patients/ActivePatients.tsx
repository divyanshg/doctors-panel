import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
    BadgeDelta, Divider, MultiSelect, MultiSelectItem, Subtitle, Table, TableBody, TableCell,
    TableHead, TableHeaderCell, TableRow, Title
} from '@tremor/react';

import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Skeleton } from '../../components/ui/skeleton';
import useClientUrl from '../../hooks/useClientUrl';

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

function ActivePatients() {
  document.title = "Patients | Medivault";
  const [selectedNames, setSelectedNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const genLink = useClientUrl();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  const isSalesPersonSelected = (patient: Patients) =>
    selectedNames.includes(patient.name as never) || selectedNames.length === 0;
  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-4 mb-4">
        <div className="flex flex-col space-y-1">
          <Title className="text-xl font-bold">Active patients</Title>
          <Subtitle className="text-sm font-medium text-gray-400">
            Here you can view all of your patients
          </Subtitle>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col space-y-4">
        <Card className="border-none">
          <CardHeader className="p-0">
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
          </CardHeader>
          <CardContent className="p-0">
            <Table className="mt-6">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Leads
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Sales ($)
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Quota ($)
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Variance
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Region
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Status
                  </TableHeaderCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {isLoading
                  ? [1, 2, 3, 4].map((_, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <Skeleton className="\w-56 h-4" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="float-right w-32 h-4" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="float-right w-32 h-4" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="float-right w-32 h-4" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="float-right w-32 h-4" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="float-right w-32 h-4" />
                        </TableCell>
                        <TableCell className="flex justify-end">
                          <Skeleton className="w-32 h-4" />
                        </TableCell>
                      </TableRow>
                    ))
                  : patients
                      .filter((item) => isSalesPersonSelected(item))
                      .map((item, i) => (
                        <TableRow key={item.name}>
                          <TableCell className='flex items-center space-x-2'>
                            <img
                              className="w-8 h-8 rounded-full"
                              src={`https://ui-avatars.com/api/?background=random&name=${item.name}`}
                              alt=""
                            />
                            <Link to={genLink(`patients/${i}`)} className='hover:underline hover:text-blue-400'>
                              {item.name}
                            </Link>
                          </TableCell>
                          <TableCell className="text-right">
                            {item.leads}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.sales}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.quota}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.variance}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.region}
                          </TableCell>
                          <TableCell className="text-right">
                            <BadgeDelta deltaType={item.deltaType} size="xs">
                              {item.status}
                            </BadgeDelta>
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Outlet />
    </div>
  );
}

export default ActivePatients;
