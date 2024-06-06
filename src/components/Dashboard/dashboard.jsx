import React, { useState } from 'react';
import './dashboard.css';
import Table from 'react-bootstrap/Table';

function Dashboard() {
    const [appointments, setAppointments] = useState([
        { id: 1, date: '2024-06-10', hostipalid: '1589', patientName: 'John Doe', doctor: 'Dr. Smith' },
        { id: 2, date: '2024-06-12', hostipalid: '1659', patientName: 'Jane Doe', doctor: 'Dr. Brown' },
        { id: 3, date: '2024-06-15', hostipalid: '8956', patientName: 'Bob Smith', doctor: 'Dr. Johnson' },
        { id: 4, date: '2024-06-18', hostipalid: '8789', patientName: 'Alice Brown', doctor: 'Dr. Johnson' },
        { id: 5, date: '2024-06-20', hostipalid: '6489', patientName: 'John Wick', doctor: 'Naresh Trehan' },
        { id: 6, date: '2024-06-22', hostipalid: '1147', patientName: 'Alexander', doctor: 'Surbhi Anand' },
        { id: 7, date: '2024-06-24', hostipalid: '3589', patientName: 'Mickle', doctor: 'Siddhartha Mukherjee' },
        { id: 8, date: '2024-06-26', hostipalid: '9826', patientName: 'Nickly', doctor: 'Sudhansu Bhattacharyya' },

    ]);

    const [filterDate, setFilterDate] = useState('');
    const [filterPatientName, setFilterPatientName] = useState('');
    const [filterDoctor, setFilterDoctor] = useState('');

    const filteredAppointments = appointments.filter(appointment => {
        return (
            (filterDate ? appointment.date === filterDate : true) &&
            (filterPatientName ? appointment.patientName.toLowerCase().includes(filterPatientName.toLowerCase()) : true) &&
            (filterDoctor ? appointment.doctor.toLowerCase().includes(filterDoctor.toLowerCase()) : true)
        );
    });

    return (
        <div className="dashboard">
            <h5>Appointment-Reports</h5>
            <div className="filters">
                <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    placeholder="Filter by Date"
                />
                <input
                    type="text"
                    value={filterPatientName}
                    onChange={(e) => setFilterPatientName(e.target.value)}
                    placeholder="Filter by Patient Name"
                />
                <input
                    type="text"
                    value={filterDoctor}
                    onChange={(e) => setFilterDoctor(e.target.value)}
                    placeholder="Filter by Doctor"
                />
            </div>
            <div className='appointments'>
                <Table className="appointments-table" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Hostpial Id</th>
                            <th>Patient Name</th>
                            <th>Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.hostipalid}</td>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.doctor}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Dashboard;

