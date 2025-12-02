import { ApiUser } from "./types";
import { UserFormatterAdapter } from "./implementations/oop";
import { createUserFormatter } from "./implementations/fp";

const mockApiUserRes: ApiUser = {
    first_name: "Alejandro",
    last_name: "Segovia",
    email: "alejandro@example.com",
    phone_number: "+34 600 000 000",
};


// Using OOP Adapter
const oopFormatter = new UserFormatterAdapter();
const domainUserFromOop = oopFormatter.format(mockApiUserRes);
console.log("OOP adapter:", domainUserFromOop);

// Using FP Adapter
const fpFormatter = createUserFormatter();
const domainUserFromFp = fpFormatter.format(mockApiUserRes);
console.log("FP adapter:", domainUserFromFp);
