export type ApiUser = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
};

export type DomainUser = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
};

export interface UserFormatter {
    format(user: ApiUser): DomainUser;
}
