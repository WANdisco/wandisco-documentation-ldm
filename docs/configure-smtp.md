---
id: configuration-smtp
title: Configuring an SMTP server
sidebar_label: SMTP Server
---

<!-- This file is temporary until I figure out where to put the info -->

## SMTP

Configuring an SMTP server for LiveData Migrator allows the use of [email notifications](./configuration-ui.md), which notify the user via email when certain events occur in LiveData Migrator.

### Configure an SMTP server in the UI

Configure an SMTP server in the UI by accessing the SMTP configuration tab and filling in the necessary fields:

1. Click on the LiveData Migrator instance name (e.g. "localhost") on the dashboard to access the overview page.
2. Under the configuration category on the left, select "SMTP Settings".
3. Provide the necessary fields in the empty form.
4. Click Save.

#### Fields

* **SMTP Email Server (Required)**: The host domain for your SMTP server.
* **SMTP Connection Security (Required)**: The type of security for your SMTP server to use. Can be **TLS**, **SSL** or **None**.
* **SMTP Port (Required)**: The port the SMTP server will use to send emails.
* **Use Authentication**: When enabled, creates a login to use for authenticating with the SMTP server.
* **SMTP Username**: The username to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **SMTP Password**: The password to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **Sender Email Address (Required)**: The email address attached to any emails automatically sent by LiveData Migrator from the SMTP server.
* **Email Subject Prefix (Required)**: Text that will automatically precede the subject of any email sent by LiveData Migrator from the SMTP server. This can be used to easily identify these emails in the inbox.

Once you've saved the form and the SMTP server is ready, you can [configure email notifications in the UI](./configuration-ui.md).

### Configure an SMTP server through the CLI

Use the following command to set up an SMTP server through the CLI:

```
notification email smtp set
```

Supply the following parameters:

#### Mandatory Parameters

| Name | Details |
| --- | --- |
| `--host` |  |
| `--port` | The port to use for the SMTP server. Many SMTP servers use port 25. |
| `--security` | The type of security to use on the server. Can be either `ssl`, `tls` or `none`. |
| `--email` | The email address for the SMTP server to use. This address will be the sender of all configured [email notifications](./configuration-ui.md). |

#### Optional Parameters

| `--login` | The email address to be used when logging in to the server. Usually your address. |
| `--password` | The password to associate with the SMTP server login. |

#### Example

```text
notification email smtp set --host my.internal.host --port 587 --security SSL --email livedatamigrator@wandisco.com  --login myusername --password mypassword
```

Once your SMTP server is ready, you can [configure email notifications through the CLI](./configuration-ui.md).
