<template>
    <PaginatedList
        :item-manager="itemManager"
        :sort-fields="Object.keys(sortFields)"
        :to="(project: Project) => projectRoute(project)"
    >
        <template #item="{ item }">
            <ListItem :title="item.name" :subtitle="item.description">
                <template #append>
                    <div class="text-medium-emphasis issue-container">
                        <v-icon icon="mdi-alert-circle-outline" />
                        {{ item.openIssues.totalCount }}
                    </div>
                </template>
            </ListItem>
        </template>
        <CreateProjectDialog @created-project="(project) => selectProject(project)"/>
    </PaginatedList>
</template>
<script lang="ts" setup>
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { ClientReturnType, useClient } from "@/graphql/client";
import { ProjectOrderField, OrderDirection } from "@/graphql/generated";
import { RouteLocationRaw, useRouter } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import CreateProjectDialog from "@/components/dialog/CreateProjectDialog.vue";

type Project = ClientReturnType<"getProjectList">["projects"]["nodes"][0];

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
        const res = await client.getProjectList({
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

function selectProject(project: { id: string}) {
    router.push(projectRoute(project))
}

function projectRoute(project: { id: string}): RouteLocationRaw {
    return {
        name: "project",
        params: {
            trackable: project.id
        }
    }
}
</script>
<style scoped lang="scss">
@use "@/styles/settings";
.issue-container {
    min-width: settings.$icon-with-number-width;
}
</style>
