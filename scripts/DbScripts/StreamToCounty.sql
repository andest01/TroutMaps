SELECT county.*, stream.kittle_nam, stream.gid from public."Minnesota_County_Borders" county, 
public."minnesota_dnr_troutstreamsfiltered" stream
where ST_Intersects(county.geom, stream.geom)
order by stream.gid