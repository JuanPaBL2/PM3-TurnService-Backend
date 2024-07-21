import { ICredentialDto } from "../interfacesDtos/credDto";
import { CredentialModel } from "../config/userDataSource";
import { Credential } from "../entidades/credEntity";


//Función para crear un nuevo par de credenciales
export const createCredentialsService = async (cred: ICredentialDto): Promise<number> => {
    const credUser = await CredentialModel.create(cred);
    await CredentialModel.save(credUser);
    
    //devuelvo solo el id
    return credUser.id;
}

export const loginUserService = async (username: string, password: string): Promise<Credential> => {
    const foundCredential: Credential | null = await CredentialModel.findOne({ where: { username, password } });

    if (!foundCredential) {
        throw new Error("Credenciales incorrectas.");
    } else {
        return foundCredential;
    }

}