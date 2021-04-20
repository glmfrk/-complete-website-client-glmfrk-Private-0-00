import React from 'react';

const OrderList = () => {
    return (
        <div className="col-md-12">
            <table className="table table-striped table-dark">
                <thead className="thead-light">
                    <tr>
                    <th className="text-secondary text-left" scope="col">SL No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Pay With</th>
                    <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;