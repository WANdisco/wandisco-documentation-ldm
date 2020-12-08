---
id: manage-bandwidth
title: Bandwidth management
sidebar_label: Bandwidth management
---

By default, LiveData Migrator will use all network bandwidth available to the server unless a specific limit is applied. Follow the [UI](#manage-bandwidth-with-the-ui) or [CLI](#manage-bandwidth-with-the-cli) instructions to set bandwidth limits. 

## Manage bandwidth with the UI

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

To apply a bandwidth limit between the source and target storage(s), follow the steps below:

1. In the **Storages** list on the dashboard, click the settings for the appropriate storage.
1. Select **Bandwidth Management** under the _Grouping_ list.
1. Uncheck the **Unlimited** option.
1. Define the **Maximum bandwidth limit** and **Unit** (for example: MiB/s), and click **Apply**.

You will need to define a bandwidth limit for each LiveData Migrator server (if you have more than one).

## Manage bandwidth with the CLI

Limit the total amount of bandwidth LiveData Migrator can use by using the `bandwidth policy` command. Once defined, the bandwidth limit will apply immediately to all migrations (new and ongoing).

Only one bandwidth policy can be active at a time. The default policy is unlimited bandwidth.

| Command | Action |
|:---|:---|
| [`bandwidth policy del`](./command-reference.md#bandwidth-policy-del) | Delete a bandwidth policy |
| [`bandwidth policy set`](./command-reference.md#bandwidth-policy-set) | Define the bandwidth policy |
| [`bandwidth policy show`](./command-reference.md#bandwidth-policy-show) | Get details for the current bandwidth policy |
