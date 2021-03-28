+++
title = "SQL Hall of Fame"
date = 2021-03-28T15:58:48.718147
draft = true
description = ""
+++

March 28th, 2021

First `having`

```sql
-- List organizations having duplicate (JdeCustomerId, Name) columns
select o.Id, o.JdeCustomerId, o.Name
from Organizations o
join (
    select o2.JdeCustomerId, o2.Name
    from Organizations o2
    group by o2.JdeCustomerId, o2.Name
    having count(*) > 1
) dup_orgs
on o.JdeCustomerId = dup_orgs.JdeCustomerId and o.Name = dup_orgs.Name
```
