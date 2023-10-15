import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div className="TicketCard">
      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-status">Status: {ticket.status}</p>
      <p className="ticket-assigned-to">Assigned To: {ticket.assigned_to}</p>
      <p className="ticket-priority">Priority: {ticket.priority}</p>
    </div>
  );
}

export default TicketCard;
