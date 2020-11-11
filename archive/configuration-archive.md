### Kerberos Integration

Configure LiveData Migrator to work against securely-configured Hadoop environments using Kerberos. Note that when run as a command-line application, LiveData Migrator can use Kerberos credentials that are available as a result of the use of `kinit` instead of static configuration defined with these properties.

| Name | Details |
| --- | --- |
| `lm.kerberos.is.enabled` | Whether LiveData Migrator should attempt to authenticate against HDFS using Kerberos<br/><br/>**Default value**: `false`<br/>**Allowed values**: `true`, `false` |
| `lm.kerberos.principal` | The Kerberos principal to use when authenticating to HDFS, e.g. `hdfs-dmagen-02@WANDISCO.HADOOP`<br/><br/>**Default value**: (none)<br/>**Allowed values**: Any valid Kerberos principal name |
| `lm.kerberos.keytab.location` | The location of the keytab file in which credentials for the user defined above are provided, e.g. `/etc/security/keytabs/hdfs.headless.keytab`<br/><br/>**Default value**: (none)<br/>**Allowed values**: The full path to a keytab file that can be read by the user identity used to run LiveData Migrator (typically `hdfs`) |
