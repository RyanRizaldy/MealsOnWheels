import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function DeliveryV() {
  const [orderList, setOrderList] = useState([]);
  const [userLog, setUserLog] = useState(null);

  useEffect(() => {
    console.log(userLog)
    setUserLog(JSON.parse(sessionStorage.getItem("user")));
    fetchOrderList();
  }, []);

  const fetchOrderList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/order/list_driver_order"
      );

      console.log(response.data)
      setOrderList(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const handleProsesOrder = async (orderId) => {
   

    const data = {
        orderId : orderId,
        volunteerId: userLog.roleData.volunteerId
    }

    try {
      await axios.post(
        `http://localhost:8080/api/order/ready_order_volunteer`,
        data
      )

      // Refresh the order list after successful processing
      fetchOrderList();
    } catch (error) {
      console.error("Error processing order:", error);
      // Handle error if needed
    }
  };
  const handleDeliverOrder = async (orderId) => {
  
    try {
      await axios.post(
        `http://localhost:8080/api/order/delivered_order/${orderId}`
      );
      // Refresh the order list after successful processing
      fetchOrderList();
    } catch (error) {
      console.error("Error processing order:", error);
      // Handle error if needed
    }
  };

  return (
    <div>
      <Table striped responsive className="border">
        <thead>
          <tr>
            <th>No</th>
            <th>Member Name</th>
            <th>Order No</th>
            <th>Partner</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr key={order.orderId}>
              <td>{index + 1}</td>
              <td>{order.member.name}</td>
              <td>{order.orderId}</td>
              <td>{order.partnerName === null ? "-" : order.partnerName}</td>
              <td>{order.driver === null ? "-" : order.driver.name}</td>
              <td className="">{order.status}</td>
              <td>
                {order.status === "PROCESSING" && (
                    <Button
                        onClick={() =>
                        handleProsesOrder(order.orderId)
                        }
                    >
                        Deliver
                    </Button>
                )}

                {order.status === "DELIVERING" && (
                  <Button
                    onClick={() =>
                      handleDeliverOrder(order.orderId)
                    }
                  >
                    Delivered
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DeliveryV;
