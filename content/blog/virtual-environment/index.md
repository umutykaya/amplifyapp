---
title: Virtual Environment
date: "2020-07-23 09:56:00"
description: "Here is a comprehensive guide that I thing beneficial while monitoring users."
---

Developers deealing with virtual environment to execute python codes, isolated from system packages and dependencies.

### Activate:
```Shell
virtualenv venv -p python3
```
```Shell
virtualenv venv -p python2
```

```Shell
source venv/bin/activate
```
### Deactivate:
```Shell
deactivate
```
## Conda 

### Activate:
```Shell
conda activate
source activate py37
```

For the specific version of the python.
```Shell
conda create -n py37 python=3.7 anaconda
conda activate py37
```
### Deactivate:
```Shell
conda deactivate
```