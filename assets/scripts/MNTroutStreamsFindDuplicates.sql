select kittle_nbr from (SELECT kittle_nbr, kittle_nam, count(*)
  FROM public."Minnesota_DNR_TroutStreams"
  where trout_flag = 1 
  or kittle_nam not like '%Unnamed%'
  group by kittle_nbr, kittle_nam
  having count(*) > 1
  order by count desc) as foo

