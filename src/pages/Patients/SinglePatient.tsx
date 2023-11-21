import React from 'react';

import {
    Col, Divider, Grid, Metric, Subtitle, Table, TableHead, TableHeaderCell, TableRow, Text, Title
} from '@tremor/react';

import { Card, CardContent, CardHeader } from '../../components/ui/card';

function SinglePatient() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-4 mb-4">
        <div className="flex flex-row items-center space-x-3">
          <img
            src="https://ui-avatars.com/api/?background=random&name=Divyansh+Gupta"
            alt=""
            className="w-16 h-16 bg-red-400 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <Title className="text-xl font-bold">Divyansh Gupta</Title>
            <Subtitle className="text-sm font-medium text-gray-400">
              Delhi, India
            </Subtitle>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
          <Card>
            <CardHeader>
              <Title>Medical Details</Title>
            </CardHeader>
            <CardContent>
              <Metric>KPI 2</Metric>
            </CardContent>
          </Card>
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <CardHeader className="-mb-8">
                <Title>Visit History</Title>
              </CardHeader>
              <CardContent>
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
                </Table>
              </CardContent>
            </Card>
          </Col>
          <Col numColSpan={3}>
            <Card>
              <CardHeader className="-mb-8">
                <Title>Medical Records</Title>
              </CardHeader>
              <CardContent>
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
                </Table>
              </CardContent>
            </Card>
          </Col>
        </Grid>
      </div>
    </div>
  );
}

export default SinglePatient;
