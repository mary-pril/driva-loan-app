export const loan_form_steps = {
    step1: {
        next: 'step2',
        back: null,
    },
    step2:{
        next: 'summary',
        back: 'step1',
    },
    summary:{
        next: null,
        back: 'step2',
    }
}