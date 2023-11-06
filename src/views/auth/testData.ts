import { StrategyInstance } from "./model";

export const testStrategies: StrategyInstance[] = [
    {
        type: "credential",
        id: "1",
        name: "Gropius",
        isLoginActive: true,
        isSelfRegistrationActive: true,
        isSyncActive: true,
        doesImplicitRegister: false,
        loginFields: [
            {
                name: "username",
                isPassword: false
            },
            {
                name: "password",
                isPassword: true
            }
        ],
        registerFields: [
            {
                name: "username",
                isPassword: false
            },
            {
                name: "password",
                isPassword: true
            }
        ]
    },
    {
        type: "credential",
        id: "2",
        name: "Not Gropius",
        isLoginActive: true,
        isSelfRegistrationActive: true,
        isSyncActive: true,
        doesImplicitRegister: false,
        loginFields: [
            {
                name: "username",
                isPassword: false
            },
            {
                name: "email",
                isPassword: false
            },
            {
                name: "password",
                isPassword: true
            }
        ],
        registerFields: [
            {
                name: "username",
                isPassword: false
            },
            {
                name: "email",
                isPassword: false
            },
            {
                name: "password",
                isPassword: true
            }
        ]
    },
    {
        type: "redirect",
        id: "3",
        name: "GitHub",
        isLoginActive: true,
        isSelfRegistrationActive: true,
        isSyncActive: true,
        doesImplicitRegister: false
    },
    {
        type: "redirect",
        id: "4",
        name: "Jira",
        isLoginActive: true,
        isSelfRegistrationActive: true,
        isSyncActive: true,
        doesImplicitRegister: false
    }
];
