import { IssuePropagationConfig } from "./propagationConfig";

export const defaultPropagationConfig: IssuePropagationConfig = {
    schemas: {
        default: {
            template: true,
            type: true,
            state: true,
            title: true,
            characteristics: ['default']
        }
    },
    rules: [
        { /* Bug propagation rule for broken APIs which again break service APIs */
            filterIssue: {
            },
            filterRelation: {
            },
            filterStartComponent: {
            },
            filterEndComponent: {
            },
            propagationDirection: 'both',
            newIssueSchema: 'default'
        },
    ]};