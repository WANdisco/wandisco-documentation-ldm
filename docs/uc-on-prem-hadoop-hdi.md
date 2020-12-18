---
id: uc-on-prem-hadoop-hdi
title: On-premises Hadoop cluster to Azure HDInsights cluster
sidebar_label: On-premises Hadoop to Azure HDI
---

Below is an outline of the steps needed to ready your environment for migration of data and metadata.

:::note
The steps on this page assume that you are using LiveData Migrator through the CLI. Follow the links for each command to see the required parameters and example usage.

Alternative steps for the UI will be provided in a future release.
:::

## Prerequisites

### On-premises Hadoop cluster

Ensure that all [prerequisites](./prereqs.md#prerequisites) are met for the source environment. This also includes:

* Network connectivity between your edge node and your ADLS Gen2 storage container.
* If using an [Azure SQL Database](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#create-and-config-azure-sql-database-for-the-custom-metastore) on your HDInsights cluster, network connectivity between your edge node and this database.

### Azure HDInsights cluster

For your target environment, ensure the following prerequisites are met:

* Your HDInsights cluster is using [ADLS Gen2](https://docs.microsoft.com/en-us/azure/hdinsight/overview-data-lake-storage-gen2) as its primary storage type.
* (Recommended) [Check that your default Hive warehouse directory is configured the same as your source on-premises Hadoop cluster](./configuration-ui.md#default-hive-metastore-warehouse-directory).
* If using a [default metastore](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#default-metastore), SSH access to an edge node on the HDInsights cluster.  
  The edge node requires the following:
  * HDFS and Hive client libraries installed.
  * Port 5052 open for outbound connections to communicate with the LiveData Migrator service on the on-premises Hadoop edge node.

## Configure for data migrations

### Add HDFS as source filesystem

1. If Kerberos is enabled on your Hadoop cluster, specify the Kerberos credentials for the HDFS superuser on your Hadoop cluster:

   [`filesystem auto-discover-source hdfs`](./command-reference.md#filesystem-auto-discover-source-hdfs)

1. Check that HDFS on your on-premises Hadoop cluster is set as your source filesystem:

   [`source fs show`](./command-reference.md#source-fs-show)

   If the filesystem shown is incorrect, delete it using [`source del`](./command-reference.md#source-del) and configure the source manually:

   [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs)

   Ensure to include the `--source` parameter when using the command above.

### Add ADLS Gen2 storage as target filesystem

Configure your ADLS Gen2 storage container as your target filesystem. The method chosen will depend on the authentication method:

* Using a [service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) and [OAuth 2](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols) credentials: [`filesystem add adls2 oauth`](./command-reference.md#filesystem-add-adls2-oauth)
* Using [access key](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys) credentials: [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey)

## Configure for metadata migrations

### Add source hive agent

1. (Recommended) [Enable the Hive metastore event listener](./configuration-ui.md#enable-hive-metastore-event-listener) on the on-premises Hadoop cluster.

1. Configure the source hive agent to connect to the Hive metastore on the on-premises Hadoop cluster:

   [`hive agent add hive`](./command-reference.md#hive-agent-add-hive)

1. Check that the configuration for the hive agent is correct:

   ```text title="Example"
   hive agent check --name hiveAgent
   ```

### Add target hive agent

HDInsights can use either a [default metastore](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#default-metastore), or a [custom metastore](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#custom-metastore) in the form of an [Azure SQL Database](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-use-external-metadata-stores#create-and-config-azure-sql-database-for-the-custom-metastore).

Choose one of the methods below depending on the type of metastore deployed in your HDInsights cluster.

#### Default metastore

1. Deploy and configure a remote hive agent:

   [`hive agent add hive`](./command-reference.md#hive-agent-add-hive)

   Use the [automated deployment parameters](./command-reference.md#parameters-for-automated-deployment-1) or follow the [steps for manual deployment](./command-reference.md#steps-for-manual-deployment-1).

   As mentioned in the [prerequisites](#prerequisites), you will need to specify a suitable edge node on your HDInsights cluster to deploy the hive agent service.

1. Check that the configuration for the hive agent is correct:

   ```text title="Example"
   hive agent check --name azureAgent
   ```

#### Custom metastore (Azure SQL database)

1. Configure a hive agent to connect to an Azure SQL database:

   [`hive agent add azure`](./command-reference.md#hive-agent-add-azure)

1. Check that the configuration for the hive agent is correct:

   ```text title="Example"
   hive agent check --name azureAgent
   ```

## Next Steps

Start [defining exclusions](./configure-exclusions.md) and [migrating data](./create-migration.md). You can also [create metadata rules](./define-metadata-rules.md) and start [migrating metadata](./migrate-metadata.md).
