import { Component, SetupContext, h } from "vue";
import Comment from "./Comment.vue";
import AddedLabelEvent from "./AddedLabelEvent.vue";
import RemovedLabelEvent from "./RemovedLabelEvent.vue";
import TitleChangedEvent from "./TitleChangedEvent.vue";
import TypeChangedEvent from "./TypeChangedEvent.vue";
import StateChangedEvent from "./StateChangedEvent.vue";
import IssueRelation from "./IssueRelation.vue";
import RelatedByIssueEvent from "./RelatedByIssueEvent.vue";

type TimelineItemProps = {
    item: any;
    selected: boolean;
};

type TimelineItemEvents = {
    updateItem(newItem: any): void;
};

const timelineItems: Record<string, Component> = {
    IssueComment: Comment,
    Body: Comment,
    AddedLabelEvent: AddedLabelEvent,
    RemovedLabelEvent: RemovedLabelEvent,
    TitleChangedEvent: TitleChangedEvent,
    TypeChangedEvent: TypeChangedEvent,
    StateChangedEvent: StateChangedEvent,
    IssueRelation: IssueRelation,
    RelatedByIssueEvent: RelatedByIssueEvent
};

export default function TimelineItem(props: TimelineItemProps, context: SetupContext<TimelineItemEvents>) {
    const item = props.item;
    const selected = props.selected;
    return h(timelineItems[item.__typename] ?? "TODO", { item, selected });
}

TimelineItem.props = {
    item: {
        type: Object,
        required: true
    }
};
