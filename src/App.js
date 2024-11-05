// // src/App.js
// import React, { useEffect, useState } from 'react';
// import KanbanBoard from './components/KanbanBoard';
// import DisplayOptions from './components/DisplayOptions';
// import { fetchTickets } from './api';

// function App() {
//     const [tickets, setTickets] = useState([]);
//     const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
//     const [sortOrder, setSortOrder] = useState(localStorage.getItem('sortOrder') || 'priority');

//     useEffect(() => {
//         fetchTickets().then(data => setTickets(data)).catch(console.error);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('groupBy', groupBy);
//         localStorage.setItem('sortOrder', sortOrder);
//     }, [groupBy, sortOrder]);

//     return (
//         <div className="App">
//             <DisplayOptions groupBy={groupBy} setGroupBy={setGroupBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
//             <KanbanBoard tickets={tickets} groupBy={groupBy} sortOrder={sortOrder} />
//         </div>
//     );
// }

// export default App;


// src/App.js
// import React from 'react';
// import KanbanBoard from './components/KanbanBoard';
// import './index.css';

// function App() {
//     return (
//         <div className="App">
//             <h1>Kanban Board</h1>
//             <KanbanBoard />
//         </div>
//     );
// }

// export default App;


// src/App.js
import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './index.css';

function App() {
    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <KanbanBoard />
        </div>
    );
}

export default App;
