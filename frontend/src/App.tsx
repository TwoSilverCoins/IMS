import React from 'react';
import CreateEquipment from './components/createEquipment';
import EquipmentList from './components/equipmentList';
import EditEquipment from './components/editEquipment';
import UpdateStock from './components/updateStock';
import StockDashboard from './components/stockDashboard';
import StockAlerts from './components/stockAlerts';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App() {
    return (
        <div>
            <h1>Inventory Management System</h1>
            <CreateEquipment />
            <EquipmentList />
            <EditEquipment />
            <UpdateStock id={0} initialStockLevel={0} initialReorderPoint={0} />
            <StockDashboard />
            <StockAlerts />

            <Router>
                <Routes>
                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;
