---
id: configuration-ui
title: Configuring LiveData UI
sidebar_label: LiveData UI
---

Find details here for the configuration properties of LiveData UI. Properties are defined in the following file:

`/etc/wandisco/ui/application-prod.properties`

Below is an example `application-prod.properties` file, which overrides any application defaults.

```text
#Updated Application Properties
#Thu Nov 05 14:40:38 UTC 2020
application.hiveMigrator.servers=localhost\:6780
spring.datasource.password=ENC(xxx)
logging.output.path=/var/log/wandisco/ui
application.liveMigratorV2.servers=localhost\:18080
```

### General configuration

Configure how the UI is run overall.

| Name | Details |
| --- | --- |
| `server.port` | Set the port on which the UI will be available. This is overridden by the `server.ssl.port` when SSL is enabled.<br/><br/>**Default value**: `8081`<br/>**Allowed values**: An integer value between `1024` and `65535` |

### Logging

Configure how the UI logs information about its state or user interactions.

| Name | Details |
| --- | --- |
| `logging.output.path` | The output path for all logging.<br/><br/>**Default value**: `/var/log/wandisco/ui`<br/>**Allowed values**: The full path to a valid directory that is writable by the user running the UI (typically `hdfs`.)  |

### Security

Configure how the UI uses SSL, which is disabled by default.

| Name | Details |
| --- | --- |
| `server.ssl.enabled` | Set to `true` to enable SSL. If no other SSL values are set, this will use an internal keystore and a self-signed certificate to serve the UI.<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `server.ssl.port` | Set the port on which the UI should be available when SSL is enabled.<br/><br/>**Default value**: `8443`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `server.ssl.key-store` | The path to the key store which should be used instead of the internal default |
| `server.ssl.key-store-password` | The password to be used to access the key store |
| `server.ssl.key-alias` | The alias of the certificate to be used |
| `server.ssl.key-store-type` | Optional: set the key store type. Defaults to `PKCS12` |
| `application.liveMigratorV2.client.noCheckCertificate` | Optional: add this property and set the value to `true` if you want to implicitly trust certificates from remote LiveData Migrator instances. <br/>**Default value**: `false` <br/><br/> It is not recommended to use this property unless you are fully aware of the consequences. A safer method is to import your server certificate inside a truststore (see the tip below for an example). |

:::tip
The example command below will import a certificate named `server_cert.key` into an existing Java truststore named `cacerts`:

```text
keytool -import -trustcacerts -alias wandisco-ui -file server_cert.key -keystore cacerts
```

See the [Oracle documentation](https://docs.oracle.com/cd/E19906-01/820-4916/geygn/index.html) for details on the parameters used.
:::

## Directory structure

The following directories are used for the LiveData Migrator core package:

| Location | Content |
|---|---|
| `/var/log/wandisco/livedata-migrator` | Logs |
| `/etc/wandisco/livedata-migrator` | Configuration files |
| `/opt/wandisco/livedata-migrator` | Java archive files |
| `/opt/wandisco/livedata-migrator/db` | LiveData Migrator runtime state |

The following directories are used for HiveMigrator:

| Location | Content |
|---|---|
| `/var/log/wandisco/hivemigrator` | Logs |
| `/etc/wandisco/hivemigrator` | Configuration files |
| `/opt/wandisco/hivemigrator` | Java archive files |

The following directories are used for the LiveData UI:

| Location | Content |
|---|---|
| `/var/log/wandisco/ui` | Logs |
| `/etc/wandisco/ui` | Configuration files |
| `/opt/wandisco/ui` | Operation files |
| `/var/run/wandisco/ui` | UI runtime state |

## Metadata migrations (preview)

### Enable Hive metastore event listener

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
   hive migration stop --all
   ```

   ```text title="Start all metadata migrations through the CLI"
   hive migration start --all
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

### Default Hive metastore warehouse directory

When deploying a hive agent for a HDInsights cluster (which can either be [Azure SQL](./command-reference.md#hive-agent-add-azure) or remote [Apache Hive](./command-reference.md#hive-agent-add-hive)), the default hive warehouse directory will be as follows:

`hive.metastore.warehouse.dir=/hive/warehouse`

This is different from the majority of Hadoop clusters, as such, it may be necessary to adjust this property in your HDInsights cluster so that it is the same as your source environment.

Doing so will allow you to start using your source data and metadata on your HDInsights cluster immediately after migration, as it will be referenced correctly by your target metastore/database.
