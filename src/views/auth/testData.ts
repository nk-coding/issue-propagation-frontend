import { StrategyInstance } from "./model";

export const testStrategies: StrategyInstance[] = [
    {
        type: "credential",
        id: "1",
        name: "Gropius",
        isLoginActive: true,
        isSelfRegisterActive: true,
        isSyncActive: true,
        doesImplicitRegister: false,
        loginFields: [
            {
                name: "username",
                type: "string",
            },
            {
                name: "password",
                type: "password"
            }
        ],
        registerFields: [
            {
                name: "username",
                type: "string"
            },
            {
                name: "password",
                type: "password"
            }
        ]
    },
    {
        type: "credential",
        id: "2",
        name: "Not Gropius",
        isLoginActive: true,
        isSelfRegisterActive: true,
        isSyncActive: true,
        doesImplicitRegister: false,
        loginFields: [
            {
                name: "username",
                type: "string"
            },
            {
                name: "email",
                type: "string"
            },
            {
                name: "password",
                type: "password"
            }
        ],
        registerFields: [
            {
                name: "username",
                type: "string"
            },
            {
                name: "email",
                type: "string"
            },
            {
                name: "password",
                type: "password"
            }
        ]
    },
    {
        type: "redirect",
        id: "3",
        name: "GitHub",
        isLoginActive: true,
        isSelfRegisterActive: true,
        isSyncActive: true,
        doesImplicitRegister: false
    },
    {
        type: "redirect",
        id: "4",
        name: "Jira",
        isLoginActive: true,
        isSelfRegisterActive: true,
        isSyncActive: true,
        doesImplicitRegister: false
    }
];
