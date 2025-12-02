import { UserFormatter, ApiUser, DomainUser } from "../types";

export class UserFormatterAdapter implements UserFormatter {
    format(user: ApiUser): DomainUser {
        return {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            phoneNumber: user.phone_number,
        };
    }
}
