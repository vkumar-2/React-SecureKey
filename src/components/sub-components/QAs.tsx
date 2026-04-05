import React from 'react';

type Items = {
    question: string;
    answer: string;
};
const config: Items[] = 
[
    {
        question: '1. What makes a password strong?',
        answer:
            'A strong password is usually long, unique, and made from a mix of uppercase letters, lowercase letters, numbers, and special characters. ' +
            'Good passwords also avoid using words from a dictionary. If using memorable words in a password, it should contain a mixture of ' +
            'characters (e.g. pA$sW0Rd).',
    },
    {
        question: '2. How long should my password be?',
        answer:
            'Generally, a good password should be at least 12 characters long as longer passwords are harder to crack. In this password generator ' +
            'app, any password length longer than 40 characters is considered strong.',
    },
    {
        question: '3. How do I remember strong and complex passwords?',
        answer:
            "Password managers, or 'vaults' are secure digital spaces you can install (as apps or browser extensions) that encrypt and store your login " +
            'credentials. By using vaults, it means instead of memorising every single password, you only need to remember one master password to ' +
            'unlock access to your vault of passwords.',
    },
    {
        question: '4. Why should I not use the same password for every site?',
        answer:
            'If in the unlikely scenario a website gets breached where all users\' login credentials were leaked, using same passwords can create a domino ' +
            'effect where hackers can attempt to use your password to unlock more accounts from other platforms you use. In short: using different ' +
            'passwords for every site helps to reduce the collateral damage and stop hackers attempting to gain unauthorised access to any other accounts.',
    },
    {
        question: '5. What is two-factor authentication (2FA)?',
        answer:
            '2FA adds a second layer of protection where after logging in, you must enter the pin sent to your email or phone. 2FA is commonly setup on ' +
            'smartphones either through SMS messages or verifying using a mobile authenticator app. 2FA further enhances security since even if a ' +
            'hacker obtained your login credentials, 2FA will block them from gaining unauthorised access to your account.',
    },
];
const getQAs = (type: 'question' | 'answer', index: number): string => 
{
    return config[index][type];
};

export default getQAs;