import { Component, SetupContext, h } from "vue";
import Comment from "./Comment.vue";

type TimelineItemProps = {
    item: any;
};

type TimelineItemEvents = {
    updateItem(newItem: any): void;
};

const timelineItems: Record<string, Component> = {
    IssueComment: Comment,
    Body: Comment
};

export default function TimelineItem(props: TimelineItemProps, context: SetupContext<TimelineItemEvents>) {
    const item = props.item;
    return h(timelineItems[item.__typename] ?? "TODO", { item });
}

TimelineItem.props = {
    item: {
        type: Object,
        required: true
    }
};

TimelineItem.emits = {
    updateItem: (newItem: any) => true
};
