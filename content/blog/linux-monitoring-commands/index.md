---
title: Linux monitoring commands
date: "2020-04-24 16:29:06"
description: "Here is a comprehensive guide that I thing beneficial while monitoring users."
---

Common Linux systems need to be supervision by system admins.
Here is a comprehensive guide that I thing beneficial while monitoring users.

| Description |Command|
|--|--|
| Bash history of all users |``` cat /home/*/.bash_history ```|
| Bash history specified user| ```cat /home/firstname_lastname/.bash_history ```|  
| Memory summary | ``` free -g``` |  
| Detailed memory summary |``` cat /proc/meminfo ```|  
| Find a file | ```sudo find -type f -name pandas``` |  
| To list the processes executed by a specific user | ```ps -U <username>``` |  
| Running process | ```top```, ```htop```|
| Show Active Sessions | ```ps aux| grep "X" ```|