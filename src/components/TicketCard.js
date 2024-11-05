import React from 'react';
import urgentColor from '../icons_FEtask/SVG - Urgent Priority colour.svg';
import highPriority from '../icons_FEtask/Img - High Priority.svg';
import mediumPriority from '../icons_FEtask/Img - Medium Priority.svg';
import lowPriority from '../icons_FEtask/Img - Low Priority.svg';
import noPriority from '../icons_FEtask/No-priority.svg';
import todoIcon from '../icons_FEtask/To-do.svg';
import inProgressIcon from '../icons_FEtask/in-progress.svg';
import backlogIcon from '../icons_FEtask/Backlog.svg';
import doneIcon from '../icons_FEtask/Done.svg';
import cancelledIcon from '../icons_FEtask/Cancelled.svg';
import threeDotMenu from '../icons_FEtask/3 dot menu.svg';

const TicketCard = ({ ticket, user }) => {
    const priorityIcons = {
        4: <img src={urgentColor} alt="Urgent Priority" />,
        3: <img src={highPriority} alt="High Priority" />,
        2: <img src={mediumPriority} alt="Medium Priority" />,
        1: <img src={lowPriority} alt="Low Priority" />,
        0: <img src={noPriority} alt="No Priority" />,
    };

    const statusIcons = {
        Todo: <img src={todoIcon} alt="To Do" />,
        'In Progress': <img src={inProgressIcon} alt="In Progress" />,
        Backlog: <img src={backlogIcon} alt="Backlog" />,
        Done: <img src={doneIcon} alt="Done" />,
        Cancelled: <img src={cancelledIcon} alt="Cancelled" />,
    };

    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <div className="ticket-priority">
                    {priorityIcons[ticket.priority]}
                </div>
                <div className="ticket-menu">
                    <img src={threeDotMenu} alt="Menu" className="three-dot-menu" />
                </div>
            </div>
            <h4>{ticket.title}</h4>
            <div className="ticket-status">
                {statusIcons[ticket.status]}
                <span>{ticket.status}</span>
            </div>
            <p>Assigned to: {user.name}</p>
        </div>
    );
};

export default TicketCard;
