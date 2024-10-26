
export enum EmploymentStatus{
    Employed = 'Employed',
    SelfEmployed = 'Self-Employed',
    Unemployed = 'Unemployed'
}

export enum LoanPurpose{
    Vehicle,
    HomeImprovement,
    Other
}

export interface PersonalDetails{
    firstName: string,
    lastName:string,
    dob: Date,
    email: string,
    mobile: string,
    address: string,
    empStatus: EmploymentStatus,
    employerName?: string,
    income: number
}

export interface LoanDetails {
    price: number,
    depositAmount: number,
    loanPurpose: LoanPurpose,
    loanTerm: number
}

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