---
id: configuration-ldm
title: Configuring LiveData Migrator
sidebar_label: LiveData Migrator
---

Find details here for the configuration properties of LiveData Migrator. Properties are defined in the following file:

`/etc/wandisco/livedata-migrator/application.properties`

Restart the LiveData Migrator service when adding new properties or changing existing values:

```text
service livedata-migrator restart
```

## General configuration

These configuration properties are used to adjust general items of operation.

| Name | Details |
| --- | --- |
| `spring.jackson.serialization.INDENT_OUTPUT` | Whether to apply indentation to JSON output from command results<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `springdoc.swagger-ui.path` | The path at which clients can access the Swagger documentation for the LiveData Migrator REST API<br/><br/>**Default value**: `/ldm-api.html`<br/>**Allowed values**: Any valid file path |
| `pull.threads` | The size of the thread pool that is used for executing activities related to notifications of changes in an HDFS environment<br/><br/>**Default value**: `150`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `engine.threads` | The size of the thread pool used to perform migration of content from the source file system to targets<br/><br/>**Default value**: `1000`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `persisted.store` | Reserved for future use <br/><br/>**Default value**: `true` |
| `server.port` | The TCP port used to listen for clients interacting with the [REST API](./api-reference.md)<br/><br/>**Default value**: `18080`<br/>**Allowed values**: An integer value between `1024` and `65535` |

## Logging

Configure how LiveData Migrator logs requests made against the [REST API](./api-reference.md).

| Name | Details |
| --- | --- |
| `logging.level.org.zalando.logbook` | The logging level to apply to HTTP activity against the REST API of LiveData Migrator. This must be set to `TRACE` to record any log information.<br/><br/>**Default value**: `TRACE`<br/>**Allowed values**: `TRACE`, `NONE` |
| `logbook.format.style` | The logging style applied to HTTP activity records<br/><br/>**Default value**: `http`<br/>**Allowed values**: `http`, `curl` |
| `logbook.write.max-body-size` | The maximum number of bytes from an HTTP request or response body to include in a log entry<br/><br/>**Default value**: `1024`<br/>**Allowed values**: Any integer between `1` and `2147483647` |
| `logbook.exclude` | A comma-separated list of patterns that match URIs for which HTTP activity should not be logged<br/><br/>**Default value**: `/v3/api-docs/**,/swagger-ui/**`<br/>**Allowed values**: Any valid comma-separated list of patterns |
| `logbook.obfuscate.parameters` | A comma-separated list of HTTP parameters that should not be recorded in log entries, for example: `access_token,password`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP parameter names |
| `logbook.obfuscate.headers` | A comma-separated list of HTTP headers that should not be recorded in log entries, for example: `authorization,x-auth-password,x-auth-token,X-Secret`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP headers |
| `obfuscate.json.properties` | A comma-separated list of JSON request properties by name that should not be recorded in log entries, for example: `foo,bar`<br/><br/>**Default value**: `${hdfs.fs.type.masked.properties},${adls2.fs.type.masked.properties},${s3a.fs.type.masked.properties},${gcs.fs.type.masked.properties}`<br/>**Allowed values**: Any valid comma-separated list of property names |

## State

LiveData Migrator uses an internally-managed database to record state during operation called the Prevayler.

| Name | Details |
| --- | --- |
| `prevayler.databaseLocation` | The directory in which LiveData Migrator will write files to manage state<br/><br/>**Default value**: `${install.dir}/db`<br/>**Allowed values**: The full path to a directory in which database files will be managed. It must be writable by the user running LiveData Migrator (typically `hdfs`.) |
| `prevayler.persistent` | Whether LiveData Migrator will persist state to disk in files<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.force` | Whether the database performs a sync operation to ensure content is written to persistent storage on each write activity<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.bufferedJournal` | Whether buffered journal I/O is used for the database<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.mirrored` | Whether actions tracked in-memory by the database are mirrored to disk on every modification. The alternative is for operation to periodically flush to disk and flush on shutdown.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |

## Security

Secure access to the LiveData Migrator [REST API](./api-reference.md) through configuration. Choose between no security or HTTP basic security.

| Name | Details |
| --- | --- |
| `security.type` | The method of securing access to the REST API.<br/><br/>**Default value**: `off`<br/>**Allowed values**: `off`, `basic` |

### Basic authentication

:::important
When basic authentication is enabled on LiveData Migrator, [update the LiveData UI with the credentials to maintain functionality](./configuration-ui.md#livedata-migrator).
:::

| Name | Details |
| --- | --- |
| `security.basic.user` | Required when `security.type=basic`. <br/>The username that needs to be provided by a REST client to gain access to a secured REST API, for example: `admin`<br/><br/>[If basic authentication is enabled or will be enabled on the HiveMigrator REST API](./configuration-hvm.md#basic-authentication), use the same username for LiveData Migrator and HiveMigrator.<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `security.basic.password` | Required when `security.type=basic`. <br/>A [bcrypt-encrypted](https://www.browserling.com/tools/bcrypt) representation of the password that needs to be provided using HTTP basic authentication to access the REST API, for example:<br/>`{bcrypt}$2a$10$mQXFoGAdLryWcZLjSP31Q.5cSgtoCPO3ernnsK4F6/gva8lyn1qgu`<br/><br/>The `{bcrypt}` prefix must be included before the encrypted password string as shown in the example above.<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid bcrypt-encrypted string |

#### Connecting to LiveData Migrator with basic authentication

When basic authentication is enabled, provide the username and password when prompted to connect to LiveData Migrator through the CLI:

```text title="Example"
  connect livemigrator localhost: trying to connect...
Username: admin
Password: ********
connected
```

The username and password will also be required when accessing the LiveData Migrator REST API directly.

## TLS/SSL

To enable SSL on the LiveData Migrator REST API (HTTPS), modify the following `server.ssl.*` properties.

:::note
If HTTPS is enabled on the REST API, plain HTTP requests from the CLI to the REST API will fail.

```text title="Example error"
Bad Request
This combination of host and port requires TLS.
```

:::

| Name | Details |
| --- | --- |
| `server.ssl.key-store` | Path or classpath to the Java keystore. <br/>**Default value**: (none) <br/>**Allowed values**: File system path or classpath (example:`/path/to/keystore.p12`, `classpath:keystore.p12`) |
| `server.ssl.key-store-password` | The Java keystore password. <br/>**Default value**: (none) <br/>**Allowed values**: Any text string |
| `server.ssl.key-store-type` | The Java keystore type. <br/>**Default value**: (none) <br/>**Allowed values**: [Keystore types](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#KeyStore) |
| `server.ssl.key-alias` | The alias for the server certificate entry. <br/>**Default value**: (none) <br/>**Allowed values**: Any text string. |
| `server.ssl.ciphers` | The ciphers suite enforce the security by deactivating some old and deprecated SSL ciphers, this list was tested against [SSL Labs](https://www.ssllabs.com/ssltest/). <br/><br/> **Default value**: (none but list provided below) <br/><br/>`TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256,TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_DHE_RSA_WITH_AES_128_CBC_SHA256,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA,TLS_RSA_WITH_CAMELLIA_128_CBC_SHA` |

:::tip
The example command below will generate a server certificate and place it inside a new Java keystore named `keystore.p12`:

```text
keytool -genkey -alias livedata-migrator -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 365
```

See the [keytool documentation](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html) for further information on the parameters used.
:::

## File system defaults

Each file system supported by LiveData Migrator can apply properties defined using the `--properties` or `--properties-files` parameters to the [various `filesystem add` commands](./command-reference#file-system-commands). You can set default properties that will apply to each type of file system at time of creation through these configuration items.

| Name | Details |
| --- | --- |
| `adls1.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id,fs.insecure`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 1 configuration properties |
| `adls2.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 2 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id,fs.insecure`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 2 configuration properties |
| `hdfs.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid HDFS configuration properties |
| `s3a.fs.type.default.properties` | A comma-separated list of default properties to apply to S3A file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |
| `gcs.fs.type.default.properties` | A comma-separated list of default properties to apply to GCS resources on creation.<br/><br/>**Default value**: `bucket.name`<br/>**Allowed values**: Any comma-separated list of valid GCS configuration properties |
| `local.fs.type.default.properties` | A comma-separated list of default properties to apply to local file system resources on creation.<br/><br/>**Default value**: `fs.root`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |

## HDFS inotify

LiveData Migrator will poll the Hadoop cluster for NameNode events using the [HDFS inotify](https://hadoop.apache.org/docs/r3.2.0/api/org/apache/hadoop/hdfs/inotify/package-summary.html) system. These properties can be added and configured to change the default poll periods.

| Name | Details |
| --- | --- |
| `hdfs.inotify.poll.period` | The length of time in milliseconds between each event listener poll. <br/>**Default value**: `10` <br/>**Allowed values**: An integer value |
| `hdfs.inotify.sleep.period` | The length of time in milliseconds for delaying the event listener poll after 10 consecutive retry failures. <br/>**Default value**: `10` <br/>**Allowed values**: An integer value |

## HDFS marker storage

LiveData Migrator uses marker files to manage the migration of files on paths. By default, these are stored in the HDFS user's home directory if possible. If this is not possible, they will be stored in the root directory of the migration on the source filesystem. To configure another directory to store marker files in, alter the following property:

| Name | Details |
| --- | --- |
| `hdfs.fs.marker.dir` | The directory in which marker files are stored. <br />**Default value**: (none) <br /> **Allowed values:** The full path to a directory in which database files will be managed. It must be writable by the user running LiveData Migrator (typically `hdfs`.)|

## Proxy Auto-Config (PAC) file support

LiveData Migrator allows the use of a [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) file so that traffic can be routed through HTTP proxies ([examples of PAC files](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#example_1)).

| Name | Details |
| --- | --- |
| `lm.proxy.pac` | Path to the PAC file on the local filesystem. <br/>**Default value**: (none) <br/>**Allowed values**: A path that includes the file URI prefix (example: `file:///tmp/proxy.pac`). |

:::important
PAC files for LiveData Migrator must contain an explicit clause that will return `"DIRECT"` for `"localhost"`.

```text title="Example of a PAC file"
function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "localhost"))
        return "DIRECT";
}
```

:::

## Configure Notification Properties

Adjust notification properties in the `application.properties` file:

```text
/etc/wandisco/livedata-migrator/application.properties
```

| Name | Details |
| --- | --- |
| `notifications.pending.region.warn.percent` | The warning percentage threshold of events LiveData Migrator has fallen behind by. A migration exceeding this quota triggers the **Data migration is falling behind system events** notification. **Default: 90**. |
| `notifications.pending.region.clear.percent` | The warning clearing percentage threshold of events LiveData Migrator has fallen behind by. A migration that previously exceeded the `notifications.pending.region.warn.percent` quota that then falls below this value will automatically clear its **Data migration is falling behind system events** notification. **Default: 80**. |

## Directory structure

The following directories are used for the LiveData Migrator core package:

| Location | Content |
|---|---|
| `/var/log/wandisco/livedata-migrator` | Logs |
| `/etc/wandisco/livedata-migrator` | Configuration files |
| `/opt/wandisco/livedata-migrator` | Java archive files |
| `/opt/wandisco/livedata-migrator/db` | LiveData Migrator runtime state |
| `/var/run/livedata-migrator` | Runtime files |
