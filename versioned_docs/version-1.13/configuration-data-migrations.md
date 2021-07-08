---
id: configuration-data-migrations
title: Configuring Data Migrations
sidebar_label: Data migrations
---

We recommend you make the following configuration changes to your HDFS cluster environment to prepare for data migrations.

## HDFS NameNode properties

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

This value dictates the maximum number of events the NameNode can send to an inotify client in a single [RPC](https://cwiki.apache.org/confluence/display/HADOOP2/HadoopRpc) response. By default, this is set to `1000`, which should consume no more than 1MB of memory.

You may increase this value to allow iNotify clients (such as LiveData Migrator) to receive larger batches of event notifications in a single RPC, at the cost of higher memory use.

We recommend setting this value to `100000` for production use. By increasing this, your NameNode should be capable of allocating at least an additional 100MB of memory from its maximum heap capacity to deliver these larger batches of events.

### dfs.namenode.checkpoint.txns

This value determines the threshold of which the number of namespace transactions will trigger a checkpoint, updating the filesystem metadata. If this threshold is reached, the checkpoint will be triggered regardless of whether the `dfs.namenode.checkpoint.period` has expired.

The default value for this is `1000000`, but we recommend increasing it to `10000000` for production use.

:::note
After configuring HDFS properties, you must restart all cluster services that rely on HDFS configuration for their function (including the HDFS service) for the changes to apply.
:::
