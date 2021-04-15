---
id: ldm-trial-for-aws
title: LiveData Migrator Trial for Amazon Web Services (AWS)
---

If you want to get familiar with LiveData Migrator before committing to a production implementation, you can use a HDFS Sandbox cluster as your source filesystem for LiveData Migrator.

The HDFS Sandbox for LiveData Migrator is a non-kerberized [HDP 2.6.5 Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) Docker environment.

The following steps explain how to deploy the HDFS Sandbox and perform a migration of data to your Amazon Simple Storage Service (S3) bucket using LiveData Migrator.

## Prerequisites

Follow our guide to create an Amazon Elastic Compute Cloud (Amazon EC2) instance that has the correct dependencies installed to host the HDP Sandbox:

[Amazon EC2 Creation](https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/aws_vm_creation/)

Alternatively, create the host through the AWS portal or host the Sandbox on your own server. The requirements for the host are as follows:

* Linux Server
  * Minimum size recommendation = **8 CPUs, 32 GiB memory**.
  * A minimum of 24GB available storage for the `/var/lib/docker` directory.
  * Network connectivity to your S3 bucket.
  * Port 8080 must be accessible to access the Ambari UI.
  * Port 8081 must be accessible to access the LiveData UI.

The following services must be installed:

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Docker](https://docs.docker.com/install/) (v19.03.5 or higher)
* [Docker Compose for Linux](https://docs.docker.com/compose/install/#install-compose) (v1.25.0 or higher)

## Deploy the Sandbox

1. Log in to your host for the Sandbox.

1. Clone the git repository for the HDFS Sandbox:

   ```text
   git clone https://github.com/WANdisco/hdp-vanilla.git
   ```

1. Change directory to the repository:

   ```text
   cd hdp-vanilla
   ```

1. Start the HDFS Sandbox

   ```text
   docker-compose up -d
   ```

## Install and configure LiveData Migrator

1. Download and install LiveData Migrator:

   ```text
   docker-compose exec sandbox-hdp-vanilla bash -c "wget wandisco.com/downloads/livedata-migrator.sh -P /tmp; chmod +x /tmp/livedata-migrator.sh; /tmp/livedata-migrator.sh"
   ```

1. Open a browser window and access the LiveData UI using the Sandbox host IP on port 8081:

   ```text
   http://sandbox_host_ip_address:8081
   ```

1. Fill out your account details and click **Register**.

1. Click the settings cog to configure your **Target** storage.

1. Select the **Storage Type** as **S3** and fill in the following details:

   * **Storage Name** - This is a user-provided identifier for the storage.
   * **Bucket Name** - Your [S3 bucket name](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#create-bucket-intro).
   * **Credentials Provider** - Select the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` option to provide an access and secret key.
   * **Access Key** - The [access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for the S3 bucket.
   * **Secret Key** - The [secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for the S3 bucket.

   Click **Save** once complete, and return to the dashboard.

## Start a migration

1. Click the **+** in the **Rules/Migrations** panel to create a new migration.

1. Enter the migration details as follows:

   * Select the target storage as the one defined in the previous section (**Storage Name**).
   * Set the migration path as `/retail_demo`
   * Enable auto-start migration.

   Click **Create** to begin the migration with the details provided.

## Confirm the migration is successful

Once the migration is complete, check that the `/retail_demo` directory exists on your S3 bucket.

A sub-directory should exist inside (`customer_addresses_dim_hive`) with a ~50MB file inside (`customer_addresses_dim.tsv.gz`).
