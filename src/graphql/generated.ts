import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    Duration: { input: any; output: any };
    JSON: { input: any; output: any };
    URL: { input: any; output: any };
};

export type AbstractTypeChangedEvent = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
};

export type AbstractTypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

export type AbstractTypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

export type AbstractTypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Input for the addAffectedEntityToIssue mutation */
export type AddAffectedEntityToIssueInput = {
    /** The id of the AffectedByIssue which is affected by the Issue */
    affectedEntity: Scalars["ID"]["input"];
    /** The id of the Issue which affects the entity */
    issue: Scalars["ID"]["input"];
};

export type AddAffectedEntityToIssuePayload = {
    __typename?: "AddAffectedEntityToIssuePayload";
    /** The created event, if present */
    addedAffectedEntityEvent?: Maybe<AddedAffectedEntityEvent>;
};

/** Input for the addArtefactToIssue mutation */
export type AddArtefactToIssueInput = {
    /** The id of the Artefact to add */
    artefact: Scalars["ID"]["input"];
    /** The id of the Issue where to add the Artefact */
    issue: Scalars["ID"]["input"];
};

export type AddArtefactToIssuePayload = {
    __typename?: "AddArtefactToIssuePayload";
    /** The created event, if present */
    addedArtefactEvent?: Maybe<AddedArtefactEvent>;
};

/** Input for the addComponentVersionToProject mutation */
export type AddComponentVersionToProjectInput = {
    /** The id of the ComponentVersion to add */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the Project where to add the ComponentVersion */
    project: Scalars["ID"]["input"];
};

export type AddComponentVersionToProjectPayload = {
    __typename?: "AddComponentVersionToProjectPayload";
    /** The updated Project */
    project?: Maybe<Project>;
};

/** Input for the addInterfaceSpecificationVersionToComponentVersion mutation */
export type AddInterfaceSpecificationVersionToComponentVersionInput = {
    /** The id of the ComponentVersion to add the InterfaceSpecificationVersion to. */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the InterfaceSpecificationVersion to add. Must be part of the same Component as `componentVersion` */
    interfaceSpecificationVersion: Scalars["ID"]["input"];
    /** If `true`, the InterfaceSpecificationVersion is added invisible */
    invisible: Scalars["Boolean"]["input"];
    /** If `true`, the InterfaceSpecificationVersion is added visible */
    visible: Scalars["Boolean"]["input"];
};

export type AddInterfaceSpecificationVersionToComponentVersionPayload = {
    __typename?: "AddInterfaceSpecificationVersionToComponentVersionPayload";
    /** The updated ComponentVersion */
    componentVersion?: Maybe<ComponentVersion>;
};

/** Input for the addIssueToPinnedIssues mutation */
export type AddIssueToPinnedIssuesInput = {
    /** The id of the Issue to pin */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where the Issue should be pinned */
    trackable: Scalars["ID"]["input"];
};

export type AddIssueToPinnedIssuesPayload = {
    __typename?: "AddIssueToPinnedIssuesPayload";
    /** The created event, if present */
    addedToPinnedIssuesEvent?: Maybe<AddedToPinnedIssuesEvent>;
};

/** Input for the addIssueToTrackable mutation */
export type AddIssueToTrackableInput = {
    /** The id of the Issue to add to the Trackable */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where to add the Issue */
    trackable: Scalars["ID"]["input"];
};

export type AddIssueToTrackablePayload = {
    __typename?: "AddIssueToTrackablePayload";
    /** The created event, if present */
    addedToTrackableEvent?: Maybe<AddedToTrackableEvent>;
};

/** Input for the addLabelToIssue mutation */
export type AddLabelToIssueInput = {
    /** The id of the Issue where to add the Label */
    issue: Scalars["ID"]["input"];
    /** The id of the Label to add */
    label: Scalars["ID"]["input"];
};

export type AddLabelToIssuePayload = {
    __typename?: "AddLabelToIssuePayload";
    /** The created event, if present */
    addedLabelEvent?: Maybe<AddedLabelEvent>;
};

/** Input for the addLabelToTrackable mutation */
export type AddLabelToTrackableInput = {
    /** The id of the Label to add */
    label: Scalars["ID"]["input"];
    /** The id of the Trackable where to add the Label */
    trackable: Scalars["ID"]["input"];
};

export type AddLabelToTrackablePayload = {
    __typename?: "AddLabelToTrackablePayload";
    /** The Trackable to which the Label was added */
    trackable?: Maybe<Trackable>;
};

/**
 * Event representing that an entity is affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedAffectedEntityEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AddedAffectedEntityEvent";
        /** The entity affected by the Issue, null if deleted. */
        addedAffectedEntity?: Maybe<AffectedByIssue>;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that an entity is affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedAffectedEntityEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an entity is affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedAffectedEntityEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an entity is affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedAffectedEntityEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an Artefact was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedArtefactEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AddedArtefactEvent";
        /** The Artefact added to the Issue, null if deleted. */
        addedArtefact?: Maybe<Artefact>;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that an Artefact was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedArtefactEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an Artefact was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedArtefactEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an Artefact was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedArtefactEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that a Label was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedLabelEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AddedLabelEvent";
        /** The Label added to the Issue, null if deleted. */
        addedLabel?: Maybe<Label>;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that a Label was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedLabelEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a Label was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedLabelEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a Label was added to an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedLabelEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an Issue was pinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToPinnedIssuesEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AddedToPinnedIssuesEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The Trackable the Issue is now pinned on, null if deleted. */
        pinnedOn?: Maybe<Trackable>;
    };

/**
 * Event representing that an Issue was pinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToPinnedIssuesEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an Issue was pinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToPinnedIssuesEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an Issue was pinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToPinnedIssuesEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the Issue was added to a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToTrackableEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AddedToTrackableEvent";
        /** The Trackable the Issue was added to, null if deleted. */
        addedToTrackable?: Maybe<Trackable>;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the Issue was added to a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToTrackableEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the Issue was added to a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToTrackableEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the Issue was added to a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AddedToTrackableEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Entities that can be affected by an Issue, meaning that this entity is in some regard
 *     impacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.
 *
 */
export type AffectedByIssue = {
    /** The issues which affect this entity */
    affectingIssues: IssueConnection;
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
};

/**
 * Entities that can be affected by an Issue, meaning that this entity is in some regard
 *     impacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.
 *
 */
export type AffectedByIssueAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entities that can be affected by an Issue, meaning that this entity is in some regard
 *     impacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.
 *
 */
export type AffectedByIssueExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Entities that can be affected by an Issue, meaning that this entity is in some regard
 *     impacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.
 *
 */
export type AffectedByIssueExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Entities that can be affected by an Issue, meaning that this entity is in some regard
 *     impacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.
 *
 */
export type AffectedByIssueHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for AffectedByIssue. */
export type AffectedByIssueConnection = {
    __typename?: "AffectedByIssueConnection";
    /** A list of all edges of the current page. */
    edges: Array<AffectedByIssueEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<AffectedByIssue>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type AffectedByIssueEdge = {
    __typename?: "AffectedByIssueEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: AffectedByIssue;
};

/** Filter used to filter AffectedByIssue */
export type AffectedByIssueFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AffectedByIssueFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AffectedByIssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AffectedByIssueFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AffectedByIssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AffectedByIssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AffectedByIssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AffectedByIssueFilterInput>;
};

/** Defines the order of a AffectedByIssue list */
export type AffectedByIssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AffectedByIssueOrderField>;
};

/** Fields a list of AffectedByIssue can be sorted by */
export enum AffectedByIssueOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Non global permission entries */
export enum AllPermissionEntry {
    /**
     * Allows to add the Component to Projects
     * Note: this should be handled very carefully, as adding a Component to a Project gives
     * all users with READ access to the Project READ access to the Component
     */
    AddToProjects = "ADD_TO_PROJECTS",
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    LinkFromIssues = "LINK_FROM_ISSUES",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /** Allows to add / remove ComponentVersions to / from this Project. */
    ManageComponents = "MANAGE_COMPONENTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /**
     * Allows to create Relations with a version of this Component or an Interface of this Component
     * as start.
     * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
     * more permissively compared to `RELATE_TO_COMPONENT`.
     */
    RelateFromComponent = "RELATE_FROM_COMPONENT",
    /** Allows to create IMSProjects with this IMS. */
    SyncTrackables = "SYNC_TRACKABLES"
}

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type Artefact = AuditedNode &
    ExtensibleNode &
    MutableTemplatedNode &
    Node &
    TemplatedNode & {
        __typename?: "Artefact";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** A URL to the file this Artefact references */
        file: Scalars["URL"]["output"];
        /** If present, the first line of the file this Artefact references, inclusive */
        from?: Maybe<Scalars["Int"]["output"]>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Issues which currently have this Artefact. */
        issues: IssueConnection;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** IssueComments which currently reference this Artefact. */
        referencingComments: IssueCommentConnection;
        /** The Template of this Artefact. */
        template: ArtefactTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** If present, the last line of the file this Artefact references, inclusive */
        to?: Maybe<Scalars["Int"]["output"]>;
        /** The Trackable this Artefact is part of. */
        trackable: Trackable;
        /** If present, the current version of this Artefact */
        version?: Maybe<Scalars["String"]["output"]>;
    };

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactReferencingCommentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueCommentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueCommentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An Artefact referencing a file defined via a URL.
 *     Can optionally specify a line range (from - to), and a version.
 *     Is part of exactly one Trackable.
 *     Can be referenced by Comments and Issues.
 *     Artefacts are synced to all IMSProjects of the Trackable they are part of.
 *     READ is granted if READ is granted on `trackable`.
 *
 */
export type ArtefactTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for Artefact. */
export type ArtefactConnection = {
    __typename?: "ArtefactConnection";
    /** A list of all edges of the current page. */
    edges: Array<ArtefactEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Artefact>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ArtefactEdge = {
    __typename?: "ArtefactEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Artefact;
};

/** Filter used to filter Artefact */
export type ArtefactFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ArtefactFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by file */
    file?: InputMaybe<StringFilterInput>;
    /** Filter by from */
    from?: InputMaybe<NullableIntFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ArtefactFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ArtefactFilterInput>>;
    /** Filter by referencingComments */
    referencingComments?: InputMaybe<IssueCommentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by to */
    to?: InputMaybe<NullableIntFilterInput>;
    /** Filters for nodes where the related node match this filter */
    trackable?: InputMaybe<TrackableFilterInput>;
    /** Filter by version */
    version?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ArtefactFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ArtefactFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ArtefactFilterInput>;
};

/** Defines the order of a Artefact list */
export type ArtefactOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ArtefactOrderField>;
};

/** Fields a list of Artefact can be sorted by */
export enum ArtefactOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by file */
    File = "FILE",
    /** Order by from */
    From = "FROM",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by to */
    To = "TO",
    /** Order by version */
    Version = "VERSION"
}

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    Template & {
        __typename?: "ArtefactTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: ArtefactTemplateConnection;
        /** Template this template extends. */
        extends: ArtefactTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ArtefactConnection;
    };

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Artefacts
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ArtefactTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for ArtefactTemplate. */
export type ArtefactTemplateConnection = {
    __typename?: "ArtefactTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<ArtefactTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ArtefactTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ArtefactTemplateEdge = {
    __typename?: "ArtefactTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ArtefactTemplate;
};

/** Filter used to filter ArtefactTemplate */
export type ArtefactTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ArtefactTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ArtefactTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ArtefactTemplateFilterInput>;
};

/** Defines the order of a ArtefactTemplate list */
export type ArtefactTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ArtefactTemplateOrderField>;
};

/** Fields a list of ArtefactTemplate can be sorted by */
export enum ArtefactTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Event representing that a User is assigned to an Issue.
 *     An Assignment is only active if it is still in `assignments` on Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type Assignment = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "Assignment";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The type of Assignment, e.g. REVIEWER. Allowed types are defined by the IssueTemplate. */
        type?: Maybe<AssignmentType>;
        /** The User assigned to the Issue. */
        user: User;
    };

/**
 * Event representing that a User is assigned to an Issue.
 *     An Assignment is only active if it is still in `assignments` on Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a User is assigned to an Issue.
 *     An Assignment is only active if it is still in `assignments` on Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a User is assigned to an Issue.
 *     An Assignment is only active if it is still in `assignments` on Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for Assignment. */
export type AssignmentConnection = {
    __typename?: "AssignmentConnection";
    /** A list of all edges of the current page. */
    edges: Array<AssignmentEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Assignment>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type AssignmentEdge = {
    __typename?: "AssignmentEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Assignment;
};

/** Filter used to filter Assignment */
export type AssignmentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AssignmentFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AssignmentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AssignmentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    user?: InputMaybe<UserFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AssignmentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AssignmentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AssignmentFilterInput>;
};

/** Defines the order of a Assignment list */
export type AssignmentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AssignmentOrderField>;
};

/** Fields a list of Assignment can be sorted by */
export enum AssignmentOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentType = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "AssignmentType";
        /** Assignments which use this type. */
        assignmentsWithType: AssignmentConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** IssueTemplates this is part of. */
        partOf: IssueTemplateConnection;
    };

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentTypeAssignmentsWithTypeArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentTypeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentTypeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentTypeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Type for an Assignment, like REVIEWER. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type AssignmentTypePartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Event representing that the type of an Assignment changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentTypeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "AssignmentTypeChangedEvent";
        /** The Assignment of which the type was changed */
        assignment: Assignment;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new type. */
        newType?: Maybe<AssignmentType>;
        /** The old type. */
        oldType?: Maybe<AssignmentType>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the type of an Assignment changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentTypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the type of an Assignment changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentTypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the type of an Assignment changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type AssignmentTypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for AssignmentType. */
export type AssignmentTypeConnection = {
    __typename?: "AssignmentTypeConnection";
    /** A list of all edges of the current page. */
    edges: Array<AssignmentTypeEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<AssignmentType>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type AssignmentTypeEdge = {
    __typename?: "AssignmentTypeEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: AssignmentType;
};

/** Filter used to filter AssignmentType */
export type AssignmentTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AssignmentTypeFilterInput>>;
    /** Filter by assignmentsWithType */
    assignmentsWithType?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AssignmentTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AssignmentTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an AssignmentType */
export type AssignmentTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AssignmentTypeFilterInput>;
};

/** Defines the order of a AssignmentType list */
export type AssignmentTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AssignmentTypeOrderField>;
};

/** Fields a list of AssignmentType can be sorted by */
export enum AssignmentTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * ExtensibleNode which provides auditing information, which can e.g. be used for the sync.
 *     When it was created and last modified, if the it is already deleted, and by who it was created and last modified.
 *     A modification is any change of a field on the node itself and a change of a relation (add or removed).
 *     A change on a related related node is not a modification.
 *
 */
export type AuditedNode = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
};

/**
 * ExtensibleNode which provides auditing information, which can e.g. be used for the sync.
 *     When it was created and last modified, if the it is already deleted, and by who it was created and last modified.
 *     A modification is any change of a field on the node itself and a change of a relation (add or removed).
 *     A change on a related related node is not a modification.
 *
 */
export type AuditedNodeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * ExtensibleNode which provides auditing information, which can e.g. be used for the sync.
 *     When it was created and last modified, if the it is already deleted, and by who it was created and last modified.
 *     A modification is any change of a field on the node itself and a change of a relation (add or removed).
 *     A change on a related related node is not a modification.
 *
 */
export type AuditedNodeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * ExtensibleNode which provides auditing information, which can e.g. be used for the sync.
 *     When it was created and last modified, if the it is already deleted, and by who it was created and last modified.
 *     A modification is any change of a field on the node itself and a change of a relation (add or removed).
 *     A change on a related related node is not a modification.
 *
 */
export type AuditedNodeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for AuditedNode. */
export type AuditedNodeConnection = {
    __typename?: "AuditedNodeConnection";
    /** A list of all edges of the current page. */
    edges: Array<AuditedNodeEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<AuditedNode>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type AuditedNodeEdge = {
    __typename?: "AuditedNodeEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: AuditedNode;
};

/** Filter used to filter AuditedNode */
export type AuditedNodeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AuditedNodeFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AuditedNodeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AuditedNodeFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AuditedNodeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AuditedNodeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AuditedNodeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AuditedNodeFilterInput>;
};

/** Defines the order of a AuditedNode list */
export type AuditedNodeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AuditedNodeOrderField>;
};

/** Fields a list of AuditedNode can be sorted by */
export enum AuditedNodeOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

export type BasePermission = {
    /** If, the permission is granted to all users. Use with caution. */
    allUsers: Scalars["Boolean"]["output"];
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** GropiusUsers granted this Permission */
    users: GropiusUserConnection;
};

export type BasePermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for BasePermission. */
export type BasePermissionConnection = {
    __typename?: "BasePermissionConnection";
    /** A list of all edges of the current page. */
    edges: Array<BasePermissionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<BasePermission>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type BasePermissionEdge = {
    __typename?: "BasePermissionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: BasePermission;
};

/** Filter used to filter BasePermission */
export type BasePermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<BasePermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<BasePermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<BasePermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type BasePermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<BasePermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<BasePermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<BasePermissionFilterInput>;
};

/** Defines the order of a BasePermission list */
export type BasePermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<BasePermissionOrderField>;
};

/** Fields a list of BasePermission can be sorted by */
export enum BasePermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Base type for both Template and SubTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     READ is always granted.
 *
 */
export type BaseTemplate = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** All template field specifications, if a `namePrefix` is provided, only those matching it */
    templateFieldSpecifications: Array<JsonField>;
};

/**
 * Base type for both Template and SubTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     READ is always granted.
 *
 */
export type BaseTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Base type for both Template and SubTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     READ is always granted.
 *
 */
export type BaseTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Base type for both Template and SubTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     READ is always granted.
 *
 */
export type BaseTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Base type for both Template and SubTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     READ is always granted.
 *
 */
export type BaseTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Main Body of an Issue.
 *     Each Issue has exactly one Body. Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type Body = AuditedNode &
    Comment &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "Body";
        /** IssueComments which answer this Comment. */
        answeredBy: IssueCommentConnection;
        /**
         * The text of the Comment.
         *         Supports GFM (GitHub Flavored Markdown).
         *         Updates to the body cause lastEditedAt and lastEditedBy to change, while updates to referencedArtefacts
         *         do not.
         *
         */
        body: Scalars["String"]["output"];
        /**
         * Keep track when the body of the Comment was last updated.
         *         If not updated yet, the DateTime of creation.
         *
         */
        bodyLastEditedAt: Scalars["DateTime"]["output"];
        /**
         * The User who last edited the body of this Comment.
         *         If not edited yet, the creator of the Comment.
         *
         */
        bodyLastEditedBy: User;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Main Body of an Issue.
 *     Each Issue has exactly one Body. Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type BodyAnsweredByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueCommentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueCommentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Main Body of an Issue.
 *     Each Issue has exactly one Body. Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type BodyExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Main Body of an Issue.
 *     Each Issue has exactly one Body. Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type BodyExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Main Body of an Issue.
 *     Each Issue has exactly one Body. Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type BodyHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Filter used to filter Body */
export type BodyFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<BodyFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by body */
    body?: InputMaybe<StringFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<BodyFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<BodyFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
};

/** Filter which can be used to filter for Nodes with a specific Boolean field */
export type BooleanFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Input for the changeAssignmentType mutation */
export type ChangeAssignmentTypeInput = {
    /** The id of the Assignment of which the type is updated */
    assignment: Scalars["ID"]["input"];
    /** The id of the new type, must be defined by the template of the Issue */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ChangeAssignmentTypePayload = {
    __typename?: "ChangeAssignmentTypePayload";
    /** The created event, if present */
    assignmentTypeChangedEvent?: Maybe<AssignmentTypeChangedEvent>;
};

/** Input for the changeIssueDueDate mutation */
export type ChangeIssueDueDateInput = {
    /** The new dueDate */
    dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** The id of the Issue of which the dueDate is updated */
    issue: Scalars["ID"]["input"];
};

export type ChangeIssueDueDatePayload = {
    __typename?: "ChangeIssueDueDatePayload";
    /** The created event, if present */
    dueDateChangedEvent?: Maybe<DueDateChangedEvent>;
};

/** Input for the changeIssueEstimatedTime mutation */
export type ChangeIssueEstimatedTimeInput = {
    /** The new estimatedTime */
    estimatedTime?: InputMaybe<Scalars["Duration"]["input"]>;
    /** The id of the Issue of which the estimatedTime is updated */
    issue: Scalars["ID"]["input"];
};

export type ChangeIssueEstimatedTimePayload = {
    __typename?: "ChangeIssueEstimatedTimePayload";
    /** The created event, if present */
    estimatedTimeChangedEvent?: Maybe<EstimatedTimeChangedEvent>;
};

/** Input for the changeIssuePriority mutation */
export type ChangeIssuePriorityInput = {
    /** The id of the Issue of which the priority is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new priority, must be an IssuePriority of the used IssueTemplate */
    priority?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ChangeIssuePriorityPayload = {
    __typename?: "ChangeIssuePriorityPayload";
    /** The created event, if present */
    priorityChangedEvent?: Maybe<PriorityChangedEvent>;
};

/** Input for the changeIssueRelationType mutation */
export type ChangeIssueRelationTypeInput = {
    /** The id of the IssueRelation of which the type is updated */
    issueRelation: Scalars["ID"]["input"];
    /** The id of the new type, must be defined by the template of the Issue */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ChangeIssueRelationTypePayload = {
    __typename?: "ChangeIssueRelationTypePayload";
    /** The created event, if present */
    outgoingRelationTypeChangedEvent?: Maybe<OutgoingRelationTypeChangedEvent>;
};

/** Input for the changeIssueSpentTime mutation */
export type ChangeIssueSpentTimeInput = {
    /** The id of the Issue of which the spentTime is updated */
    issue: Scalars["ID"]["input"];
    /** The new spentTime */
    spentTime?: InputMaybe<Scalars["Duration"]["input"]>;
};

export type ChangeIssueSpentTimePayload = {
    __typename?: "ChangeIssueSpentTimePayload";
    /** The created event, if present */
    spentTimeChangedEvent?: Maybe<SpentTimeChangedEvent>;
};

/** Input for the changeIssueStartDate mutation */
export type ChangeIssueStartDateInput = {
    /** The id of the Issue of which the startDate is updated */
    issue: Scalars["ID"]["input"];
    /** The new startDate */
    startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ChangeIssueStartDatePayload = {
    __typename?: "ChangeIssueStartDatePayload";
    /** The created event, if present */
    startDateChangedEvent?: Maybe<StartDateChangedEvent>;
};

/** Input for the changeIssueState mutation */
export type ChangeIssueStateInput = {
    /** The id of the Issue of which the state is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new state, must be an IssueState of the used IssueTemplate */
    state: Scalars["ID"]["input"];
};

export type ChangeIssueStatePayload = {
    __typename?: "ChangeIssueStatePayload";
    /** The created event, if present */
    stateChangedEvent?: Maybe<StateChangedEvent>;
};

/** Input for the changeIssueTemplate mutation */
export type ChangeIssueTemplateInput = {
    /** Mapping to map existing Assignment Types to new ones */
    assignmentTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
    /** The Issue to update the template of */
    issue: Scalars["ID"]["input"];
    /** Mapping to map existing IssueRelationTypes to new ones */
    issueRelationTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
    /** The new priority of the Issue */
    priority?: InputMaybe<Scalars["ID"]["input"]>;
    /** The new state of the Issue, required if the old one is not compatible with the new template */
    state?: InputMaybe<Scalars["ID"]["input"]>;
    /** If provided, the id of the new template for the Issue */
    template: Scalars["ID"]["input"];
    /** Values for templatedFields to update, required to ensure compatibility with the new template */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new type of the Issue, required if the old one is not compatible with the new template */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ChangeIssueTemplatePayload = {
    __typename?: "ChangeIssueTemplatePayload";
    /** The created event, if present */
    templateChangedEvent?: Maybe<TemplateChangedEvent>;
};

/** Input for the changeIssueTemplatedField mutations */
export type ChangeIssueTemplatedFieldInput = {
    /** The id of the Issue of which to change a templated field */
    issue: Scalars["ID"]["input"];
    /** The name of the templated field to update */
    name: Scalars["String"]["input"];
    /** The new value of the templated field */
    value?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type ChangeIssueTemplatedFieldPayload = {
    __typename?: "ChangeIssueTemplatedFieldPayload";
    /** The created event, if present */
    templatedFieldChangedEvent?: Maybe<TemplatedFieldChangedEvent>;
};

/** Input for the changeIssueTitle mutation */
export type ChangeIssueTitleInput = {
    /** The id of the Issue of which the title is updated */
    issue: Scalars["ID"]["input"];
    /** The new title */
    title: Scalars["String"]["input"];
};

export type ChangeIssueTitlePayload = {
    __typename?: "ChangeIssueTitlePayload";
    /** The created event, if present */
    titleChangedEvent?: Maybe<TitleChangedEvent>;
};

/** Input for the changeIssueType mutation */
export type ChangeIssueTypeInput = {
    /** The id of the Issue of which the type is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new type, must be an IssueType of the used IssueTemplate */
    type: Scalars["ID"]["input"];
};

export type ChangeIssueTypePayload = {
    __typename?: "ChangeIssueTypePayload";
    /** The created event, if present */
    typeChangedEvent?: Maybe<TypeChangedEvent>;
};

/**
 * Supertype for IssueComment and Body.
 *     Represents a text block in the Timeline.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type Comment = {
    /** IssueComments which answer this Comment. */
    answeredBy: IssueCommentConnection;
    /**
     * The text of the Comment.
     *         Supports GFM (GitHub Flavored Markdown).
     *         Updates to the body cause lastEditedAt and lastEditedBy to change, while updates to referencedArtefacts
     *         do not.
     *
     */
    body: Scalars["String"]["output"];
    /**
     * Keep track when the body of the Comment was last updated.
     *         If not updated yet, the DateTime of creation.
     *
     */
    bodyLastEditedAt: Scalars["DateTime"]["output"];
    /**
     * The User who last edited the body of this Comment.
     *         If not edited yet, the creator of the Comment.
     *
     */
    bodyLastEditedBy: User;
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
};

/**
 * Supertype for IssueComment and Body.
 *     Represents a text block in the Timeline.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type CommentAnsweredByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueCommentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueCommentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Supertype for IssueComment and Body.
 *     Represents a text block in the Timeline.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type CommentExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Supertype for IssueComment and Body.
 *     Represents a text block in the Timeline.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type CommentExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Supertype for IssueComment and Body.
 *     Represents a text block in the Timeline.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type CommentHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Filter used to filter Comment */
export type CommentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<CommentFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by body */
    body?: InputMaybe<StringFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<CommentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<CommentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type Component = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    TemplatedNode &
    Trackable & {
        __typename?: "Component";
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** Artefacts of this trackable, typically some kind of file. */
        artefacts: ArtefactConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /**
         * List of interfaces this component specifies.
         *         Note that visible/invisible InterfaceSpecifications are defined by a specific version of this component
         *
         */
        interfaceSpecifications: InterfaceSpecificationConnection;
        /**
         * The set of Issues which are part of this Trackable.
         *         An Issue has to be part of a Trackable to use the Labels and Artefacts defined by the Trackable.
         *
         */
        issues: IssueConnection;
        /** The set of Labels which can be added to issues of this trackable. */
        labels: LabelConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Permissions for this Component. */
        permissions: ComponentPermissionConnection;
        /** Issues which are pinned to this trackable, subset of `issues`. */
        pinnedIssues: IssueConnection;
        /** If existing, the URL of the repository (e.g. a GitHub repository). */
        repositoryURL?: Maybe<Scalars["URL"]["output"]>;
        /** IMSProjects this Trackable is synced to and from. */
        syncsTo: ImsProjectConnection;
        /** The Template of this Component. */
        template: ComponentTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** Versions of this components. */
        versions: ComponentVersionConnection;
    };

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentArtefactsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentInterfaceSpecificationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentLabelsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LabelFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<LabelOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentPermissionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentPermissionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentPermissionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentPinnedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentSyncsToArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * Entity which represents a software component, e.g. a library, a microservice, or a deployment platform, ....
 *     The type of software component is defined by the template.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     Defines InterfaceSpecifications, but visible/invisible InterfaceSpecificationVersions depend on the ComponentVersion.
 *     Can be affected by Issues.
 *     READ is granted via an associated ComponentPermission or if READ is granted on any Project including any
 *     ComponentVersion in `versions` of this Component.
 *
 */
export type ComponentVersionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for Component. */
export type ComponentConnection = {
    __typename?: "ComponentConnection";
    /** A list of all edges of the current page. */
    edges: Array<ComponentEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Component>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ComponentEdge = {
    __typename?: "ComponentEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Component;
};

/** Filter used to filter Component */
export type ComponentFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceSpecifications */
    interfaceSpecifications?: InputMaybe<InterfaceSpecificationListFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ComponentPermissionListFilterInput>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by versions */
    versions?: InputMaybe<ComponentVersionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentFilterInput>;
};

/** Defines the order of a Component list */
export type ComponentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentOrderField>;
};

/** Fields a list of Component can be sorted by */
export enum ComponentOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** NodePermission to grant specific permissions to a set of Components. */
export type ComponentPermission = Named &
    Node & {
        __typename?: "ComponentPermission";
        /** If, the permission is granted to all users. Use with caution. */
        allUsers: Scalars["Boolean"]["output"];
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** All permissions this Permission grants */
        entries: Array<ComponentPermissionEntry>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Nodes on which the Permission is granted. */
        nodesWithPermission: ComponentConnection;
        /** GropiusUsers granted this Permission */
        users: GropiusUserConnection;
    };

/** NodePermission to grant specific permissions to a set of Components. */
export type ComponentPermissionNodesWithPermissionArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** NodePermission to grant specific permissions to a set of Components. */
export type ComponentPermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for ComponentPermission. */
export type ComponentPermissionConnection = {
    __typename?: "ComponentPermissionConnection";
    /** A list of all edges of the current page. */
    edges: Array<ComponentPermissionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ComponentPermission>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ComponentPermissionEdge = {
    __typename?: "ComponentPermissionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ComponentPermission;
};

/** ComponentPermission entry enum type. */
export enum ComponentPermissionEntry {
    /**
     * Allows to add the Component to Projects
     * Note: this should be handled very carefully, as adding a Component to a Project gives
     * all users with READ access to the Project READ access to the Component
     */
    AddToProjects = "ADD_TO_PROJECTS",
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    LinkFromIssues = "LINK_FROM_ISSUES",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /**
     * Allows to create Relations with a version of this Component or an Interface of this Component
     * as start.
     * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
     * more permissively compared to `RELATE_TO_COMPONENT`.
     */
    RelateFromComponent = "RELATE_FROM_COMPONENT"
}

/** Filter used to filter ComponentPermission */
export type ComponentPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ComponentListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentPermissionFilterInput>;
};

/** Defines the order of a ComponentPermission list */
export type ComponentPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentPermissionOrderField>;
};

/** Fields a list of ComponentPermission can be sorted by */
export enum ComponentPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    RelationPartnerTemplate &
    Template & {
        __typename?: "ComponentTemplate";
        /** SubTemplate applied to all ComponentVersions of Components with this Template */
        componentVersionTemplate: ComponentVersionTemplate;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: ComponentTemplateConnection;
        /** Template this template extends. */
        extends: ComponentTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** RelationConditions which allow this template for the end of the relation. */
        possibleEndOfRelations: RelationConditionConnection;
        /** Templates of InterfaceSpecifications which can be invisible on Components with this Template. */
        possibleInvisibleInterfaceSpecifications: InterfaceSpecificationTemplateConnection;
        /** RelationConditions which allow this template for the start of the relation. */
        possibleStartOfRelations: RelationConditionConnection;
        /** Templates of InterfaceSpecifications which can be visible on Components with this Template. */
        possibleVisibleInterfaceSpecifications: InterfaceSpecificationTemplateConnection;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ComponentConnection;
    };

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplatePossibleEndOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplatePossibleInvisibleInterfaceSpecificationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplatePossibleStartOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplatePossibleVisibleInterfaceSpecificationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Components.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines SubTemplate for ComponentVersions.
 *
 */
export type ComponentTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for ComponentTemplate. */
export type ComponentTemplateConnection = {
    __typename?: "ComponentTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<ComponentTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ComponentTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ComponentTemplateEdge = {
    __typename?: "ComponentTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ComponentTemplate;
};

/** Filter used to filter ComponentTemplate */
export type ComponentTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleInvisibleInterfaceSpecifications */
    possibleInvisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleVisibleInterfaceSpecifications */
    possibleVisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentTemplateFilterInput>;
};

/** Defines the order of a ComponentTemplate list */
export type ComponentTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentTemplateOrderField>;
};

/** Fields a list of ComponentTemplate can be sorted by */
export enum ComponentTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersion = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    RelationPartner &
    TemplatedNode &
    Versioned & {
        __typename?: "ComponentVersion";
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** The Component which defines this ComponentVersions */
        component: Component;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Projects which include this ComponentVersion */
        includingProjects: ProjectConnection;
        /** Relations which use this as the end of the Relation. */
        incomingRelations: RelationConnection;
        /** InterfaceDefinitions on this ComponentVersion. */
        interfaceDefinitions: InterfaceDefinitionConnection;
        /** IntraComponentDependencySpecifications associated with this ComponentVersion */
        intraComponentDependencySpecifications: IntraComponentDependencySpecificationConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Relations which use this as the start of the Relation. */
        outgoingRelations: RelationConnection;
        /** The Template of this ComponentVersion */
        template: ComponentVersionTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** The version of this ComponentVersion */
        version: Scalars["String"]["output"];
    };

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionIncludingProjectsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionIncomingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionInterfaceDefinitionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceDefinitionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceDefinitionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionIntraComponentDependencySpecificationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IntraComponentDependencySpecificationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionOutgoingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Version of a component.
 *     Can specifies visible/invisible InterfaceSpecifications.
 *     Can be used in Relations, affected by issues and included by Projects.
 *     READ is granted if READ is granted on `component`.
 *
 */
export type ComponentVersionTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for ComponentVersion. */
export type ComponentVersionConnection = {
    __typename?: "ComponentVersionConnection";
    /** A list of all edges of the current page. */
    edges: Array<ComponentVersionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ComponentVersion>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ComponentVersionEdge = {
    __typename?: "ComponentVersionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ComponentVersion;
};

/** Filter used to filter ComponentVersion */
export type ComponentVersionFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentVersionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    component?: InputMaybe<ComponentFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includingProjects */
    includingProjects?: InputMaybe<ProjectListFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by interfaceDefinitions */
    interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filter by intraComponentDependencySpecifications */
    intraComponentDependencySpecifications?: InputMaybe<IntraComponentDependencySpecificationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentVersionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentVersionFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ComponentVersionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by version */
    version?: InputMaybe<StringFilterInput>;
};

/** Input to create a ComponentVersion */
export type ComponentVersionInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created ComponentVersion */
    version: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentVersionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentVersionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentVersionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentVersionFilterInput>;
};

/** Defines the order of a ComponentVersion list */
export type ComponentVersionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentVersionOrderField>;
};

/** Fields a list of ComponentVersion can be sorted by */
export enum ComponentVersionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by version */
    Version = "VERSION"
}

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "ComponentVersionTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: ComponentTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ComponentVersionConnection;
    };

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for ComponentVersion.
 *     Part of a ComponentTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ComponentVersionTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter ComponentVersionTemplate */
export type ComponentVersionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentVersionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
};

/** Input for the createArtefact mutation */
export type CreateArtefactInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The initial file of the Artefact */
    file: Scalars["URL"]["input"];
    /** The initial value of the from field of the Artefact */
    from?: InputMaybe<Scalars["Int"]["input"]>;
    /** The template of the created Artefact */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The initial value of the to field of the Artefact */
    to?: InputMaybe<Scalars["Int"]["input"]>;
    /** ID of the Trackable the created Artefact is part of */
    trackable: Scalars["ID"]["input"];
    /** Initial version of the Artefact */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateArtefactPayload = {
    __typename?: "CreateArtefactPayload";
    /** The created Artefact */
    artefact?: Maybe<Artefact>;
};

/** Input for the createArtefactTemplate mutation */
export type CreateArtefactTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

export type CreateArtefactTemplatePayload = {
    __typename?: "CreateArtefactTemplatePayload";
    /** The created ArtefactTemplate */
    artefactTemplate?: Maybe<ArtefactTemplate>;
};

/** Input for the createAssignment mutation */
export type CreateAssignmentInput = {
    /** The optional type of the Assignment, must be defined by the Template of the Issue */
    assignmentType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue to which the User should be assigned */
    issue: Scalars["ID"]["input"];
    /** The id of the User to assign to the Issue */
    user: Scalars["ID"]["input"];
};

export type CreateAssignmentPayload = {
    __typename?: "CreateAssignmentPayload";
    /** The created Assignment */
    assignment?: Maybe<Assignment>;
};

/** Input for the createComponent mutation */
export type CreateComponentInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Initial InterfaceSpecifications */
    interfaceSpecifications?: InputMaybe<Array<InterfaceSpecificationInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
    /** The template of the created Component */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the Component */
    versions?: InputMaybe<Array<ComponentVersionInput>>;
};

export type CreateComponentPayload = {
    __typename?: "CreateComponentPayload";
    /** The created Component */
    component?: Maybe<Component>;
};

/** Input for the createComponentPermission mutation */
export type CreateComponentPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created ComponentPermission */
    entries: Array<ComponentPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

export type CreateComponentPermissionPayload = {
    __typename?: "CreateComponentPermissionPayload";
    /** The created ComponentPermission */
    componentPermission?: Maybe<ComponentPermission>;
};

/** Input for the createComponentTemplate mutation */
export type CreateComponentTemplateInput = {
    /** SubTemplate for all ComponentVersions of a Component with the created Template */
    componentVersionTemplate: SubTemplateInput;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

export type CreateComponentTemplatePayload = {
    __typename?: "CreateComponentTemplatePayload";
    /** The created ComponentTemplate */
    componentTemplate?: Maybe<ComponentTemplate>;
};

/** Input for the createComponentVersion mutation */
export type CreateComponentVersionInput = {
    /** The id of the Component the created ComponentVersion is part of */
    component: Scalars["ID"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created ComponentVersion */
    version: Scalars["String"]["input"];
};

export type CreateComponentVersionPayload = {
    __typename?: "CreateComponentVersionPayload";
    /** The created ComponentVersion */
    componentVersion?: Maybe<ComponentVersion>;
};

/** Input for the createGlobalPermission mutation */
export type CreateGlobalPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created GlobalPermission */
    entries: Array<PermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

export type CreateGlobalPermissionPayload = {
    __typename?: "CreateGlobalPermissionPayload";
    /** The created GlobalPermission */
    globalPermission?: Maybe<GlobalPermission>;
};

/** Input for the createIMS mutation */
export type CreateImsInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created IMS */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

export type CreateImsPayload = {
    __typename?: "CreateIMSPayload";
    /** The created IMS */
    ims?: Maybe<Ims>;
};

/** Input for the createIMSPermission mutation */
export type CreateImsPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created IMSPermission */
    entries: Array<ImsPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

export type CreateImsPermissionPayload = {
    __typename?: "CreateIMSPermissionPayload";
    /** The created IMSPermission */
    imsPermission?: Maybe<ImsPermission>;
};

/** Input for the createIMSProject mutation */
export type CreateImsProjectInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the IMS the created project is part of */
    ims: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The id of the Trackable which is synced */
    trackable: Scalars["ID"]["input"];
};

export type CreateImsProjectPayload = {
    __typename?: "CreateIMSProjectPayload";
    /** The created IMSProject */
    imsProject?: Maybe<ImsProject>;
};

/** Input for the createInterfacePart mutation */
export type CreateInterfacePartInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the InterfaceSpecification the created InterfacePart is part of */
    interfaceSpecification: Scalars["ID"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

export type CreateInterfacePartPayload = {
    __typename?: "CreateInterfacePartPayload";
    /** The created InterfacePart */
    interfacePart?: Maybe<InterfacePart>;
};

/** Input for the createInterfaceSpecification mutation */
export type CreateInterfaceSpecificationInput = {
    /** The id of the Component the created InterfaceSpecification is part of */
    component: Scalars["ID"]["input"];
    /** Initial defined InterfaceParts */
    definedParts?: InputMaybe<Array<InterfacePartInput>>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created InterfaceSpecification */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the InterfaceSpecification */
    versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

export type CreateInterfaceSpecificationPayload = {
    __typename?: "CreateInterfaceSpecificationPayload";
    /** The created InterfaceSpecification */
    interfaceSpecification?: Maybe<InterfaceSpecification>;
};

/** Input for the createInterfaceSpecificationTemplate mutation */
export type CreateInterfaceSpecificationTemplateInput = {
    /** The IDs of Templates of Components InterfaceSpecifications with the created template can be invisible on */
    canBeInvisibleOnComponents: Array<Scalars["ID"]["input"]>;
    /** The IDs of Templates of Components InterfaceSpecifications with the created template can be visible on */
    canBeVisibleOnComponents: Array<Scalars["ID"]["input"]>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** SubTemplate for all InterfacesDefinitions of a InterfaceSpecification with the created Template */
    interfaceDefinitionTemplate: NullableSubTemplateInput;
    /** SubTemplate for all InterfaceParts of a InterfaceSpecification with the created Template */
    interfacePartTemplate: SubTemplateInput;
    /** SubTemplate for all InterfaceSpecificationVersions of a InterfaceSpecification with the created Template */
    interfaceSpecificationVersionTemplate: SubTemplateInput;
    /** SubTemplate for all Interfaces of a InterfaceSpecification with the created Template */
    interfaceTemplate: NullableSubTemplateInput;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

export type CreateInterfaceSpecificationTemplatePayload = {
    __typename?: "CreateInterfaceSpecificationTemplatePayload";
    /** The created InterfaceTemplate */
    interfaceSpecificationTemplate?: Maybe<InterfaceSpecificationTemplate>;
};

/** Input for the createInterfaceSpecificationVersion mutation */
export type CreateInterfaceSpecificationVersionInput = {
    /** Ids of InterfaceParts of the associated InterfaceSpecification which should be the initial `activeParts` */
    activeParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the InterfaceSpecification the created InterfaceSpecificationVersion is part of */
    interfaceSpecification: Scalars["ID"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created InterfaceSpecificationVersion */
    version: Scalars["String"]["input"];
};

export type CreateInterfaceSpecificationVersionPayload = {
    __typename?: "CreateInterfaceSpecificationVersionPayload";
    /** The created InterfaceSpecificationVersion */
    interfaceSpecificationVersion?: Maybe<InterfaceSpecificationVersion>;
};

/** Input for the createIntraComponentDependencySpecification mutation */
export type CreateIntraComponentDependencySpecificationInput = {
    /** The id of the ComponentVersion the created IntraComponentDependencySpecification is part of */
    componentVersion: Scalars["ID"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Initial incomingParticipants, must not be empty */
    incomingParticipants: Array<IntraComponentDependencyParticipantInput>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial outgoingParticipants, must not be empty */
    outgoingParticipants: Array<IntraComponentDependencyParticipantInput>;
};

export type CreateIntraComponentDependencySpecificationPayload = {
    __typename?: "CreateIntraComponentDependencySpecificationPayload";
    /** The created IntraComponentDependencySpecification */
    intraComponentDependencySpecification?: Maybe<IntraComponentDependencySpecification>;
};

/** Input for the createIssueComment mutation */
export type CreateIssueCommentInput = {
    /** The id of the Comment the created IssueComment answers */
    answers?: InputMaybe<Scalars["ID"]["input"]>;
    /** Initial body of the IssueComment */
    body: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue the IssueComment is created on */
    issue: Scalars["ID"]["input"];
    /** Ids of initially referenced artefacts */
    referencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type CreateIssueCommentPayload = {
    __typename?: "CreateIssueCommentPayload";
    /** The created IssueComment */
    issueComment?: Maybe<IssueComment>;
};

/** Input for the createIssue mutation */
export type CreateIssueInput = {
    /** The body of the created Issue */
    body: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the state of the created Issue, must be compatible with template  */
    state: Scalars["ID"]["input"];
    /** The template of the created Issue */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The title of the created Issue */
    title: Scalars["String"]["input"];
    /** Ids of Trackables the Issue is initially on, must not be empty */
    trackables: Array<Scalars["ID"]["input"]>;
    /** The id of the type of the created Issue, must be compatible with template */
    type: Scalars["ID"]["input"];
};

export type CreateIssuePayload = {
    __typename?: "CreateIssuePayload";
    /** The created Issue */
    issue?: Maybe<Issue>;
};

/** Input for the createIssueRelation mutation */
export type CreateIssueRelationInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue from which the IssueRelation starts */
    issue: Scalars["ID"]["input"];
    /** The optional type of the IssueRelation, must be defined by the Template of the Issue */
    issueRelationType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The id of the Issue where the IssueRelation ends */
    relatedIssue: Scalars["ID"]["input"];
};

export type CreateIssueRelationPayload = {
    __typename?: "CreateIssueRelationPayload";
    /** The created IssueRelation */
    issueRelation?: Maybe<IssueRelation>;
};

/** Input for the createIssueTemplate mutation. */
export type CreateIssueTemplateInput = {
    /** Set of all types Assignments to Issues with the created can have. */
    assignmentTypes: Array<AssignmentTypeInput>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Set of all priorities Issues with the created can have. */
    issuePriorities: Array<IssuePriorityInput>;
    /** Set of all states Issues with the created Template can have */
    issueStates: Array<IssueStateInput>;
    /** Set of all types Issues with the created Template can have. */
    issueTypes: Array<IssueTypeInput>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Set of all types outgoing IssueRelations of Issues with the created can have */
    relationTypes: Array<IssueRelationTypeInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

export type CreateIssueTemplatePayload = {
    __typename?: "CreateIssueTemplatePayload";
    /** The created IssueTemplate */
    issueTemplate?: Maybe<IssueTemplate>;
};

/** Input for the createLabel mutation */
export type CreateLabelInput = {
    /** Initial color of the Label */
    color: Scalars["String"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** IDs of Trackables the Label is added to, at least one required. */
    trackables: Array<Scalars["ID"]["input"]>;
};

export type CreateLabelPayload = {
    __typename?: "CreateLabelPayload";
    /** The created Label */
    label?: Maybe<Label>;
};

/** Input for the createProject mutation */
export type CreateProjectInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
};

export type CreateProjectPayload = {
    __typename?: "CreateProjectPayload";
    /** The created Project */
    project?: Maybe<Project>;
};

/** Input for the createProjectPermission mutation */
export type CreateProjectPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created ProjectPermission */
    entries: Array<ProjectPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

export type CreateProjectPermissionPayload = {
    __typename?: "CreateProjectPermissionPayload";
    /** The created ProjectPermission */
    projectPermission?: Maybe<ProjectPermission>;
};

/** Input for the createRelation mutation */
export type CreateRelationInput = {
    /** The end RelationPartner of the Relation */
    end: Scalars["ID"]["input"];
    /** If `end` is an Interface, the parts of the Interface the created Relation includes */
    endParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The start RelationPartner of the Relation */
    start: Scalars["ID"]["input"];
    /** If `start` is an Interface, the parts of the Interface the created Relation includes */
    startParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The template of the created Relation */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

export type CreateRelationPayload = {
    __typename?: "CreateRelationPayload";
    /** The created Relation */
    relation?: Maybe<Relation>;
};

/** Input for the createRelationTemplate mutation */
export type CreateRelationTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Defines which Relations can use the created Template, at least one RelationCondition has to match (logical OR) */
    relationConditions: Array<RelationConditionInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

export type CreateRelationTemplatePayload = {
    __typename?: "CreateRelationTemplatePayload";
    /** The created RelationTemplate */
    relationTemplate?: Maybe<RelationTemplate>;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type DateTimeFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DeleteIssueCommentPayload = {
    __typename?: "DeleteIssueCommentPayload";
    /** The updated IssueComment */
    issueComment?: Maybe<IssueComment>;
};

/** Input for all delete mutations. Deletes the node with the specified id */
export type DeleteNodeInput = {
    /** The id of the Node to delete */
    id: Scalars["ID"]["input"];
};

export type DeleteNodePayload = {
    __typename?: "DeleteNodePayload";
    /** The id of the deleted Node */
    id: Scalars["ID"]["output"];
};

/**
 * Event representing that the due date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type DueDateChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "DueDateChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new due date. */
        newDueDate?: Maybe<Scalars["DateTime"]["output"]>;
        /** The old due date. */
        oldDueDate?: Maybe<Scalars["DateTime"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the due date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type DueDateChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the due date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type DueDateChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the due date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type DueDateChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the estimated time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type EstimatedTimeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "EstimatedTimeChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new estimated time of the Issue. */
        newEstimatedTime?: Maybe<Scalars["Duration"]["output"]>;
        /** The old estimated time of the Issue. */
        oldEstimatedTime?: Maybe<Scalars["Duration"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the estimated time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type EstimatedTimeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the estimated time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type EstimatedTimeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the estimated time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type EstimatedTimeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Entity which provides dynamic extension fields. */
export type ExtensibleNode = {
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
};

/** Entity which provides dynamic extension fields. */
export type ExtensibleNodeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Entity which provides dynamic extension fields. */
export type ExtensibleNodeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Entity which provides dynamic extension fields. */
export type ExtensibleNodeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Filter which can be used to filter for Nodes with a specific Float field */
export type FloatFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Float"]["input"]>;
};

/**
 * Permission associated with a set of users.
 *     Can have NodePermissions to grant permissions on specific Nodes.
 *     READ is granted if the global admin is granted.
 *
 */
export type GlobalPermission = Named &
    Node & {
        __typename?: "GlobalPermission";
        /** If, the permission is granted to all users. Use with caution. */
        allUsers: Scalars["Boolean"]["output"];
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** All permissions this Permission grants */
        entries: Array<PermissionEntry>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** GropiusUsers granted this Permission */
        users: GropiusUserConnection;
    };

/**
 * Permission associated with a set of users.
 *     Can have NodePermissions to grant permissions on specific Nodes.
 *     READ is granted if the global admin is granted.
 *
 */
export type GlobalPermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUser = ExtensibleNode &
    Node &
    User & {
        __typename?: "GropiusUser";
        /** Assignments the user is part of, this includes assignments which aren't active. */
        assignments: AssignmentConnection;
        /** The avatar of the user. */
        avatar: Scalars["URL"]["output"];
        /** AuditedNodes the user created. */
        createdNodes: AuditedNodeConnection;
        /** The name which should be displayed for the user. */
        displayName: Scalars["String"]["output"];
        /** The email address of the user. */
        email?: Maybe<Scalars["String"]["output"]>;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The IMSUsers linked to this GropiusUser. */
        imsUsers: ImsUserConnection;
        /** True if the user is an admin */
        isAdmin: Scalars["Boolean"]["output"];
        /** Issues the user participated in. */
        participatedIssues: IssueConnection;
        /** Permissions the user has. */
        permissions: BasePermissionConnection;
        /** A unique identifier for the GropiusUser. Note that this might not be unique across all Users. */
        username: Scalars["String"]["output"];
    };

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserAssignmentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserCreatedNodesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AuditedNodeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AuditedNodeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserImsUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserParticipatedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user of the Gropius System.
 *     The username can be used as unique identifier for GropiusUsers.
 *     IMSUsers can be linked to a GropiusUser.
 *     Note however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,
 *     after the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.
 *     Therefore, to collect all Assignments, Issue participations etc. it is necessary to also request all
 *     linked IMSUsers and their Assignments etc.
 *
 */
export type GropiusUserPermissionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<BasePermissionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<BasePermissionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for GropiusUser. */
export type GropiusUserConnection = {
    __typename?: "GropiusUserConnection";
    /** A list of all edges of the current page. */
    edges: Array<GropiusUserEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<GropiusUser>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type GropiusUserEdge = {
    __typename?: "GropiusUserEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: GropiusUser;
};

/** Filter used to filter GropiusUser */
export type GropiusUserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<GropiusUserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by imsUsers */
    imsUsers?: InputMaybe<ImsUserListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<GropiusUserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<GropiusUserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by permissions */
    permissions?: InputMaybe<BasePermissionListFilterInput>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type GropiusUserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<GropiusUserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<GropiusUserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<GropiusUserFilterInput>;
};

/** Defines the order of a GropiusUser list */
export type GropiusUserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<GropiusUserOrderField>;
};

/** Fields a list of GropiusUser can be sorted by */
export enum GropiusUserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID"
}

/** Filter which can be used to filter for Nodes with a specific ID field */
export type IdFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["ID"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type Ims = ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    TemplatedNode & {
        __typename?: "IMS";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Permissions for this IMS. */
        permissions: ImsPermissionConnection;
        /** Projects which are synced to this IMS. */
        projects: ImsProjectConnection;
        /** The Template of this Component. */
        template: ImsTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** Users of this IMS. */
        users: ImsUserConnection;
    };

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsPermissionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsPermissionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsPermissionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsProjectsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * Entity which represents an issue management system (like GitHub, Jira, Redmine, ...).
 *     Trackables can be added to this via an IMSProject, so that their issues are synced to this IMS.
 *     READ is granted via an associated IMSPermission.
 *
 */
export type ImsUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IMS. */
export type ImsConnection = {
    __typename?: "IMSConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Ims>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsEdge = {
    __typename?: "IMSEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Ims;
};

/** Filter used to filter IMS */
export type ImsFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ImsPermissionListFilterInput>;
    /** Filter by projects */
    projects?: InputMaybe<ImsProjectListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by users */
    users?: InputMaybe<ImsUserListFilterInput>;
};

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssue = ExtensibleNode &
    Node &
    TemplatedNode & {
        __typename?: "IMSIssue";
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The IMSProject the issue is synced with. */
        imsProject: ImsProject;
        /** The Issue that is synced by the IMSProject */
        issue: Issue;
        /** The Template of this Component. */
        template: ImsIssueTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
    };

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssueExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssueExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssueHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssueTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Issue on an IMS, represents an Issue synced to an IMS.
 *     The representation of the Issue on the IMS depends on the type of IMS.
 *     READ is granted if read is granted on `issue`.
 *
 */
export type ImsIssueTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for IMSIssue. */
export type ImsIssueConnection = {
    __typename?: "IMSIssueConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsIssueEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ImsIssue>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsIssueEdge = {
    __typename?: "IMSIssueEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ImsIssue;
};

/** Filter used to filter IMSIssue */
export type ImsIssueFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsIssueFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    imsProject?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsIssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsIssueFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsIssueTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsIssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsIssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsIssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsIssueFilterInput>;
};

/** Defines the order of a IMSIssue list */
export type ImsIssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsIssueOrderField>;
};

/** Fields a list of IMSIssue can be sorted by */
export enum ImsIssueOrderField {
    /** Order by id */
    Id = "ID"
}

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "IMSIssueTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: ImsTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ImsIssueConnection;
    };

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSIssue.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsIssueTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsIssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsIssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter IMSIssueTemplate */
export type ImsIssueTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsIssueTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsFilterInput>;
};

/** Defines the order of a IMS list */
export type ImsOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsOrderField>;
};

/** Fields a list of IMS can be sorted by */
export enum ImsOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** NodePermission to grant specific permissions to a set of IMSs. */
export type ImsPermission = Named &
    Node & {
        __typename?: "IMSPermission";
        /** If, the permission is granted to all users. Use with caution. */
        allUsers: Scalars["Boolean"]["output"];
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** All permissions this Permission grants */
        entries: Array<ImsPermissionEntry>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Nodes on which the Permission is granted. */
        nodesWithPermission: ImsConnection;
        /** GropiusUsers granted this Permission */
        users: GropiusUserConnection;
    };

/** NodePermission to grant specific permissions to a set of IMSs. */
export type ImsPermissionNodesWithPermissionArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** NodePermission to grant specific permissions to a set of IMSs. */
export type ImsPermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IMSPermission. */
export type ImsPermissionConnection = {
    __typename?: "IMSPermissionConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsPermissionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ImsPermission>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsPermissionEdge = {
    __typename?: "IMSPermissionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ImsPermission;
};

/** IMSPermission entry enum type. */
export enum ImsPermissionEntry {
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /** Allows to create IMSProjects with this IMS. */
    SyncTrackables = "SYNC_TRACKABLES"
}

/** Filter used to filter IMSPermission */
export type ImsPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ImsListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsPermissionFilterInput>;
};

/** Defines the order of a IMSPermission list */
export type ImsPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsPermissionOrderField>;
};

/** Fields a list of IMSPermission can be sorted by */
export enum ImsPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProject = ExtensibleNode &
    MutableTemplatedNode &
    Node &
    TemplatedNode & {
        __typename?: "IMSProject";
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The IMS this project is a part of. */
        ims?: Maybe<Ims>;
        /** The IMSIssues synced to by this project. */
        imsIssues: ImsIssueConnection;
        /** The Template of this Component. */
        template: ImsProjectTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** The trackable which is synced. */
        trackable: Trackable;
    };

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectImsIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsIssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsIssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Project on an IMS, represents a Trackable synced to an IMS.
 *     The representation on the IMS depends on the type of IMS, e.g. for GitHub, a project is a repository.
 *     READ is granted if READ is granted on `trackable` or `ims`.
 *
 */
export type ImsProjectTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for IMSProject. */
export type ImsProjectConnection = {
    __typename?: "IMSProjectConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsProjectEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ImsProject>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsProjectEdge = {
    __typename?: "IMSProjectEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ImsProject;
};

/** Filter used to filter IMSProject */
export type ImsProjectFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsProjectFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    ims?: InputMaybe<ImsFilterInput>;
    /** Filter by imsIssues */
    imsIssues?: InputMaybe<ImsIssueListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsProjectFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsProjectFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsProjectTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filters for nodes where the related node match this filter */
    trackable?: InputMaybe<TrackableFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsProjectListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsProjectFilterInput>;
};

/** Defines the order of a IMSProject list */
export type ImsProjectOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsProjectOrderField>;
};

/** Fields a list of IMSProject can be sorted by */
export enum ImsProjectOrderField {
    /** Order by id */
    Id = "ID"
}

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "IMSProjectTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: ImsTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ImsProjectConnection;
    };

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSProject.
 *     Part of a IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsProjectTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter IMSProjectTemplate */
export type ImsProjectTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsProjectTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    Template & {
        __typename?: "IMSTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: ImsTemplateConnection;
        /** Template this template extends. */
        extends: ImsTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** SubTemplate applied to all IMSIssues with this Template */
        imsIssueTemplate: ImsIssueTemplate;
        /** SubTemplate applied to all IMSProjects with this Template */
        imsProjectTemplate: ImsProjectTemplate;
        /** SubTemplate applied to all IMSUsers with this Template */
        imsUserTemplate: ImsUserTemplate;
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ImsConnection;
    };

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for imss
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IMSTemplate. */
export type ImsTemplateConnection = {
    __typename?: "IMSTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ImsTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsTemplateEdge = {
    __typename?: "IMSTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ImsTemplate;
};

/** Filter used to filter IMSTemplate */
export type ImsTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ImsTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ImsTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsTemplateFilterInput>;
};

/** Defines the order of a IMSTemplate list */
export type ImsTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsTemplateOrderField>;
};

/** Fields a list of IMSTemplate can be sorted by */
export enum ImsTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUser = ExtensibleNode &
    Node &
    TemplatedNode &
    User & {
        __typename?: "IMSUser";
        /** Assignments the user is part of, this includes assignments which aren't active. */
        assignments: AssignmentConnection;
        /** The avatar of the user. */
        avatar: Scalars["URL"]["output"];
        /** AuditedNodes the user created. */
        createdNodes: AuditedNodeConnection;
        /** The name which should be displayed for the user. */
        displayName: Scalars["String"]["output"];
        /** The email address of the user. */
        email?: Maybe<Scalars["String"]["output"]>;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** The GropiusUser this IMSUser is linked to. An IMSUser might be linked to no GropiusUser. */
        gropiusUser?: Maybe<GropiusUser>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The IMS this user is part of. */
        ims: Ims;
        /** Issues the user participated in. */
        participatedIssues: IssueConnection;
        /** The Template of this IMSUser */
        template: ImsUserTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** The username of the IMSUser. Synced from the IMS this user is part of. Might not be unique. */
        username?: Maybe<Scalars["String"]["output"]>;
    };

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserAssignmentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserCreatedNodesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AuditedNodeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AuditedNodeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserParticipatedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A user an IMS.
 *     This user might be linked to a GropiusUser.
 *     Note that this link can change at any time.
 *     The username might not be unique.
 *     It is possible that this user never heard of Gropius, and is only known to the system due to sync adapters.
 *
 */
export type ImsUserTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for IMSUser. */
export type ImsUserConnection = {
    __typename?: "IMSUserConnection";
    /** A list of all edges of the current page. */
    edges: Array<ImsUserEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ImsUser>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ImsUserEdge = {
    __typename?: "IMSUserEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ImsUser;
};

/** Filter used to filter IMSUser */
export type ImsUserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsUserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filters for nodes where the related node match this filter */
    gropiusUser?: InputMaybe<GropiusUserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    ims?: InputMaybe<ImsFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsUserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsUserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsUserTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsUserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsUserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsUserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsUserFilterInput>;
};

/** Defines the order of a IMSUser list */
export type ImsUserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsUserOrderField>;
};

/** Fields a list of IMSUser can be sorted by */
export enum ImsUserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID"
}

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "IMSUserTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: ImsTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: ImsUserConnection;
    };

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for IMSUser.
 *     Part of an IMSTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type ImsUserTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter IMSUserTemplate */
export type ImsUserTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsUserTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
};

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issueRelation`.
 *
 */
export type IncomingRelationTypeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    RelationTypeChangedEvent &
    TimelineItem & {
        __typename?: "IncomingRelationTypeChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The IssueRelation of which the type was changed */
        issueRelation: IssueRelation;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new type. */
        newType?: Maybe<IssueRelationType>;
        /** The old type. */
        oldType?: Maybe<IssueRelationType>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issueRelation`.
 *
 */
export type IncomingRelationTypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issueRelation`.
 *
 */
export type IncomingRelationTypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issueRelation`.
 *
 */
export type IncomingRelationTypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type Interface = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    RelationPartner &
    TemplatedNode & {
        __typename?: "Interface";
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Relations which use this as the end of the Relation. */
        incomingRelations: RelationConnection;
        /** The definition of this interface. */
        interfaceDefinition: InterfaceDefinition;
        /** Participants of IntraComponentDependencySpecifications where this is used. */
        intraComponentDependencyParticipants: IntraComponentDependencyParticipantConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Relations which use this as the start of the Relation. */
        outgoingRelations: RelationConnection;
        /** The Template of this Interface. */
        template: InterfaceTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
    };

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceIncomingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceIntraComponentDependencyParticipantsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IntraComponentDependencyParticipantOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceOutgoingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An interface which is part of a specific ComponentVersion.
 *     Its semantics depend on the InterfaceSpecification it is specified by, e.g. an Interface can represent a REST API.
 *     Can be used in Relations and affected by Issues.
 *     READ is granted if READ is granted on `interfaceDefinition`.
 *
 */
export type InterfaceTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for Interface. */
export type InterfaceConnection = {
    __typename?: "InterfaceConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Interface>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinition = ExtensibleNode &
    MutableTemplatedNode &
    Node &
    TemplatedNode & {
        __typename?: "InterfaceDefinition";
        /** The ComponentVersion using the InterfaceSpecificationVersion */
        componentVersion: ComponentVersion;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The InterfaceSpecificationVersion present on the ComponentVersion */
        interfaceSpecificationVersion: InterfaceSpecificationVersion;
        /** Relations because of which `interfaceSpecificationVersion` is invisible derived on `componentVersion` */
        invisibleDerivedBy: RelationConnection;
        /** If true, `interfaceSpecificationVersion`is self-defined invisible on the `componentVersion` */
        invisibleSelfDefined: Scalars["Boolean"]["output"];
        /** The Template of this InterfaceDefinition. */
        template: InterfaceDefinitionTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** Relations because of which `interfaceSpecificationVersion` is visible derived on `componentVersion` */
        visibleDerivedBy: RelationConnection;
        /** If visible, the created Interface */
        visibleInterface?: Maybe<Interface>;
        /** If true, `interfaceSpecificationVersion`is self-defined visible on the `componentVersion` */
        visibleSelfDefined: Scalars["Boolean"]["output"];
    };

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionInvisibleDerivedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * InterfaceDefinition on a ComponentVersion
 *     Specifies if it is visible/invisible self-defined.
 *     Specifies if it is visible/invisible derived (and by which Relations)
 *     READ is granted if READ is granted on `componentVersion`
 *
 */
export type InterfaceDefinitionVisibleDerivedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for InterfaceDefinition. */
export type InterfaceDefinitionConnection = {
    __typename?: "InterfaceDefinitionConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceDefinitionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfaceDefinition>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type InterfaceDefinitionEdge = {
    __typename?: "InterfaceDefinitionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfaceDefinition;
};

/** Filter used to filter InterfaceDefinition */
export type InterfaceDefinitionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    componentVersion?: InputMaybe<ComponentVersionFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceSpecificationVersion?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filter by invisibleDerivedBy */
    invisibleDerivedBy?: InputMaybe<RelationListFilterInput>;
    /** Filter by invisibleSelfDefined */
    invisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceDefinitionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by visibleDerivedBy */
    visibleDerivedBy?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    visibleInterface?: InputMaybe<InterfaceFilterInput>;
    /** Filter by visibleSelfDefined */
    visibleSelfDefined?: InputMaybe<BooleanFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceDefinitionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceDefinitionFilterInput>;
};

/** Defines the order of a InterfaceDefinition list */
export type InterfaceDefinitionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceDefinitionOrderField>;
};

/** Fields a list of InterfaceDefinition can be sorted by */
export enum InterfaceDefinitionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by invisibleSelfDefined */
    InvisibleSelfDefined = "INVISIBLE_SELF_DEFINED",
    /** Order by visibleSelfDefined */
    VisibleSelfDefined = "VISIBLE_SELF_DEFINED"
}

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "InterfaceDefinitionTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: InterfaceSpecificationTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: InterfaceDefinitionConnection;
    };

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfaceDefinition.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceDefinitionTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceDefinitionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceDefinitionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter InterfaceDefinitionTemplate */
export type InterfaceDefinitionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceDefinitionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceDefinitionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceDefinitionTemplateFilterInput>>;
};

/** An edge in a connection. */
export type InterfaceEdge = {
    __typename?: "InterfaceEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Interface;
};

/** Filter used to filter Interface */
export type InterfaceFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceDefinition?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filter by intraComponentDependencyParticipants */
    intraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Defines the order of a Interface list */
export type InterfaceOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceOrderField>;
};

/** Fields a list of Interface can be sorted by */
export enum InterfaceOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePart = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    TemplatedNode & {
        __typename?: "InterfacePart";
        /** InterfaceSpecificationVersions where this InterfacePart is active. */
        activeOn: InterfaceSpecificationVersionConnection;
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** InterfaceSpecification which defines this InterfacePart */
        definedOn: InterfaceSpecification;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Relations which include this InterfacePart at the end of the Relation */
        includingIncomingRelations: RelationConnection;
        /** Participants of IntraComponentDependencySpecifications where this is used as included part. */
        includingIntraComponentDependencyParticipants: IntraComponentDependencyParticipantConnection;
        /** Relations which include this InterfacePart at the start of the Relation */
        includingOutgoingRelations: RelationConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template of this InterfacePart */
        template: InterfacePartTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
    };

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartActiveOnArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartIncludingIncomingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartIncludingIntraComponentDependencyParticipantsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IntraComponentDependencyParticipantOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartIncludingOutgoingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Part of an Interface(Specification).
 *     Its semantics depend on the InterfaceSpecification, e.g. for a REST API interface,
 *     this could represent a single endpoint of the API.
 *     Relations can specify for both start and end included InterfaceParts.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     READ is granted if READ is granted on `definedOn`.
 *
 */
export type InterfacePartTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for InterfacePart. */
export type InterfacePartConnection = {
    __typename?: "InterfacePartConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfacePartEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfacePart>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type InterfacePartEdge = {
    __typename?: "InterfacePartEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfacePart;
};

/** Filter used to filter InterfacePart */
export type InterfacePartFilterInput = {
    /** Filter by activeOn */
    activeOn?: InputMaybe<InterfaceSpecificationVersionListFilterInput>;
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfacePartFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    definedOn?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includingIncomingRelations */
    includingIncomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by includingIntraComponentDependencyParticipants */
    includingIntraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by includingOutgoingRelations */
    includingOutgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfacePartFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfacePartFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfacePartTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Input to create an InterfacePart */
export type InterfacePartInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfacePartListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfacePartFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfacePartFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfacePartFilterInput>;
};

/** Defines the order of a InterfacePart list */
export type InterfacePartOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfacePartOrderField>;
};

/** Fields a list of InterfacePart can be sorted by */
export enum InterfacePartOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "InterfacePartTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: InterfaceSpecificationTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: InterfacePartConnection;
    };

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfacePart.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfacePartTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter InterfacePartTemplate */
export type InterfacePartTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfacePartTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecification = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    TemplatedNode & {
        __typename?: "InterfaceSpecification";
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** The Component this InterfaceSpecificaton is part of. */
        component: Component;
        /**
         * InterfaceParts defined by this InterfaceSpecification.
         *         Note that active parts depend on the InterfaceSpecificationVersion
         *
         */
        definedParts: InterfacePartConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template of this InterfaceSpecification. */
        template: InterfaceSpecificationTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** Versions of this InterfaceSpecification. */
        versions: InterfaceSpecificationVersionConnection;
    };

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationDefinedPartsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * Specification of an Interface.
 *     Defined on a Component, but can be visible and invisible on different ComponentVersions.
 *     Can be affected by Issues, and be used as start / end of ServiceEffectSpecifications.
 *     Defines InterfaceParts, but active parts depend on the InterfaceSpecificationVersion.
 *     READ is granted if READ is granted on `component`, or any InterfaceSpecificationVersion in `versions`.
 *
 */
export type InterfaceSpecificationVersionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for InterfaceSpecification. */
export type InterfaceSpecificationConnection = {
    __typename?: "InterfaceSpecificationConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceSpecificationEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfaceSpecification>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/**
 * Defines which InterfaceSpecifications are derived under which conditions by a Relation.
 *     Part of a RelationCondition, which is part of RelationTemplates.
 *     READ is always granted.
 *
 */
export type InterfaceSpecificationDerivationCondition = ExtensibleNode &
    Node & {
        __typename?: "InterfaceSpecificationDerivationCondition";
        /** Templates of InterfaceSpecifications which are derived. */
        derivableInterfaceSpecifications: InterfaceSpecificationTemplateConnection;
        /** If true, invisible derived InterfaceSpecifications are derived */
        derivesInvisibleDerived: Scalars["Boolean"]["output"];
        /** If true, invisible self-defined InterfaceSpecifications are derived */
        derivesInvisibleSelfDefined: Scalars["Boolean"]["output"];
        /** If true, visible derived InterfaceSpecifications are derived */
        derivesVisibleDerived: Scalars["Boolean"]["output"];
        /** If true, visible self-defined InterfaceSpecifications are derived */
        derivesVisibleSelfDefined: Scalars["Boolean"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true InterfaceSpecifications are invisible derived */
        isInvisibleDerived: Scalars["Boolean"]["output"];
        /** If true InterfaceSpecifications are visible derived */
        isVisibleDerived: Scalars["Boolean"]["output"];
        /** The RelationCondition this is part of. */
        partOf: RelationCondition;
    };

/**
 * Defines which InterfaceSpecifications are derived under which conditions by a Relation.
 *     Part of a RelationCondition, which is part of RelationTemplates.
 *     READ is always granted.
 *
 */
export type InterfaceSpecificationDerivationConditionDerivableInterfaceSpecificationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Defines which InterfaceSpecifications are derived under which conditions by a Relation.
 *     Part of a RelationCondition, which is part of RelationTemplates.
 *     READ is always granted.
 *
 */
export type InterfaceSpecificationDerivationConditionExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Defines which InterfaceSpecifications are derived under which conditions by a Relation.
 *     Part of a RelationCondition, which is part of RelationTemplates.
 *     READ is always granted.
 *
 */
export type InterfaceSpecificationDerivationConditionExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Defines which InterfaceSpecifications are derived under which conditions by a Relation.
 *     Part of a RelationCondition, which is part of RelationTemplates.
 *     READ is always granted.
 *
 */
export type InterfaceSpecificationDerivationConditionHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for InterfaceSpecificationDerivationCondition. */
export type InterfaceSpecificationDerivationConditionConnection = {
    __typename?: "InterfaceSpecificationDerivationConditionConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceSpecificationDerivationConditionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfaceSpecificationDerivationCondition>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type InterfaceSpecificationDerivationConditionEdge = {
    __typename?: "InterfaceSpecificationDerivationConditionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfaceSpecificationDerivationCondition;
};

/** Filter used to filter InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
    /** Filter by derivableInterfaceSpecifications */
    derivableInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by derivesInvisibleDerived */
    derivesInvisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesInvisibleSelfDefined */
    derivesInvisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesVisibleDerived */
    derivesVisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesVisibleSelfDefined */
    derivesVisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isInvisibleDerived */
    isInvisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by isVisibleDerived */
    isVisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    partOf?: InputMaybe<RelationConditionFilterInput>;
};

/** Input to create a InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionInput = {
    /** If true, invisible derived InterfaceSpecifications are derived */
    derivesInvisibleDerived: Scalars["Boolean"]["input"];
    /** If true, invisible self-defined InterfaceSpecifications are derived */
    derivesInvisibleSelfDefined: Scalars["Boolean"]["input"];
    /** If true, visible derived InterfaceSpecifications are derived */
    derivesVisibleDerived: Scalars["Boolean"]["input"];
    /** If true, visible self-defined InterfaceSpecifications are derived */
    derivesVisibleSelfDefined: Scalars["Boolean"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** If true InterfaceSpecifications are invisible derived */
    isInvisibleDerived: Scalars["Boolean"]["input"];
    /** If true InterfaceSpecifications are visible derived */
    isVisibleDerived: Scalars["Boolean"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationDerivationConditionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationDerivationCondition list */
export type InterfaceSpecificationDerivationConditionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationDerivationConditionOrderField>;
};

/** Fields a list of InterfaceSpecificationDerivationCondition can be sorted by */
export enum InterfaceSpecificationDerivationConditionOrderField {
    /** Order by id */
    Id = "ID"
}

/** An edge in a connection. */
export type InterfaceSpecificationEdge = {
    __typename?: "InterfaceSpecificationEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfaceSpecification;
};

/** Filter used to filter InterfaceSpecification */
export type InterfaceSpecificationFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    component?: InputMaybe<ComponentFilterInput>;
    /** Filter by definedParts */
    definedParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by versions */
    versions?: InputMaybe<InterfaceSpecificationVersionListFilterInput>;
};

/** Input to create an InterfaceSpecification */
export type InterfaceSpecificationInput = {
    /** Initial defined InterfaceParts */
    definedParts?: InputMaybe<Array<InterfacePartInput>>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created InterfaceSpecification */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the InterfaceSpecification */
    versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationFilterInput>;
};

/** Defines the order of a InterfaceSpecification list */
export type InterfaceSpecificationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationOrderField>;
};

/** Fields a list of InterfaceSpecification can be sorted by */
export enum InterfaceSpecificationOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    RelationPartnerTemplate &
    Template & {
        __typename?: "InterfaceSpecificationTemplate";
        /** Templates of Components InterfaceSpecifications with this template can be invisible on. */
        canBeInvisibleOnComponents: ComponentTemplateConnection;
        /** Templates of Components InterfaceSpecifications with this template can be visible on. */
        canBeVisibleOnComponents: ComponentTemplateConnection;
        /**
         * InterfaceSpecificationDerivationConditions which allow to derive InterfaceSpecification with this template.
         *
         */
        derivableBy: InterfaceSpecificationDerivationConditionConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: InterfaceSpecificationTemplateConnection;
        /** Template this template extends. */
        extends: InterfaceSpecificationTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /**
         * SubTemplate applied to all InterfaceDefinitions of InterfaceSpecifications with this Template.
         *
         */
        interfaceDefinitionTemplate: InterfaceDefinitionTemplate;
        /**
         * SubTemplate applied to all InterfaceParts of InterfaceSpecifications with this Template.
         *
         */
        interfacePartTemplate: InterfacePartTemplate;
        /**
         * SubTemplate applied to all InterfaceSpecificationVersions of InterfaceSpecifications with this Template.
         *
         */
        interfaceSpecificationVersionTemplate: InterfaceSpecificationVersionTemplate;
        /**
         * SubTemplate applied to all Interfaces of InterfaceSpecifications with this Template.
         *
         */
        interfaceTemplate: InterfaceTemplate;
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** RelationConditions which allow this template for the end of the relation. */
        possibleEndOfRelations: RelationConditionConnection;
        /** RelationConditions which allow this template for the start of the relation. */
        possibleStartOfRelations: RelationConditionConnection;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: InterfaceSpecificationConnection;
    };

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateCanBeInvisibleOnComponentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateCanBeVisibleOnComponentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateDerivableByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationDerivationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplatePossibleEndOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplatePossibleStartOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for InterfaceSpecifications.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines on which Components InterfaceSpecifications with this Template can be (in)visible on.
 *     Defines SubTemplates for Interfaces and InterfaceSpecificationVersions.
 *
 */
export type InterfaceSpecificationTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for InterfaceSpecificationTemplate. */
export type InterfaceSpecificationTemplateConnection = {
    __typename?: "InterfaceSpecificationTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceSpecificationTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfaceSpecificationTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type InterfaceSpecificationTemplateEdge = {
    __typename?: "InterfaceSpecificationTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfaceSpecificationTemplate;
};

/** Filter used to filter InterfaceSpecificationTemplate */
export type InterfaceSpecificationTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
    /** Filter by canBeInvisibleOnComponents */
    canBeInvisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by canBeVisibleOnComponents */
    canBeVisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by derivableBy */
    derivableBy?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
};

/** Defines the order of a InterfaceSpecificationTemplate list */
export type InterfaceSpecificationTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationTemplateOrderField>;
};

/** Fields a list of InterfaceSpecificationTemplate can be sorted by */
export enum InterfaceSpecificationTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersion = AffectedByIssue &
    ExtensibleNode &
    MutableTemplatedNode &
    Named &
    NamedNode &
    Node &
    TemplatedNode &
    Versioned & {
        __typename?: "InterfaceSpecificationVersion";
        /**
         * InterfaceParts which are active on this InterfaceSpecificationVersion
         *         Semantically, only the active parts on an InterfaceSpecificationVersion exist on the Interfaces
         *         defined by the InterfaceSpecificationVersion.
         *
         */
        activeParts: InterfacePartConnection;
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Defines on which ComponentVersions this InterfaceSpecificationVersion is used */
        interfaceDefinitions: InterfaceDefinitionConnection;
        /** The InterfaceSpecification this is part of. */
        interfaceSpecification: InterfaceSpecification;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template of this InterfaceSpecificationVersion */
        template: InterfaceSpecificationVersionTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** The version of this InterfaceSpecificationVersion. */
        version: Scalars["String"]["output"];
    };

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionActivePartsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionInterfaceDefinitionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceDefinitionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceDefinitionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A specific version of an InterfaceSpecification.
 *     Defines which InterfaceParts are active.
 *     Can be both visible (generates an Interface) and invisible (does not generate an Interface)
 *     on different Components.
 *     Can be derived by Relations, and affected by Issues.
 *     READ is granted if READ is granted on `interfaceSpecification`,
 *     or any InterfaceDefinition in `definitions`
 *
 */
export type InterfaceSpecificationVersionTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The connection type for InterfaceSpecificationVersion. */
export type InterfaceSpecificationVersionConnection = {
    __typename?: "InterfaceSpecificationVersionConnection";
    /** A list of all edges of the current page. */
    edges: Array<InterfaceSpecificationVersionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<InterfaceSpecificationVersion>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type InterfaceSpecificationVersionEdge = {
    __typename?: "InterfaceSpecificationVersionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: InterfaceSpecificationVersion;
};

/** Filter used to filter InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionFilterInput = {
    /** Filter by activeParts */
    activeParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceDefinitions */
    interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceSpecification?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by version */
    version?: InputMaybe<StringFilterInput>;
};

/** Input to create an InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionInput = {
    /** Ids of InterfaceParts of the associated InterfaceSpecification which should be the initial `activeParts` */
    activeParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created InterfaceSpecificationVersion */
    version: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationVersionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationVersion list */
export type InterfaceSpecificationVersionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationVersionOrderField>;
};

/** Fields a list of InterfaceSpecificationVersion can be sorted by */
export enum InterfaceSpecificationVersionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by version */
    Version = "VERSION"
}

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "InterfaceSpecificationVersionTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: InterfaceSpecificationTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: InterfaceSpecificationVersionConnection;
    };

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for InterfaceSpecificationVersion.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type InterfaceSpecificationVersionTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter InterfaceSpecificationVersionTemplate */
export type InterfaceSpecificationVersionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
};

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    SubTemplate & {
        __typename?: "InterfaceTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The Template this SubTemplate is part of */
        partOf: InterfaceSpecificationTemplate;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: InterfaceConnection;
    };

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * SubTemplate for Interface.
 *     Part of a InterfaceSpecificationTemplate.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     All templatedFieldSpecifications must allow `null` as value.
 *
 */
export type InterfaceTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter InterfaceTemplate */
export type InterfaceTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceTemplateFilterInput>>;
};

/**
 * Participant of a a IntraComponentDependencySpecification
 *     Consists of an Interface it refers to, and optionally a subset of its active InterfaceParts.
 *     READ is granted if READ is granted on the associated ComponentVersion
 *
 */
export type IntraComponentDependencyParticipant = ExtensibleNode &
    Node & {
        __typename?: "IntraComponentDependencyParticipant";
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /**
         * If not empty, the InterfaceParts this IntraComponentDependencyParticipant refers to
         *         Otherwise, it refers to the referenced `interface` in general.
         *         Must all be active on `interface`.
         *
         */
        includedParts: InterfacePartConnection;
        /** The Interface this IntraComponentDependencyParticipant refers to */
        interface: Interface;
        /** If this is used as incoming, the IntraComponentDependencySpecification where it is used */
        usedAsIncomingAt?: Maybe<IntraComponentDependencySpecification>;
        /** If this is used as outgoing, the IntraComponentDependencySpecification where it is used */
        usedAsOutgoingAt?: Maybe<IntraComponentDependencySpecification>;
    };

/**
 * Participant of a a IntraComponentDependencySpecification
 *     Consists of an Interface it refers to, and optionally a subset of its active InterfaceParts.
 *     READ is granted if READ is granted on the associated ComponentVersion
 *
 */
export type IntraComponentDependencyParticipantExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Participant of a a IntraComponentDependencySpecification
 *     Consists of an Interface it refers to, and optionally a subset of its active InterfaceParts.
 *     READ is granted if READ is granted on the associated ComponentVersion
 *
 */
export type IntraComponentDependencyParticipantExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Participant of a a IntraComponentDependencySpecification
 *     Consists of an Interface it refers to, and optionally a subset of its active InterfaceParts.
 *     READ is granted if READ is granted on the associated ComponentVersion
 *
 */
export type IntraComponentDependencyParticipantHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Participant of a a IntraComponentDependencySpecification
 *     Consists of an Interface it refers to, and optionally a subset of its active InterfaceParts.
 *     READ is granted if READ is granted on the associated ComponentVersion
 *
 */
export type IntraComponentDependencyParticipantIncludedPartsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IntraComponentDependencyParticipant. */
export type IntraComponentDependencyParticipantConnection = {
    __typename?: "IntraComponentDependencyParticipantConnection";
    /** A list of all edges of the current page. */
    edges: Array<IntraComponentDependencyParticipantEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IntraComponentDependencyParticipant>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IntraComponentDependencyParticipantEdge = {
    __typename?: "IntraComponentDependencyParticipantEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IntraComponentDependencyParticipant;
};

/** Filter used to filter IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includedParts */
    includedParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interface?: InputMaybe<InterfaceFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    usedAsIncomingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where the related node match this filter */
    usedAsOutgoingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Input to create a IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The ids of includedParts, must all be activeParts on the InterfaceSpecificationVersion associated with `interface` */
    includedParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * The id of the Interface, must be an Interface on the ComponentVersion the
     *         IntraComponentDependencySpecification this is part of refers to
     *
     */
    interface: Scalars["ID"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencyParticipantListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
};

/** Defines the order of a IntraComponentDependencyParticipant list */
export type IntraComponentDependencyParticipantOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IntraComponentDependencyParticipantOrderField>;
};

/** Fields a list of IntraComponentDependencyParticipant can be sorted by */
export enum IntraComponentDependencyParticipantOrderField {
    /** Order by id */
    Id = "ID"
}

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecification = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "IntraComponentDependencySpecification";
        /** The ComponentVersion this is part of */
        componentVersion: ComponentVersion;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The incoming Interfaces of this ServiceEffectSpecification. */
        incomingParticipants: IntraComponentDependencyParticipantConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** The outgoing Interfaces of this ServiceEffectSpecification. */
        outgoingParticipants: IntraComponentDependencyParticipantConnection;
    };

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecificationExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecificationExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecificationHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecificationIncomingParticipantsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IntraComponentDependencyParticipantOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Describes a dependency between Interfaces of a Component.
 *     Both ends can optionally affected InterfaceParts.
 *     Semantically, any InterfaceSpecification(Version) in `outgoing` depends on any InterfaceSpecification(Version) in
 *     `incoming`.
 *     This can result in a propagation of Issues, if any location in `in` is in some regard affected by an Issue,
 *     all locations in `out` are affected by this Issue, too.
 *
 */
export type IntraComponentDependencySpecificationOutgoingParticipantsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IntraComponentDependencyParticipantOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IntraComponentDependencySpecification. */
export type IntraComponentDependencySpecificationConnection = {
    __typename?: "IntraComponentDependencySpecificationConnection";
    /** A list of all edges of the current page. */
    edges: Array<IntraComponentDependencySpecificationEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IntraComponentDependencySpecification>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IntraComponentDependencySpecificationEdge = {
    __typename?: "IntraComponentDependencySpecificationEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IntraComponentDependencySpecification;
};

/** Filter used to filter IntraComponentDependencySpecification */
export type IntraComponentDependencySpecificationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    componentVersion?: InputMaybe<ComponentVersionFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingParticipants */
    incomingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
    /** Filter by outgoingParticipants */
    outgoingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencySpecificationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Defines the order of a IntraComponentDependencySpecification list */
export type IntraComponentDependencySpecificationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IntraComponentDependencySpecificationOrderField>;
};

/** Fields a list of IntraComponentDependencySpecification can be sorted by */
export enum IntraComponentDependencySpecificationOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type Issue = AuditedNode &
    ExtensibleNode &
    MutableTemplatedNode &
    Node &
    TemplatedNode & {
        __typename?: "Issue";
        /** Entities which are in some regard affected by this Issue. */
        affects: AffectedByIssueConnection;
        /** Artefacts currently assigned to the Issue. For the history, see timelineItems. */
        artefacts: ArtefactConnection;
        /** Current Assignments to this Issue. For the history, see timelineItems. */
        assignments: AssignmentConnection;
        /** The Body of the Issue, a Comment directly associated with the Issue. */
        body: Body;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** DateTime when working on this Issue should be finished. */
        dueDate?: Maybe<Scalars["DateTime"]["output"]>;
        /** Estimated amount of time necessary for this Issue. */
        estimatedTime?: Maybe<Scalars["Duration"]["output"]>;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /**
         * Descriptions of each IMSProject this issue is synced to containing information specified by the sync
         *
         */
        imsIssues: ImsIssueConnection;
        /** Current IssueRelations which have this Issue as end point. */
        incomingRelations: IssueRelationConnection;
        /** Comments on the Issue, subset of the timeline. */
        issueComments: IssueCommentConnection;
        /** Labels currently assigned to the Issue. For the history, see timelineItems. */
        labels: LabelConnection;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The DateTime when the Issue was last updated, this includes a changed timeline. */
        lastUpdatedAt: Scalars["DateTime"]["output"];
        /** Current IssueRelations which have this Issue as start point. */
        outgoingRelations: IssueRelationConnection;
        /** Users who participated on the Issue, e.g. commented, added Labels, ... */
        participants: UserConnection;
        /** Trackables this Issue is currently pinned on. For the history, see timelineItems. */
        pinnedOn: TrackableConnection;
        /** The priority of the Issue, e.g. HIGH. Allowed IssuePriorities are defined by the template. */
        priority?: Maybe<IssuePriority>;
        /** Time spent working on this Issue. */
        spentTime?: Maybe<Scalars["Duration"]["output"]>;
        /** DateTime when working on this Issue started / will start. */
        startDate?: Maybe<Scalars["DateTime"]["output"]>;
        /**
         * The state of the Issue, e.g. OPEN. Allowed IssueStates are defined by the template.
         *         The state also defines if this Issue is considered open or closed.
         *
         */
        state: IssueState;
        /** The Template of this Issue. */
        template: IssueTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
        /** Timeline of the Issue, shows how the Issue changed over time. */
        timelineItems: TimelineItemConnection;
        /** Title of the Issue, usually a short description of the Issue. */
        title: Scalars["String"]["output"];
        /** Trackables this Issue is part of. */
        trackables: TrackableConnection;
        /** The type of the Issue, e.g. BUG. Allowed IssueTypes are defined by the template. */
        type: IssueType;
    };

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueAffectsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AffectedByIssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AffectedByIssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueArtefactsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueAssignmentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueImsIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsIssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsIssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueIncomingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueRelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueRelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueIssueCommentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueCommentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueCommentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueLabelsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LabelFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<LabelOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueOutgoingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueRelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueRelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueParticipantsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<UserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<UserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssuePinnedOnArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TrackableFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TrackableOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueTimelineItemsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TimelineItemFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TimelineItemOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An Issue in the Gropius system.
 *     Issues can be used to report bugs, request features, ask questions, ...
 *     Issues are synced to all IMSProjects of Trackables they are part of.
 *     All changes to the Issue are reflected by the timeline.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *     Caution: due to confidentiality reasons, updates to `incomingRelations` do not cause updates on `lastModifiedBy`
 *     and `participants`, however, `lastModifiedAt` and `lastUpdatedAt` is still changed.
 *     The same applies to RelatedByIssueEvent, RemovedIncomingRelationEvent and IncomingRelationTypeChangedEvent.
 *
 */
export type IssueTrackablesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TrackableFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TrackableOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueComment = AuditedNode &
    Comment &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "IssueComment";
        /** IssueComments which answer this Comment. */
        answeredBy: IssueCommentConnection;
        /** The Comment this IssueComment is an answers to. */
        answers?: Maybe<Comment>;
        /**
         * The text of the Comment.
         *         Supports GFM (GitHub Flavored Markdown).
         *         Updates to the body cause lastEditedAt and lastEditedBy to change, while updates to referencedArtefacts
         *         do not.
         *         Empty String if IssueComment is deleted.
         *
         */
        body: Scalars["String"]["output"];
        /**
         * Keep track when the body of the Comment was last updated.
         *         If not updated yet, the DateTime of creation.
         *
         */
        bodyLastEditedAt: Scalars["DateTime"]["output"];
        /**
         * The User who last edited the body of this Comment.
         *         If not edited yet, the creator of the Comment.
         *
         */
        bodyLastEditedBy: User;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true, the IssueComment was deleted and the body is no longer visible. */
        isDeleted: Scalars["Boolean"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** Referenced Artefacts. Changes to not cause lastEditedAt/lastEditedBy to change. */
        referencedArtefacts: ArtefactConnection;
    };

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueCommentAnsweredByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueCommentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueCommentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueCommentExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueCommentExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueCommentHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Comment on an Issue.
 *     Can reference Artefacts.
 *     Can be deleted, if deleted, the body is set to an empty String and the referencedComments are cleared.
 *     Keeps track when it was last edited and by who, but does not keep track of the change history.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueCommentReferencedArtefactsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssueComment. */
export type IssueCommentConnection = {
    __typename?: "IssueCommentConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueCommentEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueComment>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueCommentEdge = {
    __typename?: "IssueCommentEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueComment;
};

/** Filter used to filter IssueComment */
export type IssueCommentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueCommentFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    answers?: InputMaybe<CommentFilterInput>;
    /** Filter by body */
    body?: InputMaybe<StringFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isCommentDeleted */
    isCommentDeleted?: InputMaybe<BooleanFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueCommentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueCommentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter by referencedArtefacts */
    referencedArtefacts?: InputMaybe<ArtefactListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueCommentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueCommentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueCommentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueCommentFilterInput>;
};

/** Defines the order of a IssueComment list */
export type IssueCommentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueCommentOrderField>;
};

/** Fields a list of IssueComment can be sorted by */
export enum IssueCommentOrderField {
    /** Order by bodyLastEditedAt */
    BodyLastEditedAt = "BODY_LAST_EDITED_AT",
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** The connection type for Issue. */
export type IssueConnection = {
    __typename?: "IssueConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Issue>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueEdge = {
    __typename?: "IssueEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Issue;
};

/** Filter used to filter Issue */
export type IssueFilterInput = {
    /** Filter by affects */
    affects?: InputMaybe<AffectedByIssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    body?: InputMaybe<BodyFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by dueDate */
    dueDate?: InputMaybe<NullableDateTimeFilterInput>;
    /** Filter by estimatedTime */
    estimatedTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by imsIssues */
    imsIssues?: InputMaybe<ImsIssueListFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<IssueRelationListFilterInput>;
    /** Filter by issueComments */
    issueComments?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Filter by lastUpdatedAt */
    lastUpdatedAt?: InputMaybe<DateTimeFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<IssueRelationListFilterInput>;
    /** Filter by participants */
    participants?: InputMaybe<UserListFilterInput>;
    /** Filter by pinnedOn */
    pinnedOn?: InputMaybe<TrackableListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    priority?: InputMaybe<IssuePriorityFilterInput>;
    /** Filter by spentTime */
    spentTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
    /** Filter by startDate */
    startDate?: InputMaybe<NullableDateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    state?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<IssueTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by timelineItems */
    timelineItems?: InputMaybe<TimelineItemListFilterInput>;
    /** Filter by title */
    title?: InputMaybe<StringFilterInput>;
    /** Filter by trackables */
    trackables?: InputMaybe<TrackableListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueFilterInput>;
};

/** Defines the order of a Issue list */
export type IssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueOrderField>;
};

/** Fields a list of Issue can be sorted by */
export enum IssueOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by dueDate */
    DueDate = "DUE_DATE",
    /** Order by estimatedTime */
    EstimatedTime = "ESTIMATED_TIME",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by lastUpdatedAt */
    LastUpdatedAt = "LAST_UPDATED_AT",
    /** Order by spentTime */
    SpentTime = "SPENT_TIME",
    /** Order by startDate */
    StartDate = "START_DATE",
    /** Order by title */
    Title = "TITLE"
}

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriority = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "IssuePriority";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        partOf: IssueTemplateConnection;
        prioritizedIssues: IssueConnection;
        /** The value of the IssuePriority, used to compare/order different IssuePriorities. */
        value: Scalars["Float"]["output"];
    };

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriorityExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriorityExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriorityHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriorityPartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssuePriorityPrioritizedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssuePriority. */
export type IssuePriorityConnection = {
    __typename?: "IssuePriorityConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssuePriorityEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssuePriority>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssuePriorityEdge = {
    __typename?: "IssuePriorityEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssuePriority;
};

/** Filter used to filter IssuePriority */
export type IssuePriorityFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssuePriorityFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssuePriorityFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssuePriorityFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by prioritizedIssues */
    prioritizedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by value */
    value?: InputMaybe<FloatFilterInput>;
};

/** Input to create an IssuePriority */
export type IssuePriorityInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The value of the created IssuePriority, used to compare/order different IssuePriorities */
    value: Scalars["Float"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssuePriorityListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssuePriorityFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssuePriorityFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssuePriorityFilterInput>;
};

/** Defines the order of a IssuePriority list */
export type IssuePriorityOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssuePriorityOrderField>;
};

/** Fields a list of IssuePriority can be sorted by */
export enum IssuePriorityOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by value */
    Value = "VALUE"
}

/**
 * Event representing that a relation between two Issues has been created.
 *     An IssueRelation is only active if it is still in `outgoingRelations` on the `issue`,
 *     respectively in incomingRelations on the `relatedIssue`.
 *     Caution: This is **not** a subtype of Relation.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueRelation = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "IssueRelation";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The end of the relation, null if deleted. */
        relatedIssue?: Maybe<Issue>;
        /** The type of the relation, e.g. DUPLICATES. Allowed types are defined by the IssueTemplate. */
        type?: Maybe<IssueRelationType>;
    };

/**
 * Event representing that a relation between two Issues has been created.
 *     An IssueRelation is only active if it is still in `outgoingRelations` on the `issue`,
 *     respectively in incomingRelations on the `relatedIssue`.
 *     Caution: This is **not** a subtype of Relation.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueRelationExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a relation between two Issues has been created.
 *     An IssueRelation is only active if it is still in `outgoingRelations` on the `issue`,
 *     respectively in incomingRelations on the `relatedIssue`.
 *     Caution: This is **not** a subtype of Relation.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueRelationExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a relation between two Issues has been created.
 *     An IssueRelation is only active if it is still in `outgoingRelations` on the `issue`,
 *     respectively in incomingRelations on the `relatedIssue`.
 *     Caution: This is **not** a subtype of Relation.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type IssueRelationHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for IssueRelation. */
export type IssueRelationConnection = {
    __typename?: "IssueRelationConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueRelationEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueRelation>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueRelationEdge = {
    __typename?: "IssueRelationEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueRelation;
};

/** Filter used to filter IssueRelation */
export type IssueRelationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueRelationFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueRelationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueRelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filters for nodes where the related node match this filter */
    relatedIssue?: InputMaybe<IssueFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueRelationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueRelationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueRelationFilterInput>;
};

/** Defines the order of a IssueRelation list */
export type IssueRelationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueRelationOrderField>;
};

/** Fields a list of IssueRelation can be sorted by */
export enum IssueRelationOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationType = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "IssueRelationType";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** IssueTemplates this is part of. */
        partOf: IssueTemplateConnection;
        /** Relations which use this type. */
        relationsWithType: IssueRelationConnection;
    };

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationTypeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationTypeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationTypeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationTypePartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Type for an IssueRelation, like DUPLICATES or DEPENDS_ON. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueRelationTypeRelationsWithTypeArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueRelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueRelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssueRelationType. */
export type IssueRelationTypeConnection = {
    __typename?: "IssueRelationTypeConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueRelationTypeEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueRelationType>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueRelationTypeEdge = {
    __typename?: "IssueRelationTypeEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueRelationType;
};

/** Filter used to filter IssueRelationType */
export type IssueRelationTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by relationsWithType */
    relationsWithType?: InputMaybe<IssueRelationListFilterInput>;
};

/** Input to create an IssueRelationType */
export type IssueRelationTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Defines the order of a IssueRelationType list */
export type IssueRelationTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueRelationTypeOrderField>;
};

/** Fields a list of IssueRelationType can be sorted by */
export enum IssueRelationTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueState = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "IssueState";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true and the issue has this state, the issue is considered open, otherwise closed */
        isOpen: Scalars["Boolean"]["output"];
        /** Issues with this state. */
        issuesWithState: IssueConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** IssueTemplates this is a part of. */
        partOf: IssueTemplateConnection;
    };

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueStateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueStateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueStateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueStateIssuesWithStateArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueStatePartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssueState. */
export type IssueStateConnection = {
    __typename?: "IssueStateConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueStateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueState>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueStateEdge = {
    __typename?: "IssueStateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueState;
};

/** Filter used to filter IssueState */
export type IssueStateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueStateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isOpen */
    isOpen?: InputMaybe<BooleanFilterInput>;
    /** Filter by issuesWithState */
    issuesWithState?: InputMaybe<IssueListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueStateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueStateFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueState */
export type IssueStateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The value for the isOpen field of the created IssueState */
    isOpen: Scalars["Boolean"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueStateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueStateFilterInput>;
};

/** Defines the order of a IssueState list */
export type IssueStateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueStateOrderField>;
};

/** Fields a list of IssueState can be sorted by */
export enum IssueStateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by isOpen */
    IsOpen = "IS_OPEN",
    /** Order by name */
    Name = "NAME"
}

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    Template & {
        __typename?: "IssueTemplate";
        /** Set of all types Assignments to Issues with this Template can have. */
        assignmentTypes: AssignmentTypeConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: IssueTemplateConnection;
        /** Template this template extends. */
        extends: IssueTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** Set of all priorities Issues with this Template can have. */
        issuePriorities: IssuePriorityConnection;
        /** Set of all states Issues with this Template can have. */
        issueStates: IssueStateConnection;
        /** Set of all types Issues with this Template can have. */
        issueTypes: IssueTypeConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Set of all types outgoing IssueRelations of Issues with this Template can have */
        relationTypes: IssueRelationTypeConnection;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: IssueConnection;
    };

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateAssignmentTypesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentTypeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentTypeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateIssuePrioritiesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssuePriorityFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssuePriorityOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateIssueStatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueStateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueStateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateIssueTypesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTypeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTypeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateRelationTypesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueRelationTypeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueRelationTypeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Issues.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines possible IssueTypes, IssueStates and IssuePriorities for Issues with this Template,
 *     possible AssignmentTypes for Assignments to Issues with this template, and possible
 *     RelationTypes for outgoing IssueRelations for Issues with this template.
 *     All those are derived, if this Template extends another IssueTemplate.
 *
 */
export type IssueTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssueTemplate. */
export type IssueTemplateConnection = {
    __typename?: "IssueTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueTemplateEdge = {
    __typename?: "IssueTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueTemplate;
};

/** Filter used to filter IssueTemplate */
export type IssueTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueTemplateFilterInput>>;
    /** Filter by assignmentTypes */
    assignmentTypes?: InputMaybe<AssignmentTypeListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by issuePriorities */
    issuePriorities?: InputMaybe<IssuePriorityListFilterInput>;
    /** Filter by issueStates */
    issueStates?: InputMaybe<IssueStateListFilterInput>;
    /** Filter by issueTypes */
    issueTypes?: InputMaybe<IssueTypeListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueTemplateFilterInput>>;
    /** Filter by relationTypes */
    relationTypes?: InputMaybe<IssueRelationTypeListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueTemplateFilterInput>;
};

/** Defines the order of a IssueTemplate list */
export type IssueTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueTemplateOrderField>;
};

/** Fields a list of IssueTemplate can be sorted by */
export enum IssueTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueType = ExtensibleNode &
    Named &
    NamedNode &
    Node & {
        __typename?: "IssueType";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** A path that is used as the icon for issues. Used with a 0 0 100 100 viewBox. No stroke, only fill. */
        iconPath: Scalars["String"]["output"];
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Issues with this type. */
        issuesWithType: IssueConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** IssueTemplates this is a part of. */
        partOf: IssueTemplateConnection;
    };

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueTypeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueTypeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueTypeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueTypeIssuesWithTypeArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.
 *     READ is always granted.
 *
 */
export type IssueTypePartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for IssueType. */
export type IssueTypeConnection = {
    __typename?: "IssueTypeConnection";
    /** A list of all edges of the current page. */
    edges: Array<IssueTypeEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<IssueType>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type IssueTypeEdge = {
    __typename?: "IssueTypeEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: IssueType;
};

/** Filter used to filter IssueType */
export type IssueTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueTypeFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issuesWithType */
    issuesWithType?: InputMaybe<IssueListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueType */
export type IssueTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** A path that is used as the icon for issues. Used with a 0 0 100 100 viewBox. No stroke, only fill. */
    iconPath: Scalars["String"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueTypeFilterInput>;
};

/** Defines the order of a IssueType list */
export type IssueTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueTypeOrderField>;
};

/** Fields a list of IssueType can be sorted by */
export enum IssueTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** A JSON extension field, consisting of a name and a value. */
export type JsonField = {
    __typename?: "JSONField";
    /** The name of the field, used as unique identifier. */
    name: Scalars["String"]["output"];
    /** The value of the JSON field, might be null. */
    value?: Maybe<Scalars["JSON"]["output"]>;
};

/** Input set update the value of a JSON field, like an extension field or a templated field. */
export type JsonFieldInput = {
    /** The name of the field */
    name: Scalars["String"]["input"];
    /** The new value of the field */
    value?: InputMaybe<Scalars["JSON"]["input"]>;
};

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type Label = AuditedNode &
    ExtensibleNode &
    Named &
    NamedAuditedNode &
    Node & {
        __typename?: "Label";
        /** The color of the Label, used to display the Label. */
        color: Scalars["String"]["output"];
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Issues which currently have this Label. */
        issues: IssueConnection;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Trackables this Label is part of. */
        trackables: TrackableConnection;
    };

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type LabelExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type LabelExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type LabelHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type LabelIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Label used to mark Issues with.
 *     A Label consists of a name, a description and a color.
 *     Issues may be synced to all IMSProjects of Trackables they are part of.
 *     READ is granted if READ is granted on any Trackable in `trackables`.
 *
 */
export type LabelTrackablesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TrackableFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TrackableOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for Label. */
export type LabelConnection = {
    __typename?: "LabelConnection";
    /** A list of all edges of the current page. */
    edges: Array<LabelEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Label>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type LabelEdge = {
    __typename?: "LabelEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Label;
};

/** Filter used to filter Label */
export type LabelFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<LabelFilterInput>>;
    /** Filter by color */
    color?: InputMaybe<StringFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<LabelFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<LabelFilterInput>>;
    /** Filter by trackables */
    trackables?: InputMaybe<TrackableListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type LabelListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<LabelFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<LabelFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<LabelFilterInput>;
};

/** Defines the order of a Label list */
export type LabelOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<LabelOrderField>;
};

/** Fields a list of Label can be sorted by */
export enum LabelOrderField {
    /** Order by color */
    Color = "COLOR",
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by name */
    Name = "NAME"
}

/** Interface for all types which support templates describing user writeable fields. */
export type MutableTemplatedNode = {
    /** Value of a field defined by the template. Error if such a field is not defined. */
    templatedField?: Maybe<Scalars["JSON"]["output"]>;
    /**
     * All templatedFields
     *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
     *         prefix, otherwise by full name.
     *
     */
    templatedFields: Array<JsonField>;
};

/** Interface for all types which support templates describing user writeable fields. */
export type MutableTemplatedNodeTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Interface for all types which support templates describing user writeable fields. */
export type MutableTemplatedNodeTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Mutation = {
    __typename?: "Mutation";
    /**
     * Adds an AffectedByIssue to an Issue, requires MANAGE_ISSUES on any of the Trackables the Issue is on,
     *         and AFFECT_ENTITIES_WITH_ISSUES on the Trackable associated with the AffectedByIssue.
     *         If the Issue already affects the AffectedByIssue, no event is created.
     *
     */
    addAffectedEntityToIssue?: Maybe<AddAffectedEntityToIssuePayload>;
    /**
     * Adds a Artefact to an Issue, requires MANAGE_ISSUES on any Trackable the issue is on and READ on the Artefact.
     *         Additionally, the Artefact must be part of a Trackable the Issue is on.
     *         If the Artefact is already on the Issue, no event is created.
     *
     */
    addArtefactToIssue?: Maybe<AddArtefactToIssuePayload>;
    /**
     * Adds a ComponentVersion to a Project,
     *         requires MANAGE_COMPONENTS on the Project and ADD_TO_PROJECTS on the Component associated
     *         with the ComponentVersion
     *
     */
    addComponentVersionToProject?: Maybe<AddComponentVersionToProjectPayload>;
    /**
     * Adds an InterfaceSpecificationVersion (in)visible to ComponentVersions,
     *         requires ADMIN on the Component of the ComponentVersion to update
     *
     */
    addInterfaceSpecificationVersionToComponentVersion?: Maybe<AddInterfaceSpecificationVersionToComponentVersionPayload>;
    /**
     * Pins an Issue on a Trackable, requires MANAGE_ISSUES on the Trackable the Issue should be pinned on.
     *         Additionally, the Issue must already be on the Trackable.
     *         If the Issue is already pinned on the Trackable, no event is created.
     *
     */
    addIssueToPinnedIssues?: Maybe<AddIssueToPinnedIssuesPayload>;
    /**
     * Adds an Issue to a Trackable, requires MANAGE_ISSUES on the Trackable the Issue should be added to,
     *         and EXPORT_ISSUES on any Trackable the Issue currently is on.
     *         If the Issue is already on the Trackable, no event is created.
     *
     */
    addIssueToTrackable?: Maybe<AddIssueToTrackablePayload>;
    /**
     * Adds a Label to an Issue, requires MANAGE_ISSUES on any Trackable the issue is on and READ on the Label.
     *         Additionally, the Label must be on at least on Trackable the Issue is on.
     *         If the Label is already on the Issue, no event is created.
     *
     */
    addLabelToIssue?: Maybe<AddLabelToIssuePayload>;
    /**
     * Adds a Label to a Trackable, requires MANAGE_LABELS on the Trackable and EXPORT_LABEL on any Trackable
     *         the Label is on
     *
     */
    addLabelToTrackable?: Maybe<AddLabelToTrackablePayload>;
    /**
     * Changes the type of an Assignment, requires MANAGE_ISSUES on any of the Trackables the Issue the Assignment
     *         is part of is on.
     *         Additionally, if present, the new type must be compatible with the template of the Issue.
     *         If the current type of the Assignment is equal to the new one, no event is created.
     *
     */
    changeAssignmentType?: Maybe<ChangeAssignmentTypePayload>;
    /**
     * Changes the `dueDate` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         If the `dueDate` is equal to the already existing `dueDate`, no event is created.
     *
     */
    changeIssueDueDate?: Maybe<ChangeIssueDueDatePayload>;
    /**
     * Changes the `estimatedTime` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         If the `estimatedTime` is equal to the already existing `estimatedTime`, no event is created.
     *
     */
    changeIssueEstimatedTime?: Maybe<ChangeIssueEstimatedTimePayload>;
    /**
     * Changes the `priority` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         Additionally, the IssuePriority must be defined by the Template of the Issue.
     *         If the `priority` is equal to the already existing `priority`, no event is created.
     *
     */
    changeIssuePriority?: Maybe<ChangeIssuePriorityPayload>;
    /**
     * Changes the type of an IssueRelation, requires MANAGE_ISSUES on any of the Trackables the Issue the
     *         IssueRelation is part of is on.
     *         Additionally, if present, the new type must be compatible with the template of the Issue.
     *         If the current type of the IssueRelation is equal to the new one, no event is created.
     *
     */
    changeIssueRelationType?: Maybe<ChangeIssueRelationTypePayload>;
    /**
     * Changes the `spentTime` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         If the `spentTime` is equal to the already existing `spentTime`, no event is created.
     *
     */
    changeIssueSpentTime?: Maybe<ChangeIssueSpentTimePayload>;
    /**
     * Changes the `startDate` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         If the `startDate` is equal to the already existing `startDate`, no event is created.
     *
     */
    changeIssueStartDate?: Maybe<ChangeIssueStartDatePayload>;
    /**
     * Changes the `state` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         Additionally, the IssueState must be defined by the Template of the Issue.
     *         If the `state` is equal to the already existing `state`, no event is created.
     *
     */
    changeIssueState?: Maybe<ChangeIssueStatePayload>;
    /**
     * Changes the Template of an Issue. Requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         Incompatible old values of type, state, priority, templated fields, and priorities of Assignments and outgoing
     *         IssueRelations are updated with provided new values, requires that those new values are compatible with the new
     *         template. If the old value already is compatible with the new template, fields are not changed!
     *         In case of priority and types of Assignments and outgoing IssueRelations, if the old value is incompatible and
     *         no new value was provided, the old value is removed.
     *         Only creates an event if the new template is not equal to the current template.
     *         Events for other changes can be found in the childItems of the returned event.
     *
     */
    changeIssueTemplate?: Maybe<ChangeIssueTemplatePayload>;
    /**
     * Changes the value of a templated field on an Issue, requires MANAGE_ISSUES on any of the Trackables
     *         the Issue is on.
     *         Additionally, the field with the name must be defined by the template of the Issue, and the provided new value
     *         must be compatible.
     *         If the new value is equal to the current value of the templated field, no event is created.
     *
     */
    changeIssueTemplatedField?: Maybe<ChangeIssueTemplatedFieldPayload>;
    /**
     * Changes the `title` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         If the `title` is equal to the already existing `title`, no event is created.
     *
     */
    changeIssueTitle?: Maybe<ChangeIssueTitlePayload>;
    /**
     * Changes the `type` of an Issue requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         Additionally, the IssueType must be defined by the Template of the Issue.
     *         If the `type` is equal to the already existing `type`, no event is created.
     *
     */
    changeIssueType?: Maybe<ChangeIssueTypePayload>;
    /** Creates a new Artefact on a Trackable. Requires MANAGE_ARTEFACTS on the provided Trackable. */
    createArtefact?: Maybe<CreateArtefactPayload>;
    /** Creates a new ArtefactTemplate, requires CAN_CREATE_TEMPLATES */
    createArtefactTemplate?: Maybe<CreateArtefactTemplatePayload>;
    /**
     * Assigns a User to an Issue by creating an Assignment, requires MANAGE_ISSUES on any of the Trackables the
     *         Issue is on.
     *         Additionally, if present, the type must be compatible with the template of the Issue.
     *
     */
    createAssignment?: Maybe<CreateAssignmentPayload>;
    /**
     * Creates a new Component, requires CAN_CREATE_COMPONENTS.
     *         Automatically generates a default ComponentPermission which grants the authenticated user READ and ADMIN
     *
     */
    createComponent?: Maybe<CreateComponentPayload>;
    /**
     * Creates a new ComponentPermission, requires ADMIN on all Components which should be added to the created
     *         permission.
     *
     */
    createComponentPermission?: Maybe<CreateComponentPermissionPayload>;
    /** Creates a new ComponentTemplate, requires CAN_CREATE_TEMPLATES */
    createComponentTemplate?: Maybe<CreateComponentTemplatePayload>;
    /** Creates a new ComponentVersion, requires ADMIN on the Component. */
    createComponentVersion?: Maybe<CreateComponentVersionPayload>;
    /** Creates a new GlobalPermission, requires that the user is an admin */
    createGlobalPermission?: Maybe<CreateGlobalPermissionPayload>;
    /**
     * Creates a new IMS, requires CAN_CREATE_IMSS.
     *         Automatically generates a default IMSPermission which grants the authorized user READ and ADMIN
     *
     */
    createIMS?: Maybe<CreateImsPayload>;
    /**
     * Creates a new IMSPermission, requires ADMIN on all IMSs which should be added to the created
     *         permission.
     *
     */
    createIMSPermission?: Maybe<CreateImsPermissionPayload>;
    /**
     * Creates a new IMSProject, requirse SYNC_TRACKABLES on the specified IMS
     *         AND MANAGE_IMS on the specified Trackable
     *
     */
    createIMSProject?: Maybe<CreateImsProjectPayload>;
    /** Creates a new InterfacePart, requires ADMIN on the Component of the InterfaceSpecification. */
    createInterfacePart?: Maybe<CreateInterfacePartPayload>;
    /** Creates a new InterfaceSpecification, requires ADMIN on the Component. */
    createInterfaceSpecification?: Maybe<CreateInterfaceSpecificationPayload>;
    /** Creates a new InterfaceSpecificationTemplate, requires CAN_CREATE_TEMPLATES */
    createInterfaceSpecificationTemplate?: Maybe<CreateInterfaceSpecificationTemplatePayload>;
    /** Creates a new InterfaceSpecificationVersion, requires ADMIN on the Component of the InterfaceSpecification. */
    createInterfaceSpecificationVersion?: Maybe<CreateInterfaceSpecificationVersionPayload>;
    /**
     * Creates a new IntraComponentDependencySpecification, requires ADMIN on the Component associated with the
     *         specified ComponentVersion.
     *
     */
    createIntraComponentDependencySpecification?: Maybe<CreateIntraComponentDependencySpecificationPayload>;
    /**
     * Creates a new Issue on at least one Trackable, requires CREATE_ISSUES on all Trackables it should be created on.
     *         Additionally, checks that the `type`, `state` and `templatedFields` are compatible with the `template`.
     *
     */
    createIssue?: Maybe<CreateIssuePayload>;
    /**
     * Creates an IssueComment, requires COMMENT on any of the Trackables the Issue is on.
     *         Requires READ on referenced Artefacts, additionally, those must be part of a Trackable the Issue is on.
     *         If present, the Comment it answers must be on the same Issue.
     *
     */
    createIssueComment?: Maybe<CreateIssueCommentPayload>;
    /**
     * Creates an IssueRelation, requires MANAGE_ISSUES on any of the Trackables the Issue is on.
     *         Additionally, if present, the type must be compatible with the template of the Issue.
     *
     */
    createIssueRelation?: Maybe<CreateIssueRelationPayload>;
    /** Creates a new IssueTemplate, requires CAN_CREATE_TEMPLATES */
    createIssueTemplate?: Maybe<CreateIssueTemplatePayload>;
    /**
     * Creates a new Label on at least one Trackable. Requires MANAGE_LABELS on all provided Trackables.
     *
     */
    createLabel?: Maybe<CreateLabelPayload>;
    /**
     * Creates a new Project, requires CAN_CREATE_PROJECTS.
     *         Automatically generates a default ProjectPermission which grants the authorized user READ and ADMIN
     *
     */
    createProject?: Maybe<CreateProjectPayload>;
    /**
     * Creates a new ProjectPermission, requires ADMIN on all Projects which should be added to the created
     *         permission.
     *
     */
    createProjectPermission?: Maybe<CreateProjectPermissionPayload>;
    /**
     * Creates a new Relation, requires RELATE_FROM_COMPONENT on the Component associated with start.
     *
     */
    createRelation?: Maybe<CreateRelationPayload>;
    /** Creates a new RelationTemplate, requires CAN_CREATE_TEMPLATES */
    createRelationTemplate?: Maybe<CreateRelationTemplatePayload>;
    /**
     * Deletes the Artefact, requires MANAGE_ARTEFACTS on the Trackable it is part of. Removes it from all Issues.
     *
     */
    deleteArtefact: DeleteNodePayload;
    /** Deletes the specified Component, requires ADMIN on the component to delete */
    deleteComponent: DeleteNodePayload;
    /**
     * Deletes a ComponentPermission, requires ADMIN on all Components the permission currently affects.
     *         Ensures that after the permission is deleted, all previously affected Components still have a permission which
     *         grants ADMIN to at least one user.
     *
     */
    deleteComponentPermission: DeleteNodePayload;
    /** Deletes the specified ComponentVersion, requires ADMIN on the Component of the ComponentVersion to delete */
    deleteComponentVersion: DeleteNodePayload;
    /** Deletes a GlobalPermission, requires that the user is an admin */
    deleteGlobalPermission: DeleteNodePayload;
    /**
     * Deletes the specified IMS, requires ADMIN on the IMS to delete.
     *         Also deletes all associated IMSProjects
     *
     */
    deleteIMS: DeleteNodePayload;
    /**
     * Deletes a IMSPermission, requires ADMIN on all IMSs the permission currently affects.
     *         Ensures that after the permission is deleted, all previously affected IMSs still have a permission which
     *         grants ADMIN to at least one user.
     *
     */
    deleteIMSPermission: DeleteNodePayload;
    /**
     * Deletes the specified IMSProject, requirse ADMIN on the IMS associted with the
     *         specified IMSProject OR MANAGE_IMS on the Trackable associated with the specified
     *         IMSProject.
     *
     */
    deleteIMSProject: DeleteNodePayload;
    /**
     * Deletes the specified InterfacePart,
     *         requires ADMIN on the Component of the InterfaceSpecification of the InterfacePart to delete
     */
    deleteInterfacePart: DeleteNodePayload;
    /** Deletes the specified InterfaceSpecification, requires ADMIN on the Component of the InterfaceSpecification to delete */
    deleteInterfaceSpecification: DeleteNodePayload;
    /**
     * Deletes the specified InterfaceSpecificationVersion,
     *         requires ADMIN on the Component of the InterfaceSpecification of the InterfaceSpecificationVersion to delete
     *
     */
    deleteInterfaceSpecificationVersion: DeleteNodePayload;
    /**
     * Deletes the specified IntraComponentDependencySpecification, requires ADMIN on the Component associated with the
     *         IntraComponentDependencySpecification to delete.
     */
    deleteIntraComponentDependencySpecification: DeleteNodePayload;
    /** Deletes the specified Issue, requires MODERATOR on all of the Trackables the Issue is on. */
    deleteIssue: DeleteNodePayload;
    /**
     * Deletes an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the
     *         Issue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on.
     *         The IssueComment then is marked as deleted, its body set to "", and the referenced Artefacts are cleared.
     *         It is no longer possible to update the IssueComment.
     *
     */
    deleteIssueComment?: Maybe<DeleteIssueCommentPayload>;
    /**
     * Deletes the Label, requires MANAGE_LABELS on all Trackables it is on.
     *         Removes it from all Issues. Note that the Label will still be visible in the timeline of Issues.
     *
     */
    deleteLabel: DeleteNodePayload;
    /** Deletes the specified Project, requires ADMIN on the project to delete */
    deleteProject: DeleteNodePayload;
    /**
     * Deletes a ProjectPermission, requires ADMIN on all Projects the permission currently affects.
     *         Ensures that after the permission is deleted, all previously affected Projects still have a permission which
     *         grants ADMIN to at least one user.
     *
     */
    deleteProjectPermission: DeleteNodePayload;
    /**
     * Deletes the specified Relation, requires RELATE_FROM_COMPONENT on the Component associated with start.
     *
     */
    deleteRelation: DeleteNodePayload;
    /**
     * Removes an AffectedByIssue from an Issue, requires MANAGE_ISSUES on any of the Trackables the Issue is on,
     *         or AFFECT_ENTITIES_WITH_ISSUES on the Trackable associated with the AffectedByIssue.
     *         If the Issue does not affect the AffectedByIssue, no event is created.
     *
     */
    removeAffectedEntityFromIssue?: Maybe<RemoveAffectedEntityFromIssuePayload>;
    /**
     * Removes a Artefact from an Issue, requires MANAGE_ISSUES on any Trackable the issue is on.
     *         If the Artefact is not on the Issue, no event is created.
     *
     */
    removeArtefactFromIssue?: Maybe<RemoveArtefactFromIssuePayload>;
    /**
     * Removes an Assignment from an Issue, require MANAGE_ISSUES on any of the Trackables the Issue the Assignment
     *         is part of is on.
     *         If the Assignment was already removed, no event is created.
     *
     */
    removeAssignment?: Maybe<RemoveAssignmentPayload>;
    /**
     * Removes a ComponentVersion from a Project,
     *         requires MANAGE_COMPONENTS on the Project
     *
     */
    removeComponentVersionFromProject?: Maybe<RemoveComponentVersionFromProjectPayload>;
    /**
     * Removes an InterfaceSpecificationVersion (in)visible from ComponentVersions,
     *         requires ADMIN on the Component of the ComponentVersion to update
     *
     */
    removeInterfaceSpecificationVersionFromComponentVersion?: Maybe<RemoveInterfaceSpecificationVersionFromComponentVersionPayload>;
    /**
     * Unpins the Issue on a Trackable, requires MANAGE_ISSUES on the Trackable where the Issue should
     *         be unpinned.
     *         If the Issue is not pinned on the Trackable, no event is created.
     *
     */
    removeIssueFromPinnedIssues?: Maybe<RemoveIssueFromPinnedIssuesPayload>;
    /**
     * Removes an Issue from a Trackable, requires MANAGE_ISSUES on the Trackable where the Issue should
     *         be removed from.
     *         Additionally requires that the Issue is on at least one Trackable afterwards.
     *         If the Issue is not on the Trackable, no event is created.
     *         Also removes any Artefacts, Labels and AffectedByIssue which cannot be any more on the Issue,
     *         and unpins the issue on the defined Trackable if it was pinned.
     *         The created events can be found in the childItems of the returned RemovedFromTrackableEvent.
     *
     */
    removeIssueFromTrackable?: Maybe<RemoveIssueFromTrackablePayload>;
    /**
     * Removes an IssueRelation from an Issue, require MANAGE_ISSUES on any of the Trackables the Issue the
     *         IssueRelation starts at is on.
     *         If the IssueRelation was already removed, no event is created.
     *
     */
    removeIssueRelation?: Maybe<RemoveIssueRelationPayload>;
    /**
     * Removes a Label from an Issue, requires MANAGE_ISSUES on any Trackable the issue is on.
     *         If the Label is not on the Issue, no event is created.
     *
     */
    removeLabelFromIssue?: Maybe<RemoveLabelFromIssuePayload>;
    /**
     * Removes a Label from a Trackable, requires MANAGE_LABELS on the Trackable.
     *         Removes the Label from all Issues where the Label cannot be anymore, as the Trackable of the Label and the Issue
     *         are now disjoint.
     *
     */
    removeLabelFromTrackable?: Maybe<RemoveLabelFromTrackablePayload>;
    /**
     * Updates the specified Artefact, requires MANAGE_ARTEFACTS on the Trackable the Artefact is part of
     *
     */
    updateArtefact?: Maybe<UpdateArtefactPayload>;
    /**
     * Updates an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the
     *         Issue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on.
     *
     */
    updateBody?: Maybe<UpdateBodyPayload>;
    /** Updates the specified Component, requires ADMIN on the component to update */
    updateComponent?: Maybe<UpdateComponentPayload>;
    /**
     * Updates a ComponentPermission, requires ADMIN on all Components the permission currently affects.
     *         Ensures that after the update, all affected Components still have a permission which grants ADMIN to at least
     *         one user.
     *
     */
    updateComponentPermission?: Maybe<UpdateComponentPermissionPayload>;
    /** Updates the specified ComponentVersion, requires ADMIN on the Component of the ComponentVersion to update */
    updateComponentVersion?: Maybe<UpdateComponentVersionPayload>;
    /** Updates extensionFields of the specified ExtensibleNode. Requires READ */
    updateExtensionFields?: Maybe<UpdateExtensionFieldsPayload>;
    /** Updates a GlobalPermission, requires that the user is an admin */
    updateGlobalPermission?: Maybe<UpdateGlobalPermissionPayload>;
    /**
     * Updates a GropiusUser. Only the same user and admin users can update a GropiusUser.
     *         Only admin users can update isAdmin
     *
     */
    updateGropiusUser?: Maybe<UpdateGropiusUserPayload>;
    /** Updates the specified IMS, requires ADMIN on the IMS. */
    updateIMS?: Maybe<UpdateImsPayload>;
    /**
     * Updates a IMSPermission, requires ADMIN on all IMSs the permission currently affects.
     *         Ensures that after the update, all affected IMSs still have a permission which grants ADMIN to at least
     *         one user.
     *
     */
    updateIMSPermission?: Maybe<UpdateImsPermissionPayload>;
    /**
     * Updates the specified IMSProject, requirse SYNC_TRACKABLES on the IMS associted with the
     *         specified IMSProject AND MANAGE_IMS on the Trackable associated with the specified
     *         IMSProject.
     *
     */
    updateIMSProject?: Maybe<UpdateImsProjectPayload>;
    /**
     * Updates the specified Interface,
     *         requires ADMIN on the Component of the ComponentVersion of the InterfaceDefinition of the Interface  to update
     *
     */
    updateInterface?: Maybe<UpdateInterfacePayload>;
    /**
     * Updates the specified InterfaceDefinition,
     *         requires ADMIN on the Component of the ComponentVersion of the InterfaceDefinition to update
     *
     */
    updateInterfaceDefinition?: Maybe<UpdateInterfaceDefinitionPayload>;
    /**
     * Updates the specified InterfacePart,
     *         requires ADMIN on the Component of the InterfaceSpecification of the InterfacePart to update
     *
     */
    updateInterfacePart?: Maybe<UpdateInterfacePartPayload>;
    /** Updates the specified InterfaceSpecification, requires ADMIN on the Component of the InterfaceSpecification to update */
    updateInterfaceSpecification?: Maybe<UpdateInterfaceSpecificationPayload>;
    /**
     * Updates the specified InterfaceSpecificationVersion,
     *         requires ADMIN on the Component of the InterfaceSpecification of the InterfaceSpecificationVersion to update
     *
     */
    updateInterfaceSpecificationVersion?: Maybe<UpdateInterfaceSpecificationVersionPayload>;
    /**
     * Updates the specified IntraComponentDependencySpecification, requires ADMIN on the Component associated with the
     *         IntraComponentDependencySpecification to update.
     */
    updateIntraComponentDependencySpecification?: Maybe<UpdateIntraComponentDependencySpecificationPayload>;
    /**
     * Updates an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the
     *         Issue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on.
     *         Requires READ on referenced Artefacts, additionally, added ones must be part of a Trackable the Issue is on.
     *
     */
    updateIssueComment?: Maybe<UpdateIssueCommentPayload>;
    /** Updates the specified Label, requires MANAGE_LABELS on any Trackable the Label is on */
    updateLabel?: Maybe<UpdateLabelPayload>;
    /** Updates the specified Project, requires ADMIN on the project to update */
    updateProject?: Maybe<UpdateProjectPayload>;
    /**
     * Updates a ProjectPermission, requires ADMIN on all Projects the permission currently affects.
     *         Ensures that after the update, all affected Projects still have a permission which grants ADMIN to at least
     *         one user.
     *
     */
    updateProjectPermission?: Maybe<UpdateProjectPermissionPayload>;
    /**
     * Updates the specified Relation, requires RELATE_FROM_COMPONENT on the Component associated with start.
     *
     */
    updateRelation?: Maybe<UpdateRelationPayload>;
    /** Updates the deprecation state of the template, requires CAN_CREATE_TEMPLATES */
    updateTemplateDeprecationStatus?: Maybe<UpdateTemplateDeprecationStatusPayload>;
};

export type MutationAddAffectedEntityToIssueArgs = {
    input: AddAffectedEntityToIssueInput;
};

export type MutationAddArtefactToIssueArgs = {
    input: AddArtefactToIssueInput;
};

export type MutationAddComponentVersionToProjectArgs = {
    input: AddComponentVersionToProjectInput;
};

export type MutationAddInterfaceSpecificationVersionToComponentVersionArgs = {
    input: AddInterfaceSpecificationVersionToComponentVersionInput;
};

export type MutationAddIssueToPinnedIssuesArgs = {
    input: AddIssueToPinnedIssuesInput;
};

export type MutationAddIssueToTrackableArgs = {
    input: AddIssueToTrackableInput;
};

export type MutationAddLabelToIssueArgs = {
    input: AddLabelToIssueInput;
};

export type MutationAddLabelToTrackableArgs = {
    input: AddLabelToTrackableInput;
};

export type MutationChangeAssignmentTypeArgs = {
    input: ChangeAssignmentTypeInput;
};

export type MutationChangeIssueDueDateArgs = {
    input: ChangeIssueDueDateInput;
};

export type MutationChangeIssueEstimatedTimeArgs = {
    input: ChangeIssueEstimatedTimeInput;
};

export type MutationChangeIssuePriorityArgs = {
    input: ChangeIssuePriorityInput;
};

export type MutationChangeIssueRelationTypeArgs = {
    input: ChangeIssueRelationTypeInput;
};

export type MutationChangeIssueSpentTimeArgs = {
    input: ChangeIssueSpentTimeInput;
};

export type MutationChangeIssueStartDateArgs = {
    input: ChangeIssueStartDateInput;
};

export type MutationChangeIssueStateArgs = {
    input: ChangeIssueStateInput;
};

export type MutationChangeIssueTemplateArgs = {
    input: ChangeIssueTemplateInput;
};

export type MutationChangeIssueTemplatedFieldArgs = {
    input: ChangeIssueTemplatedFieldInput;
};

export type MutationChangeIssueTitleArgs = {
    input: ChangeIssueTitleInput;
};

export type MutationChangeIssueTypeArgs = {
    input: ChangeIssueTypeInput;
};

export type MutationCreateArtefactArgs = {
    input: CreateArtefactInput;
};

export type MutationCreateArtefactTemplateArgs = {
    input: CreateArtefactTemplateInput;
};

export type MutationCreateAssignmentArgs = {
    input: CreateAssignmentInput;
};

export type MutationCreateComponentArgs = {
    input: CreateComponentInput;
};

export type MutationCreateComponentPermissionArgs = {
    input: CreateComponentPermissionInput;
};

export type MutationCreateComponentTemplateArgs = {
    input: CreateComponentTemplateInput;
};

export type MutationCreateComponentVersionArgs = {
    input: CreateComponentVersionInput;
};

export type MutationCreateGlobalPermissionArgs = {
    input: CreateGlobalPermissionInput;
};

export type MutationCreateImsArgs = {
    input: CreateImsInput;
};

export type MutationCreateImsPermissionArgs = {
    input: CreateImsPermissionInput;
};

export type MutationCreateImsProjectArgs = {
    input: CreateImsProjectInput;
};

export type MutationCreateInterfacePartArgs = {
    input: CreateInterfacePartInput;
};

export type MutationCreateInterfaceSpecificationArgs = {
    input: CreateInterfaceSpecificationInput;
};

export type MutationCreateInterfaceSpecificationTemplateArgs = {
    input: CreateInterfaceSpecificationTemplateInput;
};

export type MutationCreateInterfaceSpecificationVersionArgs = {
    input: CreateInterfaceSpecificationVersionInput;
};

export type MutationCreateIntraComponentDependencySpecificationArgs = {
    input: CreateIntraComponentDependencySpecificationInput;
};

export type MutationCreateIssueArgs = {
    input: CreateIssueInput;
};

export type MutationCreateIssueCommentArgs = {
    input: CreateIssueCommentInput;
};

export type MutationCreateIssueRelationArgs = {
    input: CreateIssueRelationInput;
};

export type MutationCreateIssueTemplateArgs = {
    input: CreateIssueTemplateInput;
};

export type MutationCreateLabelArgs = {
    input: CreateLabelInput;
};

export type MutationCreateProjectArgs = {
    input: CreateProjectInput;
};

export type MutationCreateProjectPermissionArgs = {
    input: CreateProjectPermissionInput;
};

export type MutationCreateRelationArgs = {
    input: CreateRelationInput;
};

export type MutationCreateRelationTemplateArgs = {
    input: CreateRelationTemplateInput;
};

export type MutationDeleteArtefactArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteComponentArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteComponentPermissionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteComponentVersionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteGlobalPermissionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteImsArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteImsPermissionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteImsProjectArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteInterfacePartArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteInterfaceSpecificationArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteInterfaceSpecificationVersionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteIntraComponentDependencySpecificationArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteIssueArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteIssueCommentArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteLabelArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteProjectArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteProjectPermissionArgs = {
    input: DeleteNodeInput;
};

export type MutationDeleteRelationArgs = {
    input: DeleteNodeInput;
};

export type MutationRemoveAffectedEntityFromIssueArgs = {
    input: RemoveAffectedEntityFromIssueInput;
};

export type MutationRemoveArtefactFromIssueArgs = {
    input: RemoveArtefactFromIssueInput;
};

export type MutationRemoveAssignmentArgs = {
    input: RemoveAssignmentInput;
};

export type MutationRemoveComponentVersionFromProjectArgs = {
    input: RemoveComponentVersionFromProjectInput;
};

export type MutationRemoveInterfaceSpecificationVersionFromComponentVersionArgs = {
    input: RemoveInterfaceSpecificationVersionFromComponentVersionInput;
};

export type MutationRemoveIssueFromPinnedIssuesArgs = {
    input: RemoveIssueFromPinnedIssuesInput;
};

export type MutationRemoveIssueFromTrackableArgs = {
    input: RemoveIssueFromTrackableInput;
};

export type MutationRemoveIssueRelationArgs = {
    input: RemoveIssueRelationInput;
};

export type MutationRemoveLabelFromIssueArgs = {
    input: RemoveLabelFromIssueInput;
};

export type MutationRemoveLabelFromTrackableArgs = {
    input: RemoveLabelFromTrackableInput;
};

export type MutationUpdateArtefactArgs = {
    input: UpdateArtefactInput;
};

export type MutationUpdateBodyArgs = {
    input: UpdateBodyInput;
};

export type MutationUpdateComponentArgs = {
    input: UpdateComponentInput;
};

export type MutationUpdateComponentPermissionArgs = {
    input: UpdateComponentPermissionInput;
};

export type MutationUpdateComponentVersionArgs = {
    input: UpdateComponentVersionInput;
};

export type MutationUpdateExtensionFieldsArgs = {
    input: UpdateExtensionFieldsInput;
};

export type MutationUpdateGlobalPermissionArgs = {
    input: UpdateGlobalPermissionInput;
};

export type MutationUpdateGropiusUserArgs = {
    input: UpdateGropiusUserInput;
};

export type MutationUpdateImsArgs = {
    input: UpdateImsInput;
};

export type MutationUpdateImsPermissionArgs = {
    input: UpdateImsPermissionInput;
};

export type MutationUpdateImsProjectArgs = {
    input: UpdateImsProjectInput;
};

export type MutationUpdateInterfaceArgs = {
    input: UpdateInterfaceInput;
};

export type MutationUpdateInterfaceDefinitionArgs = {
    input: UpdateInterfaceDefinitionInput;
};

export type MutationUpdateInterfacePartArgs = {
    input: UpdateInterfacePartInput;
};

export type MutationUpdateInterfaceSpecificationArgs = {
    input: UpdateInterfaceSpecificationInput;
};

export type MutationUpdateInterfaceSpecificationVersionArgs = {
    input: UpdateInterfaceSpecificationVersionInput;
};

export type MutationUpdateIntraComponentDependencySpecificationArgs = {
    input: UpdateIntraComponentDependencySpecificationInput;
};

export type MutationUpdateIssueCommentArgs = {
    input: UpdateIssueCommentInput;
};

export type MutationUpdateLabelArgs = {
    input: UpdateLabelInput;
};

export type MutationUpdateProjectArgs = {
    input: UpdateProjectInput;
};

export type MutationUpdateProjectPermissionArgs = {
    input: UpdateProjectPermissionInput;
};

export type MutationUpdateRelationArgs = {
    input: UpdateRelationInput;
};

export type MutationUpdateTemplateDeprecationStatusArgs = {
    input: UpdateTemplateDeprecationStatusInput;
};

/** Entity with a name and a description. */
export type Named = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
};

/** AuditedNode with a name and description */
export type NamedAuditedNode = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** The name of this entity. */
    name: Scalars["String"]["output"];
};

/** AuditedNode with a name and description */
export type NamedAuditedNodeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** AuditedNode with a name and description */
export type NamedAuditedNodeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** AuditedNode with a name and description */
export type NamedAuditedNodeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** ExtensibleNode with a name and description */
export type NamedNode = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
};

/** ExtensibleNode with a name and description */
export type NamedNodeExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** ExtensibleNode with a name and description */
export type NamedNodeExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** ExtensibleNode with a name and description */
export type NamedNodeHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Base class of all nodes */
export type Node = {
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
};

export type NodePermission = {
    /** If, the permission is granted to all users. Use with caution. */
    allUsers: Scalars["Boolean"]["output"];
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    entries: Array<Scalars["String"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** GropiusUsers granted this Permission */
    users: GropiusUserConnection;
};

export type NodePermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type NullableDateTimeFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific Duration field */
export type NullableDurationFilterInputFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Duration"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Duration"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific Int field */
export type NullableIntFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type NullableStringFilterInput = {
    /** Matches Strings which contain the provided value */
    contains?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which end with the provided value */
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings using the provided RegEx */
    matches?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which start with the provided value */
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input to create a SubTemplate, where all templatedFieldSpecifications must allow null as value */
export type NullableSubTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Possible direction in which a list of nodes can be ordered */
export enum OrderDirection {
    /** Ascending */
    Asc = "ASC",
    /** Descending */
    Desc = "DESC"
}

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type OutgoingRelationTypeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    RelationTypeChangedEvent &
    TimelineItem & {
        __typename?: "OutgoingRelationTypeChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The IssueRelation of which the type was changed */
        issueRelation: IssueRelation;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new type. */
        newType?: Maybe<IssueRelationType>;
        /** The old type. */
        oldType?: Maybe<IssueRelationType>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type OutgoingRelationTypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type OutgoingRelationTypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the type of an incoming IssueRelation changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type OutgoingRelationTypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Information about the current page in a connection */
export type PageInfo = {
    __typename?: "PageInfo";
    /** When paginating backwards, the cursor to continue */
    endCursor?: Maybe<Scalars["String"]["output"]>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"]["output"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"]["output"];
    /** When paginating forwards, the cursor to continue */
    startCursor?: Maybe<Scalars["String"]["output"]>;
};

/**
 * TimelineItem which can aggregate other TimelineItems.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type ParentTimelineItem = {
    /** Child TimelineItems. These are still part of the main timeline. */
    childItems: TimelineItemConnection;
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
};

/**
 * TimelineItem which can aggregate other TimelineItems.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type ParentTimelineItemChildItemsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TimelineItemFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TimelineItemOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * TimelineItem which can aggregate other TimelineItems.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type ParentTimelineItemExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * TimelineItem which can aggregate other TimelineItems.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type ParentTimelineItemExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * TimelineItem which can aggregate other TimelineItems.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type ParentTimelineItemHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Filter used to filter ParentTimelineItem */
export type ParentTimelineItemFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
    /** Filter by childItems */
    childItems?: InputMaybe<TimelineItemListFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
};

/** Permission entry enum type. */
export enum PermissionEntry {
    /** Allows to create new Components. */
    CanCreateComponents = "CAN_CREATE_COMPONENTS",
    /** Allows to create new IMSs. */
    CanCreateImss = "CAN_CREATE_IMSS",
    /** Allows to create new Projects. */
    CanCreateProjects = "CAN_CREATE_PROJECTS",
    /** Allows to create new Templates. */
    CanCreateTemplates = "CAN_CREATE_TEMPLATES"
}

/**
 * Event representing that the priority of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type PriorityChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "PriorityChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new priority. */
        newPriority?: Maybe<IssuePriority>;
        /** The old priority. */
        oldPriority?: Maybe<IssuePriority>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the priority of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type PriorityChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the priority of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type PriorityChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the priority of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type PriorityChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type Project = AffectedByIssue &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    Trackable & {
        __typename?: "Project";
        /** The issues which affect this entity */
        affectingIssues: IssueConnection;
        /** Artefacts of this trackable, typically some kind of file. */
        artefacts: ArtefactConnection;
        /** The ComponentVersions this consists of. */
        components: ComponentVersionConnection;
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /**
         * The set of Issues which are part of this Trackable.
         *         An Issue has to be part of a Trackable to use the Labels and Artefacts defined by the Trackable.
         *
         */
        issues: IssueConnection;
        /** The set of Labels which can be added to issues of this trackable. */
        labels: LabelConnection;
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Permissions for this Project. */
        permissions: ProjectPermissionConnection;
        /** Issues which are pinned to this trackable, subset of `issues`. */
        pinnedIssues: IssueConnection;
        /** If existing, the URL of the repository (e.g. a GitHub repository). */
        repositoryURL?: Maybe<Scalars["URL"]["output"]>;
        /** IMSProjects this Trackable is synced to and from. */
        syncsTo: ImsProjectConnection;
    };

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectArtefactsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectComponentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentVersionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentVersionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectLabelsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LabelFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<LabelOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectPermissionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ProjectPermissionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ProjectPermissionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectPinnedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A project of the Gropius system.
 *     Consists of a set of ComponentVersions, which form a graph with the Relations between them.
 *     Can be affected by issues.
 *     Can have issues, labels and artefacts as this is a Trackable.
 *     READ is granted via an associated ProjectPermission.
 *
 */
export type ProjectSyncsToArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for Project. */
export type ProjectConnection = {
    __typename?: "ProjectConnection";
    /** A list of all edges of the current page. */
    edges: Array<ProjectEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Project>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ProjectEdge = {
    __typename?: "ProjectEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Project;
};

/** Filter used to filter Project */
export type ProjectFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ProjectFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by components */
    components?: InputMaybe<ComponentVersionListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ProjectFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ProjectFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ProjectPermissionListFilterInput>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ProjectFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ProjectFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ProjectFilterInput>;
};

/** Defines the order of a Project list */
export type ProjectOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ProjectOrderField>;
};

/** Fields a list of Project can be sorted by */
export enum ProjectOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** NodePermission to grant specific permissions to a set of Projects. */
export type ProjectPermission = Named &
    Node & {
        __typename?: "ProjectPermission";
        /** If, the permission is granted to all users. Use with caution. */
        allUsers: Scalars["Boolean"]["output"];
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** All permissions this Permission grants */
        entries: Array<ProjectPermissionEntry>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Nodes on which the Permission is granted. */
        nodesWithPermission: ProjectConnection;
        /** GropiusUsers granted this Permission */
        users: GropiusUserConnection;
    };

/** NodePermission to grant specific permissions to a set of Projects. */
export type ProjectPermissionNodesWithPermissionArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** NodePermission to grant specific permissions to a set of Projects. */
export type ProjectPermissionUsersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<GropiusUserFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<GropiusUserOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for ProjectPermission. */
export type ProjectPermissionConnection = {
    __typename?: "ProjectPermissionConnection";
    /** A list of all edges of the current page. */
    edges: Array<ProjectPermissionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<ProjectPermission>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type ProjectPermissionEdge = {
    __typename?: "ProjectPermissionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: ProjectPermission;
};

/** ProjectPermission entry enum type. */
export enum ProjectPermissionEntry {
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    LinkFromIssues = "LINK_FROM_ISSUES",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /** Allows to add / remove ComponentVersions to / from this Project. */
    ManageComponents = "MANAGE_COMPONENTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ"
}

/** Filter used to filter ProjectPermission */
export type ProjectPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ProjectPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ProjectListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ProjectPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ProjectPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ProjectPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ProjectPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ProjectPermissionFilterInput>;
};

/** Defines the order of a ProjectPermission list */
export type ProjectPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ProjectPermissionOrderField>;
};

/** Fields a list of ProjectPermission can be sorted by */
export enum ProjectPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

export type PublicTimelineItem =
    | AddedAffectedEntityEvent
    | AddedArtefactEvent
    | AddedLabelEvent
    | AddedToPinnedIssuesEvent
    | AddedToTrackableEvent
    | Assignment
    | AssignmentTypeChangedEvent
    | Body
    | DueDateChangedEvent
    | EstimatedTimeChangedEvent
    | IncomingRelationTypeChangedEvent
    | IssueComment
    | IssueRelation
    | OutgoingRelationTypeChangedEvent
    | PriorityChangedEvent
    | RemovedAffectedEntityEvent
    | RemovedArtefactEvent
    | RemovedAssignmentEvent
    | RemovedFromPinnedIssuesEvent
    | RemovedLabelEvent
    | RemovedTemplatedFieldEvent
    | SpentTimeChangedEvent
    | StartDateChangedEvent
    | StateChangedEvent
    | TemplatedFieldChangedEvent
    | TitleChangedEvent
    | TypeChangedEvent;

export type Query = {
    __typename?: "Query";
    /** Query for nodes of type ArtefactTemplate */
    artefactTemplates: ArtefactTemplateConnection;
    /** Query for nodes of type ComponentTemplate */
    componentTemplates: ComponentTemplateConnection;
    /** Query for nodes of type Component */
    components: ComponentConnection;
    /** The current authenticated user */
    currentUser?: Maybe<GropiusUser>;
    /** Query for nodes of type IMSTemplate */
    imsTemplates: ImsTemplateConnection;
    /** Query for nodes of type IMS */
    imss: ImsConnection;
    /** Query for nodes of type InterfaceSpecificationTemplate */
    interfaceSpecificationTemplates: InterfaceSpecificationTemplateConnection;
    /** Query for nodes of type IssueTemplate */
    issueTemplates: IssueTemplateConnection;
    /** Get a Node by id */
    node?: Maybe<Node>;
    /** Query for nodes of type Project */
    projects: ProjectConnection;
    /** Query for nodes of type RelationTemplate */
    relationTemplates: RelationTemplateConnection;
};

export type QueryArtefactTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryComponentTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryComponentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ComponentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ComponentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryImsTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryImssArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryInterfaceSpecificationTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryIssueTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryNodeArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryProjectsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRelationTemplatesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Event representing that the Issue was used in an IssueRelation as related issue.
 *     The IssueRelation may not be active any more.
 *     READ is granted if READ is granted on `relation`.
 *
 */
export type RelatedByIssueEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RelatedByIssueEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The IssueRelation the Issue is related at, null if deleted. */
        relation?: Maybe<IssueRelation>;
    };

/**
 * Event representing that the Issue was used in an IssueRelation as related issue.
 *     The IssueRelation may not be active any more.
 *     READ is granted if READ is granted on `relation`.
 *
 */
export type RelatedByIssueEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the Issue was used in an IssueRelation as related issue.
 *     The IssueRelation may not be active any more.
 *     READ is granted if READ is granted on `relation`.
 *
 */
export type RelatedByIssueEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the Issue was used in an IssueRelation as related issue.
 *     The IssueRelation may not be active any more.
 *     READ is granted if READ is granted on `relation`.
 *
 */
export type RelatedByIssueEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type Relation = ExtensibleNode &
    MutableTemplatedNode &
    Node &
    TemplatedNode & {
        __typename?: "Relation";
        /** InterfaceDefinition this Relation derives invisible */
        derivesInvisible: InterfaceDefinitionConnection;
        /** InterfaceDefinition this Relation derives visible */
        derivesVisible: InterfaceDefinitionConnection;
        /** The end of this Relation. */
        end?: Maybe<RelationPartner>;
        /** If the end is an Interface, the parts of that Interface this Relation includes. */
        endParts: InterfacePartConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The start of this Relation. */
        start?: Maybe<RelationPartner>;
        /** If the start is an Interface, the parts of that Interface this Relation includes. */
        startParts: InterfacePartConnection;
        /** The Template of this Relation. */
        template: RelationTemplate;
        /** Value of a field defined by the template. Error if such a field is not defined. */
        templatedField?: Maybe<Scalars["JSON"]["output"]>;
        /**
         * All templatedFields
         *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
         *         prefix, otherwise by full name.
         *
         */
        templatedFields: Array<JsonField>;
    };

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationDerivesInvisibleArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceDefinitionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceDefinitionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationDerivesVisibleArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceDefinitionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceDefinitionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationEndPartsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationStartPartsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfacePartFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfacePartOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A relation between RelationPartners (ComponentVersions and Interfaces).
 *     Relations are always directional.
 *     Relations can derive Interfaces from `end` to `start` if both `start` and `end` are ComponentVersions
 *     and the template of this Relation allows it.
 *     The template defines which RelationPartners are possible as `start` / `end`.
 *     For both start and end, if it is an Interface, it is possible to define the InterfaceParts this includes.
 *     Caution: This is **not** a supertype of IssueRelation.
 *     READ is granted if READ is granted on `start`.
 *
 */
export type RelationTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationCondition = ExtensibleNode &
    Node & {
        __typename?: "RelationCondition";
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Templates of allowed start RelationPartners */
        from: RelationPartnerTemplateConnection;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** Defines which InterfaceSpecifications are derived via the Relation. */
        interfaceSpecificationDerivationConditions: InterfaceSpecificationDerivationConditionConnection;
        /** The RelationTemplates this is part of. */
        partOf: RelationTemplateConnection;
        /** Templates of allowed end RelationPartners */
        to: RelationPartnerTemplateConnection;
    };

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionFromArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationPartnerTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationPartnerTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionInterfaceSpecificationDerivationConditionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<InterfaceSpecificationDerivationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionPartOfArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Condition which defines if a Relation can use a RelationTemplate.
 *     A relation can only use the Template, if the start of the Relation has a template in from,
 *     and the end of the Relation has a template in to.
 *     Also defines which InterfaceSpecifications are derived via the Relation.
 *     Part of a RelationTemplate.
 *     READ is always granted.
 *
 */
export type RelationConditionToArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationPartnerTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationPartnerTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for RelationCondition. */
export type RelationConditionConnection = {
    __typename?: "RelationConditionConnection";
    /** A list of all edges of the current page. */
    edges: Array<RelationConditionEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<RelationCondition>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type RelationConditionEdge = {
    __typename?: "RelationConditionEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: RelationCondition;
};

/** Filter used to filter RelationCondition */
export type RelationConditionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationConditionFilterInput>>;
    /** Filter by from */
    from?: InputMaybe<RelationPartnerTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceSpecificationDerivationConditions */
    interfaceSpecificationDerivationConditions?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationConditionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationConditionFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by to */
    to?: InputMaybe<RelationPartnerTemplateListFilterInput>;
};

/** Input to create a RelationCondition */
export type RelationConditionInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** IDs of Templates of allowed start RelationPartners */
    from: Array<Scalars["ID"]["input"]>;
    /** Defines which InterfaceSpecifications are derived via the relation */
    interfaceSpecificationDerivationConditions: Array<InterfaceSpecificationDerivationConditionInput>;
    /** IDs of Templates of allowed end RelationPartners */
    to: Array<Scalars["ID"]["input"]>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationConditionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationConditionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationConditionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationConditionFilterInput>;
};

/** Defines the order of a RelationCondition list */
export type RelationConditionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationConditionOrderField>;
};

/** Fields a list of RelationCondition can be sorted by */
export enum RelationConditionOrderField {
    /** Order by id */
    Id = "ID"
}

/** The connection type for Relation. */
export type RelationConnection = {
    __typename?: "RelationConnection";
    /** A list of all edges of the current page. */
    edges: Array<RelationEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Relation>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type RelationEdge = {
    __typename?: "RelationEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Relation;
};

/** Filter used to filter Relation */
export type RelationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationFilterInput>>;
    /** Filter by derivesInvisible */
    derivesInvisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filter by derivesVisible */
    derivesVisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    end?: InputMaybe<RelationPartnerFilterInput>;
    /** Filter by endParts */
    endParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    start?: InputMaybe<RelationPartnerFilterInput>;
    /** Filter by startParts */
    startParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<RelationTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationFilterInput>;
};

/** Defines the order of a Relation list */
export type RelationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationOrderField>;
};

/** Fields a list of Relation can be sorted by */
export enum RelationOrderField {
    /** Order by id */
    Id = "ID"
}

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartner = {
    /** The issues which affect this entity */
    affectingIssues: IssueConnection;
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** Relations which use this as the end of the Relation. */
    incomingRelations: RelationConnection;
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** Relations which use this as the start of the Relation. */
    outgoingRelations: RelationConnection;
    /** Value of a field defined by the template. Error if such a field is not defined. */
    templatedField?: Maybe<Scalars["JSON"]["output"]>;
    /**
     * All templatedFields
     *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
     *         prefix, otherwise by full name.
     *
     */
    templatedFields: Array<JsonField>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerIncomingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerOutgoingRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Entity which can be used as start / end of Relations. Can be affected by Issues. */
export type RelationPartnerTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Filter used to filter RelationPartner */
export type RelationPartnerFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationPartnerFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationPartnerFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationPartnerFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplate = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** If true, this template is deprecated and cannot be used for new entities any more. */
    isDeprecated: Scalars["Boolean"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** RelationConditions which allow this template for the end of the relation. */
    possibleEndOfRelations: RelationConditionConnection;
    /** RelationConditions which allow this template for the start of the relation. */
    possibleStartOfRelations: RelationConditionConnection;
    /** All template field specifications, if a `namePrefix` is provided, only those matching it */
    templateFieldSpecifications: Array<JsonField>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Template for RelationPartners. */
export type RelationPartnerTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplatePossibleEndOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplatePossibleStartOfRelationsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Template for RelationPartners. */
export type RelationPartnerTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** The connection type for RelationPartnerTemplate. */
export type RelationPartnerTemplateConnection = {
    __typename?: "RelationPartnerTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<RelationPartnerTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<RelationPartnerTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type RelationPartnerTemplateEdge = {
    __typename?: "RelationPartnerTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: RelationPartnerTemplate;
};

/** Filter used to filter RelationPartnerTemplate */
export type RelationPartnerTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationPartnerTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationPartnerTemplateFilterInput>;
};

/** Defines the order of a RelationPartnerTemplate list */
export type RelationPartnerTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationPartnerTemplateOrderField>;
};

/** Fields a list of RelationPartnerTemplate can be sorted by */
export enum RelationPartnerTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplate = BaseTemplate &
    ExtensibleNode &
    Named &
    NamedNode &
    Node &
    Template & {
        __typename?: "RelationTemplate";
        /** The description of this entity. */
        description: Scalars["String"]["output"];
        /** Templates that extend this template. */
        extendedBy: RelationTemplateConnection;
        /** Template this template extends. */
        extends: RelationTemplateConnection;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** If true, this template is deprecated and cannot be used for new entities any more. */
        isDeprecated: Scalars["Boolean"]["output"];
        /** The name of this entity. */
        name: Scalars["String"]["output"];
        /** Defines which Relations can use this template, at least one RelationCondition has to match */
        relationConditions: RelationConditionConnection;
        /** All template field specifications, if a `namePrefix` is provided, only those matching it */
        templateFieldSpecifications: Array<JsonField>;
        /** Entities which use this template. */
        usedIn: RelationConnection;
    };

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateExtendedByArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateExtendsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationTemplateFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationTemplateOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateRelationConditionsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationConditionFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationConditionOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Template for Relations.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Defines which Relations can use this Template.
 *     At least one RelationCondition has to match.
 *
 */
export type RelationTemplateUsedInArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<RelationFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<RelationOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for RelationTemplate. */
export type RelationTemplateConnection = {
    __typename?: "RelationTemplateConnection";
    /** A list of all edges of the current page. */
    edges: Array<RelationTemplateEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<RelationTemplate>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type RelationTemplateEdge = {
    __typename?: "RelationTemplateEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: RelationTemplate;
};

/** Filter used to filter RelationTemplate */
export type RelationTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationTemplateFilterInput>>;
    /** Filter by relationConditions */
    relationConditions?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationTemplateFilterInput>;
};

/** Defines the order of a RelationTemplate list */
export type RelationTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationTemplateOrderField>;
};

/** Fields a list of RelationTemplate can be sorted by */
export enum RelationTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Event representing that the type of an IssueRelation changed. */
export type RelationTypeChangedEvent = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The IssueRelation of which the type was changed */
    issueRelation: IssueRelation;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** The new type. */
    newType?: Maybe<IssueRelationType>;
    /** The old type. */
    oldType?: Maybe<IssueRelationType>;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
};

/** Event representing that the type of an IssueRelation changed. */
export type RelationTypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Event representing that the type of an IssueRelation changed. */
export type RelationTypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Event representing that the type of an IssueRelation changed. */
export type RelationTypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Input for the removeAffectedEntityFromIssue mutation */
export type RemoveAffectedEntityFromIssueInput = {
    /** The id of the AffectedByIssue which is no longer affected by the Issue */
    affectedEntity: Scalars["ID"]["input"];
    /** The id of the Issue which no longer affects the entity */
    issue: Scalars["ID"]["input"];
};

export type RemoveAffectedEntityFromIssuePayload = {
    __typename?: "RemoveAffectedEntityFromIssuePayload";
    /** The created event, if present */
    removedAffectedEntityEvent?: Maybe<RemovedAffectedEntityEvent>;
};

/** Input for the removeArtefactFromIssue mutation */
export type RemoveArtefactFromIssueInput = {
    /** The id of the Artefact to remove */
    artefact: Scalars["ID"]["input"];
    /** The id of the Issue where to remove the Artefact */
    issue: Scalars["ID"]["input"];
};

export type RemoveArtefactFromIssuePayload = {
    __typename?: "RemoveArtefactFromIssuePayload";
    /** The created event, if present */
    removedArtefactEvent?: Maybe<RemovedArtefactEvent>;
};

/** Input for the removeAssignment mutations */
export type RemoveAssignmentInput = {
    /** The id of the Assignment to remove */
    assignment: Scalars["ID"]["input"];
};

export type RemoveAssignmentPayload = {
    __typename?: "RemoveAssignmentPayload";
    /** The created event, if present */
    removedAssignmentEvent?: Maybe<RemovedAssignmentEvent>;
};

/** Input for the removeComponentVersionFromProject mutation */
export type RemoveComponentVersionFromProjectInput = {
    /** The id of the ComponentVersion to remove */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the Project from which the ComponentVersion is removed */
    project: Scalars["ID"]["input"];
};

export type RemoveComponentVersionFromProjectPayload = {
    __typename?: "RemoveComponentVersionFromProjectPayload";
    /** The updated Project */
    project?: Maybe<Project>;
};

/** Input for the removeInterfaceSpecificationVersionfromComponentVersion mutation */
export type RemoveInterfaceSpecificationVersionFromComponentVersionInput = {
    /** The id of the ComponentVersion to remove the InterfaceSpecificationVersion from. */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the InterfaceSpecificationVersion to remove. Must be part of the same Component as `componentVersion` */
    interfaceSpecificationVersion: Scalars["ID"]["input"];
    /** If `true`, interfaceSpecificationVersion will be no longer invisible on componentVersion */
    invisible: Scalars["Boolean"]["input"];
    /** If `true`, interfaceSpecificationVersion will be no longer visible on componentVersion */
    visible: Scalars["Boolean"]["input"];
};

export type RemoveInterfaceSpecificationVersionFromComponentVersionPayload = {
    __typename?: "RemoveInterfaceSpecificationVersionFromComponentVersionPayload";
    /** The updated ComponentVersion */
    componentVersion?: Maybe<ComponentVersion>;
};

/** Input for the removeIssueFromPinnedIssues mutation */
export type RemoveIssueFromPinnedIssuesInput = {
    /** The id of the Issue to unpin */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where the Issue should be unpinned */
    trackable: Scalars["ID"]["input"];
};

export type RemoveIssueFromPinnedIssuesPayload = {
    __typename?: "RemoveIssueFromPinnedIssuesPayload";
    /** The created event, if present */
    removedFromPinnedIssuesEvent?: Maybe<RemovedFromPinnedIssuesEvent>;
};

/** Input for the removeIssueFromTrackable mutation */
export type RemoveIssueFromTrackableInput = {
    /** The id of the Issue to remove from the Trackable */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where to remove the Issue */
    trackable: Scalars["ID"]["input"];
};

export type RemoveIssueFromTrackablePayload = {
    __typename?: "RemoveIssueFromTrackablePayload";
    /** The created event, if present */
    removedFromTrackableEvent?: Maybe<RemovedFromTrackableEvent>;
};

/** Input for the removeIssueRelation mutations */
export type RemoveIssueRelationInput = {
    /** The id of the IssueRelation to remove */
    issueRelation: Scalars["ID"]["input"];
};

export type RemoveIssueRelationPayload = {
    __typename?: "RemoveIssueRelationPayload";
    /** The created event, if present */
    removedOutgoingRelationEvent?: Maybe<RemovedOutgoingRelationEvent>;
};

/** Input for the removeLabelFromIssue mutation */
export type RemoveLabelFromIssueInput = {
    /** The id of the Issue where to remove the Label */
    issue: Scalars["ID"]["input"];
    /** The id of the Label to remove */
    label: Scalars["ID"]["input"];
};

export type RemoveLabelFromIssuePayload = {
    __typename?: "RemoveLabelFromIssuePayload";
    /** The created event, if present */
    removedLabelEvent?: Maybe<RemovedLabelEvent>;
};

/** Input for the removeLabelFromTrackable mutation */
export type RemoveLabelFromTrackableInput = {
    /** The id of the Label to remove */
    label: Scalars["ID"]["input"];
    /** The id of the Trackable where to remove the Label */
    trackable: Scalars["ID"]["input"];
};

export type RemoveLabelFromTrackablePayload = {
    __typename?: "RemoveLabelFromTrackablePayload";
    /** The Trackable from which the Label was removed */
    trackable?: Maybe<Trackable>;
};

/**
 * Event representing that an entity is no longer affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAffectedEntityEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedAffectedEntityEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The entity which is no longer affected by the Issue, null if deleted. */
        removedAffectedEntity?: Maybe<AffectedByIssue>;
    };

/**
 * Event representing that an entity is no longer affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAffectedEntityEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an entity is no longer affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAffectedEntityEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an entity is no longer affected by an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAffectedEntityEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an Artefact was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedArtefactEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedArtefactEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The Artefact which was removed from the Issue, null if deleted. */
        removedArtefact?: Maybe<Artefact>;
    };

/**
 * Event representing that an Artefact was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedArtefactEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an Artefact was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedArtefactEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an Artefact was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedArtefactEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that a User was unassigned from an Issue,
 *     meaning an Assignment was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAssignmentEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedAssignmentEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The removed Assignment. */
        removedAssignment: Assignment;
    };

/**
 * Event representing that a User was unassigned from an Issue,
 *     meaning an Assignment was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAssignmentEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a User was unassigned from an Issue,
 *     meaning an Assignment was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAssignmentEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a User was unassigned from an Issue,
 *     meaning an Assignment was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedAssignmentEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an Issue was unpinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromPinnedIssuesEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedFromPinnedIssuesEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The Trackable the Issue is no longer pinned on, null if deleted. */
        unpinnedOn?: Maybe<Trackable>;
    };

/**
 * Event representing that an Issue was unpinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromPinnedIssuesEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an Issue was unpinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromPinnedIssuesEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an Issue was unpinned on a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromPinnedIssuesEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an Issue was removed from a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromTrackableEvent = AuditedNode &
    ExtensibleNode &
    Node &
    ParentTimelineItem &
    TimelineItem & {
        __typename?: "RemovedFromTrackableEvent";
        /** Child TimelineItems. These are still part of the main timeline. */
        childItems: TimelineItemConnection;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The Trackable the Issue was removed from, null if deleted. */
        removedFromTrackable?: Maybe<Trackable>;
    };

/**
 * Event representing that an Issue was removed from a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromTrackableEventChildItemsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TimelineItemFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TimelineItemOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Event representing that an Issue was removed from a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromTrackableEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an Issue was removed from a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromTrackableEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an Issue was removed from a Trackable.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedFromTrackableEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an incoming IssueRelation was removed.
 *     READ is granted if READ is granted on `removedRelation`.
 *
 */
export type RemovedIncomingRelationEvent = AuditedNode &
    ExtensibleNode &
    Node &
    RemovedRelationEvent &
    TimelineItem & {
        __typename?: "RemovedIncomingRelationEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The removed IssueRelation, null if deleted. */
        removedRelation?: Maybe<IssueRelation>;
    };

/**
 * Event representing that an incoming IssueRelation was removed.
 *     READ is granted if READ is granted on `removedRelation`.
 *
 */
export type RemovedIncomingRelationEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an incoming IssueRelation was removed.
 *     READ is granted if READ is granted on `removedRelation`.
 *
 */
export type RemovedIncomingRelationEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an incoming IssueRelation was removed.
 *     READ is granted if READ is granted on `removedRelation`.
 *
 */
export type RemovedIncomingRelationEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that a Label was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedLabelEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedLabelEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The Label removed from the Issue, null if deleted. */
        removedLabel?: Maybe<Label>;
    };

/**
 * Event representing that a Label was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedLabelEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a Label was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedLabelEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a Label was removed from an Issue.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedLabelEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedOutgoingRelationEvent = AuditedNode &
    ExtensibleNode &
    Node &
    RemovedRelationEvent &
    TimelineItem & {
        __typename?: "RemovedOutgoingRelationEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
        /** The removed IssueRelation, null if deleted. */
        removedRelation?: Maybe<IssueRelation>;
    };

/**
 * Event representing that an outgoing IssueRelation was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedOutgoingRelationEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedOutgoingRelationEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedOutgoingRelationEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *
 */
export type RemovedRelationEvent = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
    /** The removed IssueRelation, null if deleted. */
    removedRelation?: Maybe<IssueRelation>;
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *
 */
export type RemovedRelationEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *
 */
export type RemovedRelationEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that an outgoing IssueRelation was removed.
 *
 */
export type RemovedRelationEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that a templated field was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedTemplatedFieldEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "RemovedTemplatedFieldEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** The name of the templated field. */
        fieldName: Scalars["String"]["output"];
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The removed old value of the templated field. */
        oldValue?: Maybe<Scalars["JSON"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that a templated field was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedTemplatedFieldEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that a templated field was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedTemplatedFieldEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that a templated field was removed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type RemovedTemplatedFieldEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the spent time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type SpentTimeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "SpentTimeChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The mew spent time. */
        newSpentTime?: Maybe<Scalars["Duration"]["output"]>;
        /** The old spent time. */
        oldSpentTime?: Maybe<Scalars["Duration"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the spent time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type SpentTimeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the spent time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type SpentTimeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the spent time of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type SpentTimeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the start date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StartDateChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "StartDateChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new start date. */
        newStartDate?: Maybe<Scalars["DateTime"]["output"]>;
        /** The old start date. */
        oldStartDate?: Maybe<Scalars["DateTime"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the start date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StartDateChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the start date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StartDateChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the start date of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StartDateChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the state of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StateChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "StateChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new state. */
        newState: IssueState;
        /** The old state. */
        oldState: IssueState;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the state of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StateChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the state of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StateChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the state of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type StateChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type StringFilterInput = {
    /** Matches Strings which contain the provided value */
    contains?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which end with the provided value */
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings using the provided RegEx */
    matches?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which start with the provided value */
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * BaseTemplate which is part of a Template.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Does not provide any composition features, as composition is handled by the Template it is part of.
 *
 */
export type SubTemplate = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** All template field specifications, if a `namePrefix` is provided, only those matching it */
    templateFieldSpecifications: Array<JsonField>;
};

/**
 * BaseTemplate which is part of a Template.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Does not provide any composition features, as composition is handled by the Template it is part of.
 *
 */
export type SubTemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * BaseTemplate which is part of a Template.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Does not provide any composition features, as composition is handled by the Template it is part of.
 *
 */
export type SubTemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * BaseTemplate which is part of a Template.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Does not provide any composition features, as composition is handled by the Template it is part of.
 *
 */
export type SubTemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * BaseTemplate which is part of a Template.
 *     Defines templated fields with specific types (defined using JSON schema).
 *     Does not provide any composition features, as composition is handled by the Template it is part of.
 *
 */
export type SubTemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input to create a SubTemplate */
export type SubTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/**
 * BaseTemplate with composition features.
 *     Can have SubTemplates.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type Template = {
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** If true, this template is deprecated and cannot be used for new entities any more. */
    isDeprecated: Scalars["Boolean"]["output"];
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** All template field specifications, if a `namePrefix` is provided, only those matching it */
    templateFieldSpecifications: Array<JsonField>;
};

/**
 * BaseTemplate with composition features.
 *     Can have SubTemplates.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type TemplateExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * BaseTemplate with composition features.
 *     Can have SubTemplates.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type TemplateExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * BaseTemplate with composition features.
 *     Can have SubTemplates.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type TemplateHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * BaseTemplate with composition features.
 *     Can have SubTemplates.
 *     Defines templated fields with specific types (defined using JSON schema).
 *
 */
export type TemplateTemplateFieldSpecificationsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing the template of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplateChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    ParentTimelineItem &
    TimelineItem & {
        __typename?: "TemplateChangedEvent";
        /** Child TimelineItems. These are still part of the main timeline. */
        childItems: TimelineItemConnection;
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new template. */
        newTemplate: IssueTemplate;
        /** The old template. */
        oldTemplate: IssueTemplate;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing the template of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplateChangedEventChildItemsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<TimelineItemFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<TimelineItemOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * Event representing the template of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplateChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing the template of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplateChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing the template of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplateChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * Event representing that the value of a templated field changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplatedFieldChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "TemplatedFieldChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** The name of the templated field. */
        fieldName: Scalars["String"]["output"];
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new value of the templated field. */
        newValue?: Maybe<Scalars["JSON"]["output"]>;
        /** The old value of the templated field. */
        oldValue?: Maybe<Scalars["JSON"]["output"]>;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the value of a templated field changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplatedFieldChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the value of a templated field changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplatedFieldChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the value of a templated field changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TemplatedFieldChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Interface for all types which support templates. */
export type TemplatedNode = {
    /** Value of a field defined by the template. Error if such a field is not defined. */
    templatedField?: Maybe<Scalars["JSON"]["output"]>;
    /**
     * All templatedFields
     *         If `names` is provided, only those matching the name. If `prefixMatching` is true, matching is done by
     *         prefix, otherwise by full name.
     *
     */
    templatedFields: Array<JsonField>;
};

/** Interface for all types which support templates. */
export type TemplatedNodeTemplatedFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Interface for all types which support templates. */
export type TemplatedNodeTemplatedFieldsArgs = {
    names?: InputMaybe<Array<Scalars["String"]["input"]>>;
    prefixMatching?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Supertype of all timeline items. Always part of an Issue. */
export type TimelineItem = {
    /** The DateTime this entity was created at. */
    createdAt: Scalars["DateTime"]["output"];
    /** The User who created this entity. */
    createdBy: User;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** The Issue this TimelineItem is part of. */
    issue?: Maybe<Issue>;
    /** The DateTime this entity was last modified at. */
    lastModifiedAt: Scalars["DateTime"]["output"];
    /** The User who last modified this entity. */
    lastModifiedBy: User;
    /** If existing, the parent TimelineItem */
    parentItem?: Maybe<ParentTimelineItem>;
};

/** Supertype of all timeline items. Always part of an Issue. */
export type TimelineItemExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/** Supertype of all timeline items. Always part of an Issue. */
export type TimelineItemExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/** Supertype of all timeline items. Always part of an Issue. */
export type TimelineItemHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** The connection type for TimelineItem. */
export type TimelineItemConnection = {
    __typename?: "TimelineItemConnection";
    /** A list of all edges of the current page. */
    edges: Array<TimelineItemEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<TimelineItem>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type TimelineItemEdge = {
    __typename?: "TimelineItemEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: TimelineItem;
};

/** Filter used to filter TimelineItem */
export type TimelineItemFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<TimelineItemFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<TimelineItemFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<TimelineItemFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TimelineItemListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<TimelineItemFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<TimelineItemFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<TimelineItemFilterInput>;
};

/** Defines the order of a TimelineItem list */
export type TimelineItemOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<TimelineItemOrderField>;
};

/** Fields a list of TimelineItem can be sorted by */
export enum TimelineItemOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/**
 * Event representing that the title of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TitleChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "TitleChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new title. */
        newTitle: Scalars["String"]["output"];
        /** The old title. */
        oldTitle: Scalars["String"]["output"];
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the title of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TitleChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the title of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TitleChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the title of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TitleChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type Trackable = {
    /** The issues which affect this entity */
    affectingIssues: IssueConnection;
    /** Artefacts of this trackable, typically some kind of file. */
    artefacts: ArtefactConnection;
    /** The description of this entity. */
    description: Scalars["String"]["output"];
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /**
     * The set of Issues which are part of this Trackable.
     *         An Issue has to be part of a Trackable to use the Labels and Artefacts defined by the Trackable.
     *
     */
    issues: IssueConnection;
    /** The set of Labels which can be added to issues of this trackable. */
    labels: LabelConnection;
    /** The name of this entity. */
    name: Scalars["String"]["output"];
    /** Issues which are pinned to this trackable, subset of `issues`. */
    pinnedIssues: IssueConnection;
    /** If existing, the URL of the repository (e.g. a GitHub repository). */
    repositoryURL?: Maybe<Scalars["URL"]["output"]>;
    /** IMSProjects this Trackable is synced to and from. */
    syncsTo: ImsProjectConnection;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableAffectingIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableArtefactsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ArtefactFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ArtefactOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableLabelsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<LabelFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<LabelOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackablePinnedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * An entity which can have Issues, Labels and Artefacts.
 *     Has pinned issues.
 *     Can be synced to an IMS by creating an IMSProject.
 *     Can be affected by Issues.
 *
 */
export type TrackableSyncsToArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<ImsProjectFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<ImsProjectOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for Trackable. */
export type TrackableConnection = {
    __typename?: "TrackableConnection";
    /** A list of all edges of the current page. */
    edges: Array<TrackableEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<Trackable>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type TrackableEdge = {
    __typename?: "TrackableEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: Trackable;
};

/** Filter used to filter Trackable */
export type TrackableFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<TrackableFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<TrackableFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<TrackableFilterInput>>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TrackableListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<TrackableFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<TrackableFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<TrackableFilterInput>;
};

/** Defines the order of a Trackable list */
export type TrackableOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<TrackableOrderField>;
};

/** Fields a list of Trackable can be sorted by */
export enum TrackableOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

export type TrackablePermission = ComponentPermission | ProjectPermission;

/**
 * Event representing that the type of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TypeChangedEvent = AuditedNode &
    ExtensibleNode &
    Node &
    TimelineItem & {
        __typename?: "TypeChangedEvent";
        /** The DateTime this entity was created at. */
        createdAt: Scalars["DateTime"]["output"];
        /** The User who created this entity. */
        createdBy: User;
        /** Value of an extension field by name of the extension field. Null if the field does not exist. */
        extensionField?: Maybe<Scalars["JSON"]["output"]>;
        /** All extension fields, if a `namePrefix` is provided, only those matching it */
        extensionFields: Array<JsonField>;
        /** Checks if the current user has a specific permission on this Node */
        hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
        /** The unique id of this node */
        id: Scalars["ID"]["output"];
        /** The Issue this TimelineItem is part of. */
        issue?: Maybe<Issue>;
        /** The DateTime this entity was last modified at. */
        lastModifiedAt: Scalars["DateTime"]["output"];
        /** The User who last modified this entity. */
        lastModifiedBy: User;
        /** The new type. */
        newType: IssueType;
        /** The old type. */
        oldType: IssueType;
        /** If existing, the parent TimelineItem */
        parentItem?: Maybe<ParentTimelineItem>;
    };

/**
 * Event representing that the type of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TypeChangedEventExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * Event representing that the type of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TypeChangedEventExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * Event representing that the type of an Issue changed.
 *     READ is granted if READ is granted on `issue`.
 *
 */
export type TypeChangedEventHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/** Input to map an old type to a new type */
export type TypeMappingInput = {
    /** The new type, null representing no type */
    newType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The old type, null representing no type */
    oldType: Scalars["ID"]["input"];
};

/** Input for the updateArtefact mutation */
export type UpdateArtefactInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new file of the Artefact */
    file?: InputMaybe<Scalars["URL"]["input"]>;
    /** The new value of the from field of the Artefact */
    from?: InputMaybe<Scalars["Int"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /**
     * If provided, the id of the new template for the Artefact
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new value of the to field of the Artefact */
    to?: InputMaybe<Scalars["Int"]["input"]>;
    /** New version of the Artefact */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateArtefactPayload = {
    __typename?: "UpdateArtefactPayload";
    /** The updated Artefact */
    artefact?: Maybe<Artefact>;
};

/** Input for the updateBody mutation */
export type UpdateBodyInput = {
    /** The body of the Comment */
    body?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
};

export type UpdateBodyPayload = {
    __typename?: "UpdateBodyPayload";
    /** The updated Body */
    body?: Maybe<Body>;
};

/** Input for the updateComponent mutation */
export type UpdateComponentInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * Values for templatedFields of ComponentVersions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all ComponentVersions of the updated Component
     *
     */
    componentVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         Use `componentVersionTemplatedFields` to update the `templatedFields` of ALL ComponentVersions
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateComponentPayload = {
    __typename?: "UpdateComponentPayload";
    /** The updated Component */
    component?: Maybe<Component>;
};

/** Input for the updateComponentPermission mutation */
export type UpdateComponentPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateComponentPermissionPayload = {
    __typename?: "UpdateComponentPermissionPayload";
    /** The updated ComponentPermission */
    componentPermission?: Maybe<ComponentPermission>;
};

/** Input for the updateComponentVersion mutation */
export type UpdateComponentVersionInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** New version of the ComponentVersion */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateComponentVersionPayload = {
    __typename?: "UpdateComponentVersionPayload";
    /** The updated ComponentVersion */
    componentVersion?: Maybe<ComponentVersion>;
};

/** Input for the updateExtensionFields mutation */
export type UpdateExtensionFieldsInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
};

export type UpdateExtensionFieldsPayload = {
    __typename?: "UpdateExtensionFieldsPayload";
    /** The updated ExtensibleNode */
    extensibleNode?: Maybe<ExtensibleNode>;
};

/** Input for the updateGlobalPermission mutation */
export type UpdateGlobalPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<PermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<PermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateGlobalPermissionPayload = {
    __typename?: "UpdateGlobalPermissionPayload";
    /** The updated GlobalPermission */
    globalPermission?: Maybe<GlobalPermission>;
};

/** Input for the updateGropiusUserMutation */
export type UpdateGropiusUserInput = {
    /** The new avatar of the user */
    avatar?: InputMaybe<Scalars["URL"]["input"]>;
    /** The new displayName of the User to update */
    displayName?: InputMaybe<Scalars["String"]["input"]>;
    /** The new email of the User to update */
    email?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new value for isAdmin of the GropiusUser to update */
    isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UpdateGropiusUserPayload = {
    __typename?: "UpdateGropiusUserPayload";
    /** The updated GropiusUser */
    gropiusUser?: Maybe<GropiusUser>;
};

/** Input for the updateIMS mutation */
export type UpdateImsInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateImsPayload = {
    __typename?: "UpdateIMSPayload";
    /** The updated IMS */
    ims?: Maybe<Ims>;
};

/** Input for the updateImsPermission mutation */
export type UpdateImsPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateImsPermissionPayload = {
    __typename?: "UpdateIMSPermissionPayload";
    /** The updated IMSPermission */
    imsPermission?: Maybe<ImsPermission>;
};

/** Input for the updateIMSProject mutation */
export type UpdateImsProjectInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateImsProjectPayload = {
    __typename?: "UpdateIMSProjectPayload";
    /** The updated IMSProject */
    imsProject?: Maybe<ImsProject>;
};

/** Input for the updateInterfaceDefinition mutation */
export type UpdateInterfaceDefinitionInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateInterfaceDefinitionPayload = {
    __typename?: "UpdateInterfaceDefinitionPayload";
    /** The updated InterfaceDefinition  */
    interfaceDefinition?: Maybe<InterfaceDefinition>;
};

/** Input for the updateInterface mutation */
export type UpdateInterfaceInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfacePart mutation */
export type UpdateInterfacePartInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateInterfacePartPayload = {
    __typename?: "UpdateInterfacePartPayload";
    /** The updated InterfacePart */
    interfacePart?: Maybe<InterfacePart>;
};

export type UpdateInterfacePayload = {
    __typename?: "UpdateInterfacePayload";
    /** The updated Interface  */
    interface?: Maybe<Interface>;
};

/** Input for the updateInterfaceSpecification mutation */
export type UpdateInterfaceSpecificationInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /**
     * Values for templatedFields of InterfaceDefinitions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceDefinitions of the updated InterfaceSpecification
     *
     */
    interfaceDefinitionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of InterfaceParts to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceParts of the updated InterfaceSpecification
     *
     */
    interfacePartTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of InterfaceSpecificationVersions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceSpecificationVersions of the updated InterfaceSpecification
     *
     */
    interfaceSpecificationVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of Interfaces to update.
     *         Only evaluated if `template` is provided!
     *         Affect all Interfaces of the updated InterfaceSpecification
     *
     */
    interfaceTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateInterfaceSpecificationPayload = {
    __typename?: "UpdateInterfaceSpecificationPayload";
    /** The updated InterfaceSpecification */
    interfaceSpecification?: Maybe<InterfaceSpecification>;
};

/** Input for the updateInterfaceSpecificationVersion mutation */
export type UpdateInterfaceSpecificationVersionInput = {
    /** Ids of InterfaceParts defined by the associated InterfaceSpecification to add to `activeParts` */
    addedActiveParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Ids of InterfaceParts defined by the associated InterfaceSpecification to remove from `activeParts` */
    removedActiveParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** New version of the InterfaceSpecificationVersion */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateInterfaceSpecificationVersionPayload = {
    __typename?: "UpdateInterfaceSpecificationVersionPayload";
    /** The updated InterfaceSpecificationVersion */
    interfaceSpecificationVersion?: Maybe<InterfaceSpecificationVersion>;
};

/** Input for the updateIntraComponentDependencySpecification mutation */
export type UpdateIntraComponentDependencySpecificationInput = {
    /** Added incomingParticipants */
    addedIncomingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
    /** Added outgoingParticipants */
    addedOutgoingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Ids of incomingParticipants to remove / delete */
    removedIncomingParticipants?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of outgoingParticipants to remove / delete */
    removedOutgoingParticipants?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateIntraComponentDependencySpecificationPayload = {
    __typename?: "UpdateIntraComponentDependencySpecificationPayload";
    /** The updated IntraComponentDependencySpecification */
    intraComponentDependencySpecification?: Maybe<IntraComponentDependencySpecification>;
};

/** Input for the updateIssueComment mutation */
export type UpdateIssueCommentInput = {
    /** Ids of Artefacts which should be added to `referencedArtefacts` */
    addedReferencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The body of the Comment */
    body?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Ids of Artefacts which should be removed from `referencedArtefacts` */
    removedReferencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateIssueCommentPayload = {
    __typename?: "UpdateIssueCommentPayload";
    /** The updated IssueComment */
    issueComment?: Maybe<IssueComment>;
};

/** Input for the updateLabel mutation */
export type UpdateLabelInput = {
    /** The new color of the Label */
    color?: InputMaybe<Scalars["String"]["input"]>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateLabelPayload = {
    __typename?: "UpdateLabelPayload";
    /** The updated Label */
    label?: Maybe<Label>;
};

/** Input for the updateProject mutation */
export type UpdateProjectInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
};

export type UpdateProjectPayload = {
    __typename?: "UpdateProjectPayload";
    /** The updated Project */
    project?: Maybe<Project>;
};

/** Input for the updateProjectPermission mutation */
export type UpdateProjectPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type UpdateProjectPermissionPayload = {
    __typename?: "UpdateProjectPermissionPayload";
    /** The updated ProjectPermission */
    projectPermission?: Maybe<ProjectPermission>;
};

/** Input for the updateRelation mutation */
export type UpdateRelationInput = {
    /** Ids of InterfaceParts of the `end` Interface to add to `endParts` */
    addedEndParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of InterfaceParts of the `start` Interface to add to `startParts` */
    addedStartParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Ids of InterfaceParts of the `end` Interface to remove from `endParts` */
    removedEndParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of InterfaceParts of the `start` Interface to remove from `startParts` */
    removedStartParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *         Caution: the chosen Template must be compatible with the Templates of the start and end of the Relation.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

export type UpdateRelationPayload = {
    __typename?: "UpdateRelationPayload";
    /** The updated Relation */
    relation?: Maybe<Relation>;
};

/** Input for the updateTemplateDeprecationStatus mutation */
export type UpdateTemplateDeprecationStatusInput = {
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new deprecation status of the template */
    isDeprecated: Scalars["Boolean"]["input"];
};

export type UpdateTemplateDeprecationStatusPayload = {
    __typename?: "UpdateTemplateDeprecationStatusPayload";
    /** The updated Template */
    template?: Maybe<Template>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type User = {
    /** Assignments the user is part of, this includes assignments which aren't active. */
    assignments: AssignmentConnection;
    /** The avatar of the user. */
    avatar: Scalars["URL"]["output"];
    /** AuditedNodes the user created. */
    createdNodes: AuditedNodeConnection;
    /** The name which should be displayed for the user. */
    displayName: Scalars["String"]["output"];
    /** The email address of the user. */
    email?: Maybe<Scalars["String"]["output"]>;
    /** Value of an extension field by name of the extension field. Null if the field does not exist. */
    extensionField?: Maybe<Scalars["JSON"]["output"]>;
    /** All extension fields, if a `namePrefix` is provided, only those matching it */
    extensionFields: Array<JsonField>;
    /** Checks if the current user has a specific permission on this Node */
    hasPermission?: Maybe<Scalars["Boolean"]["output"]>;
    /** The unique id of this node */
    id: Scalars["ID"]["output"];
    /** Issues the user participated in. */
    participatedIssues: IssueConnection;
    /**
     * The identifier of the user.
     *         This is only unique for GropiusUsers, for IMSUsers, no constrains v  are guaranteed.
     *
     */
    username?: Maybe<Scalars["String"]["output"]>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserAssignmentsArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AssignmentFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AssignmentOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserCreatedNodesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<AuditedNodeFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<AuditedNodeOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserExtensionFieldArgs = {
    name: Scalars["String"]["input"];
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserExtensionFieldsArgs = {
    namePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserHasPermissionArgs = {
    permission?: InputMaybe<AllPermissionEntry>;
};

/**
 * A user known to the Gropius System.
 *     This might be a user that registered directly, or a user the systems know via a sync adapter.
 *     A user can create AuditedNodes, participate in Issues and be assigned to Issues.
 *     READ is always granted.
 *
 */
export type UserParticipatedIssuesArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<IssueFilterInput>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<IssueOrder>;
    skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The connection type for User. */
export type UserConnection = {
    __typename?: "UserConnection";
    /** A list of all edges of the current page. */
    edges: Array<UserEdge>;
    /** A list of all nodes of the current page. */
    nodes: Array<User>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    /** Identifies the total count of items in the connection. */
    totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type UserEdge = {
    __typename?: "UserEdge";
    /** A cursor used in pagination. */
    cursor: Scalars["String"]["output"];
    /** The item at the end of the edge. */
    node: User;
};

/** Filter used to filter User */
export type UserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<UserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<UserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<UserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type UserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<UserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<UserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<UserFilterInput>;
};

/** Defines the order of a User list */
export type UserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<UserOrderField>;
};

/** Fields a list of User can be sorted by */
export enum UserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID"
}

/** Entity with a version */
export type Versioned = {
    /** The version of this entity */
    version: Scalars["String"]["output"];
};

export type DefaultAssignmentInfoFragment = {
    __typename?: "Assignment";
    id: string;
    user:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
};

export type DefaultAssignmentTypeInfoFragment = {
    __typename?: "AssignmentType";
    id: string;
    name: string;
    description: string;
};

export type GetComponentsQueryVariables = Exact<{
    filter: Scalars["String"]["input"];
    orderBy: ComponentOrder;
    count: Scalars["Int"]["input"];
    skip: Scalars["Int"]["input"];
}>;

export type GetComponentsQuery = {
    __typename?: "Query";
    components: {
        __typename?: "ComponentConnection";
        totalCount: number;
        nodes: Array<{
            __typename?: "Component";
            id: string;
            name: string;
            description: string;
            openIssues: { __typename?: "IssueConnection"; totalCount: number };
        }>;
    };
};

export type GetComponentQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetComponentQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent"; id: string }
        | { __typename?: "AddedArtefactEvent"; id: string }
        | { __typename?: "AddedLabelEvent"; id: string }
        | { __typename?: "AddedToPinnedIssuesEvent"; id: string }
        | { __typename?: "AddedToTrackableEvent"; id: string }
        | { __typename?: "Artefact"; id: string }
        | { __typename?: "ArtefactTemplate"; id: string }
        | { __typename?: "Assignment"; id: string }
        | { __typename?: "AssignmentType"; id: string }
        | { __typename?: "AssignmentTypeChangedEvent"; id: string }
        | { __typename?: "Body"; id: string }
        | {
              __typename?: "Component";
              name: string;
              description: string;
              id: string;
              openIssues: { __typename?: "IssueConnection"; totalCount: number };
          }
        | { __typename?: "ComponentPermission"; id: string }
        | { __typename?: "ComponentTemplate"; id: string }
        | { __typename?: "ComponentVersion"; id: string }
        | { __typename?: "ComponentVersionTemplate"; id: string }
        | { __typename?: "DueDateChangedEvent"; id: string }
        | { __typename?: "EstimatedTimeChangedEvent"; id: string }
        | { __typename?: "GlobalPermission"; id: string }
        | { __typename?: "GropiusUser"; id: string }
        | { __typename?: "IMS"; id: string }
        | { __typename?: "IMSIssue"; id: string }
        | { __typename?: "IMSIssueTemplate"; id: string }
        | { __typename?: "IMSPermission"; id: string }
        | { __typename?: "IMSProject"; id: string }
        | { __typename?: "IMSProjectTemplate"; id: string }
        | { __typename?: "IMSTemplate"; id: string }
        | { __typename?: "IMSUser"; id: string }
        | { __typename?: "IMSUserTemplate"; id: string }
        | { __typename?: "IncomingRelationTypeChangedEvent"; id: string }
        | { __typename?: "Interface"; id: string }
        | { __typename?: "InterfaceDefinition"; id: string }
        | { __typename?: "InterfaceDefinitionTemplate"; id: string }
        | { __typename?: "InterfacePart"; id: string }
        | { __typename?: "InterfacePartTemplate"; id: string }
        | { __typename?: "InterfaceSpecification"; id: string }
        | { __typename?: "InterfaceSpecificationDerivationCondition"; id: string }
        | { __typename?: "InterfaceSpecificationTemplate"; id: string }
        | { __typename?: "InterfaceSpecificationVersion"; id: string }
        | { __typename?: "InterfaceSpecificationVersionTemplate"; id: string }
        | { __typename?: "InterfaceTemplate"; id: string }
        | { __typename?: "IntraComponentDependencyParticipant"; id: string }
        | { __typename?: "IntraComponentDependencySpecification"; id: string }
        | { __typename?: "Issue"; id: string }
        | { __typename?: "IssueComment"; id: string }
        | { __typename?: "IssuePriority"; id: string }
        | { __typename?: "IssueRelation"; id: string }
        | { __typename?: "IssueRelationType"; id: string }
        | { __typename?: "IssueState"; id: string }
        | { __typename?: "IssueTemplate"; id: string }
        | { __typename?: "IssueType"; id: string }
        | { __typename?: "Label"; id: string }
        | { __typename?: "OutgoingRelationTypeChangedEvent"; id: string }
        | { __typename?: "PriorityChangedEvent"; id: string }
        | { __typename?: "Project"; id: string }
        | { __typename?: "ProjectPermission"; id: string }
        | { __typename?: "RelatedByIssueEvent"; id: string }
        | { __typename?: "Relation"; id: string }
        | { __typename?: "RelationCondition"; id: string }
        | { __typename?: "RelationTemplate"; id: string }
        | { __typename?: "RemovedAffectedEntityEvent"; id: string }
        | { __typename?: "RemovedArtefactEvent"; id: string }
        | { __typename?: "RemovedAssignmentEvent"; id: string }
        | { __typename?: "RemovedFromPinnedIssuesEvent"; id: string }
        | { __typename?: "RemovedFromTrackableEvent"; id: string }
        | { __typename?: "RemovedIncomingRelationEvent"; id: string }
        | { __typename?: "RemovedLabelEvent"; id: string }
        | { __typename?: "RemovedOutgoingRelationEvent"; id: string }
        | { __typename?: "RemovedTemplatedFieldEvent"; id: string }
        | { __typename?: "SpentTimeChangedEvent"; id: string }
        | { __typename?: "StartDateChangedEvent"; id: string }
        | { __typename?: "StateChangedEvent"; id: string }
        | { __typename?: "TemplateChangedEvent"; id: string }
        | { __typename?: "TemplatedFieldChangedEvent"; id: string }
        | { __typename?: "TitleChangedEvent"; id: string }
        | { __typename?: "TypeChangedEvent"; id: string }
        | null;
};

export type GetIssuesQueryVariables = Exact<{
    filter: Scalars["String"]["input"];
    orderBy: IssueOrder;
    count: Scalars["Int"]["input"];
    skip: Scalars["Int"]["input"];
    trackable: Scalars["ID"]["input"];
}>;

export type GetIssuesQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | {
              __typename?: "Component";
              issues: {
                  __typename?: "IssueConnection";
                  totalCount: number;
                  nodes: Array<{
                      __typename?: "Issue";
                      id: string;
                      title: string;
                      createdAt: any;
                      createdBy:
                          | {
                                __typename?: "GropiusUser";
                                id: string;
                                username: string;
                                displayName: string;
                                avatar: any;
                            }
                          | {
                                __typename?: "IMSUser";
                                id: string;
                                username?: string | null;
                                displayName: string;
                                avatar: any;
                            };
                      issueComments: { __typename?: "IssueCommentConnection"; totalCount: number };
                      labels: {
                          __typename?: "LabelConnection";
                          nodes: Array<{
                              __typename?: "Label";
                              id: string;
                              name: string;
                              description: string;
                              color: string;
                          }>;
                      };
                      assignments: {
                          __typename?: "AssignmentConnection";
                          nodes: Array<{
                              __typename?: "Assignment";
                              user:
                                  | {
                                        __typename?: "GropiusUser";
                                        id: string;
                                        username: string;
                                        displayName: string;
                                        avatar: any;
                                    }
                                  | {
                                        __typename?: "IMSUser";
                                        id: string;
                                        username?: string | null;
                                        displayName: string;
                                        avatar: any;
                                    };
                          }>;
                      };
                      incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                      outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                      state: { __typename?: "IssueState"; isOpen: boolean };
                      type: { __typename?: "IssueType"; iconPath: string };
                  }>;
              };
          }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | {
              __typename?: "Project";
              issues: {
                  __typename?: "IssueConnection";
                  totalCount: number;
                  nodes: Array<{
                      __typename?: "Issue";
                      id: string;
                      title: string;
                      createdAt: any;
                      createdBy:
                          | {
                                __typename?: "GropiusUser";
                                id: string;
                                username: string;
                                displayName: string;
                                avatar: any;
                            }
                          | {
                                __typename?: "IMSUser";
                                id: string;
                                username?: string | null;
                                displayName: string;
                                avatar: any;
                            };
                      issueComments: { __typename?: "IssueCommentConnection"; totalCount: number };
                      labels: {
                          __typename?: "LabelConnection";
                          nodes: Array<{
                              __typename?: "Label";
                              id: string;
                              name: string;
                              description: string;
                              color: string;
                          }>;
                      };
                      assignments: {
                          __typename?: "AssignmentConnection";
                          nodes: Array<{
                              __typename?: "Assignment";
                              user:
                                  | {
                                        __typename?: "GropiusUser";
                                        id: string;
                                        username: string;
                                        displayName: string;
                                        avatar: any;
                                    }
                                  | {
                                        __typename?: "IMSUser";
                                        id: string;
                                        username?: string | null;
                                        displayName: string;
                                        avatar: any;
                                    };
                          }>;
                      };
                      incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                      outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                      state: { __typename?: "IssueState"; isOpen: boolean };
                      type: { __typename?: "IssueType"; iconPath: string };
                  }>;
              };
          }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetIssueQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetIssueQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | {
              __typename?: "Issue";
              id: string;
              title: string;
              createdAt: any;
              lastUpdatedAt: any;
              estimatedTime?: any | null;
              spentTime?: any | null;
              startDate?: any | null;
              dueDate?: any | null;
              manageIssues?: boolean | null;
              comment?: boolean | null;
              moderator?: boolean | null;
              createdBy:
                  | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                  | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
              timelineItems: {
                  __typename?: "TimelineItemConnection";
                  nodes: Array<
                      | {
                            __typename: "AddedAffectedEntityEvent";
                            id: string;
                            createdAt: any;
                            addedAffectedEntity?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "ComponentVersion"; id: string; name: string; description: string }
                                | { __typename: "Interface"; id: string; name: string; description: string }
                                | { __typename: "InterfacePart"; id: string; name: string; description: string }
                                | {
                                      __typename: "InterfaceSpecification";
                                      id: string;
                                      name: string;
                                      description: string;
                                  }
                                | {
                                      __typename: "InterfaceSpecificationVersion";
                                      id: string;
                                      name: string;
                                      description: string;
                                  }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "AddedArtefactEvent";
                            id: string;
                            createdAt: any;
                            addedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "AddedLabelEvent";
                            id: string;
                            createdAt: any;
                            addedLabel?: {
                                __typename?: "Label";
                                id: string;
                                name: string;
                                description: string;
                                color: string;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "AddedToPinnedIssuesEvent";
                            id: string;
                            createdAt: any;
                            pinnedOn?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "AddedToTrackableEvent";
                            id: string;
                            createdAt: any;
                            addedToTrackable?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "Assignment";
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                            user:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                            type?: {
                                __typename?: "AssignmentType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                        }
                      | {
                            __typename: "AssignmentTypeChangedEvent";
                            id: string;
                            createdAt: any;
                            assignment: {
                                __typename: "Assignment";
                                id: string;
                                createdAt: any;
                                createdBy:
                                    | {
                                          __typename?: "GropiusUser";
                                          id: string;
                                          username: string;
                                          displayName: string;
                                          avatar: any;
                                      }
                                    | {
                                          __typename?: "IMSUser";
                                          id: string;
                                          username?: string | null;
                                          displayName: string;
                                          avatar: any;
                                      };
                                user:
                                    | {
                                          __typename?: "GropiusUser";
                                          id: string;
                                          username: string;
                                          displayName: string;
                                          avatar: any;
                                      }
                                    | {
                                          __typename?: "IMSUser";
                                          id: string;
                                          username?: string | null;
                                          displayName: string;
                                          avatar: any;
                                      };
                                type?: {
                                    __typename?: "AssignmentType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            };
                            newAssignmentType?: {
                                __typename?: "AssignmentType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            oldAssignmentType?: {
                                __typename?: "AssignmentType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "Body";
                            id: string;
                            createdAt: any;
                            body: string;
                            bodyLastEditedAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                            bodyLastEditedBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "DueDateChangedEvent";
                            oldDueDate?: any | null;
                            newDueDate?: any | null;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "EstimatedTimeChangedEvent";
                            oldEstimatedTime?: any | null;
                            newEstimatedTime?: any | null;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "IncomingRelationTypeChangedEvent";
                            id: string;
                            createdAt: any;
                            issueRelation: {
                                __typename?: "IssueRelation";
                                issue?: {
                                    __typename?: "Issue";
                                    id: string;
                                    title: string;
                                    trackables: {
                                        __typename?: "TrackableConnection";
                                        nodes: Array<
                                            | { __typename: "Component"; id: string; name: string; description: string }
                                            | { __typename: "Project"; id: string; name: string; description: string }
                                        >;
                                    };
                                    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    state: { __typename?: "IssueState"; isOpen: boolean };
                                    type: { __typename?: "IssueType"; iconPath: string };
                                } | null;
                                type?: {
                                    __typename?: "IssueRelationType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            };
                            oldRelationType?: {
                                __typename?: "IssueRelationType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            newRelationTyoe?: {
                                __typename?: "IssueRelationType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "IssueComment";
                            isDeleted: boolean;
                            id: string;
                            createdAt: any;
                            body: string;
                            bodyLastEditedAt: any;
                            answers?:
                                | { __typename?: "Body"; id: string }
                                | { __typename?: "IssueComment"; id: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                            bodyLastEditedBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "IssueRelation";
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                            relatedIssue?: {
                                __typename?: "Issue";
                                id: string;
                                title: string;
                                trackables: {
                                    __typename?: "TrackableConnection";
                                    nodes: Array<
                                        | { __typename: "Component"; id: string; name: string; description: string }
                                        | { __typename: "Project"; id: string; name: string; description: string }
                                    >;
                                };
                                incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                state: { __typename?: "IssueState"; isOpen: boolean };
                                type: { __typename?: "IssueType"; iconPath: string };
                            } | null;
                            type?: {
                                __typename?: "IssueRelationType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                        }
                      | {
                            __typename: "OutgoingRelationTypeChangedEvent";
                            id: string;
                            createdAt: any;
                            issueRelation: {
                                __typename?: "IssueRelation";
                                relatedIssue?: {
                                    __typename?: "Issue";
                                    id: string;
                                    title: string;
                                    trackables: {
                                        __typename?: "TrackableConnection";
                                        nodes: Array<
                                            | { __typename: "Component"; id: string; name: string; description: string }
                                            | { __typename: "Project"; id: string; name: string; description: string }
                                        >;
                                    };
                                    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    state: { __typename?: "IssueState"; isOpen: boolean };
                                    type: { __typename?: "IssueType"; iconPath: string };
                                } | null;
                                type?: {
                                    __typename?: "IssueRelationType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            };
                            oldRelationType?: {
                                __typename?: "IssueRelationType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            newRelationTyoe?: {
                                __typename?: "IssueRelationType";
                                id: string;
                                name: string;
                                description: string;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "PriorityChangedEvent";
                            id: string;
                            createdAt: any;
                            oldPriority?: {
                                __typename?: "IssuePriority";
                                id: string;
                                name: string;
                                description: string;
                                value: number;
                            } | null;
                            newPriority?: {
                                __typename?: "IssuePriority";
                                id: string;
                                name: string;
                                description: string;
                                value: number;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RelatedByIssueEvent";
                            id: string;
                            createdAt: any;
                            relation?: {
                                __typename?: "IssueRelation";
                                issue?: {
                                    __typename?: "Issue";
                                    id: string;
                                    title: string;
                                    trackables: {
                                        __typename?: "TrackableConnection";
                                        nodes: Array<
                                            | { __typename: "Component"; id: string; name: string; description: string }
                                            | { __typename: "Project"; id: string; name: string; description: string }
                                        >;
                                    };
                                    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    state: { __typename?: "IssueState"; isOpen: boolean };
                                    type: { __typename?: "IssueType"; iconPath: string };
                                } | null;
                                type?: {
                                    __typename?: "IssueRelationType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedAffectedEntityEvent";
                            id: string;
                            createdAt: any;
                            removedAffectedEntity?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "ComponentVersion"; id: string; name: string; description: string }
                                | { __typename: "Interface"; id: string; name: string; description: string }
                                | { __typename: "InterfacePart"; id: string; name: string; description: string }
                                | {
                                      __typename: "InterfaceSpecification";
                                      id: string;
                                      name: string;
                                      description: string;
                                  }
                                | {
                                      __typename: "InterfaceSpecificationVersion";
                                      id: string;
                                      name: string;
                                      description: string;
                                  }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedArtefactEvent";
                            id: string;
                            createdAt: any;
                            removedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedAssignmentEvent";
                            id: string;
                            createdAt: any;
                            removedAssignment: {
                                __typename: "Assignment";
                                id: string;
                                createdAt: any;
                                createdBy:
                                    | {
                                          __typename?: "GropiusUser";
                                          id: string;
                                          username: string;
                                          displayName: string;
                                          avatar: any;
                                      }
                                    | {
                                          __typename?: "IMSUser";
                                          id: string;
                                          username?: string | null;
                                          displayName: string;
                                          avatar: any;
                                      };
                                user:
                                    | {
                                          __typename?: "GropiusUser";
                                          id: string;
                                          username: string;
                                          displayName: string;
                                          avatar: any;
                                      }
                                    | {
                                          __typename?: "IMSUser";
                                          id: string;
                                          username?: string | null;
                                          displayName: string;
                                          avatar: any;
                                      };
                                type?: {
                                    __typename?: "AssignmentType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            };
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedFromPinnedIssuesEvent";
                            id: string;
                            createdAt: any;
                            unpinnedOn?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedFromTrackableEvent";
                            id: string;
                            createdAt: any;
                            removedFromTrackable?:
                                | { __typename: "Component"; id: string; name: string; description: string }
                                | { __typename: "Project"; id: string; name: string; description: string }
                                | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedIncomingRelationEvent";
                            id: string;
                            createdAt: any;
                            removedRelation?: {
                                __typename?: "IssueRelation";
                                issue?: {
                                    __typename?: "Issue";
                                    id: string;
                                    title: string;
                                    trackables: {
                                        __typename?: "TrackableConnection";
                                        nodes: Array<
                                            | { __typename: "Component"; id: string; name: string; description: string }
                                            | { __typename: "Project"; id: string; name: string; description: string }
                                        >;
                                    };
                                    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    state: { __typename?: "IssueState"; isOpen: boolean };
                                    type: { __typename?: "IssueType"; iconPath: string };
                                } | null;
                                type?: {
                                    __typename?: "IssueRelationType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedLabelEvent";
                            id: string;
                            createdAt: any;
                            removedLabel?: {
                                __typename?: "Label";
                                id: string;
                                name: string;
                                description: string;
                                color: string;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedOutgoingRelationEvent";
                            id: string;
                            createdAt: any;
                            removedRelation?: {
                                __typename?: "IssueRelation";
                                relatedIssue?: {
                                    __typename?: "Issue";
                                    id: string;
                                    title: string;
                                    trackables: {
                                        __typename?: "TrackableConnection";
                                        nodes: Array<
                                            | { __typename: "Component"; id: string; name: string; description: string }
                                            | { __typename: "Project"; id: string; name: string; description: string }
                                        >;
                                    };
                                    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                                    state: { __typename?: "IssueState"; isOpen: boolean };
                                    type: { __typename?: "IssueType"; iconPath: string };
                                } | null;
                                type?: {
                                    __typename?: "IssueRelationType";
                                    id: string;
                                    name: string;
                                    description: string;
                                } | null;
                            } | null;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "RemovedTemplatedFieldEvent";
                            fieldName: string;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "SpentTimeChangedEvent";
                            oldSpentTime?: any | null;
                            newSpentTime?: any | null;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "StartDateChangedEvent";
                            oldStartDate?: any | null;
                            newStartDate?: any | null;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "StateChangedEvent";
                            id: string;
                            createdAt: any;
                            oldState: {
                                __typename?: "IssueState";
                                id: string;
                                name: string;
                                description: string;
                                isOpen: boolean;
                            };
                            newState: {
                                __typename?: "IssueState";
                                id: string;
                                name: string;
                                description: string;
                                isOpen: boolean;
                            };
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "TemplateChangedEvent";
                            id: string;
                            createdAt: any;
                            oldTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
                            newTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "TemplatedFieldChangedEvent";
                            fieldName: string;
                            oldValue?: any | null;
                            newValue?: any | null;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "TitleChangedEvent";
                            oldTitle: string;
                            newTitle: string;
                            id: string;
                            createdAt: any;
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                      | {
                            __typename: "TypeChangedEvent";
                            id: string;
                            createdAt: any;
                            newIssueType: {
                                __typename?: "IssueType";
                                id: string;
                                name: string;
                                description: string;
                                iconPath: string;
                            };
                            oldIssueType: {
                                __typename?: "IssueType";
                                id: string;
                                name: string;
                                description: string;
                                iconPath: string;
                            };
                            createdBy:
                                | {
                                      __typename?: "GropiusUser";
                                      id: string;
                                      username: string;
                                      displayName: string;
                                      avatar: any;
                                  }
                                | {
                                      __typename?: "IMSUser";
                                      id: string;
                                      username?: string | null;
                                      displayName: string;
                                      avatar: any;
                                  };
                        }
                  >;
              };
              artefacts: {
                  __typename?: "ArtefactConnection";
                  nodes: Array<{ __typename?: "Artefact"; file: any; id: string }>;
              };
              outgoingRelations: {
                  __typename?: "IssueRelationConnection";
                  totalCount: number;
                  nodes: Array<{
                      __typename?: "IssueRelation";
                      id: string;
                      relatedIssue?: {
                          __typename?: "Issue";
                          id: string;
                          title: string;
                          trackables: {
                              __typename?: "TrackableConnection";
                              nodes: Array<
                                  | { __typename: "Component"; id: string; name: string; description: string }
                                  | { __typename: "Project"; id: string; name: string; description: string }
                              >;
                          };
                          incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                          outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                          state: { __typename?: "IssueState"; isOpen: boolean };
                          type: { __typename?: "IssueType"; iconPath: string };
                      } | null;
                      type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
                  }>;
              };
              incomingRelations: {
                  __typename?: "IssueRelationConnection";
                  totalCount: number;
                  nodes: Array<{
                      __typename?: "IssueRelation";
                      id: string;
                      issue?: {
                          __typename?: "Issue";
                          id: string;
                          title: string;
                          trackables: {
                              __typename?: "TrackableConnection";
                              nodes: Array<
                                  | { __typename: "Component"; id: string; name: string; description: string }
                                  | { __typename: "Project"; id: string; name: string; description: string }
                              >;
                          };
                          incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                          outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
                          state: { __typename?: "IssueState"; isOpen: boolean };
                          type: { __typename?: "IssueType"; iconPath: string };
                      } | null;
                      type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
                  }>;
              };
              labels: {
                  __typename?: "LabelConnection";
                  nodes: Array<{ __typename?: "Label"; id: string; name: string; description: string; color: string }>;
              };
              affects: {
                  __typename?: "AffectedByIssueConnection";
                  nodes: Array<
                      | { __typename: "Component"; id: string; name: string; description: string }
                      | { __typename: "ComponentVersion"; id: string; name: string; description: string }
                      | { __typename: "Interface"; id: string; name: string; description: string }
                      | { __typename: "InterfacePart"; id: string; name: string; description: string }
                      | { __typename: "InterfaceSpecification"; id: string; name: string; description: string }
                      | { __typename: "InterfaceSpecificationVersion"; id: string; name: string; description: string }
                      | { __typename: "Project"; id: string; name: string; description: string }
                  >;
              };
              assignments: {
                  __typename?: "AssignmentConnection";
                  nodes: Array<{
                      __typename: "Assignment";
                      id: string;
                      createdAt: any;
                      createdBy:
                          | {
                                __typename?: "GropiusUser";
                                id: string;
                                username: string;
                                displayName: string;
                                avatar: any;
                            }
                          | {
                                __typename?: "IMSUser";
                                id: string;
                                username?: string | null;
                                displayName: string;
                                avatar: any;
                            };
                      user:
                          | {
                                __typename?: "GropiusUser";
                                id: string;
                                username: string;
                                displayName: string;
                                avatar: any;
                            }
                          | {
                                __typename?: "IMSUser";
                                id: string;
                                username?: string | null;
                                displayName: string;
                                avatar: any;
                            };
                      type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
                  }>;
              };
              type: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
              state: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
              priority?: {
                  __typename?: "IssuePriority";
                  id: string;
                  name: string;
                  description: string;
                  value: number;
              } | null;
              template: { __typename?: "IssueTemplate"; id: string; name: string; description: string };
          }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type UpdateBodyMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    body: Scalars["String"]["input"];
}>;

export type UpdateBodyMutation = {
    __typename?: "Mutation";
    updateBody?: {
        __typename?: "UpdateBodyPayload";
        body?: {
            __typename: "Body";
            id: string;
            createdAt: any;
            body: string;
            bodyLastEditedAt: any;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
            bodyLastEditedBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type UpdateIssueCommentMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
    body: Scalars["String"]["input"];
}>;

export type UpdateIssueCommentMutation = {
    __typename?: "Mutation";
    updateIssueComment?: {
        __typename?: "UpdateIssueCommentPayload";
        issueComment?: {
            __typename: "IssueComment";
            isDeleted: boolean;
            id: string;
            createdAt: any;
            body: string;
            bodyLastEditedAt: any;
            answers?: { __typename?: "Body"; id: string } | { __typename?: "IssueComment"; id: string } | null;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
            bodyLastEditedBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type CreateIssueCommentMutationVariables = Exact<{
    issue: Scalars["ID"]["input"];
    body: Scalars["String"]["input"];
    answers?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type CreateIssueCommentMutation = {
    __typename?: "Mutation";
    createIssueComment?: {
        __typename?: "CreateIssueCommentPayload";
        issueComment?: {
            __typename: "IssueComment";
            isDeleted: boolean;
            id: string;
            createdAt: any;
            body: string;
            bodyLastEditedAt: any;
            answers?: { __typename?: "Body"; id: string } | { __typename?: "IssueComment"; id: string } | null;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
            bodyLastEditedBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type DeleteIssueCommentMutationVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type DeleteIssueCommentMutation = {
    __typename?: "Mutation";
    deleteIssueComment?: {
        __typename?: "DeleteIssueCommentPayload";
        issueComment?: {
            __typename: "IssueComment";
            isDeleted: boolean;
            id: string;
            createdAt: any;
            body: string;
            bodyLastEditedAt: any;
            answers?: { __typename?: "Body"; id: string } | { __typename?: "IssueComment"; id: string } | null;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
            bodyLastEditedBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type CreateIssueMutationVariables = Exact<{
    input: CreateIssueInput;
}>;

export type CreateIssueMutation = {
    __typename?: "Mutation";
    createIssue?: { __typename?: "CreateIssuePayload"; issue?: { __typename?: "Issue"; id: string } | null } | null;
};

export type DefaultIssueInfoFragment = {
    __typename?: "Issue";
    id: string;
    title: string;
    trackables: {
        __typename?: "TrackableConnection";
        nodes: Array<
            | { __typename: "Component"; id: string; name: string; description: string }
            | { __typename: "Project"; id: string; name: string; description: string }
        >;
    };
    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    state: { __typename?: "IssueState"; isOpen: boolean };
    type: { __typename?: "IssueType"; iconPath: string };
};

export type DefaultIssueIconInfoFragment = {
    __typename?: "Issue";
    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    state: { __typename?: "IssueState"; isOpen: boolean };
    type: { __typename?: "IssueType"; iconPath: string };
};

export type DefaultIssuePriorityInfoFragment = {
    __typename?: "IssuePriority";
    id: string;
    name: string;
    description: string;
    value: number;
};

export type DefaultIssueStateInfoFragment = {
    __typename?: "IssueState";
    id: string;
    name: string;
    description: string;
    isOpen: boolean;
};

export type SearchIssueStatesQueryVariables = Exact<{
    template: Scalars["ID"]["input"];
    filter: Scalars["String"]["input"];
    count: Scalars["Int"]["input"];
}>;

export type SearchIssueStatesQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | {
              __typename?: "IssueTemplate";
              issueStates: {
                  __typename?: "IssueStateConnection";
                  nodes: Array<{
                      __typename?: "IssueState";
                      id: string;
                      name: string;
                      description: string;
                      isOpen: boolean;
                  }>;
              };
          }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type ChangeIssueStateMutationVariables = Exact<{
    issue: Scalars["ID"]["input"];
    state: Scalars["ID"]["input"];
}>;

export type ChangeIssueStateMutation = {
    __typename?: "Mutation";
    changeIssueState?: {
        __typename?: "ChangeIssueStatePayload";
        stateChangedEvent?: {
            __typename: "StateChangedEvent";
            id: string;
            createdAt: any;
            oldState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
            newState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type DefaultIssueTemplateInfoFragment = {
    __typename?: "IssueTemplate";
    id: string;
    name: string;
    description: string;
};

export type SearchIssueTemplatesQueryVariables = Exact<{
    filter: Scalars["String"]["input"];
    count: Scalars["Int"]["input"];
}>;

export type SearchIssueTemplatesQuery = {
    __typename?: "Query";
    issueTemplates: {
        __typename?: "IssueTemplateConnection";
        nodes: Array<{ __typename?: "IssueTemplate"; id: string; name: string; description: string }>;
    };
};

export type DefaultIssueTypeInfoFragment = {
    __typename?: "IssueType";
    id: string;
    name: string;
    description: string;
    iconPath: string;
};

export type SearchIssueTypesQueryVariables = Exact<{
    template: Scalars["ID"]["input"];
    filter: Scalars["String"]["input"];
    count: Scalars["Int"]["input"];
}>;

export type SearchIssueTypesQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | {
              __typename?: "IssueTemplate";
              issueTypes: {
                  __typename?: "IssueTypeConnection";
                  nodes: Array<{
                      __typename?: "IssueType";
                      id: string;
                      name: string;
                      description: string;
                      iconPath: string;
                  }>;
              };
          }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type ChangeIssueTypeMutationVariables = Exact<{
    issue: Scalars["ID"]["input"];
    type: Scalars["ID"]["input"];
}>;

export type ChangeIssueTypeMutation = {
    __typename?: "Mutation";
    changeIssueType?: {
        __typename?: "ChangeIssueTypePayload";
        typeChangedEvent?: {
            __typename: "TypeChangedEvent";
            id: string;
            createdAt: any;
            newIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
            oldIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type DefaultLabelInfoFragment = {
    __typename?: "Label";
    id: string;
    name: string;
    description: string;
    color: string;
};

export type SearchLabelsQueryVariables = Exact<{
    issue: Scalars["ID"]["input"];
    filter: Scalars["String"]["input"];
    count: Scalars["Int"]["input"];
}>;

export type SearchLabelsQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | {
              __typename?: "Issue";
              trackables: {
                  __typename?: "TrackableConnection";
                  nodes: Array<
                      | {
                            __typename?: "Component";
                            labels: {
                                __typename?: "LabelConnection";
                                nodes: Array<{
                                    __typename?: "Label";
                                    id: string;
                                    name: string;
                                    description: string;
                                    color: string;
                                }>;
                            };
                        }
                      | {
                            __typename?: "Project";
                            labels: {
                                __typename?: "LabelConnection";
                                nodes: Array<{
                                    __typename?: "Label";
                                    id: string;
                                    name: string;
                                    description: string;
                                    color: string;
                                }>;
                            };
                        }
                  >;
              };
          }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type AddLabelToIssueMutationVariables = Exact<{
    issue: Scalars["ID"]["input"];
    label: Scalars["ID"]["input"];
}>;

export type AddLabelToIssueMutation = {
    __typename?: "Mutation";
    addLabelToIssue?: {
        __typename?: "AddLabelToIssuePayload";
        addedLabelEvent?: {
            __typename: "AddedLabelEvent";
            id: string;
            createdAt: any;
            addedLabel?: { __typename?: "Label"; id: string; name: string; description: string; color: string } | null;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type RemoveLabelFromIssueMutationVariables = Exact<{
    issue: Scalars["ID"]["input"];
    label: Scalars["ID"]["input"];
}>;

export type RemoveLabelFromIssueMutation = {
    __typename?: "Mutation";
    removeLabelFromIssue?: {
        __typename?: "RemoveLabelFromIssuePayload";
        removedLabelEvent?: {
            __typename: "RemovedLabelEvent";
            id: string;
            createdAt: any;
            removedLabel?: {
                __typename?: "Label";
                id: string;
                name: string;
                description: string;
                color: string;
            } | null;
            createdBy:
                | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
                | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        } | null;
    } | null;
};

export type GetProjectsQueryVariables = Exact<{
    filter: Scalars["String"]["input"];
    orderBy: ProjectOrder;
    count: Scalars["Int"]["input"];
    skip: Scalars["Int"]["input"];
}>;

export type GetProjectsQuery = {
    __typename?: "Query";
    projects: {
        __typename?: "ProjectConnection";
        totalCount: number;
        nodes: Array<{
            __typename?: "Project";
            id: string;
            name: string;
            description: string;
            openIssues: { __typename?: "IssueConnection"; totalCount: number };
        }>;
    };
};

export type GetProjectQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetProjectQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent"; id: string }
        | { __typename?: "AddedArtefactEvent"; id: string }
        | { __typename?: "AddedLabelEvent"; id: string }
        | { __typename?: "AddedToPinnedIssuesEvent"; id: string }
        | { __typename?: "AddedToTrackableEvent"; id: string }
        | { __typename?: "Artefact"; id: string }
        | { __typename?: "ArtefactTemplate"; id: string }
        | { __typename?: "Assignment"; id: string }
        | { __typename?: "AssignmentType"; id: string }
        | { __typename?: "AssignmentTypeChangedEvent"; id: string }
        | { __typename?: "Body"; id: string }
        | { __typename?: "Component"; id: string }
        | { __typename?: "ComponentPermission"; id: string }
        | { __typename?: "ComponentTemplate"; id: string }
        | { __typename?: "ComponentVersion"; id: string }
        | { __typename?: "ComponentVersionTemplate"; id: string }
        | { __typename?: "DueDateChangedEvent"; id: string }
        | { __typename?: "EstimatedTimeChangedEvent"; id: string }
        | { __typename?: "GlobalPermission"; id: string }
        | { __typename?: "GropiusUser"; id: string }
        | { __typename?: "IMS"; id: string }
        | { __typename?: "IMSIssue"; id: string }
        | { __typename?: "IMSIssueTemplate"; id: string }
        | { __typename?: "IMSPermission"; id: string }
        | { __typename?: "IMSProject"; id: string }
        | { __typename?: "IMSProjectTemplate"; id: string }
        | { __typename?: "IMSTemplate"; id: string }
        | { __typename?: "IMSUser"; id: string }
        | { __typename?: "IMSUserTemplate"; id: string }
        | { __typename?: "IncomingRelationTypeChangedEvent"; id: string }
        | { __typename?: "Interface"; id: string }
        | { __typename?: "InterfaceDefinition"; id: string }
        | { __typename?: "InterfaceDefinitionTemplate"; id: string }
        | { __typename?: "InterfacePart"; id: string }
        | { __typename?: "InterfacePartTemplate"; id: string }
        | { __typename?: "InterfaceSpecification"; id: string }
        | { __typename?: "InterfaceSpecificationDerivationCondition"; id: string }
        | { __typename?: "InterfaceSpecificationTemplate"; id: string }
        | { __typename?: "InterfaceSpecificationVersion"; id: string }
        | { __typename?: "InterfaceSpecificationVersionTemplate"; id: string }
        | { __typename?: "InterfaceTemplate"; id: string }
        | { __typename?: "IntraComponentDependencyParticipant"; id: string }
        | { __typename?: "IntraComponentDependencySpecification"; id: string }
        | { __typename?: "Issue"; id: string }
        | { __typename?: "IssueComment"; id: string }
        | { __typename?: "IssuePriority"; id: string }
        | { __typename?: "IssueRelation"; id: string }
        | { __typename?: "IssueRelationType"; id: string }
        | { __typename?: "IssueState"; id: string }
        | { __typename?: "IssueTemplate"; id: string }
        | { __typename?: "IssueType"; id: string }
        | { __typename?: "Label"; id: string }
        | { __typename?: "OutgoingRelationTypeChangedEvent"; id: string }
        | { __typename?: "PriorityChangedEvent"; id: string }
        | {
              __typename?: "Project";
              name: string;
              description: string;
              id: string;
              openIssues: { __typename?: "IssueConnection"; totalCount: number };
          }
        | { __typename?: "ProjectPermission"; id: string }
        | { __typename?: "RelatedByIssueEvent"; id: string }
        | { __typename?: "Relation"; id: string }
        | { __typename?: "RelationCondition"; id: string }
        | { __typename?: "RelationTemplate"; id: string }
        | { __typename?: "RemovedAffectedEntityEvent"; id: string }
        | { __typename?: "RemovedArtefactEvent"; id: string }
        | { __typename?: "RemovedAssignmentEvent"; id: string }
        | { __typename?: "RemovedFromPinnedIssuesEvent"; id: string }
        | { __typename?: "RemovedFromTrackableEvent"; id: string }
        | { __typename?: "RemovedIncomingRelationEvent"; id: string }
        | { __typename?: "RemovedLabelEvent"; id: string }
        | { __typename?: "RemovedOutgoingRelationEvent"; id: string }
        | { __typename?: "RemovedTemplatedFieldEvent"; id: string }
        | { __typename?: "SpentTimeChangedEvent"; id: string }
        | { __typename?: "StartDateChangedEvent"; id: string }
        | { __typename?: "StateChangedEvent"; id: string }
        | { __typename?: "TemplateChangedEvent"; id: string }
        | { __typename?: "TemplatedFieldChangedEvent"; id: string }
        | { __typename?: "TitleChangedEvent"; id: string }
        | { __typename?: "TypeChangedEvent"; id: string }
        | null;
};

type DefaultTimelineItemInfo_AddedAffectedEntityEvent_Fragment = {
    __typename: "AddedAffectedEntityEvent";
    id: string;
    createdAt: any;
    addedAffectedEntity?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "ComponentVersion"; id: string; name: string; description: string }
        | { __typename: "Interface"; id: string; name: string; description: string }
        | { __typename: "InterfacePart"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecification"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecificationVersion"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_AddedArtefactEvent_Fragment = {
    __typename: "AddedArtefactEvent";
    id: string;
    createdAt: any;
    addedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_AddedLabelEvent_Fragment = {
    __typename: "AddedLabelEvent";
    id: string;
    createdAt: any;
    addedLabel?: { __typename?: "Label"; id: string; name: string; description: string; color: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_AddedToPinnedIssuesEvent_Fragment = {
    __typename: "AddedToPinnedIssuesEvent";
    id: string;
    createdAt: any;
    pinnedOn?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_AddedToTrackableEvent_Fragment = {
    __typename: "AddedToTrackableEvent";
    id: string;
    createdAt: any;
    addedToTrackable?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_Assignment_Fragment = {
    __typename: "Assignment";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    user:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
};

type DefaultTimelineItemInfo_AssignmentTypeChangedEvent_Fragment = {
    __typename: "AssignmentTypeChangedEvent";
    id: string;
    createdAt: any;
    assignment: {
        __typename: "Assignment";
        id: string;
        createdAt: any;
        createdBy:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        user:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    };
    newAssignmentType?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    oldAssignmentType?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_Body_Fragment = {
    __typename: "Body";
    id: string;
    createdAt: any;
    body: string;
    bodyLastEditedAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_DueDateChangedEvent_Fragment = {
    __typename: "DueDateChangedEvent";
    oldDueDate?: any | null;
    newDueDate?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_EstimatedTimeChangedEvent_Fragment = {
    __typename: "EstimatedTimeChangedEvent";
    oldEstimatedTime?: any | null;
    newEstimatedTime?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_IncomingRelationTypeChangedEvent_Fragment = {
    __typename: "IncomingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    issueRelation: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    };
    oldRelationType?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    newRelationTyoe?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_IssueComment_Fragment = {
    __typename: "IssueComment";
    isDeleted: boolean;
    id: string;
    createdAt: any;
    body: string;
    bodyLastEditedAt: any;
    answers?: { __typename?: "Body"; id: string } | { __typename?: "IssueComment"; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_IssueRelation_Fragment = {
    __typename: "IssueRelation";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    relatedIssue?: {
        __typename?: "Issue";
        id: string;
        title: string;
        trackables: {
            __typename?: "TrackableConnection";
            nodes: Array<
                | { __typename: "Component"; id: string; name: string; description: string }
                | { __typename: "Project"; id: string; name: string; description: string }
            >;
        };
        incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        state: { __typename?: "IssueState"; isOpen: boolean };
        type: { __typename?: "IssueType"; iconPath: string };
    } | null;
    type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
};

type DefaultTimelineItemInfo_OutgoingRelationTypeChangedEvent_Fragment = {
    __typename: "OutgoingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    issueRelation: {
        __typename?: "IssueRelation";
        relatedIssue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    };
    oldRelationType?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    newRelationTyoe?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_PriorityChangedEvent_Fragment = {
    __typename: "PriorityChangedEvent";
    id: string;
    createdAt: any;
    oldPriority?: { __typename?: "IssuePriority"; id: string; name: string; description: string; value: number } | null;
    newPriority?: { __typename?: "IssuePriority"; id: string; name: string; description: string; value: number } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RelatedByIssueEvent_Fragment = {
    __typename: "RelatedByIssueEvent";
    id: string;
    createdAt: any;
    relation?: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedAffectedEntityEvent_Fragment = {
    __typename: "RemovedAffectedEntityEvent";
    id: string;
    createdAt: any;
    removedAffectedEntity?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "ComponentVersion"; id: string; name: string; description: string }
        | { __typename: "Interface"; id: string; name: string; description: string }
        | { __typename: "InterfacePart"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecification"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecificationVersion"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedArtefactEvent_Fragment = {
    __typename: "RemovedArtefactEvent";
    id: string;
    createdAt: any;
    removedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedAssignmentEvent_Fragment = {
    __typename: "RemovedAssignmentEvent";
    id: string;
    createdAt: any;
    removedAssignment: {
        __typename: "Assignment";
        id: string;
        createdAt: any;
        createdBy:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        user:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedFromPinnedIssuesEvent_Fragment = {
    __typename: "RemovedFromPinnedIssuesEvent";
    id: string;
    createdAt: any;
    unpinnedOn?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedFromTrackableEvent_Fragment = {
    __typename: "RemovedFromTrackableEvent";
    id: string;
    createdAt: any;
    removedFromTrackable?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedIncomingRelationEvent_Fragment = {
    __typename: "RemovedIncomingRelationEvent";
    id: string;
    createdAt: any;
    removedRelation?: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedLabelEvent_Fragment = {
    __typename: "RemovedLabelEvent";
    id: string;
    createdAt: any;
    removedLabel?: { __typename?: "Label"; id: string; name: string; description: string; color: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedOutgoingRelationEvent_Fragment = {
    __typename: "RemovedOutgoingRelationEvent";
    id: string;
    createdAt: any;
    removedRelation?: {
        __typename?: "IssueRelation";
        relatedIssue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_RemovedTemplatedFieldEvent_Fragment = {
    __typename: "RemovedTemplatedFieldEvent";
    fieldName: string;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_SpentTimeChangedEvent_Fragment = {
    __typename: "SpentTimeChangedEvent";
    oldSpentTime?: any | null;
    newSpentTime?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_StartDateChangedEvent_Fragment = {
    __typename: "StartDateChangedEvent";
    oldStartDate?: any | null;
    newStartDate?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_StateChangedEvent_Fragment = {
    __typename: "StateChangedEvent";
    id: string;
    createdAt: any;
    oldState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
    newState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_TemplateChangedEvent_Fragment = {
    __typename: "TemplateChangedEvent";
    id: string;
    createdAt: any;
    oldTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
    newTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_TemplatedFieldChangedEvent_Fragment = {
    __typename: "TemplatedFieldChangedEvent";
    fieldName: string;
    oldValue?: any | null;
    newValue?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_TitleChangedEvent_Fragment = {
    __typename: "TitleChangedEvent";
    oldTitle: string;
    newTitle: string;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type DefaultTimelineItemInfo_TypeChangedEvent_Fragment = {
    __typename: "TypeChangedEvent";
    id: string;
    createdAt: any;
    newIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
    oldIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type DefaultTimelineItemInfoFragment =
    | DefaultTimelineItemInfo_AddedAffectedEntityEvent_Fragment
    | DefaultTimelineItemInfo_AddedArtefactEvent_Fragment
    | DefaultTimelineItemInfo_AddedLabelEvent_Fragment
    | DefaultTimelineItemInfo_AddedToPinnedIssuesEvent_Fragment
    | DefaultTimelineItemInfo_AddedToTrackableEvent_Fragment
    | DefaultTimelineItemInfo_Assignment_Fragment
    | DefaultTimelineItemInfo_AssignmentTypeChangedEvent_Fragment
    | DefaultTimelineItemInfo_Body_Fragment
    | DefaultTimelineItemInfo_DueDateChangedEvent_Fragment
    | DefaultTimelineItemInfo_EstimatedTimeChangedEvent_Fragment
    | DefaultTimelineItemInfo_IncomingRelationTypeChangedEvent_Fragment
    | DefaultTimelineItemInfo_IssueComment_Fragment
    | DefaultTimelineItemInfo_IssueRelation_Fragment
    | DefaultTimelineItemInfo_OutgoingRelationTypeChangedEvent_Fragment
    | DefaultTimelineItemInfo_PriorityChangedEvent_Fragment
    | DefaultTimelineItemInfo_RelatedByIssueEvent_Fragment
    | DefaultTimelineItemInfo_RemovedAffectedEntityEvent_Fragment
    | DefaultTimelineItemInfo_RemovedArtefactEvent_Fragment
    | DefaultTimelineItemInfo_RemovedAssignmentEvent_Fragment
    | DefaultTimelineItemInfo_RemovedFromPinnedIssuesEvent_Fragment
    | DefaultTimelineItemInfo_RemovedFromTrackableEvent_Fragment
    | DefaultTimelineItemInfo_RemovedIncomingRelationEvent_Fragment
    | DefaultTimelineItemInfo_RemovedLabelEvent_Fragment
    | DefaultTimelineItemInfo_RemovedOutgoingRelationEvent_Fragment
    | DefaultTimelineItemInfo_RemovedTemplatedFieldEvent_Fragment
    | DefaultTimelineItemInfo_SpentTimeChangedEvent_Fragment
    | DefaultTimelineItemInfo_StartDateChangedEvent_Fragment
    | DefaultTimelineItemInfo_StateChangedEvent_Fragment
    | DefaultTimelineItemInfo_TemplateChangedEvent_Fragment
    | DefaultTimelineItemInfo_TemplatedFieldChangedEvent_Fragment
    | DefaultTimelineItemInfo_TitleChangedEvent_Fragment
    | DefaultTimelineItemInfo_TypeChangedEvent_Fragment;

type TimelineItemInfo_AddedAffectedEntityEvent_Fragment = {
    __typename: "AddedAffectedEntityEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_AddedArtefactEvent_Fragment = {
    __typename: "AddedArtefactEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_AddedLabelEvent_Fragment = {
    __typename: "AddedLabelEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_AddedToPinnedIssuesEvent_Fragment = {
    __typename: "AddedToPinnedIssuesEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_AddedToTrackableEvent_Fragment = {
    __typename: "AddedToTrackableEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_Assignment_Fragment = {
    __typename: "Assignment";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_AssignmentTypeChangedEvent_Fragment = {
    __typename: "AssignmentTypeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_Body_Fragment = {
    __typename: "Body";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_DueDateChangedEvent_Fragment = {
    __typename: "DueDateChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_EstimatedTimeChangedEvent_Fragment = {
    __typename: "EstimatedTimeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_IncomingRelationTypeChangedEvent_Fragment = {
    __typename: "IncomingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_IssueComment_Fragment = {
    __typename: "IssueComment";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_IssueRelation_Fragment = {
    __typename: "IssueRelation";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_OutgoingRelationTypeChangedEvent_Fragment = {
    __typename: "OutgoingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_PriorityChangedEvent_Fragment = {
    __typename: "PriorityChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RelatedByIssueEvent_Fragment = {
    __typename: "RelatedByIssueEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedAffectedEntityEvent_Fragment = {
    __typename: "RemovedAffectedEntityEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedArtefactEvent_Fragment = {
    __typename: "RemovedArtefactEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedAssignmentEvent_Fragment = {
    __typename: "RemovedAssignmentEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedFromPinnedIssuesEvent_Fragment = {
    __typename: "RemovedFromPinnedIssuesEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedFromTrackableEvent_Fragment = {
    __typename: "RemovedFromTrackableEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedIncomingRelationEvent_Fragment = {
    __typename: "RemovedIncomingRelationEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedLabelEvent_Fragment = {
    __typename: "RemovedLabelEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedOutgoingRelationEvent_Fragment = {
    __typename: "RemovedOutgoingRelationEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_RemovedTemplatedFieldEvent_Fragment = {
    __typename: "RemovedTemplatedFieldEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_SpentTimeChangedEvent_Fragment = {
    __typename: "SpentTimeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_StartDateChangedEvent_Fragment = {
    __typename: "StartDateChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_StateChangedEvent_Fragment = {
    __typename: "StateChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_TemplateChangedEvent_Fragment = {
    __typename: "TemplateChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_TemplatedFieldChangedEvent_Fragment = {
    __typename: "TemplatedFieldChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_TitleChangedEvent_Fragment = {
    __typename: "TitleChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type TimelineItemInfo_TypeChangedEvent_Fragment = {
    __typename: "TypeChangedEvent";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type TimelineItemInfoFragment =
    | TimelineItemInfo_AddedAffectedEntityEvent_Fragment
    | TimelineItemInfo_AddedArtefactEvent_Fragment
    | TimelineItemInfo_AddedLabelEvent_Fragment
    | TimelineItemInfo_AddedToPinnedIssuesEvent_Fragment
    | TimelineItemInfo_AddedToTrackableEvent_Fragment
    | TimelineItemInfo_Assignment_Fragment
    | TimelineItemInfo_AssignmentTypeChangedEvent_Fragment
    | TimelineItemInfo_Body_Fragment
    | TimelineItemInfo_DueDateChangedEvent_Fragment
    | TimelineItemInfo_EstimatedTimeChangedEvent_Fragment
    | TimelineItemInfo_IncomingRelationTypeChangedEvent_Fragment
    | TimelineItemInfo_IssueComment_Fragment
    | TimelineItemInfo_IssueRelation_Fragment
    | TimelineItemInfo_OutgoingRelationTypeChangedEvent_Fragment
    | TimelineItemInfo_PriorityChangedEvent_Fragment
    | TimelineItemInfo_RelatedByIssueEvent_Fragment
    | TimelineItemInfo_RemovedAffectedEntityEvent_Fragment
    | TimelineItemInfo_RemovedArtefactEvent_Fragment
    | TimelineItemInfo_RemovedAssignmentEvent_Fragment
    | TimelineItemInfo_RemovedFromPinnedIssuesEvent_Fragment
    | TimelineItemInfo_RemovedFromTrackableEvent_Fragment
    | TimelineItemInfo_RemovedIncomingRelationEvent_Fragment
    | TimelineItemInfo_RemovedLabelEvent_Fragment
    | TimelineItemInfo_RemovedOutgoingRelationEvent_Fragment
    | TimelineItemInfo_RemovedTemplatedFieldEvent_Fragment
    | TimelineItemInfo_SpentTimeChangedEvent_Fragment
    | TimelineItemInfo_StartDateChangedEvent_Fragment
    | TimelineItemInfo_StateChangedEvent_Fragment
    | TimelineItemInfo_TemplateChangedEvent_Fragment
    | TimelineItemInfo_TemplatedFieldChangedEvent_Fragment
    | TimelineItemInfo_TitleChangedEvent_Fragment
    | TimelineItemInfo_TypeChangedEvent_Fragment;

export type AddedAffectedEntityEventTimelineInfoFragment = {
    __typename: "AddedAffectedEntityEvent";
    id: string;
    createdAt: any;
    addedAffectedEntity?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "ComponentVersion"; id: string; name: string; description: string }
        | { __typename: "Interface"; id: string; name: string; description: string }
        | { __typename: "InterfacePart"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecification"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecificationVersion"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type AddedArtefactEventTimelineInfoFragment = {
    __typename: "AddedArtefactEvent";
    id: string;
    createdAt: any;
    addedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type AddedLabelEventTimelineInfoFragment = {
    __typename: "AddedLabelEvent";
    id: string;
    createdAt: any;
    addedLabel?: { __typename?: "Label"; id: string; name: string; description: string; color: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type AddedToPinnedIssuesEventTimelineInfoFragment = {
    __typename: "AddedToPinnedIssuesEvent";
    id: string;
    createdAt: any;
    pinnedOn?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type AddedToTrackableEventTimelineInfoFragment = {
    __typename: "AddedToTrackableEvent";
    id: string;
    createdAt: any;
    addedToTrackable?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type AssignmentTimelineInfoFragment = {
    __typename: "Assignment";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    user:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
};

export type AssignmentTypeChangedEventTimelineInfoFragment = {
    __typename: "AssignmentTypeChangedEvent";
    id: string;
    createdAt: any;
    assignment: {
        __typename: "Assignment";
        id: string;
        createdAt: any;
        createdBy:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        user:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    };
    newAssignmentType?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    oldAssignmentType?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type BodyTimelineInfoFragment = {
    __typename: "Body";
    id: string;
    createdAt: any;
    body: string;
    bodyLastEditedAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type DueDateChangedEventTimelineInfoFragment = {
    __typename: "DueDateChangedEvent";
    oldDueDate?: any | null;
    newDueDate?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type EstimatedTimeChangedEventTimelineInfoFragment = {
    __typename: "EstimatedTimeChangedEvent";
    oldEstimatedTime?: any | null;
    newEstimatedTime?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type IncomingRelationTypeChangedEventTimelineInfoFragment = {
    __typename: "IncomingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    issueRelation: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type IssueCommentTimelineInfoFragment = {
    __typename: "IssueComment";
    isDeleted: boolean;
    id: string;
    createdAt: any;
    body: string;
    bodyLastEditedAt: any;
    answers?: { __typename?: "Body"; id: string } | { __typename?: "IssueComment"; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type IssueRelationTimelineInfoFragment = {
    __typename: "IssueRelation";
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
    relatedIssue?: {
        __typename?: "Issue";
        id: string;
        title: string;
        trackables: {
            __typename?: "TrackableConnection";
            nodes: Array<
                | { __typename: "Component"; id: string; name: string; description: string }
                | { __typename: "Project"; id: string; name: string; description: string }
            >;
        };
        incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        state: { __typename?: "IssueState"; isOpen: boolean };
        type: { __typename?: "IssueType"; iconPath: string };
    } | null;
    type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
};

export type OutgoingRelationTypeChangedEventTimelineInfoFragment = {
    __typename: "OutgoingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    issueRelation: {
        __typename?: "IssueRelation";
        relatedIssue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type PriorityChangedEventTimelineInfoFragment = {
    __typename: "PriorityChangedEvent";
    id: string;
    createdAt: any;
    oldPriority?: { __typename?: "IssuePriority"; id: string; name: string; description: string; value: number } | null;
    newPriority?: { __typename?: "IssuePriority"; id: string; name: string; description: string; value: number } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RelatedByIssueEventTimelineInfoFragment = {
    __typename: "RelatedByIssueEvent";
    id: string;
    createdAt: any;
    relation?: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type RelationTypeChangedEventTimelineInfo_IncomingRelationTypeChangedEvent_Fragment = {
    __typename: "IncomingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    oldRelationType?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    newRelationTyoe?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type RelationTypeChangedEventTimelineInfo_OutgoingRelationTypeChangedEvent_Fragment = {
    __typename: "OutgoingRelationTypeChangedEvent";
    id: string;
    createdAt: any;
    oldRelationType?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    newRelationTyoe?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RelationTypeChangedEventTimelineInfoFragment =
    | RelationTypeChangedEventTimelineInfo_IncomingRelationTypeChangedEvent_Fragment
    | RelationTypeChangedEventTimelineInfo_OutgoingRelationTypeChangedEvent_Fragment;

export type RemovedAffectedEntityEventTimelineInfoFragment = {
    __typename: "RemovedAffectedEntityEvent";
    id: string;
    createdAt: any;
    removedAffectedEntity?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "ComponentVersion"; id: string; name: string; description: string }
        | { __typename: "Interface"; id: string; name: string; description: string }
        | { __typename: "InterfacePart"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecification"; id: string; name: string; description: string }
        | { __typename: "InterfaceSpecificationVersion"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedArtefactEventTimelineInfoFragment = {
    __typename: "RemovedArtefactEvent";
    id: string;
    createdAt: any;
    removedArtefact?: { __typename?: "Artefact"; file: any; id: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedAssignmentEventTimelineInfoFragment = {
    __typename: "RemovedAssignmentEvent";
    id: string;
    createdAt: any;
    removedAssignment: {
        __typename: "Assignment";
        id: string;
        createdAt: any;
        createdBy:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        user:
            | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
            | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
        type?: { __typename?: "AssignmentType"; id: string; name: string; description: string } | null;
    };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedFromPinnedIssuesEventTimelineInfoFragment = {
    __typename: "RemovedFromPinnedIssuesEvent";
    id: string;
    createdAt: any;
    unpinnedOn?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedFromTrackableEventTimelineInfoFragment = {
    __typename: "RemovedFromTrackableEvent";
    id: string;
    createdAt: any;
    removedFromTrackable?:
        | { __typename: "Component"; id: string; name: string; description: string }
        | { __typename: "Project"; id: string; name: string; description: string }
        | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedIncomingRelationEventTimelineInfoFragment = {
    __typename: "RemovedIncomingRelationEvent";
    id: string;
    createdAt: any;
    removedRelation?: {
        __typename?: "IssueRelation";
        issue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedLabelEventTimelineInfoFragment = {
    __typename: "RemovedLabelEvent";
    id: string;
    createdAt: any;
    removedLabel?: { __typename?: "Label"; id: string; name: string; description: string; color: string } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedOutgoingRelationEventTimelineInfoFragment = {
    __typename: "RemovedOutgoingRelationEvent";
    id: string;
    createdAt: any;
    removedRelation?: {
        __typename?: "IssueRelation";
        relatedIssue?: {
            __typename?: "Issue";
            id: string;
            title: string;
            trackables: {
                __typename?: "TrackableConnection";
                nodes: Array<
                    | { __typename: "Component"; id: string; name: string; description: string }
                    | { __typename: "Project"; id: string; name: string; description: string }
                >;
            };
            incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
            state: { __typename?: "IssueState"; isOpen: boolean };
            type: { __typename?: "IssueType"; iconPath: string };
        } | null;
        type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
    } | null;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type RemovedTemplatedFieldEventTimelineInfoFragment = {
    __typename: "RemovedTemplatedFieldEvent";
    fieldName: string;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type SpentTimeChangedEventTimelineInfoFragment = {
    __typename: "SpentTimeChangedEvent";
    oldSpentTime?: any | null;
    newSpentTime?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type StartDateChangedEventTimelineInfoFragment = {
    __typename: "StartDateChangedEvent";
    oldStartDate?: any | null;
    newStartDate?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type StateChangedEventTimelineInfoFragment = {
    __typename: "StateChangedEvent";
    id: string;
    createdAt: any;
    oldState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
    newState: { __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type TemplateChangedEventTimelineInfoFragment = {
    __typename: "TemplateChangedEvent";
    id: string;
    createdAt: any;
    oldTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
    newTemplate: { __typename?: "IssueTemplate"; name: string; description: string };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type TemplatedFieldChangedEventTimelineInfoFragment = {
    __typename: "TemplatedFieldChangedEvent";
    fieldName: string;
    oldValue?: any | null;
    newValue?: any | null;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type TitleChangedEventTimelineInfoFragment = {
    __typename: "TitleChangedEvent";
    oldTitle: string;
    newTitle: string;
    id: string;
    createdAt: any;
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type TypeChangedEventTimelineInfoFragment = {
    __typename: "TypeChangedEvent";
    id: string;
    createdAt: any;
    newIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
    oldIssueType: { __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string };
    createdBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type IssueTypeTimelineInfoFragment = {
    __typename?: "IssueType";
    id: string;
    name: string;
    description: string;
    iconPath: string;
};

type AffectedByIssueTimelineInfo_Component_Fragment = {
    __typename: "Component";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_ComponentVersion_Fragment = {
    __typename: "ComponentVersion";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_Interface_Fragment = {
    __typename: "Interface";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_InterfacePart_Fragment = {
    __typename: "InterfacePart";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_InterfaceSpecification_Fragment = {
    __typename: "InterfaceSpecification";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_InterfaceSpecificationVersion_Fragment = {
    __typename: "InterfaceSpecificationVersion";
    id: string;
    name: string;
    description: string;
};

type AffectedByIssueTimelineInfo_Project_Fragment = {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
};

export type AffectedByIssueTimelineInfoFragment =
    | AffectedByIssueTimelineInfo_Component_Fragment
    | AffectedByIssueTimelineInfo_ComponentVersion_Fragment
    | AffectedByIssueTimelineInfo_Interface_Fragment
    | AffectedByIssueTimelineInfo_InterfacePart_Fragment
    | AffectedByIssueTimelineInfo_InterfaceSpecification_Fragment
    | AffectedByIssueTimelineInfo_InterfaceSpecificationVersion_Fragment
    | AffectedByIssueTimelineInfo_Project_Fragment;

export type ArtefactTimelineInfoFragment = { __typename?: "Artefact"; file: any; id: string };

type UserTimelineInfo_GropiusUser_Fragment = {
    __typename?: "GropiusUser";
    id: string;
    username: string;
    displayName: string;
    avatar: any;
};

type UserTimelineInfo_ImsUser_Fragment = {
    __typename?: "IMSUser";
    id: string;
    username?: string | null;
    displayName: string;
    avatar: any;
};

export type UserTimelineInfoFragment = UserTimelineInfo_GropiusUser_Fragment | UserTimelineInfo_ImsUser_Fragment;

export type LabelTimelineInfoFragment = {
    __typename?: "Label";
    id: string;
    name: string;
    description: string;
    color: string;
};

type TrackableTimelineInfo_Component_Fragment = {
    __typename: "Component";
    id: string;
    name: string;
    description: string;
};

type TrackableTimelineInfo_Project_Fragment = { __typename: "Project"; id: string; name: string; description: string };

export type TrackableTimelineInfoFragment =
    | TrackableTimelineInfo_Component_Fragment
    | TrackableTimelineInfo_Project_Fragment;

export type AssignmenTypeTimelineInfoFragment = {
    __typename?: "AssignmentType";
    id: string;
    name: string;
    description: string;
};

type CommentTimelineInfo_Body_Fragment = {
    __typename?: "Body";
    body: string;
    bodyLastEditedAt: any;
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

type CommentTimelineInfo_IssueComment_Fragment = {
    __typename?: "IssueComment";
    body: string;
    bodyLastEditedAt: any;
    bodyLastEditedBy:
        | { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any }
        | { __typename?: "IMSUser"; id: string; username?: string | null; displayName: string; avatar: any };
};

export type CommentTimelineInfoFragment = CommentTimelineInfo_Body_Fragment | CommentTimelineInfo_IssueComment_Fragment;

export type IssueRelationTypeTimelineInfoFragment = {
    __typename?: "IssueRelationType";
    id: string;
    name: string;
    description: string;
};

export type IssueRelationTimelineInfoBaseFragment = {
    __typename?: "IssueRelation";
    type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
};

export type IncomingRelationTimelineInfoFragment = {
    __typename?: "IssueRelation";
    issue?: {
        __typename?: "Issue";
        id: string;
        title: string;
        trackables: {
            __typename?: "TrackableConnection";
            nodes: Array<
                | { __typename: "Component"; id: string; name: string; description: string }
                | { __typename: "Project"; id: string; name: string; description: string }
            >;
        };
        incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        state: { __typename?: "IssueState"; isOpen: boolean };
        type: { __typename?: "IssueType"; iconPath: string };
    } | null;
    type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
};

export type OutgoingRelationTimelineInfoFragment = {
    __typename?: "IssueRelation";
    relatedIssue?: {
        __typename?: "Issue";
        id: string;
        title: string;
        trackables: {
            __typename?: "TrackableConnection";
            nodes: Array<
                | { __typename: "Component"; id: string; name: string; description: string }
                | { __typename: "Project"; id: string; name: string; description: string }
            >;
        };
        incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
        state: { __typename?: "IssueState"; isOpen: boolean };
        type: { __typename?: "IssueType"; iconPath: string };
    } | null;
    type?: { __typename?: "IssueRelationType"; id: string; name: string; description: string } | null;
};

export type IssueTimelineInfoFragment = {
    __typename?: "Issue";
    id: string;
    title: string;
    trackables: {
        __typename?: "TrackableConnection";
        nodes: Array<
            | { __typename: "Component"; id: string; name: string; description: string }
            | { __typename: "Project"; id: string; name: string; description: string }
        >;
    };
    incomingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    outgoingRelations: { __typename?: "IssueRelationConnection"; totalCount: number };
    state: { __typename?: "IssueState"; isOpen: boolean };
    type: { __typename?: "IssueType"; iconPath: string };
};

export type IssuePriorityTimelineInfoFragment = {
    __typename?: "IssuePriority";
    id: string;
    name: string;
    description: string;
    value: number;
};

export type IssueStateTimelineInfoFragment = {
    __typename?: "IssueState";
    id: string;
    name: string;
    description: string;
    isOpen: boolean;
};

export type IssueTemplateTimelineInfoFragment = { __typename?: "IssueTemplate"; name: string; description: string };

type OpenIssueCount_Component_Fragment = {
    __typename?: "Component";
    openIssues: { __typename?: "IssueConnection"; totalCount: number };
};

type OpenIssueCount_Project_Fragment = {
    __typename?: "Project";
    openIssues: { __typename?: "IssueConnection"; totalCount: number };
};

export type OpenIssueCountFragment = OpenIssueCount_Component_Fragment | OpenIssueCount_Project_Fragment;

type DefaultTrackableInfo_Component_Fragment = {
    __typename: "Component";
    id: string;
    name: string;
    description: string;
};

type DefaultTrackableInfo_Project_Fragment = { __typename: "Project"; id: string; name: string; description: string };

export type DefaultTrackableInfoFragment =
    | DefaultTrackableInfo_Component_Fragment
    | DefaultTrackableInfo_Project_Fragment;

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
    __typename?: "Query";
    currentUser?: { __typename?: "GropiusUser"; id: string; username: string; displayName: string; avatar: any } | null;
};

type DefaultUserInfo_GropiusUser_Fragment = {
    __typename?: "GropiusUser";
    id: string;
    username: string;
    displayName: string;
    avatar: any;
};

type DefaultUserInfo_ImsUser_Fragment = {
    __typename?: "IMSUser";
    id: string;
    username?: string | null;
    displayName: string;
    avatar: any;
};

export type DefaultUserInfoFragment = DefaultUserInfo_GropiusUser_Fragment | DefaultUserInfo_ImsUser_Fragment;

export const DefaultIssueTemplateInfoFragmentDoc = gql`
    fragment DefaultIssueTemplateInfo on IssueTemplate {
        id
        name
        description
    }
`;
export const DefaultUserInfoFragmentDoc = gql`
    fragment DefaultUserInfo on User {
        id
        username
        displayName
        avatar
    }
`;
export const UserTimelineInfoFragmentDoc = gql`
    fragment UserTimelineInfo on User {
        ...DefaultUserInfo
    }
    ${DefaultUserInfoFragmentDoc}
`;
export const TimelineItemInfoFragmentDoc = gql`
    fragment TimelineItemInfo on TimelineItem {
        id
        createdAt
        __typename
        createdBy {
            ...UserTimelineInfo
        }
    }
    ${UserTimelineInfoFragmentDoc}
`;
export const AffectedByIssueTimelineInfoFragmentDoc = gql`
    fragment AffectedByIssueTimelineInfo on AffectedByIssue {
        id
        name
        description
        __typename
    }
`;
export const AddedAffectedEntityEventTimelineInfoFragmentDoc = gql`
    fragment AddedAffectedEntityEventTimelineInfo on AddedAffectedEntityEvent {
        ...TimelineItemInfo
        addedAffectedEntity {
            ...AffectedByIssueTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${AffectedByIssueTimelineInfoFragmentDoc}
`;
export const ArtefactTimelineInfoFragmentDoc = gql`
    fragment ArtefactTimelineInfo on Artefact {
        file
        id
    }
`;
export const AddedArtefactEventTimelineInfoFragmentDoc = gql`
    fragment AddedArtefactEventTimelineInfo on AddedArtefactEvent {
        ...TimelineItemInfo
        addedArtefact {
            ...ArtefactTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${ArtefactTimelineInfoFragmentDoc}
`;
export const DefaultLabelInfoFragmentDoc = gql`
    fragment DefaultLabelInfo on Label {
        id
        name
        description
        color
    }
`;
export const LabelTimelineInfoFragmentDoc = gql`
    fragment LabelTimelineInfo on Label {
        ...DefaultLabelInfo
    }
    ${DefaultLabelInfoFragmentDoc}
`;
export const AddedLabelEventTimelineInfoFragmentDoc = gql`
    fragment AddedLabelEventTimelineInfo on AddedLabelEvent {
        ...TimelineItemInfo
        addedLabel {
            ...LabelTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${LabelTimelineInfoFragmentDoc}
`;
export const DefaultTrackableInfoFragmentDoc = gql`
    fragment DefaultTrackableInfo on Trackable {
        __typename
        id
        name
        description
    }
`;
export const TrackableTimelineInfoFragmentDoc = gql`
    fragment TrackableTimelineInfo on Trackable {
        ...DefaultTrackableInfo
    }
    ${DefaultTrackableInfoFragmentDoc}
`;
export const AddedToPinnedIssuesEventTimelineInfoFragmentDoc = gql`
    fragment AddedToPinnedIssuesEventTimelineInfo on AddedToPinnedIssuesEvent {
        ...TimelineItemInfo
        pinnedOn {
            ...TrackableTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${TrackableTimelineInfoFragmentDoc}
`;
export const AddedToTrackableEventTimelineInfoFragmentDoc = gql`
    fragment AddedToTrackableEventTimelineInfo on AddedToTrackableEvent {
        ...TimelineItemInfo
        addedToTrackable {
            ...TrackableTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${TrackableTimelineInfoFragmentDoc}
`;
export const DefaultAssignmentTypeInfoFragmentDoc = gql`
    fragment DefaultAssignmentTypeInfo on AssignmentType {
        id
        name
        description
    }
`;
export const DefaultAssignmentInfoFragmentDoc = gql`
    fragment DefaultAssignmentInfo on Assignment {
        id
        user {
            ...UserTimelineInfo
        }
        type {
            ...DefaultAssignmentTypeInfo
        }
    }
    ${UserTimelineInfoFragmentDoc}
    ${DefaultAssignmentTypeInfoFragmentDoc}
`;
export const AssignmentTimelineInfoFragmentDoc = gql`
    fragment AssignmentTimelineInfo on Assignment {
        ...TimelineItemInfo
        ...DefaultAssignmentInfo
    }
    ${TimelineItemInfoFragmentDoc}
    ${DefaultAssignmentInfoFragmentDoc}
`;
export const AssignmenTypeTimelineInfoFragmentDoc = gql`
    fragment AssignmenTypeTimelineInfo on AssignmentType {
        ...DefaultAssignmentTypeInfo
    }
    ${DefaultAssignmentTypeInfoFragmentDoc}
`;
export const AssignmentTypeChangedEventTimelineInfoFragmentDoc = gql`
    fragment AssignmentTypeChangedEventTimelineInfo on AssignmentTypeChangedEvent {
        ...TimelineItemInfo
        assignment {
            ...AssignmentTimelineInfo
        }
        newAssignmentType: newType {
            ...AssignmenTypeTimelineInfo
        }
        oldAssignmentType: oldType {
            ...AssignmenTypeTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${AssignmentTimelineInfoFragmentDoc}
    ${AssignmenTypeTimelineInfoFragmentDoc}
`;
export const CommentTimelineInfoFragmentDoc = gql`
    fragment CommentTimelineInfo on Comment {
        body
        bodyLastEditedAt
        bodyLastEditedBy {
            ...UserTimelineInfo
        }
    }
    ${UserTimelineInfoFragmentDoc}
`;
export const BodyTimelineInfoFragmentDoc = gql`
    fragment BodyTimelineInfo on Body {
        ...TimelineItemInfo
        ...CommentTimelineInfo
    }
    ${TimelineItemInfoFragmentDoc}
    ${CommentTimelineInfoFragmentDoc}
`;
export const DueDateChangedEventTimelineInfoFragmentDoc = gql`
    fragment DueDateChangedEventTimelineInfo on DueDateChangedEvent {
        ...TimelineItemInfo
        oldDueDate
        newDueDate
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const EstimatedTimeChangedEventTimelineInfoFragmentDoc = gql`
    fragment EstimatedTimeChangedEventTimelineInfo on EstimatedTimeChangedEvent {
        ...TimelineItemInfo
        oldEstimatedTime
        newEstimatedTime
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const IssueRelationTypeTimelineInfoFragmentDoc = gql`
    fragment IssueRelationTypeTimelineInfo on IssueRelationType {
        id
        name
        description
    }
`;
export const IssueRelationTimelineInfoBaseFragmentDoc = gql`
    fragment IssueRelationTimelineInfoBase on IssueRelation {
        type {
            ...IssueRelationTypeTimelineInfo
        }
    }
    ${IssueRelationTypeTimelineInfoFragmentDoc}
`;
export const DefaultIssueIconInfoFragmentDoc = gql`
    fragment DefaultIssueIconInfo on Issue {
        incomingRelations {
            totalCount
        }
        outgoingRelations {
            totalCount
        }
        state {
            isOpen
        }
        type {
            iconPath
        }
    }
`;
export const DefaultIssueInfoFragmentDoc = gql`
    fragment DefaultIssueInfo on Issue {
        ...DefaultIssueIconInfo
        id
        title
        trackables {
            nodes {
                ...DefaultTrackableInfo
            }
        }
    }
    ${DefaultIssueIconInfoFragmentDoc}
    ${DefaultTrackableInfoFragmentDoc}
`;
export const IssueTimelineInfoFragmentDoc = gql`
    fragment IssueTimelineInfo on Issue {
        ...DefaultIssueInfo
    }
    ${DefaultIssueInfoFragmentDoc}
`;
export const IncomingRelationTimelineInfoFragmentDoc = gql`
    fragment IncomingRelationTimelineInfo on IssueRelation {
        ...IssueRelationTimelineInfoBase
        issue {
            ...IssueTimelineInfo
        }
    }
    ${IssueRelationTimelineInfoBaseFragmentDoc}
    ${IssueTimelineInfoFragmentDoc}
`;
export const IncomingRelationTypeChangedEventTimelineInfoFragmentDoc = gql`
    fragment IncomingRelationTypeChangedEventTimelineInfo on IncomingRelationTypeChangedEvent {
        ...TimelineItemInfo
        issueRelation {
            ...IncomingRelationTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IncomingRelationTimelineInfoFragmentDoc}
`;
export const IssueCommentTimelineInfoFragmentDoc = gql`
    fragment IssueCommentTimelineInfo on IssueComment {
        ...TimelineItemInfo
        ...CommentTimelineInfo
        isDeleted
        answers {
            id
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${CommentTimelineInfoFragmentDoc}
`;
export const OutgoingRelationTimelineInfoFragmentDoc = gql`
    fragment OutgoingRelationTimelineInfo on IssueRelation {
        ...IssueRelationTimelineInfoBase
        relatedIssue {
            ...IssueTimelineInfo
        }
    }
    ${IssueRelationTimelineInfoBaseFragmentDoc}
    ${IssueTimelineInfoFragmentDoc}
`;
export const IssueRelationTimelineInfoFragmentDoc = gql`
    fragment IssueRelationTimelineInfo on IssueRelation {
        ...TimelineItemInfo
        ...OutgoingRelationTimelineInfo
    }
    ${TimelineItemInfoFragmentDoc}
    ${OutgoingRelationTimelineInfoFragmentDoc}
`;
export const OutgoingRelationTypeChangedEventTimelineInfoFragmentDoc = gql`
    fragment OutgoingRelationTypeChangedEventTimelineInfo on OutgoingRelationTypeChangedEvent {
        ...TimelineItemInfo
        issueRelation {
            ...OutgoingRelationTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${OutgoingRelationTimelineInfoFragmentDoc}
`;
export const DefaultIssuePriorityInfoFragmentDoc = gql`
    fragment DefaultIssuePriorityInfo on IssuePriority {
        id
        name
        description
        value
    }
`;
export const IssuePriorityTimelineInfoFragmentDoc = gql`
    fragment IssuePriorityTimelineInfo on IssuePriority {
        ...DefaultIssuePriorityInfo
    }
    ${DefaultIssuePriorityInfoFragmentDoc}
`;
export const PriorityChangedEventTimelineInfoFragmentDoc = gql`
    fragment PriorityChangedEventTimelineInfo on PriorityChangedEvent {
        ...TimelineItemInfo
        oldPriority {
            ...IssuePriorityTimelineInfo
        }
        newPriority {
            ...IssuePriorityTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IssuePriorityTimelineInfoFragmentDoc}
`;
export const RelatedByIssueEventTimelineInfoFragmentDoc = gql`
    fragment RelatedByIssueEventTimelineInfo on RelatedByIssueEvent {
        ...TimelineItemInfo
        relation {
            ...IncomingRelationTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IncomingRelationTimelineInfoFragmentDoc}
`;
export const RelationTypeChangedEventTimelineInfoFragmentDoc = gql`
    fragment RelationTypeChangedEventTimelineInfo on RelationTypeChangedEvent {
        ...TimelineItemInfo
        oldRelationType: oldType {
            ...IssueRelationTypeTimelineInfo
        }
        newRelationTyoe: newType {
            ...IssueRelationTypeTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IssueRelationTypeTimelineInfoFragmentDoc}
`;
export const RemovedAffectedEntityEventTimelineInfoFragmentDoc = gql`
    fragment RemovedAffectedEntityEventTimelineInfo on RemovedAffectedEntityEvent {
        ...TimelineItemInfo
        removedAffectedEntity {
            ...AffectedByIssueTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${AffectedByIssueTimelineInfoFragmentDoc}
`;
export const RemovedArtefactEventTimelineInfoFragmentDoc = gql`
    fragment RemovedArtefactEventTimelineInfo on RemovedArtefactEvent {
        ...TimelineItemInfo
        removedArtefact {
            ...ArtefactTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${ArtefactTimelineInfoFragmentDoc}
`;
export const RemovedAssignmentEventTimelineInfoFragmentDoc = gql`
    fragment RemovedAssignmentEventTimelineInfo on RemovedAssignmentEvent {
        ...TimelineItemInfo
        removedAssignment {
            ...AssignmentTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${AssignmentTimelineInfoFragmentDoc}
`;
export const RemovedFromPinnedIssuesEventTimelineInfoFragmentDoc = gql`
    fragment RemovedFromPinnedIssuesEventTimelineInfo on RemovedFromPinnedIssuesEvent {
        ...TimelineItemInfo
        unpinnedOn {
            ...TrackableTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${TrackableTimelineInfoFragmentDoc}
`;
export const RemovedFromTrackableEventTimelineInfoFragmentDoc = gql`
    fragment RemovedFromTrackableEventTimelineInfo on RemovedFromTrackableEvent {
        ...TimelineItemInfo
        removedFromTrackable {
            ...TrackableTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${TrackableTimelineInfoFragmentDoc}
`;
export const RemovedIncomingRelationEventTimelineInfoFragmentDoc = gql`
    fragment RemovedIncomingRelationEventTimelineInfo on RemovedIncomingRelationEvent {
        ...TimelineItemInfo
        removedRelation {
            ...IncomingRelationTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IncomingRelationTimelineInfoFragmentDoc}
`;
export const RemovedLabelEventTimelineInfoFragmentDoc = gql`
    fragment RemovedLabelEventTimelineInfo on RemovedLabelEvent {
        ...TimelineItemInfo
        removedLabel {
            ...LabelTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${LabelTimelineInfoFragmentDoc}
`;
export const RemovedOutgoingRelationEventTimelineInfoFragmentDoc = gql`
    fragment RemovedOutgoingRelationEventTimelineInfo on RemovedOutgoingRelationEvent {
        ...TimelineItemInfo
        removedRelation {
            ...OutgoingRelationTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${OutgoingRelationTimelineInfoFragmentDoc}
`;
export const RemovedTemplatedFieldEventTimelineInfoFragmentDoc = gql`
    fragment RemovedTemplatedFieldEventTimelineInfo on RemovedTemplatedFieldEvent {
        ...TimelineItemInfo
        fieldName
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const SpentTimeChangedEventTimelineInfoFragmentDoc = gql`
    fragment SpentTimeChangedEventTimelineInfo on SpentTimeChangedEvent {
        ...TimelineItemInfo
        oldSpentTime
        newSpentTime
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const StartDateChangedEventTimelineInfoFragmentDoc = gql`
    fragment StartDateChangedEventTimelineInfo on StartDateChangedEvent {
        ...TimelineItemInfo
        oldStartDate
        newStartDate
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const DefaultIssueStateInfoFragmentDoc = gql`
    fragment DefaultIssueStateInfo on IssueState {
        id
        name
        description
        isOpen
    }
`;
export const IssueStateTimelineInfoFragmentDoc = gql`
    fragment IssueStateTimelineInfo on IssueState {
        ...DefaultIssueStateInfo
    }
    ${DefaultIssueStateInfoFragmentDoc}
`;
export const StateChangedEventTimelineInfoFragmentDoc = gql`
    fragment StateChangedEventTimelineInfo on StateChangedEvent {
        ...TimelineItemInfo
        oldState {
            ...IssueStateTimelineInfo
        }
        newState {
            ...IssueStateTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IssueStateTimelineInfoFragmentDoc}
`;
export const IssueTemplateTimelineInfoFragmentDoc = gql`
    fragment IssueTemplateTimelineInfo on IssueTemplate {
        name
        description
    }
`;
export const TemplateChangedEventTimelineInfoFragmentDoc = gql`
    fragment TemplateChangedEventTimelineInfo on TemplateChangedEvent {
        ...TimelineItemInfo
        oldTemplate {
            ...IssueTemplateTimelineInfo
        }
        newTemplate {
            ...IssueTemplateTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IssueTemplateTimelineInfoFragmentDoc}
`;
export const TemplatedFieldChangedEventTimelineInfoFragmentDoc = gql`
    fragment TemplatedFieldChangedEventTimelineInfo on TemplatedFieldChangedEvent {
        ...TimelineItemInfo
        fieldName
        oldValue
        newValue
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const TitleChangedEventTimelineInfoFragmentDoc = gql`
    fragment TitleChangedEventTimelineInfo on TitleChangedEvent {
        ...TimelineItemInfo
        oldTitle
        newTitle
    }
    ${TimelineItemInfoFragmentDoc}
`;
export const DefaultIssueTypeInfoFragmentDoc = gql`
    fragment DefaultIssueTypeInfo on IssueType {
        id
        name
        description
        iconPath
    }
`;
export const IssueTypeTimelineInfoFragmentDoc = gql`
    fragment IssueTypeTimelineInfo on IssueType {
        ...DefaultIssueTypeInfo
    }
    ${DefaultIssueTypeInfoFragmentDoc}
`;
export const TypeChangedEventTimelineInfoFragmentDoc = gql`
    fragment TypeChangedEventTimelineInfo on TypeChangedEvent {
        ...TimelineItemInfo
        newIssueType: newType {
            ...IssueTypeTimelineInfo
        }
        oldIssueType: oldType {
            ...IssueTypeTimelineInfo
        }
    }
    ${TimelineItemInfoFragmentDoc}
    ${IssueTypeTimelineInfoFragmentDoc}
`;
export const DefaultTimelineItemInfoFragmentDoc = gql`
    fragment DefaultTimelineItemInfo on TimelineItem {
        ... on AddedAffectedEntityEvent {
            ...AddedAffectedEntityEventTimelineInfo
        }
        ... on AddedArtefactEvent {
            ...AddedArtefactEventTimelineInfo
        }
        ... on AddedLabelEvent {
            ...AddedLabelEventTimelineInfo
        }
        ... on AddedToPinnedIssuesEvent {
            ...AddedToPinnedIssuesEventTimelineInfo
        }
        ... on AddedToTrackableEvent {
            ...AddedToTrackableEventTimelineInfo
        }
        ... on Assignment {
            ...AssignmentTimelineInfo
        }
        ... on AssignmentTypeChangedEvent {
            ...AssignmentTypeChangedEventTimelineInfo
        }
        ... on Body {
            ...BodyTimelineInfo
        }
        ... on DueDateChangedEvent {
            ...DueDateChangedEventTimelineInfo
        }
        ... on EstimatedTimeChangedEvent {
            ...EstimatedTimeChangedEventTimelineInfo
        }
        ... on IncomingRelationTypeChangedEvent {
            ...IncomingRelationTypeChangedEventTimelineInfo
        }
        ... on IssueComment {
            ...IssueCommentTimelineInfo
        }
        ... on IssueRelation {
            ...IssueRelationTimelineInfo
        }
        ... on OutgoingRelationTypeChangedEvent {
            ...OutgoingRelationTypeChangedEventTimelineInfo
        }
        ... on PriorityChangedEvent {
            ...PriorityChangedEventTimelineInfo
        }
        ... on RelatedByIssueEvent {
            ...RelatedByIssueEventTimelineInfo
        }
        ... on RelationTypeChangedEvent {
            ...RelationTypeChangedEventTimelineInfo
        }
        ... on RemovedAffectedEntityEvent {
            ...RemovedAffectedEntityEventTimelineInfo
        }
        ... on RemovedArtefactEvent {
            ...RemovedArtefactEventTimelineInfo
        }
        ... on RemovedAssignmentEvent {
            ...RemovedAssignmentEventTimelineInfo
        }
        ... on RemovedFromPinnedIssuesEvent {
            ...RemovedFromPinnedIssuesEventTimelineInfo
        }
        ... on RemovedFromTrackableEvent {
            ...RemovedFromTrackableEventTimelineInfo
        }
        ... on RemovedIncomingRelationEvent {
            ...RemovedIncomingRelationEventTimelineInfo
        }
        ... on RemovedLabelEvent {
            ...RemovedLabelEventTimelineInfo
        }
        ... on RemovedOutgoingRelationEvent {
            ...RemovedOutgoingRelationEventTimelineInfo
        }
        ... on RemovedTemplatedFieldEvent {
            ...RemovedTemplatedFieldEventTimelineInfo
        }
        ... on SpentTimeChangedEvent {
            ...SpentTimeChangedEventTimelineInfo
        }
        ... on StartDateChangedEvent {
            ...StartDateChangedEventTimelineInfo
        }
        ... on StateChangedEvent {
            ...StateChangedEventTimelineInfo
        }
        ... on TemplateChangedEvent {
            ...TemplateChangedEventTimelineInfo
        }
        ... on TemplatedFieldChangedEvent {
            ...TemplatedFieldChangedEventTimelineInfo
        }
        ... on TitleChangedEvent {
            ...TitleChangedEventTimelineInfo
        }
        ... on TypeChangedEvent {
            ...TypeChangedEventTimelineInfo
        }
    }
    ${AddedAffectedEntityEventTimelineInfoFragmentDoc}
    ${AddedArtefactEventTimelineInfoFragmentDoc}
    ${AddedLabelEventTimelineInfoFragmentDoc}
    ${AddedToPinnedIssuesEventTimelineInfoFragmentDoc}
    ${AddedToTrackableEventTimelineInfoFragmentDoc}
    ${AssignmentTimelineInfoFragmentDoc}
    ${AssignmentTypeChangedEventTimelineInfoFragmentDoc}
    ${BodyTimelineInfoFragmentDoc}
    ${DueDateChangedEventTimelineInfoFragmentDoc}
    ${EstimatedTimeChangedEventTimelineInfoFragmentDoc}
    ${IncomingRelationTypeChangedEventTimelineInfoFragmentDoc}
    ${IssueCommentTimelineInfoFragmentDoc}
    ${IssueRelationTimelineInfoFragmentDoc}
    ${OutgoingRelationTypeChangedEventTimelineInfoFragmentDoc}
    ${PriorityChangedEventTimelineInfoFragmentDoc}
    ${RelatedByIssueEventTimelineInfoFragmentDoc}
    ${RelationTypeChangedEventTimelineInfoFragmentDoc}
    ${RemovedAffectedEntityEventTimelineInfoFragmentDoc}
    ${RemovedArtefactEventTimelineInfoFragmentDoc}
    ${RemovedAssignmentEventTimelineInfoFragmentDoc}
    ${RemovedFromPinnedIssuesEventTimelineInfoFragmentDoc}
    ${RemovedFromTrackableEventTimelineInfoFragmentDoc}
    ${RemovedIncomingRelationEventTimelineInfoFragmentDoc}
    ${RemovedLabelEventTimelineInfoFragmentDoc}
    ${RemovedOutgoingRelationEventTimelineInfoFragmentDoc}
    ${RemovedTemplatedFieldEventTimelineInfoFragmentDoc}
    ${SpentTimeChangedEventTimelineInfoFragmentDoc}
    ${StartDateChangedEventTimelineInfoFragmentDoc}
    ${StateChangedEventTimelineInfoFragmentDoc}
    ${TemplateChangedEventTimelineInfoFragmentDoc}
    ${TemplatedFieldChangedEventTimelineInfoFragmentDoc}
    ${TitleChangedEventTimelineInfoFragmentDoc}
    ${TypeChangedEventTimelineInfoFragmentDoc}
`;
export const OpenIssueCountFragmentDoc = gql`
    fragment OpenIssueCount on Trackable {
        openIssues: issues(filter: { state: { isOpen: { eq: true } } }) {
            totalCount
        }
    }
`;
export const GetComponentsDocument = gql`
    query getComponents($filter: String!, $orderBy: ComponentOrder!, $count: Int!, $skip: Int!) {
        components(filter: { name: { contains: $filter } }, orderBy: $orderBy, first: $count, skip: $skip) {
            nodes {
                id
                name
                description
                ...OpenIssueCount
            }
            totalCount
        }
    }
    ${OpenIssueCountFragmentDoc}
`;
export const GetComponentDocument = gql`
    query getComponent($id: ID!) {
        node(id: $id) {
            id
            ... on Component {
                name
                description
                ...OpenIssueCount
            }
        }
    }
    ${OpenIssueCountFragmentDoc}
`;
export const GetIssuesDocument = gql`
    query getIssues($filter: String!, $orderBy: IssueOrder!, $count: Int!, $skip: Int!, $trackable: ID!) {
        node(id: $trackable) {
            ... on Trackable {
                issues(filter: { title: { contains: $filter } }, orderBy: $orderBy, first: $count, skip: $skip) {
                    nodes {
                        id
                        title
                        createdAt
                        createdBy {
                            ...DefaultUserInfo
                        }
                        ...DefaultIssueIconInfo
                        issueComments {
                            totalCount
                        }
                        labels {
                            nodes {
                                ...DefaultLabelInfo
                            }
                        }
                        assignments {
                            nodes {
                                user {
                                    ...DefaultUserInfo
                                }
                            }
                        }
                    }
                    totalCount
                }
            }
        }
    }
    ${DefaultUserInfoFragmentDoc}
    ${DefaultIssueIconInfoFragmentDoc}
    ${DefaultLabelInfoFragmentDoc}
`;
export const GetIssueDocument = gql`
    query getIssue($id: ID!) {
        node(id: $id) {
            ... on Issue {
                id
                title
                createdBy {
                    ...DefaultUserInfo
                }
                createdAt
                lastUpdatedAt
                timelineItems(orderBy: { field: CREATED_AT }) {
                    nodes {
                        ...DefaultTimelineItemInfo
                    }
                }
                artefacts {
                    nodes {
                        ...ArtefactTimelineInfo
                    }
                }
                outgoingRelations {
                    nodes {
                        id
                        ...OutgoingRelationTimelineInfo
                    }
                    totalCount
                }
                incomingRelations {
                    nodes {
                        id
                        ...IncomingRelationTimelineInfo
                    }
                    totalCount
                }
                labels {
                    nodes {
                        ...DefaultLabelInfo
                    }
                }
                affects {
                    nodes {
                        ...AffectedByIssueTimelineInfo
                    }
                }
                assignments {
                    nodes {
                        ...AssignmentTimelineInfo
                    }
                }
                type {
                    ...DefaultIssueTypeInfo
                }
                state {
                    ...DefaultIssueStateInfo
                }
                priority {
                    ...DefaultIssuePriorityInfo
                }
                template {
                    ...DefaultIssueTemplateInfo
                }
                estimatedTime
                spentTime
                startDate
                dueDate
                manageIssues: hasPermission(permission: MANAGE_ISSUES)
                comment: hasPermission(permission: COMMENT)
                moderator: hasPermission(permission: MODERATOR)
            }
        }
    }
    ${DefaultUserInfoFragmentDoc}
    ${DefaultTimelineItemInfoFragmentDoc}
    ${ArtefactTimelineInfoFragmentDoc}
    ${OutgoingRelationTimelineInfoFragmentDoc}
    ${IncomingRelationTimelineInfoFragmentDoc}
    ${DefaultLabelInfoFragmentDoc}
    ${AffectedByIssueTimelineInfoFragmentDoc}
    ${AssignmentTimelineInfoFragmentDoc}
    ${DefaultIssueTypeInfoFragmentDoc}
    ${DefaultIssueStateInfoFragmentDoc}
    ${DefaultIssuePriorityInfoFragmentDoc}
    ${DefaultIssueTemplateInfoFragmentDoc}
`;
export const UpdateBodyDocument = gql`
    mutation updateBody($id: ID!, $body: String!) {
        updateBody(input: { id: $id, body: $body }) {
            body {
                ...BodyTimelineInfo
            }
        }
    }
    ${BodyTimelineInfoFragmentDoc}
`;
export const UpdateIssueCommentDocument = gql`
    mutation updateIssueComment($id: ID!, $body: String!) {
        updateIssueComment(input: { id: $id, body: $body }) {
            issueComment {
                ...IssueCommentTimelineInfo
            }
        }
    }
    ${IssueCommentTimelineInfoFragmentDoc}
`;
export const CreateIssueCommentDocument = gql`
    mutation createIssueComment($issue: ID!, $body: String!, $answers: ID) {
        createIssueComment(input: { issue: $issue, body: $body, answers: $answers }) {
            issueComment {
                ...IssueCommentTimelineInfo
            }
        }
    }
    ${IssueCommentTimelineInfoFragmentDoc}
`;
export const DeleteIssueCommentDocument = gql`
    mutation deleteIssueComment($id: ID!) {
        deleteIssueComment(input: { id: $id }) {
            issueComment {
                ...IssueCommentTimelineInfo
            }
        }
    }
    ${IssueCommentTimelineInfoFragmentDoc}
`;
export const CreateIssueDocument = gql`
    mutation createIssue($input: CreateIssueInput!) {
        createIssue(input: $input) {
            issue {
                id
            }
        }
    }
`;
export const SearchIssueStatesDocument = gql`
    query searchIssueStates($template: ID!, $filter: String!, $count: Int!) {
        node(id: $template) {
            ... on IssueTemplate {
                issueStates(filter: { name: { contains: $filter } }, first: $count, orderBy: { field: NAME }) {
                    nodes {
                        ...DefaultIssueStateInfo
                    }
                }
            }
        }
    }
    ${DefaultIssueStateInfoFragmentDoc}
`;
export const ChangeIssueStateDocument = gql`
    mutation changeIssueState($issue: ID!, $state: ID!) {
        changeIssueState(input: { issue: $issue, state: $state }) {
            stateChangedEvent {
                ...StateChangedEventTimelineInfo
            }
        }
    }
    ${StateChangedEventTimelineInfoFragmentDoc}
`;
export const SearchIssueTemplatesDocument = gql`
    query searchIssueTemplates($filter: String!, $count: Int!) {
        issueTemplates(filter: { name: { contains: $filter } }, first: $count, orderBy: { field: NAME }) {
            nodes {
                ...DefaultIssueTemplateInfo
            }
        }
    }
    ${DefaultIssueTemplateInfoFragmentDoc}
`;
export const SearchIssueTypesDocument = gql`
    query searchIssueTypes($template: ID!, $filter: String!, $count: Int!) {
        node(id: $template) {
            ... on IssueTemplate {
                issueTypes(filter: { name: { contains: $filter } }, first: $count, orderBy: { field: NAME }) {
                    nodes {
                        ...DefaultIssueTypeInfo
                    }
                }
            }
        }
    }
    ${DefaultIssueTypeInfoFragmentDoc}
`;
export const ChangeIssueTypeDocument = gql`
    mutation changeIssueType($issue: ID!, $type: ID!) {
        changeIssueType(input: { issue: $issue, type: $type }) {
            typeChangedEvent {
                ...TypeChangedEventTimelineInfo
            }
        }
    }
    ${TypeChangedEventTimelineInfoFragmentDoc}
`;
export const SearchLabelsDocument = gql`
    query searchLabels($issue: ID!, $filter: String!, $count: Int!) {
        node(id: $issue) {
            ... on Issue {
                trackables {
                    nodes {
                        labels(filter: { name: { contains: $filter } }, first: $count, orderBy: { field: NAME }) {
                            nodes {
                                ...DefaultLabelInfo
                            }
                        }
                    }
                }
            }
        }
    }
    ${DefaultLabelInfoFragmentDoc}
`;
export const AddLabelToIssueDocument = gql`
    mutation addLabelToIssue($issue: ID!, $label: ID!) {
        addLabelToIssue(input: { issue: $issue, label: $label }) {
            addedLabelEvent {
                ...AddedLabelEventTimelineInfo
            }
        }
    }
    ${AddedLabelEventTimelineInfoFragmentDoc}
`;
export const RemoveLabelFromIssueDocument = gql`
    mutation removeLabelFromIssue($issue: ID!, $label: ID!) {
        removeLabelFromIssue(input: { issue: $issue, label: $label }) {
            removedLabelEvent {
                ...RemovedLabelEventTimelineInfo
            }
        }
    }
    ${RemovedLabelEventTimelineInfoFragmentDoc}
`;
export const GetProjectsDocument = gql`
    query getProjects($filter: String!, $orderBy: ProjectOrder!, $count: Int!, $skip: Int!) {
        projects(filter: { name: { contains: $filter } }, orderBy: $orderBy, first: $count, skip: $skip) {
            nodes {
                id
                name
                description
                ...OpenIssueCount
            }
            totalCount
        }
    }
    ${OpenIssueCountFragmentDoc}
`;
export const GetProjectDocument = gql`
    query getProject($id: ID!) {
        node(id: $id) {
            id
            ... on Project {
                name
                description
                ...OpenIssueCount
            }
        }
    }
    ${OpenIssueCountFragmentDoc}
`;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
        currentUser {
            ...DefaultUserInfo
        }
    }
    ${DefaultUserInfoFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getComponents(
            variables: GetComponentsQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetComponentsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetComponentsQuery>(GetComponentsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getComponents",
                "query"
            );
        },
        getComponent(
            variables: GetComponentQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetComponentQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetComponentQuery>(GetComponentDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getComponent",
                "query"
            );
        },
        getIssues(
            variables: GetIssuesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetIssuesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetIssuesQuery>(GetIssuesDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getIssues",
                "query"
            );
        },
        getIssue(
            variables: GetIssueQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetIssueQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetIssueQuery>(GetIssueDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getIssue",
                "query"
            );
        },
        updateBody(
            variables: UpdateBodyMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<UpdateBodyMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<UpdateBodyMutation>(UpdateBodyDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "updateBody",
                "mutation"
            );
        },
        updateIssueComment(
            variables: UpdateIssueCommentMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<UpdateIssueCommentMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<UpdateIssueCommentMutation>(UpdateIssueCommentDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "updateIssueComment",
                "mutation"
            );
        },
        createIssueComment(
            variables: CreateIssueCommentMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateIssueCommentMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateIssueCommentMutation>(CreateIssueCommentDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createIssueComment",
                "mutation"
            );
        },
        deleteIssueComment(
            variables: DeleteIssueCommentMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<DeleteIssueCommentMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<DeleteIssueCommentMutation>(DeleteIssueCommentDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "deleteIssueComment",
                "mutation"
            );
        },
        createIssue(
            variables: CreateIssueMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateIssueMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateIssueMutation>(CreateIssueDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createIssue",
                "mutation"
            );
        },
        searchIssueStates(
            variables: SearchIssueStatesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<SearchIssueStatesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<SearchIssueStatesQuery>(SearchIssueStatesDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "searchIssueStates",
                "query"
            );
        },
        changeIssueState(
            variables: ChangeIssueStateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<ChangeIssueStateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<ChangeIssueStateMutation>(ChangeIssueStateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "changeIssueState",
                "mutation"
            );
        },
        searchIssueTemplates(
            variables: SearchIssueTemplatesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<SearchIssueTemplatesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<SearchIssueTemplatesQuery>(SearchIssueTemplatesDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "searchIssueTemplates",
                "query"
            );
        },
        searchIssueTypes(
            variables: SearchIssueTypesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<SearchIssueTypesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<SearchIssueTypesQuery>(SearchIssueTypesDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "searchIssueTypes",
                "query"
            );
        },
        changeIssueType(
            variables: ChangeIssueTypeMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<ChangeIssueTypeMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<ChangeIssueTypeMutation>(ChangeIssueTypeDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "changeIssueType",
                "mutation"
            );
        },
        searchLabels(
            variables: SearchLabelsQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<SearchLabelsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<SearchLabelsQuery>(SearchLabelsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "searchLabels",
                "query"
            );
        },
        addLabelToIssue(
            variables: AddLabelToIssueMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<AddLabelToIssueMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<AddLabelToIssueMutation>(AddLabelToIssueDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "addLabelToIssue",
                "mutation"
            );
        },
        removeLabelFromIssue(
            variables: RemoveLabelFromIssueMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<RemoveLabelFromIssueMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<RemoveLabelFromIssueMutation>(RemoveLabelFromIssueDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "removeLabelFromIssue",
                "mutation"
            );
        },
        getProjects(
            variables: GetProjectsQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetProjectsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetProjectsQuery>(GetProjectsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getProjects",
                "query"
            );
        },
        getProject(
            variables: GetProjectQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetProjectQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetProjectQuery>(GetProjectDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getProject",
                "query"
            );
        },
        getCurrentUser(
            variables?: GetCurrentUserQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetCurrentUserQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetCurrentUserQuery>(GetCurrentUserDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getCurrentUser",
                "query"
            );
        }
    };
}
export type Sdk = ReturnType<typeof getSdk>;
