import Keycloak from "keycloak-js";
import {createContext} from "react";

interface User{
    id: string;
    username: string;
    email?: string;
    roles?: string[];
}

interface  AuthContextType{
    isAuthenticated: boolean;
    token: string | null;
    user: User | null;
    initialized: boolean;
    login(): void;
    logout(): void;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const keycloak = new Keycloak({
    url: "http://localhost:8082",
    realm: "BoiSyncKeycloak",
    clientId: "public-client",
});

interface AuthProviderProps {
    children: React.ReactNode;
}