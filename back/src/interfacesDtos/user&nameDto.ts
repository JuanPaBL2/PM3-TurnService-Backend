//INTERFAZ DATA TRANSFER OBJET

//DTO Es una interfaz exclusiva para la request que maneja el servicio, y se usa en parametros
export interface UserDto {
    name: string;
    email: string;
    birthdate: Date;
    dni: number;
    username: string,
    password: string;
    status: "active" | "cancelled";
}

export interface TurnDto {
    id: number,
    date: Date,
    time: string,
}


