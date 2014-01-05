SELECT kittle_no, kittname, new_reg, count(*)
  FROM public."Minnesota_DNR_TroutRegulations"
  where kittle_no is not null
  and kittname not like '%Unnamed%'
  group by kittle_no, kittname, new_reg
  having count(*) > 1
  order by count desc

