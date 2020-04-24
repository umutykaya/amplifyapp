---
title: Cron jobs automations
date: "2020-04-24 16:15:10"
description: "Cron jobs ensure to automate and schedule python jobs."
---

Cron jobs ensure to automate and schedule python jobs. Here is a quick expression.

```shell
.---------------- minute (0 - 59)
|  .------------- hour (0 - 23)
|  |  .---------- day of month (1 - 31)
|  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
|  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed ...
|  |  |  |  |
*  *  *  *  * command-to-be-executed
```

Python model script (model.py) every hour, on the 15 minute of an hour.
 ```shell
 15 * * * * python model.py
 ```
Add as job that runs every minute on the minute to crontab
 ```shell
echo "* * * * * python hello_world.py" | crontab
 ```
Verify that the CRON job has been scheduled via CRONTAB
 ```shell
crontab -l
 ```