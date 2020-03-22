import React from "react";
import { Table } from "antd";
import "./Table.css";

export default function TableBlock({ data }) {
  // const id = new Date().getUTCMilliseconds();
  // console.log(id);
  const columns = [
    {
      title: "USD",
      dataIndex: "USD",
      key: "USD"
    },
    {
      title: "EUR",
      dataIndex: "EUR",
      key: "EUR"
    }
  ];
  if (data.length > 0) {
    return (
      <div className="table-block">
        <Table
          columns={columns}
          pagination={false}
          rowKey={row => row.id}
          dataSource={data}
        />
        ;
      </div>
    );
  }
  return <div>Loading</div>;
}
