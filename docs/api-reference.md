---
id: api-reference
title: API Reference
sidebar_label: API Reference
---

LiveData Migrator exposes a REST API for use by external clients. These API resources provide equivalent functionality to the commands described in the [Command Reference](./command-reference.md) except for the commands related to [metadata migrations](#metadata-migrations).

You can access the API documentation for LiveData Migrator directly on your host machine:  
`http(s)://<ldm-hostname>:<ldm-port>/ldm-api.html`

```text title="Example"
http://localhost:18080/ldm-api.html
```

This version will reflect exactly the API exposed from your instance of LiveData Migrator.

[![LiveData Migrator Swagger Documentation](/wandisco-documentation-ldm/img/swagger.png)](http://localhost:18080/ldm-api.html)

## Metadata migrations

Commands related to metadata migrations (such as `hive agent`, `hive rule`, `hive migration`) are serviced through a different REST API port.

Access the API documentation for metadata migrations on your host machine:  
`http(s)://<ldm-hostname>:<hvm-port>/docs`

```text title="Example"
http://localhost:6780/docs
```
