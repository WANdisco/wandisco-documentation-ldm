---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Find details here for the configuration properties of the LiveData Migrator components. Properties are defined in the following files:

* LiveData Migrator: `/etc/wandisco/livedata-migrator/application.properties`
* LiveData UI: `/etc/wandisco/ui/application-prod.properties`

Each configuration property can also be provided to LiveData Migrator as a command-line argument when launched, e.g. `--server.port=19999`.

:::note
You'll need to perform a restart after making any configuration changes to LiveData Migrator or the UI. To do this, run `service livedata-migrator restart` or `service livedata-ui restart` as appropriate.
:::

## LiveData Migrator Configuration

An example `application.properties` file:

```text
# pretty print JSON output in API results
spring.jackson.serialization.INDENT_OUTPUT=true
springdoc.swagger-ui.path=/ldm-api.html
spring.main.lazy-initialization = false
pull.threads=50
engine.threads=1000
persisted.store=true
migration.file.max.retries=180
migration.scan.iteration-limit=1000
migration.scan.allow-stop-path=false
shell.history.filePath=~/.livedatamigrator_history
cli.enabled=false
spring.shell.interactive.enabled=${cli.enabled}
ssh.shell.enable=false
ssh.shell.prompt.local.enable=${cli.enabled}
ssh.shell.interactive.enabled=${cli.enabled}
ssh.shell.default-commands.jvm=false
ssh.shell.default-commands.postprocessors=false
ssh.shell.default-commands.threads=false

# ===================================================================
# SSL
# ===================================================================
# Note: If HTTPS is enabled, it will completely replace HTTP as
# the protocol over which the REST endpoints and the Data Flow
# Dashboard interact. Plain HTTP requests will fail
#
# To enable TLS in production, generate a certificate using:
# keytool -genkey -alias livedata-migrator -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 3650
#
# You can also use Let's Encrypt:
# https://maximilian-boehm.com/hp2121/Create-a-Java-Keystore-JKS-from-Let-s-Encrypt-Certificates.htm
#
# Then, enable and modify the following server.ssl properties, filling in
# system specific information (path to key store, password,
# preferred port etc.)
#
server.port=18080
# server.ssl.key-store=path/to/keystore.p12
# # This can also be a key on the classpath, instead of a directory
# # server.ssl.key-store=classpath:keystore.p12
# server.ssl.key-store-password=password
# server.ssl.key-store-type=PKCS12
# server.ssl.key-alias=livedata-migrator
# # The ciphers suite enforce the security by deactivating some old and deprecated SSL ciphers, this list was tested against SSL Labs (https://www.ssllabs.com/ssltest/)
# server.ssl.ciphers=TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 ,TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_DHE_RSA_WITH_AES_128_CBC_SHA256,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA,TLS_RSA_WITH_CAMELLIA_128_CBC_SHA
# ===================================================================

# prevayler configuration
install.dir=
prevayler.databaseLocation=${install.dir}db
prevayler.persistent=true
prevayler.force=true
prevayler.bufferedJournal=true
prevayler.mirrored=true
prevayler.deepCopy=false

# security configuration for basic authentication
security.type=off
#security.type=basic
#security.basic.user=admin
#security.basic.password={bcrypt}$2a$10$kXzfqwiiCY/ZW9e9BboNmuIbe5xe2kNjdk1YNUxmsCaQ7PlBLCe4W
adls1.fs.type.default.properties=fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id,fs.insecure
adls2.fs.type.default.properties=fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id,fs.insecure
hdfs.fs.type.default.properties=fs.defaultFS
s3a.fs.type.default.properties=fs.defaultFS
gcs.fs.type.default.properties=bucket.name
local.fs.type.default.properties=fs.root

#properties we need to mask when displaying to the user
adls2.fs.type.masked.properties=fs.secret.Key,sharedKey
adls1.fs.type.masked.properties=fs.secret.Key,sharedKey
hdfs.fs.type.masked.properties=
local.fs.type.masked.properties=
s3a.fs.type.masked.properties=fs.s3a.access.key,fs.s3a.secret.key,secretKey,accessKey
gcs.fs.type.masked.properties=fs.gs.auth.service.account.private.key.id,fs.gs.auth.service.account.private.key,privateKey,privateKeyId,jsonKeyFile,p12KeyFile


license.key.location=/opt/wandisco/livedata-migrator/
authentication.key.location=/opt/wandisco/livedata-migrator/
log.dir=./logs
threaddump.directory=${log.dir}/threads

# HTTP traffic logging config
logging.level.org.zalando.logbook=TRACE
logbook.format.style=http
logbook.write.max-body-size=1024
logbook.exclude=/v3/api-docs/**,/swagger-ui/**
# HTTP message masking properties
#logbook.obfuscate.parameters=access_token,password
#logbook.obfuscate.headers=authorization,x-auth-password,x-auth-token,X-Secret
obfuscate.json.properties=${hdfs.fs.type.masked.properties},${adls2.fs.type.masked.properties},${s3a.fs.type.masked.properties},${gcs.fs.type.masked.properties}

ssh.shell.prompt.text=WANdisco LiveData Migrator >>\u0020
ssh.shell.prompt.color=white
ssh.shell.authentication=simple
ssh.shell.user=user
ssh.shell.password=password
ssh.shell.host=127.0.0.1
ssh.shell.port=2222
ssh.shell.historyFile=${java.io.tmpdir}/.livedatamigrator_history_ssh
#ssh.shell.authorized-public-keys-file=samples/public-keys-sample



management.endpoints.web.exposure.include=health,info,threaddump,heapdump,env,metrics,prometheus
management.endpoint.health.show-details=always
management.endpoints.web.exposure.exclude=
management.endpoints.jmx.exposure.include=*
management.endpoints.jmx.exposure.exclude=
management.metrics.export.jmx.domain=com.wandisco.livemigrator2.metrics
```

### General configuration

These configuration properties are used to adjust general items of operation.

| Name | Details |
| --- | --- |
| `spring.jackson.serialization.INDENT_OUTPUT` | Whether to apply indentation to JSON output from command results<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `springdoc.swagger-ui.path` | The path at which clients can access the Swagger documentation for the LiveData Migrator REST API<br/><br/>**Default value**: `/lm2-api.html`<br/>**Allowed values**: Any valid file path |
| `pull.threads` | The size of the thread pool that is used for executing activities related to notifications of changes in an HDFS environment<br/><br/>**Default value**: `50`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `engine.threads` | The size of the thread pool used to perform migration of content from the source file system to targets<br/><br/>**Default value**: `1000`<br/>**Allowed values**: An integer value between `1` and `10000` |
| `persisted.store` | Reserved for future use |
| `server.port` | The TCP port used to listen for clients interacting with the [REST API](./api-reference.md)<br/><br/>**Default value**: `18080`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `shell.history.filePath` | Location of the record of commands issued at the action prompt<br/><br/>**Default value**: `~/.livemigrator_history`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.) |
| `cli.enabled` | Whether the action prompt interface will be made available from the LiveData Migrator instance<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `spring.shell.interactive.enabled` | Whether the console session with the action prompt is interactive or non-interactive, affecting prompt output, command completino and other interactive features<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |

### SSH access

These configuration properties govern whether and how access to LiveData Migrator is provided using the [SSH protocol](https://en.wikipedia.org/wiki/Secure_Shell). You can manage LiveData Migrator when it operates as a system service using either the [REST API](./api-reference.md), or using SSH access to the console interface.

| Name | Details |
| --- | --- |
| `ssh.shell.enable` | Whether LiveData Migrator will accept connections from an SSH client to provide access to the action prompt. Setting this to false will prevent access via SSH from any client.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.local.enable` | Whether LiveData Migrator will allow local access via SSH to the action prompt. Setting this to `false` will prevent access from local clients.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `ssh.shell.prompt.text` | This is the text content presented as the action prompt. You can override it to provide instance-specific text.<br/><br/>**Default value**: `WANdisco LiveMigrator >>\u0020`<br/>**Allowed values**: Any text string |
| `ssh.shell.prompt.color` | The color used for the action prompt. <br/><br/>**Default value**: `white`<br/>**Allowed values**: One of the color names `black`, `white`, `red`,`yellow`, `green`, `blue`.
| `ssh.shell.authentication` | Defines the authentication mechanism used by LiveData Migrator for SSH access. `simple` denotes authentication provided by the username and password defined in the `ssh.shell.user` and `ssh.shell.password` configuration properties, while `security` denotes authentication using a private key that matches one of the public keys in the file specified with the `ssh.shell.authorized-public-keys-file` configuration property.<br/><br/>**Default value**: `simple`<br/>**Allowed values**: `simple`, `security` |
| `ssh.shell.user` | The username that an SSH client must provide when LiveData Migrator is configured for simple authentication.<br/><br/>**Default value**: `user`<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `ssh.shell.password` | The password that an SSH client must provide when LiveData Migrator is configured to use simple authentication.<br/><br/>**Default value**: `password`<br/>**Allowed values**: Any string |
| `ssh.shell.port` | The TCP port on which LiveData Migrator will listen for new SSH connections<br/><br/>**Default value**: `2222`<br/>**Allowed values**: An integer value between `1024` and `65535` |
| `ssh.shell.historyFile` | The full path to the file in which the record of commands issued to the action prompt will be recorded<br/><br/>**Default value**: `${user.home}/.livemigrator_history`<br/>**Allowed values**: The full path to a valid filename in a directory that is writable by the user running LiveData Migrator (typically `hdfs`.)
| `ssh.shell.authorized-public-keys-file` | The file containing public keys against which client credentials will be matched to authorize access to the console over SSH when LiveData Migrator is configured for `security` authentication<br/><br/>**Default value**: `samples/public-keys-sample`<br/>**Allowed values**: The full path to a file that contains one line entry per public key, in the same format used by `sshd`. |

### Logging

Configure how LiveData Migrator logs requests made against the [REST API](./api-reference.md).

| Name | Details |
| --- | --- |
| `logging.level.org.zalando.logbook` | The logging level to apply to HTTP activity against the REST API of LiveData Migrator. This must be set to `TRACE` to record any log information.<br/><br/>**Default value**: `TRACE`<br/>**Allowed values**: `TRACE`, `NONE` |
| `logbook.format.style` | The logging style applied to HTTP activity records<br/><br/>**Default value**: `http`<br/>**Allowed values**: `http`, `curl` |
| `logbook.write.max-body-size` | The maximum number of bytes from an HTTP request or response body to include in a log entry<br/><br/>**Default value**: 1024<br/>**Allowed values**: Any integer between `1` and `2147483647` |
| `logbook.exclude` | A comma-separated list of patterns that match URIs for which HTTP activity should not be logged<br/><br/>**Default value**: `/v3/api-docs/**,/swagger-ui/**`<br/>**Allowed values**: Any valid comma-separated list of patterns |
| `logbook.obfuscate.parameters` | A comma-separated list of HTTP parameters that should not be recorded in log entries, e.g. `access_token,password`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP parameter names |
| `logbook.obfuscate.headers` | A comma-separated list of HTTP headers that should not be recorded in log entries, e.g. `authorization,x-auth-password,x-auth-token,X-Secret`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of HTTP headers |
| `obfuscate.json.properties` | A comma-separated list of JSON request properties by name that should not be recorded in log entries, e.g. `foo,bar`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid comma-separated list of property names |

### Server SSL

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
| `server.ssl.key-store-type` | The Java keystore type. <br/>**Default value**: `PKCS12` <br/>**Allowed values**: [Keystore types](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#KeyStore) |
| `server.ssl.key-alias` | The alias for the server certificate entry. <br/>**Default value**: (none) <br/>**Allowed values**: Any text string. |
| `server.ssl.ciphers` | The ciphers suite enforce the security by deactivating some old and deprecated SSL ciphers, this list was tested against [SSL Labs](https://www.ssllabs.com/ssltest/). <br/><br/> **Default value** <br/> `TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256,TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_DHE_RSA_WITH_AES_128_CBC_SHA256,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA,TLS_RSA_WITH_CAMELLIA_128_CBC_SHA` |

:::tip
The example command below will generate a server certificate and place it inside a new Java keystore named `keystore.p12`:

```text
keytool -genkey -alias livedata-migrator -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 365
```

See the [keytool documentation](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html) for further information on the parameters used.
:::

### State

LiveData Migrator uses an internally-managed database to record state during operation called the Prevayler.

| Name | Details |
| --- | --- |
| `prevayler.databaseLocation` | The directory in which LiveData Migrator will write files to manage state<br/><br/>**Default value**: `${install.dir}/db`<br/>**Allowed values**: The full path to a directory in which database files will be managed. It must be writable by the user running LiveData Migrator (typically `hdfs`.) |
| `prevayler.persistent` | Whether LiveData Migrator will persist state to disk in files<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.force` | Whether the database performs a sync operation to ensure content is written to persistent storage on each write activity<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.bufferedJournal` | Whether buffered journal I/O is used for the database<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |
| `prevayler.mirrored` | Whether actions tracked in-memory by the database are mirrored to disk on every modification. The alternative is for operation to periodically flush to disk and flush on shutdown.<br/><br/>**Default value**: `true`<br/>**Allowed values**: `true`, `false` |

### Security

Secure access to the LiveData Migrator [REST API](./api-reference.md) through configuration. Choose between no security or HTTP basic security.

| Name | Details |
| --- | --- |
| `security.type` | The method of securing access to the REST API<br/><br/>**Default value**: `off`<br/>**Allowed values**: `off`, `basic` |
| `security.basic.user` | The username that needs to be provided by a REST client to gain access to a secured REST API, e.g. `admin`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any string that defines a username (no whitespace) |
| `security.basic.password` | A bcrypt-encrypted representation of the password that needs to be provided using HTTP basic authentication to acceess the REST API when LiveData Migrator is configured for `basic` security, e.g. `{bcrypt}$2a$10$kXzfqwiiCY/ZW9e9BboNmuIbe5xe2kNjdk1YNUxmsCaQ7PlBLCe4W`<br/><br/>**Default value**: (none)<br/>**Allowed values**: A valid bcrypt-encrypted string |

### Kerberos Integration

Configure LiveData Migrator to work against securely-configured Hadoop environments using Kerberos. Note that when run as a command-line application, LiveData Migrator can use Kerberos credentials that are available as a result of the use of `kinit` instead of static configuration defined with these properties.

| Name | Details |
| --- | --- |
| `lm.kerberos.is.enabled` | Whether LiveData Migrator should attempt to authenticate against HDFS using Kerberos<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `lm.kerberos.principal` | The Kerberos principal to use when authenticating to HDFS, e.g. `hdfs-dmagen-02@WANDISCO.HADOOP`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid Kerberos principal name |
| `lm.kerberos.keytab.location` | The location of the keytab file in which credentials for the user defined above are provided, e.g. `/etc/security/keytabs/hdfs.headless.keytab`<br/><br/>**Default value**: (none)<br/>**Allowed values**: The full path to a keytab file that can be read by the user identity used to run LiveData Migrator (typically `hdfs`) |

### File system defaults

Each file system supported by LiveData Migrator can apply properties defined using the `--properties` or `--properties-files` parameters to the [various `filesystem add` commands](./command-reference#file-system-commands). You can set default properties that will apply to each type of file system at time of creation through these configuration items.

| Name | Details |
| --- | --- |
| `adls1.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 1 configuration properties |
| `adls2.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 2 file system resources on creation.<br/><br/>**Default value**: `fs.scheme,fs.account.name,fs.container.name,fs.auth.type,fs.oauth2.client.id`<br/>**Allowed values**: Any comma-separated list of valid ADLS Gen 2 configuration properties |
| `hdfs.fs.type.default.properties` | A comma-separated list of default properties to apply to ADLS Gen 1 file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid HDFS configuration properties |
| `s3a.fs.type.default.properties` | A comma-separated list of default properties to apply to S3A file system resources on creation.<br/><br/>**Default value**: `fs.defaultFS`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |
| `local.fs.type.default.properties` | A comma-separated list of default properties to apply to S3A file system resources on creation.<br/><br/>**Default value**: `fs.root`<br/>**Allowed values**: Any comma-separated list of valid S3A configuration properties |

### HDFS inotify

LiveData Migrator will poll the Hadoop cluster for NameNode events using the [HDFS inotify](https://hadoop.apache.org/docs/r3.2.0/api/org/apache/hadoop/hdfs/inotify/package-summary.html) system. These properties can be added and configured to change the default poll periods.

| Name | Details |
| --- | --- |
| `hdfs.inotify.poll.period` | The length of time in milliseconds between each event listener poll. <br/>**Default value**: `10` <br/>**Allowed values**: An integer value |
| `hdfs.inotify.sleep.period` | The length of time in milliseconds for delaying the event listener poll after 10 consecutive retry failures. <br/>**Default value**: `10` <br/>**Allowed values**: An integer value |

## UI Configuration

An example `application-prod.properties` file, which overrides any application defaults.

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

## Recommendations

### Metadata migrations

#### Enable Hive metastore event listener

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
