---
id: configuration-data-migrations
title: Configuring Data Migrations
sidebar_label: Data migrations
---

We recommend you make the following configuration changes to your HDFS cluster environment to prepare for data migrations.

## DFS NameNode properties

There are a number of properties adjustable on the HDFS NameNode that can be used to prevent data migrations from stalling due to an excess of notifications, or from operating too slowly.

Configure these properties in the `hdfs-site.xml` for the cluster, this will vary depending on your distribution:

* Hortonworks (HDP)
  * **Custom hdfs-site**  
    `dfs.namenode.inotify.max.events.per.rpc`
  * **Advanced hdfs-site**  
    `dfs.namenode.checkpoint.txns`
* Cloudera (CDH/CDP)
  * **Filesystem Checkpoint Transaction Threshold**  
    `dfs.namenode.checkpoint.txns`
  * **NameNode Advanced Configuration Snippet (Safety Valve) for hdfs-site.xml**  
    `dfs.namenode.inotify.max.events.per.rpc`
  * **HDFS Client Advanced Configuration Snippet (Safety Valve) for hdfs-site.xml**  
    `dfs.namenode.checkpoint.txns`  
    `dfs.namenode.inotify.max.events.per.rpc`

    The **HDFS Client** entries are required for the LiveData Migrator host to register and confirm the configuration.

### dfs.namenode.inotify.max.events.per.rpc

This value dictates the maximum number of events the NameNode can send to an inotify client in a single RPC response. By default, this is set to `1000`, which should consume no more than 1MB of memory.

You may increase this value to allow for more events to occur simultaneously, at the cost of higher memory use and potentially lower performance, depending on the hardware your HDFS cluster is running on.

We recommend setting this value to `100000` for production use, provided your cluster is capable of providing at least 100MB of memory to the migration process at a given time.

### dfs.namenode.checkpoint.txns

This value determines how many namespace transactions will trigger a checkpoint to occur, updating the filesystem metadata.

The default value for this is `1000000`, but we recommend increasing it to `10000000` for production use.

:::note
After configuring HDFS properties, you must restart all cluster services that rely on HDFS configuration for their function (including the HDFS service) for the changes to apply.
:::
