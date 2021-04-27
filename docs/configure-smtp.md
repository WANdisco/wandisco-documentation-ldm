---
id: configuration-smtp
title: Configuring an SMTP server
sidebar_label: SMTP Server
---

<!-- This file is temporary until I figure out where to put the info -->

## SMTP

Configuring a connection to an SMTP server for LiveData Migrator allows the use of [email notifications](./configuration-ui.md), which notify the user via email when certain events occur in LiveData Migrator.

### Configure an SMTP server in the UI

Configure an SMTP server in the UI by accessing the SMTP configuration tab and filling in the necessary fields:

1. Click on the LiveData Migrator instance name (e.g. "localhost") on the dashboard to access the overview page.
2. Under the configuration category on the left, select "SMTP Settings".
3. Provide the necessary fields in the empty form.
4. Click Save.

#### Fields

* **SMTP Email Server (Required)**: The host domain or IP address of your SMTP server.
* **SMTP Connection Security (Required)**: The type of security your SMTP server uses. Can be **TLS**, **SSL** or **None**.
* **SMTP Port (Required)**: The port used to connect to the SMTP server.
* **Use Authentication**: Optional field. Enables the provision of a username and password for authenticating with the SMTP server.
* **SMTP Username**: The username to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **SMTP Password**: The password to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **Sender Email Address (Required)**: The email address to use with any emails automatically sent by LiveData Migrator from the SMTP server.
* **Email Subject Prefix (Required)**: Text that will automatically precede the subject of any email sent by LiveData Migrator from the SMTP server. This can be used to easily identify these emails in the inbox.

Once you've saved the form and the SMTP server is configured, you can [configure email notifications in the UI](./configuration-ui.md).

### Configure an SMTP server through the CLI

Use the following command to set up a connection to an SMTP server through the CLI:

```
notification email smtp set
```

Supply the following parameters:

#### Mandatory Parameters

| Name | Details |
| --- | --- |
| `--host` | The host address of the SMTP server. |
| `--port` | The port to connect to the SMTP server. Many SMTP servers use port 25. |
| `--security` | The type of security the server uses. Can be either `ssl`, `tls` or `none`. |
| `--email` | The email address for LiveData Migrator to use with emails sent through the SMTP server. This address will be the sender of all configured [email notifications](./configuration-ui.md). |

#### Optional Parameters

| `--login` | The username to authenticate with the SMTP server. |
| `--password` | The password to authenticate with the SMTP server login. Required if a login is provided. |

#### Example

```text
notification email smtp set --host my.internal.host --port 587 --security SSL --email livedatamigrator@wandisco.com  --login myusername --password mypassword
```

Once your SMTP server is ready, you can [configure email notifications through the CLI](./configuration-ui.md).
