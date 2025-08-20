import React from 'react';
import './Style.css';

const dummyUsers = [
  { id: 'alice@email.com', name: 'Alice', email: 'alice@email.com', orders: 3, address: '123 Main St, NY', delivered: true, product: 'MacBook Air', price: 1000 },
  { id: 'bob@email.com', name: 'Bob', email: 'bob@email.com', orders: 5, address: '456 Oak Ave, CA', delivered: false, product: 'Samsung Galaxy Book', price: 950 },
  { id: 'charlie@email.com', name: 'Charlie', email: 'charlie@email.com', orders: 2, address: '789 Pine Rd, TX', delivered: true, product: 'Dell Inspiron', price: 1299 },
];

const dummySales = [
  { product: 'MacBook Air', sold: 10, price: 1000, discount: 10, delivered: true },
  { product: 'Samsung Galaxy Book', sold: 7, price: 950, discount: 5, delivered: false },
  { product: 'Dell Inspiron', sold: 12, price: 1299, discount: 15, delivered: true },
];

const dummyDeliveryBoys = [
  { id: 'DB101', name: 'Ravi Kumar', phone: '9876543210', assignedArea: 'NY', ordersDelivered: 15, status: 'Active' },
  { id: 'DB102', name: 'Suresh Singh', phone: '9123456780', assignedArea: 'CA', ordersDelivered: 10, status: 'Active' },
  { id: 'DB103', name: 'Amit Sharma', phone: '9988776655', assignedArea: 'TX', ordersDelivered: 8, status: 'On Leave' },
];

const totalRevenue = dummySales.reduce(
  (sum, s) => sum + s.sold * s.price * (1 - s.discount / 100),
  0
);
const totalProfit = dummySales.reduce(
  (sum, s) => sum + s.sold * (s.price * (1 - s.discount / 100) - s.price * 0.7),
  0
);
const totalDiscount = dummySales.reduce(
  (sum, s) => sum + s.sold * s.price * (s.discount / 100),
  0
);

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="admin-summary-cards">
        <div className="admin-summary-card">
          <div className="admin-summary-title">Total Revenue</div>
          <div className="admin-summary-value">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="admin-summary-card">
          <div className="admin-summary-title">Total Profit</div>
          <div className="admin-summary-value">${totalProfit.toLocaleString()}</div>
        </div>
        <div className="admin-summary-card">
          <div className="admin-summary-title">Total Discount Given</div>
          <div className="admin-summary-value">${totalDiscount.toLocaleString()}</div>
        </div>
        <div className="admin-summary-card">
          <div className="admin-summary-title">Total Orders</div>
          <div className="admin-summary-value">{dummyUsers.reduce((a, u) => a + u.orders, 0)}</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>User Info</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>User ID (Login Email)</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Product</th>
              <th>Price</th>
              <th>Address</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.orders}</td>
                <td>{u.product}</td>
                <td>${u.price}</td>
                <td>{u.address}</td>
                <td>
                  {u.delivered
                    ? <span style={{color: 'green', fontWeight: 600}}>Yes</span>
                    : <span style={{color: 'red', fontWeight: 600}}>No</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dashboard-section">
        <h3>Product Sales</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Sold</th>
              <th>Price</th>
              <th>Discount (%)</th>
              <th>Revenue</th>
              <th>Profit</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
            {dummySales.map((s, i) => (
              <tr key={i}>
                <td>{s.product}</td>
                <td>{s.sold}</td>
                <td>${s.price}</td>
                <td>{s.discount}%</td>
                <td>${(s.sold * s.price * (1 - s.discount / 100)).toLocaleString()}</td>
                <td>${(s.sold * (s.price * (1 - s.discount / 100) - s.price * 0.7)).toLocaleString()}</td>
                <td>
                  {s.delivered
                    ? <span style={{color: 'green', fontWeight: 600}}>Yes</span>
                    : <span style={{color: 'red', fontWeight: 600}}>No</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dashboard-section">
        <h3>Delivery Boy Details</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Delivery Boy ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Assigned Area</th>
              <th>Orders Delivered</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyDeliveryBoys.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.assignedArea}</td>
                <td>{d.ordersDelivered}</td>
                <td>
                  {d.status === 'Active'
                    ? <span style={{color: 'green', fontWeight: 600}}>Active</span>
                    : <span style={{color: 'orange', fontWeight: 600}}>{d.status}</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
