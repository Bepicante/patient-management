import {useEffect, useState} from 'react';
import {Patient} from "@/types";

export const usePatients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    return { patients, loading, setPatients };
};
