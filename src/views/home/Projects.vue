<template>
    <PaginatedList
        :item-manager="itemManager"
        :sort-fields="Object.keys(sortFields)"
        :to="(project: Project) => ({ name: 'project', params: { trackable: project.id } })"
    >
        <template #item="{ item }">
            <ListItem :title="item.name" :subtitle="item.description">
                <template #append>
                    <div class="text-medium-emphasis issue-container">
                        <v-icon icon="mdi-alert-circle-outline"/>
                        {{ item.openIssues.totalCount }}
                    </div>
                </template>
            </ListItem>
        </template>
    </PaginatedList>
</template>
<script lang="ts" setup>
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { ClientReturnType, useClient } from "@/graphql/client";
import { ProjectOrderField, OrderDirection } from "@/graphql/generated";
import { useRouter } from "vue-router";
import ListItem from "@/components/ListItem.vue";

type Project = ClientReturnType<"getProjects">["projects"]["nodes"][0];

const client = useClient();
const router = useRouter();

const sortFields = {
    "[Default]": ProjectOrderField.Id,
    Name: ProjectOrderField.Name
};

const itemManager: ItemManager<Project, keyof typeof sortFields> = {
    filterLocal: function (item: Project, filter: string): boolean {
        return item.name.includes(filter);
    },
    fetchItems: async function (
        filter: string,
        sortField: keyof typeof sortFields,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Project[], number]> {
        const res = await client.getProjects({
            filter,
            orderBy: {
                field: sortFields[sortField],
                direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
            },
            count,
            skip: page * count
        });
        return [res.projects.nodes, res.projects.totalCount];
    }
};
</script>
<style scoped lang="scss">
@use "@/styles/settings";
.issue-container {
    min-width: settings.$icon-with-number-width;
}
</style>
