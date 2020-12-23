---
id: configuration-ldm
title: Configuring LiveData Migrator
sidebar_label: LiveData Migrator
---

Find details here for the configuration properties of LiveData Migrator. Properties are defined in the following file:

`/etc/wandisco/livedata-migrator/application.properties`

## General configuration

These configuration properties are used to adjust general items of operation.

| Name | Details |
| --- | --- |
| `spring.jackson.serialization.INDENT_OUTPUT` | Whether to apply indentation to JSON output from command results<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `springdoc.swagger-ui.path` | The path at which clients can access the Swagger documentation for the LiveData Migrator REST API<br/><br/>**Default value**: `/ldm-api.html`<br/>**Allowed values**: Any valid file path |
| `pull.threads` | The size of the thread pool that is used for executing activities related to notifications of changes in an HDFS environment<br/><br/>**Default value**: `50`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `engine.threads` | The size of the thread pool used to perform migration of content from the source file system to targets<br/><br/>**Default value**: `1000`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `persisted.store` | Reserved for future use <br/><br/>**Default value**: `true` |
| `server.port` | The TCP port used to listen for clients interacting with the [REST API](./api-reference.md)<br/><br/>**Default value**: `18080`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `shell.history.filePath` | Location of the record of commands issued at the action prompt<br/><br/>**Default value**: `~/.livemigrator_history`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.) |
| `cli.enabled` | Whether the action prompt interface will be made available from the LiveData Migrator instance<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `spring.shell.interactive.enabled` | Whether the console session with the action prompt is interactive or non-interactive, affecting prompt output, command completion and other interactive features<br/><br/>**Default value**: `${cli.enabled}`<br/>**Allowed values**: `true`, `false` |

## SSH access

These configuration properties govern whether and how access to LiveData Migrator is provided using the [SSH protocol](https://en.wikipedia.org/wiki/Secure_Shell). You can manage LiveData Migrator by enabling SSH access to the console interface (as an alternative to the [CLI connection method](./get-started.md#log-in-to-the-livedata-migrator-cli)).

| Name | Details |
| --- | --- |
| `ssh.shell.enable` | Whether LiveData Migrator will accept connections from an SSH client to provide access to the action prompt. Setting this to false will prevent access via SSH from any client.<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.local.enable` | Whether LiveData Migrator will allow local access via SSH to the action prompt. Setting this to `false` will prevent access from local clients.<br/><br/>**Default value**: `${cli.enabled}`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.text` | This is the text content presented as the action prompt. You can override it to provide instance-specific text.<br/><br/>**Default value**: `WANdisco LiveMigrator >>\u0020`<br/>**Allowed values**: Any text string |
| `ssh.shell.prompt.color` | The color used for the action prompt. <br/><br/>**Default value**: `white`<br/>**Allowed values**: One of the color names `black`, `white`, `red`,`yellow`, `green`, `blue`.
| `ssh.shell.authentication` | Defines the authentication mechanism used by LiveData Migrator for SSH access. `simple` denotes authentication provided by the username and password defined in the `ssh.shell.user` and `ssh.shell.password` configuration properties, while `security` denotes authentication using a private key that matches one of the public keys in the file specified with the `ssh.shell.authorized-public-keys-file` configuration property.<br/><br/>**Default value**: `simple`<br/>**Allowed values**: `simple`, `security` |
| `ssh.shell.user` | The username that an SSH client must provide when LiveData Migrator is configured for simple authentication.<br/><br/>**Default value**: `user`<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `ssh.shell.password` | The password that an SSH client must provide when LiveData Migrator is configured to use simple authentication.<br/><br/>**Default value**: `password`<br/>**Allowed values**: Any string |
| `ssh.shell.port` | The TCP port on which LiveData Migrator will listen for new SSH connections<br/><br/>**Default value**: `2222`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `ssh.shell.historyFile` | The full path to the file in which the record of commands issued to the action prompt will be recorded<br/><br/>**Default value**: `${java.io.tmpdir}/.livedatamigrator_history_ssh`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.)
| `ssh.shell.authorized-public-keys-file` | The file containing public keys against which client credentials will be matched to authorize access to the console over SSH when LiveData Migrator is configured for `security` authentication<br/><br/>**Default value**: `samples/public-keys-sample`<br/>**Allowed values**: The full path to a file that contains one line entry per public key, in the same format used by `sshd`. |

## Logging

Configure how LiveData Migrator logs requests made against the [REST API](./api-reference.md).

| Name | Details |
| --- | --- |
| `logging.level.org.zalando.logbook` | The logging level to apply to HTTP activity against the REST API of LiveData Migrator. This must be set to `TRACE` to record any log information.<br/><br/>**Default value**: `TRACE`<br/>**Allowed values**: `TRACE`, `NONE` |
| `logbook.format.style` | The logging style applied to HTTP activity records<br/><br/>**Default value**: `http`<br/>**Allowed values**: `http`, `curl` |
| `logbook.write.max-body-size` | The maximum number of bytes from an HTTP request or response body to include in a log entry<br/><br/>**Default value**: `1024`<br/>**Allowed values**: Any integer between `1` and `2147483647` |
| `logbook.exclude` | A comma-separated list of patterns that match URIs for which HTTP activity should not be logged<br/><br/>**Default value**: `/v3/api-docs/**,/swagger-ui/**`<br/>**Allowed values**: Any valid comma-separated list of patterns |
| `logbook.obfuscate.parameters` | A comma-separated list of HTTP parameters that should not be recorded in log entries, e.g. `access_token,password`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP parameter names |
| `logbook.obfuscate.headers` | A comma-separated list of HTTP headers that should not be recorded in log entries, e.g. `authorization,x-auth-password,x-auth-token,X-Secret`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP headers |
| `obfuscate.json.properties` | A comma-separated list of JSON request properties by name that should not be recorded in log entries, e.g. `foo,bar`<br/><br/>**Default value**: `${hdfs.fs.type.masked.properties},${adls2.fs.type.masked.properties},${s3a.fs.type.masked.properties},${gcs.fs.type.masked.properties}`<br/>**Allowed values**: Any valid comma-separated list of property names |

## Server SSL

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
| `server.ssl.key-store` | Path or classpath to the Java keystore. <br/>**Default value**: (none) <br/>**Allowed values**: File system path or classpath (example:`/path/to/keystore.p12`, `classpath:keystore.p12`). |
| `server.ssl.key-store-password` | The Java keystore password. <br/>**Default value**: (none) <br/>**Allowed values**: Any text string. |
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
| `security.type` | The method of securing access to the REST API<br/><br/>**Default value**: `off`<br/>**Allowed values**: `off`, `basic` |
| `security.basic.user` | The username that needs to be provided by a REST client to gain access to a secured REST API, e.g. `admin`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `security.basic.password` | A bcrypt-encrypted representation of the password that needs to be provided using HTTP basic authentication to access the REST API when LiveData Migrator is configured for `basic` security, e.g. `{bcrypt}$2a$10$kXzfqwiiCY/ZW9e9BboNmuIbe5xe2kNjdk1YNUxmsCaQ7PlBLCe4W`<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid bcrypt-encrypted string |

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
