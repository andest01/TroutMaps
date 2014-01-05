CREATE or REPLACE FUNCTION MN_FindDuplicatesOnIdAndMergeAttributes() RETURNS integer AS $$
DECLARE
    mviews RECORD;
    DECLARE isTroutStream boolean;
    DECLARE troutStreamType integer;
    DECLARE nonTroutStreamType integer;
BEGIN
    RAISE NOTICE 'Finding duplicate streams in MN';
    troutStreamType := 1;
    nonTroutStreamType := 2;

    FOR mviews IN select kittle_nbr from (SELECT kittle_nbr, kittle_nam, count(*)
  FROM public."Minnesota_DNR_TroutStreams"
  group by kittle_nbr, kittle_nam
  having count(*) > 1
  order by count desc) as foo LOOP

        -- Now "mviews" has one record from cs_materialized_views
	RAISE NOTICE 'Duplicate ID: %', mviews.kittle_nbr;
	SELECT count(*) >= 1 into isTroutStream
	  FROM public."Minnesota_DNR_TroutStreams"
	  where kittle_nbr = mviews.kittle_nbr
	  and trout_flag = 1;	
	  if isTroutStream is true
	  THEN 
	  RAISE NOTICE 'Is trout stream: %', mviews.kittle_nbr ;
	  RAISE NOTICE 'Updating %...', mviews.kittle_nbr ;
	  UPDATE public."Minnesota_DNR_TroutStreams"
		   SET trout_flag=1
			WHERE kittle_nbr=mviews.kittle_nbr;
	  ELSE NULL;-- RAISE NOTICE 'IS NOT TROUT STREAM: %', isTroutStream ;
	  end if;
        --PERFORM cs_log('Refreshing materialized view ' || quote_ident(mviews.kittle_nbr) || ' ...');
        --EXECUTE 'TRUNCATE TABLE ' || quote_ident(mviews.mv_name);
        --EXECUTE 'INSERT INTO ' || quote_ident(mviews.mv_name) || ' ' || mviews.mv_query;
    END LOOP;

    --PERFORM cs_log('Done refreshing materialized views.');
    RETURN 1;
END;
$$ LANGUAGE plpgsql;