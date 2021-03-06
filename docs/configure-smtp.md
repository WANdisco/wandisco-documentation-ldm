---
id: configure-smtp
title: Configure Email Notifications
sidebar_label: Email Notifications
---

LiveData Migrator supports sending email notifications whenever certain events occur, such as when a migration stops or falls behind file system events.

To use email notifications:

1. [Configure an SMTP server to send the emails](#configure-an-smtp-server-in-the-ui)
1. [Opt into the desired notifications](#configure-email-notifications-in-the-ui)

## Configure an SMTP server in the UI

Configure an SMTP server in the UI by accessing the SMTP configuration tab and filling in the necessary fields.

1. Click on the LiveData Migrator instance name (for example, "localhost") on the dashboard to access the overview page.
1. Under the configuration category on the left, select **SMTP Settings**.
1. Provide the necessary fields in the empty form.
1. Click **Save**.

### SMTP Server Configuration Fields

* **SMTP Email Server (Required)**: The host domain or IP address of your SMTP server.
* **SMTP Connection Security (Required)**: The type of security your SMTP server uses. Can be **TLS**, **SSL** or **None**.
* **SMTP Port (Required)**: The port used to connect to the SMTP server.
* **Use Authentication**: Optional field. Enables the provision of a username and password for authenticating with the SMTP server.
* **SMTP Username**: The username to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **SMTP Password**: The password to use for authenticating with the SMTP server. Requires **Use Authentication** to be enabled.
* **Sender Email Address (Required)**: The email address to use with any emails automatically sent by LiveData Migrator from the SMTP server.
* **Email Subject Prefix (Required)**: Text that will automatically precede the subject of any email sent by LiveData Migrator from the SMTP server. This can be used to easily identify these emails in the inbox.

Once you've saved the form and the SMTP server is configured, you can [configure email notifications in the UI](#configure-email-notifications-in-the-ui).

## Configure an SMTP server through the CLI

Use the following command to set up a connection to an SMTP server through the CLI:

```
notification email smtp set
```

Supply the following parameters:

### Mandatory Parameters

* **`--host`** The host address of the SMTP server.
* **`--port`** The port to connect to the SMTP server. Many SMTP servers use port 25.
* **`--security`** The type of security the server uses. Can be either `ssl`, `tls` or `none`.
* **`--email`** The email address for LiveData Migrator to use with emails sent through the SMTP server. This address will be the sender of all configured email notifications.

### Optional Parameters

* **`--login`** The username to authenticate with the SMTP server.
* **`--password`** The password to authenticate with the SMTP server login. Required if a login is provided.

### Example

```text
notification email smtp set --host my.internal.host --port 587 --security SSL --email livedatamigrator@wandisco.com  --login myusername --password mypassword
```

You can view the details of your SMTP server configuration at any time by running the command `notifications email smtp show`.

Once your SMTP server is ready, you can [configure email notifications through the CLI](#configure-email-notifications-through-the-cli).

## Configure email notifications in the UI

Set up email notifications in the UI by accessing the Email Notifications tab and filling in the necessary fields.

1. Click on the LiveData Migrator instance name (for example, "localhost") on the dashboard to access the overview page (or continue from configuring an SMTP server in the UI).
1. Under the configuration category on the left, select **Email Notifications**.
1. Enter the email address you want to send notifications to.
1. Opt into the event notifications you want to receive.
1. Click **Save**.

Click **Send a test email** to send a test notification email to the specified address. If you receive an email with the text "This is a test email notification" and a list of email addresses subscribed to notifications, you've configured email notifications correctly.

### Email notification types

* **Data migration has stopped:** LiveData Migrator sends this notification any time a migration automatically stops, informing you of the migration's name and the exception message that caused the migration to terminate.
* **LiveData Migrator is falling behind system events:** LiveData Migrator sends this notification when it determines the number of events (changes to data) occurring on a source filesystem is too rapid for a migration to keep up with over a given period of time. The email will contain the migration name, the file system ID and simple statistics about the events. [The sensitivity of this notification is configurable](./configuration-ldm.md#configure-notification-properties).
* **Data migration is missing events:** This notification is thrown when LiveData Migrator doesn't receive the expected number of events in a migration, and fails to retry querying them 10 times.
* **Filesystems are unhealthy:** LiveData Migrator sends this notification when it cannot connect to a source or target filesystem, notifying you of the filesystem that failed connection.
* **Files are failing to migrate:** These notifications are sent when a file fails to transfer in a migration, providing a link to the migration that failed to transfer the files.

## Configure email notifications through the CLI

Use [commands in the CLI](./command-reference.md#notification-commands) to:

* [Subscribe email addresses to notifications](./command-reference.md#notification-email-addresses-add).
* [Unsubscribe email addresses from notifications](./command-reference.md#notification-email-addresses-remove).
* [Add notification types to subscribe to](./command-reference.md#notification-email-types-add).
* [Remove notification types from subscription](./command-reference.md#notification-email-types-remove).
* [View the available notification types for subscription](./command-reference.md#notification-email-types-show).
