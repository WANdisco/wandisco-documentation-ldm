---
id: migration-verifications
title: Migration Verifications
sidebar_label: Migration verifications
---

:::note
Migration verifications are currently available as a preview feature. You must [enable this feature](./preview-features) before you can use it.

This preview version can only be used through the CLI or REST API.
:::

LiveData Migrator performs a best-effort to migrate existing data and ongoing changes, but there are a variety of reasons that can impede this. For example:

* Service failures or interruptions.
* Software errors or individual file migration failures.

Use this feature to scan your source and target filesystems (on a migration path) and compare them for any discrepancies.

## Limitations and considerations

These are the main aspects and considerations of this feature:

* A migration verification can only be performed on a [Live or Running](./manage-migrations.md#data-migration-states) data migration.
* Only one verification can be active at a time for each data migration.
* Verifications are based on the current progress of the migration, and will ignore any paths that are not yet scanned.
* For [one-time migrations](./one-time-migration.md) (`--scanOnly`), verifications will ignore any client changes.
* The verification will ignore any files & directories that have been [excluded](./configure-exclusions.md) from the migration.
* The verification will take into account any [path mappings](./create-path-mappings.md) that are applicable to the migration.

## Run a migration verification

Add a migration verification for a specified migration by using [`migration verification add`](./command-reference.md#migration-verification-add).

```text title="Example"
migration verification add --migration-id myMigration
```

### Override the current verification job

Stop the currently running verification job and start a new one by using the `--override` parameter.

```text title="Example with override"
migration verification add --migration-id myMigration --override
```

## Show the verification status

Show the verification status to view an ongoing or completed verification job. The verification status will show the number of missing paths and files on the target filesystem and also the number of file size mismatches between the source and target.

The verification status can be viewed by using:

* [`migration verification show`](#migration-verification-show) (for individual verification jobs)
* [`migration verification list`](#migration-verification-list) (for all verification jobs)

### Example status

```text title="Example status of a completed verification"
{
  "migrationId" : "testmig",
  "state" : "COMPLETED",
  "verificationId" : "e1aedfbd-b094-4a1b-a294-69cdd5a6030a",
  "verificationPath" : "/testdir",
  "startTime" : "2021-04-29T13:27:44.278Z",
  "completeTime" : "2021-04-29T13:27:45.392Z",
  "verificationEdge" : "/testmig/testdir01/testfile01",
  "scannerSummary" : {
    "progressSummary" : {
      "filesScanned" : 177,
      "directoriesScanned" : 47,
      "bytesScanned" : 1105391944,
      "filesExcluded" : 51,
      "dirsExcluded" : 0,
      "bytesExcluded" : 0,
      "baseScanCompletionTime" : "2021-04-29T13:27:45.392Z"
    },
    "contentSummary" : {
      "byteCount" : 1105391944,
      "fileCount" : 194,
      "directoryCount" : 81
    }
  },
  "verificationProgress" : {
    "matchedPathCount" : 224,
    "totalFailedPathCount" : 0,
    "targetFilesMissing" : 0,
    "targetDirectoriesMissing" : 0,
    "filesizeMismatches" : 0
  }
}
```

#### Verification status values

The important values to consider are contained within the `verificationProgress` output:

* **`matchedPathCount`** The total number of files and directories that were or have been scanned.
* **`totalFailedPathCount`** The total number of files and directories that are missing on the target filesystem.
* **`targetFilesMissing`** The number of files that are missing on the target filesystem.
* **`targetDirectoriesMissing`** The number of directories that are missing on the target filesystem.
* **`filesizeMismatches`** The number of files that are mismatched in size between the source and target filesystems.

## Verification reports

Once a verification job is complete, a verification report will be created in the `/var/log/wandisco/livedata-migrator` directory in the format of `verification-report-{verificationId}-{startTime}.log`.

```text "Example verification report file"
/var/log/wandisco/livedata-migrator/verification-report-e1aedfbd-b094-4a1b-a294-69cdd5a6030a-1619781713672.log
```

This report will contain more details including any paths that have discrepancies.

### Example report

```text title="Example report with errors"
2021-04-22 22:44:41.783: Verification job b8264981-c70f-4231-b40e-7b2760afd2b4 is STARTING.  Estimated to scan ScannerContentMatrix{byteCount=20101, fileCount=162, directoryCount=17}
2021-04-22 22:44:41.817: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/4","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481817}
2021-04-22 22:44:41.821: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/8","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481821}
2021-04-22 22:44:41.821: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/1","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481821}
2021-04-22 22:44:41.821: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_1/6","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481821}
2021-04-22 22:44:41.825: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/7","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481825}
2021-04-22 22:44:41.827: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/0","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481826}
2021-04-22 22:44:41.827: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/aexcl_0/6","SourceFileLength":100,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481827}
2021-04-22 22:44:41.879: Verification failure: File not found on target. {"MigrationId":"b8264981-c70f-4231-b40e-7b2760afd2b4","Path":"/repl_test/C8412698_VerificationExclusionTest.b610650c-3496-435d-b1d0-809fbba538ba/mig/dexcl_3/0","SourceFileLength":200,"TargetFileLength":-1,"VerifyResult":"MISSING_ON_TARGET","VerifyTime":1619131481879}
2021-04-22 22:44:41.901: Verification job b8264981-c70f-4231-b40e-7b2760afd2b4 is COMPLETED.  8 files failed verification from 162
```
