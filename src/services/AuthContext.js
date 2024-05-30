import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken, setToken } from './auth';
import axios from './axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = getToken();
            if (token) {
                try {
                    const response = await axios.get('/user'); // Endpoint que retorna os dados do usuário
                    setUser(response.data);
                } catch (error) {
                    console.error('Erro ao carregar dados do usuário:', error);
                    removeToken();
                }
            }
        };

        fetchUser();
    }, []);

    const login = async (email, password) => {
        
        const response = await axios.post('/login', { email, password });
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        removeToken();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
