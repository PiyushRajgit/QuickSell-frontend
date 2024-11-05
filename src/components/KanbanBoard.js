import React, { useEffect, useState } from 'react';
import TicketCard from './TicketCard';

function KanbanBoard() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [grouping, setGrouping] = useState("User"); 

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                "tickets": [
                    {"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},
                    {"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In Progress","priority":3},
                    {"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In Progress","priority":1},
                    {"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In Progress","priority":3},
                    {"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In Progress","priority":0},
                    {"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},
                    {"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},
                    {"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In Progress","priority":3},
                    {"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},
                    {"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog"}
                ],
                "users": [
                    {"id":"usr-1","name":"Anoop Sharma","available":false},
                    {"id":"usr-2","name":"Yogesh","available":true},
                    {"id":"usr-3","name":"Shankar Kumar","available":true},
                    {"id":"usr-4","name":"Ramesh","available":true},
                    {"id":"usr-5","name":"Suresh","available":true}
                ]
            };
            setTickets(data.tickets);
            setUsers(data.users);
        };

        fetchData();
    }, []);

   
    const priorityLabels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No Priority"
    };

    
    const groupedTickets = tickets.reduce((acc, ticket) => {
        if (grouping === "User") {
            const user = users.find(user => user.id === ticket.userId);
            const userName = user ? user.name : "Unknown User";
            if (!acc[userName]) acc[userName] = [];
            acc[userName].push(ticket);
        } else if (grouping === "Priority") {
            const priorityLabel = priorityLabels[ticket.priority] || "No Priority";
            if (!acc[priorityLabel]) acc[priorityLabel] = [];
            acc[priorityLabel].push(ticket);
        }
        return acc;
    }, {});

    return (
        <div className="kanban-board">
            <div className="controls">
                <label>Grouping: 
                    <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Priority">Priority</option>
                    </select>
                </label>
            </div>
            <div className="kanban-columns">
                {Object.keys(groupedTickets).map(group => (
                    <div key={group} className="kanban-column">
                        <h3>{group} ({groupedTickets[group]?.length || 0})</h3>
                        {groupedTickets[group].map(ticket => {
                            const user = users.find(user => user.id === ticket.userId);
                            return (
                                <TicketCard key={ticket.id} ticket={ticket} user={user || { name: "Unknown User" }} />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KanbanBoard;
