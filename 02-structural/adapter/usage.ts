import { ApiUser } from "./types";

const mockApiUserResponse: ApiUser = {
    first_name: "Alejandro",
    last_name: "Segovia",
    email: "asega1996@gmail.com",
    phone_number: "+34 608 842 858",
};


// Using OOP Adapter
import { UserFormatterAdapter } from "./implementations/oop";
const oopFormatter = new UserFormatterAdapter();
const domainUserFromOop = oopFormatter.format(mockApiUserResponse);
console.log("OOP adapter:", domainUserFromOop);

// Using FP Adapter
import { createUserFormatter } from "./implementations/fp";
const fpFormatter = createUserFormatter();
const domainUserFromFp = fpFormatter.format(mockApiUserResponse);
console.log("FP adapter:", domainUserFromFp);
