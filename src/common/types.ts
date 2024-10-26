import { z } from 'zod';

export enum EmploymentStatus{
    Employed = 'Employed',
    SelfEmployed = 'Self-Employed',
    Unemployed = 'Unemployed'
}

export enum LoanPurpose{
    Vehicle = "Vehicle",
    HomeImprovement = "Home Improvement",
    Other = "Other"
}

export const PersonalDetailsFormSchema = z.object({
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    dob: z.string().date('Date of birth is not valid'),
    email: z.string().trim().min(1, 'Email is required').email('Email is not valid'),
    mobile: z.string().trim().min(1, 'Mobile is required').regex(/^\d{10}$/, 'Mobile is not valid'),
    address: z.string().trim().min(1, 'Address is required'),
    empStatus: z.nativeEnum(EmploymentStatus),
    empName: z.string().optional(),
    income: z.number().positive('Income is required') 
  }).refine(data => data.empStatus === EmploymentStatus.Employed ? !!data.empName : true, 
    { message: 'Employer name is required', path: ['empName']});

export type PersonalDetails = z.infer<typeof PersonalDetailsFormSchema>;

export const LoanDetailsFormSchema = z.object({
    price: z.number().gte(2000, 'Price is required to be minimum 2000'),
    depositAmount: z.number().gte(0, 'Deposit amount is required'),
    loanPurpose: z.nativeEnum(LoanPurpose),
    loanTerm: z.number().int().positive('Loan term is required').lte(7, 'Maximum 7 years')
  })
  .refine(data => data.depositAmount < data.price, { message: 'Deposit should be should not exceed price', path: ["depositAmount"] })
  .refine( data => data.price - data.depositAmount > 2000, { message: 'Deposit amount should be at least 2000$ less than price', path: ["depositAmount"] });
  

export type LoanDetails = z.infer<typeof LoanDetailsFormSchema>;


export type LoanEnquiry = PersonalDetails & LoanDetails;


export enum LendFeeType{
    processing,
    application,
    none
}

export interface LoanEnqueryResultItem{
    monthRepay: number,
    interestRate: number,
    feesAmount: number,
    feeType: LendFeeType
}

export interface LoanEnqueryResult {
    results: LoanEnqueryResultItem[];
}