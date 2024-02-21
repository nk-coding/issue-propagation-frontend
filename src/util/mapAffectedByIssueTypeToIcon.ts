import { DefaultAffectedByIssueInfoFragment } from "@/graphql/generated";

export function mapAffectedByIssueTypeToIcon(type: DefaultAffectedByIssueInfoFragment["__typename"]): string {
    switch (type) {
        case "Component":
            return "$component";
        case "Project":
            return "$project";
        case "ComponentVersion":
            return "$component-version";
        case "Interface":
            return "$interface";
        case "InterfaceSpecification":
            return "$interface-specification";
        case "InterfaceSpecificationVersion":
            return "$interface-specification-version";
        case "InterfacePart":
            return "$interface"; //TODO
        default:
            throw new Error(`Unknown affectedByIssue type: ${type}`);
    }
}
