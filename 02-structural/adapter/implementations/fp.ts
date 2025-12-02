import { ApiUser, DomainUser, UserFormatter } from "../types";

export const createUserFormatter = (): UserFormatter => ({
    format(user: ApiUser): DomainUser {
        return {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            phoneNumber: user.phone_number,
        };
    },
});
