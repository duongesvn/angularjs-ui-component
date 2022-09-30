select 
    a_in.acfrom
    ,a_in.ym
    ,a_in.amount_in
    ,a_out.amount_out
    ,a_in.amount_in - a_out.amount_out _diff
from (

    select 
        strftime('%Y-%m',created_date) ym
        ,uuid_account_from acfrom
        ,sum(amount) amount_in
    from exchange_book
    where exchange_type = 'IN'
    group by 
        strftime('%Y-%m',created_date)
        ,uuid_account_from 
) a_in
left join (

    select 
        strftime('%Y-%m',created_date) ym
        ,uuid_account_from acfrom
        ,sum(amount) amount_out
    from exchange_book
    where exchange_type in ('OUT','CH')
    group by 
        strftime('%Y-%m',created_date)
        ,uuid_account_from
) a_out on a_out.acfrom = a_in.acfrom and a_out.ym = a_in.ym
