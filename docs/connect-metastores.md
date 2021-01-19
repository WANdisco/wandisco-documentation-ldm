---
id: connect-metastores
title: Connect metastores for metadata migrations (preview)
sidebar_label: Connect metastores
---

The **1.8.3** version of LiveData Migrator includes a **preview** of a feature that migrates metadata. Metadata can be migrated from [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home) and [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html).

Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, [define metadata rules](./define-metadata-rules.md) before [migrating metadata](./migrate-metadata.md).

:::note
Metadata migration functionality is only available when using the CLI. [Read the release notes](https://community.wandisco.com/s/article/WANdisco-LiveData-Migrator-Release-Notes-1-8-3) for more details about migrating metadata with LiveData Migrator.
:::

## Add hive agents

Add hive agents to connect your source and target metastores.

| Command | Action |
|:---|:---|
| [`hive agent add azure`](./command-reference.md#hive-agent-add-azure) | Add a hive agent for an Azure SQL database server |
| [`hive agent add filesystem`](./command-reference.md#hive-agent-add-filesystem) | Add a hive agent for a local filesystem |
| [`hive agent add glue`](./command-reference.md#hive-agent-add-glue) | Add a hive agent for an AWS Glue Data Catalog |
| [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) | Add a hive agent for a local or remote Apache Hive metastore |

## Configure existing hive agents

| Command | Action |
|:---|:---|
| [`hive agent configure azure`](./command-reference.md#hive-agent-configure-azure) | Change the configuration of an existing hive agent for the Azure SQL database server |
| [`hive agent configure filesystem`](./command-reference.md#hive-agent-configure-filesystem) | Change the configuration of an existing hive agent for the local filesystem |
| [`hive agent configure glue`](./command-reference.md#hive-agent-configure-glue) | Change the configuration of an existing hive agent for the AWS Glue Data Catalog |
| [`hive agent configure hive`](./command-reference.md#hive-agent-configure-hive) | Change the configuration of an existing hive agent for the Apache Hive metastore |

## Manage hive agents

| Command | Action |
|:---|:---|
| [`hive agent check`](./command-reference.md#hive-agent-check) | Check whether the hive agent can connect to the metastore |
| [`hive agent delete`](./command-reference.md#hive-agent-delete) | Delete a hive agent |
| [`hive agent list`](./command-reference.md#hive-agent-list) | List all configured hive agents |
| [`hive agent show`](./command-reference.md#hive-agent-show) | Show the configuration for a hive agent |
| [`hive agent types`](./command-reference.md#hive-agent-types) | List supported hive agent types |

## Next Steps

Connected to your metastores? [Define metadata rules](./define-metadata-rules.md) for your metadata migrations.
