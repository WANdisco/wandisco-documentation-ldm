---
id: configuration-metadata
title: Configuring your environment for metadata migrations
sidebar_label: Metadata migrations
---

We recommend that you make the following configuration changes to your environment to prepare for metadata migrations.

## Enable Hive metastore event listener

:::note
This recommendation is currently supported on HDP platforms only.
:::

When deploying a [hive agent for Apache Hive](./command-reference.md#hive-agent-add-hive), it is recommended to enable the standard [`DBNotificationListener`](https://hive.apache.org/javadocs/r2.3.7/api/org/apache/hive/hcatalog/listener/DbNotificationListener.html) listener for the Hive metastore. This allows a publisher-subscriber mechanism and dramatically reduces the load on the metastore after the initial scan of the metastore is complete.

1. To enable it, add the following properties and values to the Apache Hive metastore's `hive-site.xml`:

   ```text
   <property>
     <name>hive.metastore.event.listeners</name>
     <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>
   </property>
   <property>
     <name>hive.metastore.event.db.listener.timetolive</name>
     <value>86400s</value>
   </property>
   ```

   A restart of the Hive metastore services is required for the changes to take effect.

1. LiveData Migrator will rescan its configuration at the start of a migration, and auto-detects the presence of the `DbNotificationListener`.

   As such, all running metadata migrations should be stopped and started.

   ```text title="Stop all metadata migrations through the CLI"
   hive migration stop all
   ```

   ```text title="Start all metadata migrations through the CLI"
   hive migration start all
   ```

   Any new migrations will auto-detect the presence of the listener straight away.

1. Confirm that migrations are now using the listener by checking the status of a hive migration:

   ```text title="Example status command"
   hive migration status --name hivemigration1
   ```

   ```text title="Example output"
   {
     "migrationName": "hivemigration1",
     "migratedRules": [
       {
         "name": "test",
         "dbNamePattern": "test*",
         "tableNamePattern": "test*"
       }
     ],
     "discoveredItems": 2752,
     "migratedItems": 50,
     "state": "RUNNING",
     "upToDate": true,
     "description": "Listening to events..."
   }
   ```

   The description should state `"Listening to events..."`.
