---
id: audit-logs
title: Audit Logs
sidebar_label: Audit logs
---

The LiveData UI tracks all user-driven interactions and resulting changes (including errors) and creates a record in the form of a log file.

Use these audit logs to monitor user activity in LiveData Migrator.

:::note
Only UI driven actions are recorded in these audit logs.
:::

## Where to find the audit logs and default configuration

The following describes the default audit logging configuration for the LiveData UI:

| File name | Containing directory | Rotation period | Retention period |
|---|---|---|---|
| `livedata_ui_audit.yyyy-MM-dd.log` | `/var/log/wandisco/ui` | Daily | 90 days |

* An audit log will not be created for the days that no UI activity was seen.
* The rotation period cannot be changed.

See [LiveData UI - Logging](./configuration-ui.md#logging) if you want to change the configuration.

## Logging entry types and content

### Entry types

There are three types of entries in the audit log:

1. `METHOD_ENTERED` The user-driven action that was recorded.
1. `METHOD_RETURNED` The user-driven change as a result of the action.
1. `METHOD_EXCEPTION` Any exception/error that occurred as a result of the action.

### Entry contents

For each entry, the following will be recorded:

* The timestamp of the action.
* Who performed the action.
* What [type of entry](#entry-types) it is.
* The action data depending on the type of entry:
  * `METHOD_ENTERED` The data used to take the action.
  * `METHOD_RETURNED` The result of the action.
  * `METHOD_EXCEPTION` The contents of the exception thrown.

#### Redaction policy

By default, all sensitive information (such as passwords and storage access keys) will be redacted in the audit entries.

## Examples of audit entries

### `METHOD_ENTERED`

```text title="Example of a user login request"
2021-04-28 14:22:49,377 [livedata-ui-async-task-4525] AuditEvent [timestamp=2021-04-28T14:22:49.376Z, principal=anonymousUser, type=METHOD_ENTERED, data={args=[LoginVM{username='user@localhost.com', rememberMe=null}], operation=Logged In}]
```

### `METHOD_RETURNED`

```text title=" Example result of user login request"
2021-04-28 14:22:49,529 [livedata-ui-async-task-4505] AuditEvent [timestamp=2021-04-28T14:22:49.529Z, principal=user@localhost.com, type=METHOD_RETURNED, data={operation=Logged In, methodResultData=<200 OK OK,com.wandisco.oneui.web.rest.UserJWTController$JWTToken@60c2fe20,[Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGxvY2FsaG9zdC5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTYxOTc5MjU2OX0.3HvgOb82_UpEk_Yy-nWrvEXyU71pubM5EZKR_MgskViAJdflASzsLH5rqr2fmHgGLTMiMWIxRabJWKYt7Hz9aQ"]>}]
```

### `METHOD_EXCEPTION`

```text title=" Example of a failed user login request"
2021-04-29 16:16:46,656 [livedata-ui-async-task-5360] AuditEvent [timestamp=2021-04-29T16:16:46.655Z, principal=anonymousUser, type=METHOD_EXCEPTION, data={exception=/fusion{401, EMAIL_OR_PASSWORD_INCORRECT, i18nParams={}}, operation=Logged In}]
```
