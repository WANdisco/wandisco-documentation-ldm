---
id: connect-metastores
title: Connect metastores for metadata migrations (preview)
sidebar_label: Connect metastores
---

This version of LiveData Migrator includes a **preview** of a feature that migrates metadata. Metadata can be migrated from [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home), [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html), and [Azure SQL](https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview).

Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, [define metadata rules](./define-metadata-rules.md) before [migrating metadata](./migrate-metadata.md).

## Connect metastores with the UI

### Add source agent

LiveData Migrator will attempt to auto-discover and create an agent for your source environment. Select your LiveData Migrator instance from the Storage panel and check whether an existing agent is listed.

If Kerberos is enabled on your cluster and HDFS is configured as your source storage, select to configure the existing agent and provide the Kerberos credentials.

Alternatively, add a new agent. The source agent can be any of the following distributions:

* [Apache Hive](./command-reference.md#hive-agent-add-hive)
* [AWS Glue Data Catalog](./command-reference.md#hive-agent-add-glue)
* [Azure SQL](/command-reference.md#hive-agent-add-azure)

### Add target agents

Select your LiveData Migrator instance from the Storage panel and add new agents. LiveData Migrator supports target agents of the following distributions:

* [Apache Hive](./command-reference.md#hive-agent-add-hive)
* [AWS Glue Data Catalog](./command-reference.md#hive-agent-add-glue)
* [Azure SQL](/command-reference.md#hive-agent-add-azure)

## Connect metastores with the CLI

### Add hive agents

Add hive agents to connect your source and target metastores.

| Command | Action |
|:---|:---|
| [`hive agent add azure`](./command-reference.md#hive-agent-add-azure) | Add a hive agent for an Azure SQL connection |
| [`hive agent add filesystem`](./command-reference.md#hive-agent-add-filesystem) | Add a hive agent for a local filesystem |
| [`hive agent add glue`](./command-reference.md#hive-agent-add-glue) | Add a hive agent for an AWS Glue Data Catalog |
| [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) | Add a hive agent for a local or remote Apache Hive metastore |

### Configure existing hive agents

| Command | Action |
|:---|:---|
| [`hive agent configure azure`](./command-reference.md#hive-agent-configure-azure) | Change the configuration of an existing hive agent for the Azure SQL database server |
| [`hive agent configure filesystem`](./command-reference.md#hive-agent-configure-filesystem) | Change the configuration of an existing hive agent for the local filesystem |
| [`hive agent configure glue`](./command-reference.md#hive-agent-configure-glue) | Change the configuration of an existing hive agent for the AWS Glue Data Catalog |
| [`hive agent configure hive`](./command-reference.md#hive-agent-configure-hive) | Change the configuration of an existing hive agent for the Apache Hive metastore |

### Manage hive agents

| Command | Action |
|:---|:---|
| [`hive agent check`](./command-reference.md#hive-agent-check) | Check whether the hive agent can connect to the metastore |
| [`hive agent delete`](./command-reference.md#hive-agent-delete) | Delete a hive agent |
| [`hive agent list`](./command-reference.md#hive-agent-list) | List all configured hive agents |
| [`hive agent show`](./command-reference.md#hive-agent-show) | Show the configuration for a hive agent |
| [`hive agent types`](./command-reference.md#hive-agent-types) | List supported hive agent types |

## Next Steps

Connected to your metastores? [Define metadata rules](./define-metadata-rules.md) for your metadata migrations.
