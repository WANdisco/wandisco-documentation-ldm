---
id: define-metadata-rules
title: Define metadata rules (preview)
sidebar_label: Define metadata rules
---

Once you have [connected your metastores](./connect-metastores.md), define the metadata rules that determine the metadata you want to migrate.

## Define metadata rules with the UI



## Define metadata rules with the CLI

### Add hive rules

:::important
Ensure that you have [migrated](#migrate-data) the HCFS data for the databases and tables that you want to migrate.

Both HCFS data and associated metadata are needed before successful queries can be run on migrated databases.
:::

Define which databases and tables you want to migrate by creating hive rules.

Create a database pattern and a table pattern using [regex](https://regex101.com/) that will match the databases and tables you want to migrate. For example, using `--database-pattern test*` will match any database with "test" at the beginning of its name, such as `test01`, `test02`, `test03`.

| Command | Action |
|:---|:---|
| [`hive rule add`,`hive rule create`](./command-reference.md#hive-rule-addhive-rule-create) | Create a hive rule that can be used for a migration |

#### Default metadata rule

A default hive rule is created during installation named `DEFAULT`. This has a simple "include all" pattern for databases and for tables:

```text
hive rule show --name DEFAULT

{
  "name": "DEFAULT",
  "dbNamePattern": "*",
  "tableNamePattern": "*"
}
```

When [creating a metadata migration](./migrate-metadata.md), use the default rule to migrate all of your metastore content or define and use new rules to migrate a selection of databases and tables.

### Configure existing hive rules

| Command | Action |
|:---|:---|
| [`hive rule configure`](./command-reference.md#hive-rule-configure) | Configure an existing hive rule |

### Manage hive rules

| Command | Action |
|:---|:---|
| [`hive rule delete`](./command-reference.md#hive-rule-delete) | Delete a hive rule |
| [`hive rule list`](./command-reference.md#hive-rule-list) | List all hive rules |
| [`hive rule show`](./command-reference.md#hive-rule-show) | Show the configuration of a hive rule |

## Next steps

Once you have defined the metadata rules, [create a metadata migration](./migrate-metadata.md).
