## Before you start

To start using LiveData Migrator with the CLI, you'll need to configure management access using SSH.

1. Edit the SSH access properties in the `/etc/wandisco/livedata-migrator/application.properties` file to adjust to your requirements. Refer to the [SSH access](./configuration.md#ssh-access) section for details about the required properties.
1. Restart the LiveData Migrator service to make any configuration changes live:

    `service livedata-migrator restart`

### Upgrade your license

Your trial license will last 14 days and is valid for 5TB of data. If you want to upgrade to a full license before you start using LiveData Migrator, follow these steps:

1. See the [How to upgrade your license](https://community.wandisco.com/s/article/How-to-upgrade-your-license) page for information on how to purchase a license key.
1. Once you have obtained your license key, upload it to your LiveData Migrator host.
1. Move the license key to the default license location for LiveData Migrator.

   ```text title="Example"
   mv license.key /opt/wandisco/livedata-migrator/
   ```

1. Change ownership of the license key to the LiveData Migrator user.

   ```text title="Example"
   chown hdfs:hdfs /opt/wandisco/livedata-migrator/license.key
   ```

1. Restart the LiveData Migrator service to ensure the license key is picked up immediately:

   `service livedata-migrator restart`

### Log in

Log in with the default credentials of user `user`  with the password `password` on port `2222`.

```bash title="Example"
$ ssh user@localhost -p 2222
Password authentication
Password: password
```

This starts LiveData Migrator and the action prompt appears.

### Use authorized SSH keys

Configure the LiveData Migrator service to use authorized SSH keys instead of a password:

1. Comment out the `ssh.shell.password` configuration property so that password access is disabled.
1. Specify an authorized keys file with `ssh.shell.authorized-public-keys-file` to allow access from authorized clients that hold a matching private key.
1. Restart the LiveData Migrator service afterwards:  
   `service livedata-migrator restart`
   